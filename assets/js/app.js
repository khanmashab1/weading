/**
 * INVITATION INTERACTIONS
 * -----------------------
 * This file controls the opening, music, scratch card, gallery, countdown,
 * reveal animations, and demo RSVP state. Client content lives in config.js.
 */
 
 document.addEventListener("contextmenu", (event) => {
  event.preventDefault();
});

document.addEventListener("dragstart", (event) => {
  if (event.target instanceof HTMLImageElement) {
    event.preventDefault();
  }
});

(function () {
  "use strict";

  const config = window.INVITATION_CONFIG;

  if (!config) {
    throw new Error("Invitation config was not loaded. Check assets/js/config.js.");
  }

  const select = (selector, root = document) => root.querySelector(selector);
  const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];

  function getValue(path) {
    return path.split(".").reduce((value, key) => value?.[key], config);
  }

  function createElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;

    return element;
  }

  function setName(element, fullName) {
    const [firstName, ...remainingNames] = fullName.split(" ");
    const firstNameElement = createElement("span", "", firstName);

    element.replaceChildren(firstNameElement, ` ${remainingNames.join(" ")}`);
  }

  function setCoupleNames(element) {
    element.replaceChildren(
      document.createTextNode(config.couple.bride.name.split(" ")[0]),
      document.createTextNode(" "),
      createElement("span", "", "&"),
      document.createTextNode(" "),
      document.createTextNode(config.couple.groom.name.split(" ")[0]),
    );
  }

  function applyConfig() {
    document.title = config.site.title;

    const description = select('meta[name="description"]');
    const ogTitle = select('meta[property="og:title"]');
    const ogDescription = select('meta[property="og:description"]');
    const metaTheme = select('meta[name="theme-color"]');

    description?.setAttribute("content", config.site.description);
    ogTitle?.setAttribute("content", config.site.title);
    ogDescription?.setAttribute("content", config.site.description);
    metaTheme?.setAttribute("content", config.theme.plum);

    const root = document.documentElement;

    Object.entries(config.theme).forEach(([name, value]) => {
      root.style.setProperty(`--${name}`, value);
    });

    const openingLabel = select(".opening-label");
    if (openingLabel && !openingLabel.textContent.trim()) {
      openingLabel.textContent = "Tap to Open";
    }

    if (config.media.floralDivider) {
      selectAll(".floral-divider img").forEach((img) => {
        img.src = config.media.floralDivider;
      });
    }

    if (config.media.scratchFrame) {
      const sf = select(".scratch-frame-overlay");
      if (sf) sf.src = config.media.scratchFrame;
    }

    selectAll("[data-bind]").forEach((element) => {
      const value = getValue(element.dataset.bind);
      element.textContent = value ?? "";
    });

    setName(select("#brideName"), config.couple.bride.name);
    setName(select("#groomName"), config.couple.groom.name);
    setCoupleNames(select("#welcomeSignature"));
    setCoupleNames(select("#closingNames"));

    select("#closingDetails").textContent =
      `${config.wedding.date} · ${config.venue.name}`;

    select("#mapLink").href = config.venue.mapUrl;

    const audio = select("#backgroundMusic");
    const video = select("#introVideo");
    const videoSource = select("#introVideoSource");

    audio.src = config.media.music;
    audio.load();
    video.poster = config.media.introPoster;
    videoSource.src = config.media.introVideo;
    video.load();

    renderProgram();
    renderPreWeddingEvents();
    renderDressPalette();
    renderGallery();
  }

  function renderProgram() {
    const timeline = select("#programTimeline");

    config.program.forEach((item, index) => {
      const article = createElement("article");
      const number = createElement(
        "span",
        "timeline-index",
        String(index + 1).padStart(2, "0"),
      );
      const time = createElement("time", "", item.time);
      const details = createElement("div");

      details.append(
        createElement("h3", "", item.title),
        createElement("p", "", item.note),
      );

      article.append(number, time, details);
      timeline.append(article);
    });
  }

function renderPreWeddingEvents() {
  const eventList = select("#preWeddingEvents");

  config.preWeddingEvents.forEach((event) => {
    const article = createElement("article");

    const title = createElement("h3", "", event.name);

    const dateTime = createElement("p");
    dateTime.innerHTML = `
      <span>${event.date}</span>
      <span>⬩</span>
      <span>${event.time}</span>
    `;

    const location = createElement("small", "", event.location);

    const mapLink = createElement(
      "a",
      "event-map-link",
      "View on Google Maps"
    );

    mapLink.href = event.mapLink;
    mapLink.target = "_blank";
    mapLink.rel = "noreferrer";

    article.append(
      title,
      dateTime,
      location,
      mapLink
    );

    eventList.append(article);
  });
}

  function renderDressPalette() {
    const palette = select("#dressPalette");
    if (!palette) return;
    palette.innerHTML = "";

    config.dressCode.swatches.forEach((color, index) => {
      const swatch = createElement("i");
      swatch.style.background = color;
      swatch.style.setProperty("--swatch-delay", `${index * 0.08}s`);
      palette.append(swatch);
    });
  }
let activeSlide = 0;
let galleryTimer;
let touchStartX = 0;
let touchStartY = 0;

function renderGallery() {
  const slides = select("#gallerySlides");
  const dots = select("#galleryDots");

  config.media.gallery.forEach((image, index) => {
    const figure = createElement(
      "figure",
      `gallery-slide${index === 0 ? " is-active" : ""}`,
    );

    const photo = createElement("img");

    photo.src = image.src;
    photo.alt = image.alt;
    photo.loading = index === 0 ? "eager" : "lazy";

    figure.append(
      photo,
      createElement("figcaption", "", image.caption)
    );

    slides.append(figure);

    const dot = createElement(
      "button",
      index === 0 ? "is-active" : ""
    );

    dot.type = "button";
    dot.setAttribute("aria-label", `Show image ${index + 1}`);
    dot.addEventListener("click", () => showSlide(index));

    dots.append(dot);
  });

  const frame = select("#galleryFrame");

  frame.addEventListener("pointerdown", (event) => {
    touchStartX = event.clientX;
    touchStartY = event.clientY;
  });

  frame.addEventListener("pointerup", (event) => {
    const distanceX = touchStartX - event.clientX;
    const distanceY = touchStartY - event.clientY;

    /* Horizontal swipe */
    if (Math.abs(distanceX) >= 45) {
      showSlide(
        distanceX > 0
          ? (activeSlide + 1) % config.media.gallery.length
          : (activeSlide - 1 + config.media.gallery.length) %
              config.media.gallery.length
      );

      return;
    }

    /* Ignore vertical page scrolling */
    if (Math.abs(distanceY) > 20) return;

    /* Tap anywhere on image = next */
    showSlide(
      (activeSlide + 1) % config.media.gallery.length
    );
  });

  galleryTimer = window.setInterval(() => {
    showSlide(
      (activeSlide + 1) % config.media.gallery.length
    );
  }, 5200);
}

function showSlide(index) {
  activeSlide = index;

  selectAll(".gallery-slide").forEach((slide, slideIndex) => {
    slide.classList.toggle(
      "is-active",
      slideIndex === index
    );
  });

  selectAll("#galleryDots button").forEach((dot, dotIndex) => {
    dot.classList.toggle(
      "is-active",
      dotIndex === index
    );

    dot.toggleAttribute(
      "aria-current",
      dotIndex === index
    );
  });
} 
  function updateMusicControl() {
  const audio = select("#backgroundMusic");
  const button = select("#musicToggle");
  const label = select("#musicLabel");
  const playing = !audio.paused;

  button.classList.toggle("is-playing", playing);
  button.setAttribute(
    "aria-label",
    playing ? "Pause background music" : "Play background music",
  );
  label.textContent = playing ? "Music" : "Music";
}

  function initializeOpening() {
    const hero = select("#hero");
    const video = select("#introVideo");
    let isOpening = false;
    let cardRevealed = false;

    function revealCard() {
      if (cardRevealed) return;
      cardRevealed = true;
      hero.classList.add("card-shown");
      document.body.classList.remove("intro-locked");
    }

    function openInvitation() {
      // Once opening has started, ignore subsequent clicks so the doors open fully before showing the card
      if (isOpening) return;
      isOpening = true;

      hero.classList.remove("is-closed");
      hero.classList.add("is-open");
      hero.removeAttribute("role");
      hero.removeAttribute("aria-label");
      hero.tabIndex = -1;

      const openingMark = select("#openingMark");
      if (openingMark) openingMark.setAttribute("aria-hidden", "true");

      const audio = select("#backgroundMusic");
      if (audio) {
        audio.play()
          .then(updateMusicControl)
          .catch(updateMusicControl);
      }

      const doorOpenDelay = (config.media && config.media.doorOpenDelay) ? config.media.doorOpenDelay : 4.2;

      if (video) {
        video.currentTime = 0;
        video.play().catch(() => undefined);

        // Only reveal the card when the doors are completely open (at 4.2s)
        const checkTime = () => {
          if (video.currentTime >= doorOpenDelay || video.ended) {
            revealCard();
            video.removeEventListener("timeupdate", checkTime);
          }
        };

        video.addEventListener("timeupdate", checkTime);
        video.addEventListener("ended", revealCard, { once: true });

        // Fallback timer if video timeupdate is throttled by the browser
        setTimeout(revealCard, (doorOpenDelay + 0.4) * 1000);
      } else {
        setTimeout(revealCard, (doorOpenDelay) * 1000);
      }
    }

    // Use click and keydown only — avoid duplicate pointerdown trigger
    hero.addEventListener("click", openInvitation);
    hero.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") openInvitation();
    });

    const scrollCue = select(".scroll-cue");
    if (scrollCue) {
      scrollCue.addEventListener("click", (event) => {
        event.stopPropagation();
      });
    }
  }

  function initializeIntroSwitcher() {
    const switcher = select("#introSwitcher");
    if (!switcher) return;

    const pills = selectAll(".intro-pill", switcher);
    const video = select("#introVideo");
    const videoSource = select("#introVideoSource");
    const hero = select("#hero");

    // Synchronize initial active pill with active video in config
    const isArchway = Boolean(config.media && config.media.introVideo && config.media.introVideo.includes("archway"));
    pills.forEach((p) => {
      if (isArchway) {
        p.classList.toggle("is-active", p.dataset.intro === "archway");
      } else {
        p.classList.toggle("is-active", p.dataset.intro === "doors");
      }
    });

    pills.forEach((pill) => {
      pill.addEventListener("click", (e) => {
        e.stopPropagation();
        pills.forEach((p) => p.classList.toggle("is-active", p === pill));

        const introType = pill.dataset.intro;
        let nextVideo = "./media/intro-Royal_palace_doors_opening.mp4";
        let nextPoster = "./media/intro-Royal_palace_doors_opening.webp";
        let nextDelay = 4.2;

        if (introType === "archway") {
          nextVideo = "./media/intro-Marble_archway.mp4";
          nextPoster = "./media/intro-Marble_archway.webp";
          nextDelay = 4.0;
        }

        if (config.media) {
          config.media.introVideo = nextVideo;
          config.media.introPoster = nextPoster;
          config.media.doorOpenDelay = nextDelay;
        }

        if (video && videoSource) {
          video.pause();
          video.poster = nextPoster;
          videoSource.src = nextVideo;
          video.load();

          if (hero && hero.classList.contains("is-open")) {
            video.currentTime = 0;
            video.play().catch(() => {});
          }
        }
      });
    });
  }

  function initializeMusic() {
    const audio = select("#backgroundMusic");
    const button = select("#musicToggle");

    button.addEventListener("click", async (event) => {
      event.stopPropagation();

      if (audio.paused) {
        try {
          await audio.play();
        } catch {
          // Playback can fail if the music file is missing.
        }
      } else {
        audio.pause();
      }

      updateMusicControl();
    });

    audio.addEventListener("play", updateMusicControl);
    audio.addEventListener("pause", updateMusicControl);

    // Try starting audio immediately by default
    const playAudio = () => {
      if (audio && audio.paused) {
        audio.play().then(updateMusicControl).catch(() => {});
      }
    };

    // Attempt immediately
    playAudio();

    // If browser blocked unmuted autoplay before gesture, start on very first interaction
    const startOnInteraction = () => {
      playAudio();
      window.removeEventListener("pointerdown", startOnInteraction, true);
      window.removeEventListener("touchstart", startOnInteraction, true);
      window.removeEventListener("click", startOnInteraction, true);
      window.removeEventListener("scroll", startOnInteraction, true);
      window.removeEventListener("keydown", startOnInteraction, true);
    };

    window.addEventListener("pointerdown", startOnInteraction, { capture: true, once: true });
    window.addEventListener("touchstart", startOnInteraction, { capture: true, once: true });
    window.addEventListener("click", startOnInteraction, { capture: true, once: true });
    window.addEventListener("scroll", startOnInteraction, { capture: true, once: true });
    window.addEventListener("keydown", startOnInteraction, { capture: true, once: true });

    updateMusicControl();
  }

  function initializeRevealAnimations() {
    const revealElements = selectAll(".reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.13 },
    );

    revealElements.forEach((element) => observer.observe(element));
  }

  function initializeScratchCard() {
    const canvas = select("#scratchCanvas");
    const card = select("#scratchCard");
    const heading = select("#scratchHeading");
    const note = select("#scratchNote");
    let drawing = false;
    let revealed = false;
    let lastCheck = 0;

    function prepareCanvas() {
  if (revealed || !canvas.isConnected) return;

  const rect = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const context = canvas.getContext("2d", {
    willReadFrequently: true,
  });

  canvas.width = Math.round(rect.width * ratio);
  canvas.height = Math.round(rect.height * ratio);

  context.setTransform(ratio, 0, 0, ratio, 0, 0);

  const width = rect.width;
  const height = rect.height;

  /* =========================
     BURGUNDY BASE
     ========================= */

  const gradient = context.createLinearGradient(
    0,
    0,
    width,
    height,
  );

  gradient.addColorStop(0, config.theme.plum);
  gradient.addColorStop(0.45, config.theme.lavender);
  gradient.addColorStop(0.72, config.theme.mauve);
  gradient.addColorStop(1, config.theme.plum);

  context.globalCompositeOperation = "source-over";
  context.globalAlpha = 1;

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);


  /* =========================
     SOFT METALLIC SHIMMER
     ========================= */

  const shimmer = context.createLinearGradient(
    0,
    0,
    width,
    height,
  );

  shimmer.addColorStop(0, "rgba(255,255,255,0)");
  shimmer.addColorStop(0.35, "rgba(255,235,190,0.07)");
  shimmer.addColorStop(0.5, "rgba(255,255,255,0.13)");
  shimmer.addColorStop(0.65, "rgba(255,220,160,0.06)");
  shimmer.addColorStop(1, "rgba(255,255,255,0)");

  context.fillStyle = shimmer;
  context.fillRect(0, 0, width, height);


  /* =========================
     FINE GOLD GLITTER
     ========================= */

  const glitterCount = Math.min(
    1100,
    Math.round((width * height) / 120),
  );

  for (let i = 0; i < glitterCount; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;

    const size = 0.25 + Math.random() * 1.15;
    const brightness = 0.15 + Math.random() * 0.55;

    context.globalAlpha = brightness;

    /*
      Mostly champagne,
      with occasional ivory sparkles.
    */
    context.fillStyle =
      Math.random() > 0.18
        ? config.theme.champagne
        : config.theme.ivory;

    context.beginPath();
    context.arc(
      x,
      y,
      size,
      0,
      Math.PI * 2,
    );
    context.fill();
  }


  /* =========================
     SMALL BRIGHT SPARKLES
     ========================= */

  const sparkleCount = Math.max(
    20,
    Math.round(width / 12),
  );

  for (let i = 0; i < sparkleCount; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;

    const size = 1 + Math.random() * 2.1;

    context.globalAlpha =
      0.3 + Math.random() * 0.5;

    context.strokeStyle =
      Math.random() > 0.25
        ? config.theme.champagne
        : config.theme.ivory;

    context.lineWidth = 0.55;

    context.beginPath();

    /* horizontal glint */
    context.moveTo(x - size, y);
    context.lineTo(x + size, y);

    /* vertical glint */
    context.moveTo(x, y - size);
    context.lineTo(x, y + size);

    context.stroke();
  }


  /* =========================
     VERY FINE TEXTURE
     ========================= */

  for (let i = 0; i < 350; i += 1) {
    const x = Math.random() * width;
    const y = Math.random() * height;

    context.globalAlpha =
      0.06 + Math.random() * 0.1;

    context.fillStyle = config.theme.ivory;

    context.fillRect(
      x,
      y,
      Math.random() * 0.7 + 0.15,
      Math.random() * 0.7 + 0.15,
    );
  }


  /* reset */
  context.globalAlpha = 1;


  /* =========================
     SCRATCHING MODE
     ========================= */

  context.globalCompositeOperation = "destination-out";

  context.lineCap = "round";
  context.lineJoin = "round";
  context.lineWidth = 42;
}

    function pointerPosition(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    }

    function beginScratch(event) {
      if (revealed) return;

      drawing = true;
      canvas.setPointerCapture(event.pointerId);

      const position = pointerPosition(event);
      const context = canvas.getContext("2d", { willReadFrequently: true });

      context.beginPath();
      context.moveTo(position.x, position.y);
    }

    function continueScratch(event) {
      if (!drawing || revealed) return;

      const position = pointerPosition(event);
      const context = canvas.getContext("2d", { willReadFrequently: true });

      context.lineTo(position.x, position.y);
      context.stroke();

      const now = performance.now();
      if (now - lastCheck > 140) {
        lastCheck = now;
        if (scratchCompletion(context) > 0.42) finishReveal();
      }
    }

    function scratchCompletion(context) {
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let transparentSamples = 0;
      let totalSamples = 0;

      for (let alphaIndex = 3; alphaIndex < pixels.length; alphaIndex += 256) {
        totalSamples += 1;
        if (pixels[alphaIndex] < 30) transparentSamples += 1;
      }

      return transparentSamples / totalSamples;
    }

    function finishReveal() {
      if (revealed) return;

      revealed = true;
      drawing = false;

      // Keep both classes: is-revealed handles celebration styling, while
      // is-visible prevents the scroll-reveal animation from hiding the card.
      card.classList.add("is-revealed", "is-visible");
      heading.textContent = "Our forever begins";
      note.textContent =
        "Save the date — we would be honoured to have you with us.";
      canvas.remove();
      createPetalShower();
    }

    canvas.addEventListener("pointerdown", beginScratch);
    canvas.addEventListener("pointermove", continueScratch);
    canvas.addEventListener("pointerup", () => {
      drawing = false;
    });
    canvas.addEventListener("pointercancel", () => {
      drawing = false;
    });
    canvas.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") finishReveal();
    });

    prepareCanvas();
    window.addEventListener("resize", prepareCanvas);
  }

function createPetalShower() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  document.querySelector(".petal-shower")?.remove();

  const shower = createElement("div", "petal-shower");
  shower.setAttribute("aria-hidden", "true");

  const rootStyles = getComputedStyle(document.documentElement);

  const mauve =
    rootStyles.getPropertyValue("--mauve").trim() || "#A51520";

  const lavender =
    rootStyles.getPropertyValue("--lavender").trim() || "#6F0B17";

  const champagne =
    rootStyles.getPropertyValue("--champagne").trim() || "#C9A35F";

  const colors = [
    mauve,
    lavender,
    mauve,
    lavender,
    mauve,
    champagne,
  ];

  const shapes = [
    "80% 20% 70% 30% / 65% 35% 65% 35%",
    "70% 30% 85% 15% / 55% 45% 70% 30%",
    "90% 10% 60% 40% / 70% 30% 80% 20%",
    "60% 40% 75% 25% / 80% 20% 60% 40%",
  ];

  const random = (min, max) =>
    Math.random() * (max - min) + min;

  const randomItem = (items) =>
    items[Math.floor(Math.random() * items.length)];

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const petalCount = Math.min(
    60,
    Math.max(38, Math.round(viewportWidth / 9)),
  );

  const petals = [];

  for (let index = 0; index < petalCount; index += 1) {
    const element = createElement("i");

    const size = random(7, 14);

    const x = random(-25, viewportWidth + 25);
    const y = random(-100, -25);

    const rotation = random(0, 360);
    const rotationX = random(0, 360);
    const rotationY = random(0, 360);

    const scale = random(0.65, 1.2);

    element.style.width = `${size}px`;
    element.style.height = `${size * random(1.2, 1.7)}px`;

    element.style.background = randomItem(colors);
    element.style.borderRadius = randomItem(shapes);

    /*
      Important:
      Put the petal in its real starting position BEFORE
      it gets inserted into the document.
    */
    element.style.opacity = "0";

    element.style.transform = `
      translate3d(${x}px, ${y}px, 0)
      rotate(${rotation}deg)
      rotateX(${rotationX}deg)
      rotateY(${rotationY}deg)
      scale(${scale})
    `;

    shower.append(element);

    petals.push({
      element,

      x,
      y,

      vx: random(-30, 30),
      vy: random(65, 120),

      gravity: random(12, 26),

      wind: random(-8, 8),

      sway: random(15, 55),
      swaySpeed: random(1.4, 3.5),
      swayPhase: random(0, Math.PI * 2),

      rotation,
      rotationX,
      rotationY,

      spin: random(-220, 220),
      spinX: random(-190, 190),
      spinY: random(-260, 260),

      scale,
      baseOpacity: random(0.55, 0.9),

      delay: random(0, 700),

      lifetime: random(5800, 8600),
    });
  }

  /*
    Append only after every petal already has
    its initial position and opacity.
  */
  document.body.append(shower);

  let startTime = null;
  let previousTime = null;

  function animate(currentTime) {
    if (startTime === null) {
      startTime = currentTime;
      previousTime = currentTime;
    }

    const elapsed = currentTime - startTime;

    const delta = Math.min(
      (currentTime - previousTime) / 1000,
      0.032,
    );

    previousTime = currentTime;

    petals.forEach((petal) => {
      /*
        Keep delayed petals completely invisible.
      */
      if (elapsed < petal.delay) {
        petal.element.style.opacity = "0";
        return;
      }

      const age = elapsed - petal.delay;

      if (age >= petal.lifetime) {
        petal.element.style.display = "none";
        return;
      }

      const time = age / 1000;

      petal.vy += petal.gravity * delta;

      petal.vx +=
        Math.sin(
          time * 0.75 + petal.swayPhase,
        ) *
        petal.wind *
        delta;

      petal.x += petal.vx * delta;
      petal.y += petal.vy * delta;

      petal.rotation += petal.spin * delta;
      petal.rotationX += petal.spinX * delta;
      petal.rotationY += petal.spinY * delta;

      const sway =
        Math.sin(
          time * petal.swaySpeed + petal.swayPhase,
        ) * petal.sway;

      const flutterY =
        Math.sin(
          time * petal.swaySpeed * 2.2 +
          petal.swayPhase,
        ) * 5;

      const flip =
        0.35 +
        Math.abs(
          Math.cos(
            time * petal.swaySpeed * 1.8 +
            petal.swayPhase,
          ),
        ) *
          0.65;

      /*
        Soft fade-in.
        Prevents petals popping into existence.
      */
      const fadeInDuration = 250;

      let opacity =
        petal.baseOpacity *
        Math.min(1, age / fadeInDuration);

      const fadeStart = viewportHeight * 0.82;

      if (petal.y > fadeStart) {
        const bottomFade =
          1 -
          (petal.y - fadeStart) /
            (viewportHeight + 100 - fadeStart);

        opacity *= Math.max(0, bottomFade);
      }

      if (age > petal.lifetime * 0.82) {
        const lifeFade =
          1 -
          (age - petal.lifetime * 0.82) /
            (petal.lifetime * 0.18);

        opacity *= Math.max(0, lifeFade);
      }

      petal.element.style.opacity =
        Math.max(0, opacity);

      petal.element.style.transform = `
        translate3d(
          ${petal.x + sway}px,
          ${petal.y + flutterY}px,
          0
        )
        rotate(${petal.rotation}deg)
        rotateX(${petal.rotationX}deg)
        rotateY(${petal.rotationY}deg)
        scale(${petal.scale})
        scaleX(${flip})
      `;

      if (petal.y > viewportHeight + 120) {
        petal.element.style.display = "none";
      }
    });

    if (elapsed < 10000) {
      requestAnimationFrame(animate);
    } else {
      shower.remove();
    }
  }

  requestAnimationFrame(animate);
}

  function initializeCountdown() {
    const targetDate = new Date(config.wedding.isoDate).getTime();

    function updateCountdown() {
      const difference = Math.max(0, targetDate - Date.now());
      const values = {
        countdownDays: Math.floor(difference / 86400000),
        countdownHours: Math.floor((difference / 3600000) % 24),
        countdownMinutes: Math.floor((difference / 60000) % 60),
        countdownSeconds: Math.floor((difference / 1000) % 60),
      };

      Object.entries(values).forEach(([id, value]) => {
        select(`#${id}`).textContent = String(value).padStart(2, "0");
      });
    }

    updateCountdown();
    window.setInterval(updateCountdown, 1000);
  }

  function prepareRsvpFields() {
    select("#rsvpName").placeholder = config.rsvp.fields.name;
    select("#rsvpEmail").placeholder = config.rsvp.fields.email;
    select("#rsvpNote").placeholder = config.rsvp.fields.note;

    const attendance = select("#rsvpAttendance");
    const prompt = createElement("option", "", "Select your response");

    prompt.value = "";
    prompt.disabled = true;
    prompt.selected = true;
    attendance.append(prompt);

    config.rsvp.fields.attendance.forEach((option) => {
      attendance.append(createElement("option", "", option));
    });

    const guests = select("#rsvpGuests");

    config.rsvp.fields.guests.forEach((option) => {
      guests.append(createElement("option", "", option));
    });
  }

  function initializeRsvp() {
    const form = select("#rsvpForm");
    const success = select("#rsvpSuccess");

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.hidden = true;
      success.hidden = false;
      success.classList.add("is-visible");
    });

    select("#editRsvp").addEventListener("click", () => {
      success.hidden = true;
      form.hidden = false;
    });
  }

  function initializeTemplateSwitcher() {
    const allConfigs = window.INVITATION_CONFIGS;
    if (!allConfigs) return;

    const activeId = window.ACTIVE_TEMPLATE_ID || "burgundy";
    const isInsideTemplates = window.location.pathname.includes("/templates/");

    // 1. Create floating dock
    const dock = createElement("div", "template-switcher-dock");

    const showcaseLink = createElement("a", "template-showcase-btn");
    showcaseLink.href = isInsideTemplates ? "../../templates.html" : "./templates.html";
    showcaseLink.innerHTML = `<span>🏛️</span><span>Templates Hub</span>`;

    const triggerBtn = createElement("button", "template-switcher-trigger");
    triggerBtn.type = "button";
    triggerBtn.setAttribute("aria-label", "Switch Wedding Card Theme");
    triggerBtn.innerHTML = `<span class="dot-pulse"></span><span>Themes (${Object.keys(allConfigs).length})</span>`;

    dock.append(showcaseLink, triggerBtn);

    // 2. Create Modal Drawer
    const backdrop = createElement("div", "template-modal-backdrop");
    const modal = createElement("div", "template-modal");

    modal.innerHTML = `
      <div class="template-modal-header">
        <div>
          <h2 class="template-modal-title">Nikah Card Collection</h2>
          <p class="template-modal-sub">Explore all luxury handcrafted Nikah themes</p>
        </div>
        <button class="template-modal-close" type="button" aria-label="Close modal">&times;</button>
      </div>
      <div class="template-grid" id="templateModalGrid"></div>
      <div class="template-modal-footer">
        <a href="${isInsideTemplates ? "../../templates.html" : "./templates.html"}">
          <span>🌟</span><span>Open Full Templates Catalog & Showcase</span>
        </a>
        <small style="color: rgba(255,255,255,0.45); font-size: 0.76rem;">Instant Live Switcher</small>
      </div>
    `;

    document.body.append(backdrop, modal, dock);

    const grid = modal.querySelector("#templateModalGrid");

    Object.values(allConfigs).forEach((item) => {
      const card = createElement(
        "div",
        `template-card-item${item.id === activeId ? " is-current" : ""}`,
      );
      card.style.setProperty("--card-accent", item.accentColor);

      const isCurrent = item.id === activeId;
      const coupleNames = `${item.couple.bride.name} & ${item.couple.groom.name}`;

      const swatchesHtml = item.dressCode.swatches
        .map((c) => `<span style="background:${c}"></span>`)
        .join("");

      const previewHref = isInsideTemplates
        ? `../../index.html?theme=${item.id}`
        : `?theme=${item.id}`;

      const standaloneHref = isInsideTemplates
        ? `../${item.id}/index.html`
        : `./templates/${item.id}/index.html`;

      card.innerHTML = `
        <div class="template-card-banner" style="background:${item.bgPreview}">
          <strong style="font-size: 0.95rem; font-weight: 600;">${item.name}</strong>
          <span class="theme-badge">${item.tag}</span>
        </div>
        <div class="template-card-info">
          <h3>${coupleNames}</h3>
          <p>${item.tagline} · ${item.wedding.date}</p>
        </div>
        <div class="template-swatches" aria-label="Theme color palette">
          ${swatchesHtml}
        </div>
        <div class="template-card-actions">
          <a class="template-btn-preview" href="${previewHref}">
            ${isCurrent ? "✓ Active Theme" : "Preview Theme"}
          </a>
          <a class="template-btn-link" href="${standaloneHref}" title="Standalone card link for clients">
            Card Link ↗
          </a>
        </div>
      `;

      grid.append(card);
    });

    function openModal() {
      backdrop.classList.add("is-active");
      modal.classList.add("is-active");
    }

    function closeModal() {
      backdrop.classList.remove("is-active");
      modal.classList.remove("is-active");
    }

    triggerBtn.addEventListener("click", openModal);
    backdrop.addEventListener("click", closeModal);
    modal.querySelector(".template-modal-close").addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  function initialize() {
    applyConfig();
    initializeOpening();
    initializeMusic();
    initializeIntroSwitcher();
    initializeRevealAnimations();
    initializeScratchCard();
    initializeCountdown();
    initializeTemplateSwitcher();
  }

  document.addEventListener("DOMContentLoaded", initialize);
})();
