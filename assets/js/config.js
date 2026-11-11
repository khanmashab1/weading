/**
 * CLIENT CONFIGURATION & MULTI-TEMPLATE THEMES
 * --------------------------------------------
 * Contains 4 luxury bespoke wedding/Nikah card templates:
 *  1. burgundy  - Royal Velvet Burgundy & Gold (Classic Mughal)
 *  2. emerald   - Imperial Emerald & Antique Gold (Zamrud Garden)
 *  3. sapphire  - Midnight Sapphire & Celestial Stardust (Arabian Night)
 *  4. rose      - Blush Rose & Champagne Pearl (Pastel Floral Luxe)
 */

window.INVITATION_CONFIGS = {
  burgundy: {
    id: "burgundy",
    name: "Royal Velvet Burgundy",
    tagline: "Classic Mughal Opulence",
    tag: "Royal Velvet",
    accentColor: "#C9A35F",
    bgPreview: "linear-gradient(135deg, #3A070C, #6F0B17)",
    site: {
      title: "Faiza & Aawaiz | Nikah Invitation",
      description:
        "Join us to celebrate the Nikah of Faiza & Aawaiz — Sunday, 18th October 2026.",
    },
    couple: {
      brideInitial: "F",
      groomInitial: "A",
      bride: {
        name: "Faiza",
        relation: "Daughter of",
        parents: "Mr. & Mrs. Farooq Ahmed",
      },
      groom: {
        name: "Aawaiz",
        relation: "Son of",
        parents: "Mr. & Mrs. Altaf Hussain",
      },
    },
    copy: {
      bismillah: "﷽",
      bismillahTranslation: "",
      welcomeLine: "We request the honour of your\npresence at the Nikah of",
      invitation: "",
      heroClosing: "as they begin their forever in\nfaith and love.",
      welcomeTitle: "A Blessed Beginning",
      welcomeBody:
        "With hearts full of gratitude, we warmly invite you to join us as we celebrate this beautiful beginning with the love, prayers, and blessings of our families.",
      gifts:
        "Your love, blessings, and presence are the greatest gifts we could ever ask for.",
      closing: "We can’t wait to celebrate with you.",
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      duaTranslation:
        "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
    },
    wedding: {
      isoDate: "2026-10-18T19:00:00+05:30",
      date: "October 18, 2026",
      day: "Sunday",
      time: "07:00 PM",
      timezone: "IST",
    },
    media: {
      introVideo: "./media/intro-placeholder.mp4",
      introPoster: "./media/intro-placeholder.webp",
      music: "./media/music-placeholder.mp3",
      floralDivider: "./assets/images/floral-divider.webp",
      scratchFrame: "./assets/images/scratch-frame.webp",
      gallery: [
        {
          src: "./media/gallery/01.webp",
          alt: "A softly lit wedding detail",
          caption: "",
        },
        {
          src: "./media/gallery/02.webp",
          alt: "A joyful wedding celebration",
          caption: "",
        },
        {
          src: "./media/gallery/03.webp",
          alt: "Elegant wedding florals and table setting",
          caption: "",
        },
      ],
    },
    program: [
      {
        time: "06:30 PM",
        title: "Guest Arrival",
        note: "Warm welcome with traditional refreshments",
      },
      {
        time: "07:00 PM",
        title: "Nikah Ceremony",
        note: "Solemnisation & sacred duas",
      },
      {
        time: "07:30 PM",
        title: "Blessings & Photos",
        note: "Family greetings & photographs",
      },
      {
        time: "08:00 PM",
        title: "Dinner Feast",
        note: "A royal feast shared with love",
      },
    ],
    venue: {
      name: "Hyatt Regency",
      address: "Anna Salai, Teynampet, Chennai",
      mapUrl: "https://maps.app.goo.gl/9SjDC3RRg9jHZty59",
    },
    dressCode: {
      title: "Festive Formal",
      description:
        "Traditional or formal attire is encouraged. Sarees, lehengas, anarkalis, sherwanis, kurtas, suits, and formal dresses are all welcome. We kindly ask guests to avoid overly casual attire and white or ivory.",
      swatches: ["#7A1F2B", "#234638", "#C49A56", "#7A4968", "#31506B"],
    },
    preWeddingEvents: [
      {
        name: "Mehendi",
        date: "October 15",
        time: "4:00 PM",
        location: "Bride’s Residence",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Qawwali Evening",
        date: "October 17",
        time: "7:00 PM",
        location: "Groom's Residence",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Walima",
        date: "October 19",
        time: "7:30 PM",
        location: "Blue Lagoon, ECR, Chennai",
        mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
      },
    ],
    rsvp: {
      deadline: "Kindly respond by September 15, 2026",
      contact: "For assistance, call +91 98765 43210",
      fields: {
        name: "Your full name",
        email: "Email address",
        attendance: ["Joyfully accepts", "Regretfully declines"],
        guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
        note: "Dietary notes or a message for the couple",
      },
    },
    theme: {
      ivory: "#F1E3CE",       /* warm candlelit cream */
      plum: "#3A070C",        /* deepest burgundy */
      lavender: "#6F0B17",    /* wine red */
      mauve: "#A51520",       /* rose/crimson accent */
      lilac: "#D0B294",       /* warm nude / muted beige */
      champagne: "#C9A35F",   /* antique gold */
    },
  },

  emerald: {
    id: "emerald",
    name: "Imperial Emerald & Gold",
    tagline: "Sacred Paradise Garden (Zamrud)",
    tag: "Imperial Emerald",
    accentColor: "#D4AF37",
    bgPreview: "linear-gradient(135deg, #071C14, #0F3B2A)",
    site: {
      title: "Zoya & Hamza | Nikah Invitation",
      description:
        "Join us to celebrate the Nikah of Zoya & Hamza — Friday, 20th November 2026.",
    },
    couple: {
      brideInitial: "Z",
      groomInitial: "H",
      bride: {
        name: "Zoya",
        relation: "Daughter of",
        parents: "Mr. & Mrs. Tariq Siddiqui",
      },
      groom: {
        name: "Hamza",
        relation: "Son of",
        parents: "Mr. & Mrs. Salman Qureshi",
      },
    },
    copy: {
      bismillah: "﷽",
      bismillahTranslation: "",
      welcomeLine: "With the grace of Almighty Allah,\nwe request your presence at the Nikah of",
      invitation: "",
      heroClosing: "as they unite their souls under\nAllah’s divine blessings.",
      welcomeTitle: "A Sacred Union",
      welcomeBody:
        "In the presence of Allah and surrounded by the warmth of family and dear friends, we invite you to pray with us as Zoya and Hamza embark on a lifetime of faith, harmony, and eternal love.",
      gifts:
        "Your sincere prayers, warm duas, and gracious presence are the most cherished gifts.",
      closing: "Looking forward to sharing our joy with you.",
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      duaTranslation:
        "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
    },
    wedding: {
      isoDate: "2026-11-20T18:30:00+05:30",
      date: "November 20, 2026",
      day: "Friday",
      time: "06:30 PM",
      timezone: "IST",
    },
    media: {
      introVideo: "./media/intro-emerald.mp4",
      introPoster: "./media/intro-emerald.webp",
      music: "./media/music-placeholder.mp3",
      floralDivider: "./assets/images/floral-divider-emerald.webp",
      scratchFrame: "./assets/images/scratch-frame-emerald.webp",
      gallery: [
        {
          src: "./media/gallery/01.webp",
          alt: "Sacred Nikah decor in emerald and gold",
          caption: "",
        },
        {
          src: "./media/gallery/02.webp",
          alt: "Family celebration under festive fairy lights",
          caption: "",
        },
        {
          src: "./media/gallery/03.webp",
          alt: "Delicate emerald florals and calligraphy",
          caption: "",
        },
      ],
    },
    program: [
      {
        time: "06:00 PM",
        title: "Baraat Arrival",
        note: "Welcoming the groom with rose water & ittar",
      },
      {
        time: "06:30 PM",
        title: "Nikah Ceremony",
        note: "Ijab-o-Qubool & Quranic Recitations",
      },
      {
        time: "07:15 PM",
        title: "Dua & Blessings",
        note: "Prayers led by the Imam",
      },
      {
        time: "08:00 PM",
        title: "Dastarkhwan Dinner",
        note: "Traditional Mughlai cuisine and sweet treats",
      },
    ],
    venue: {
      name: "The Leela Palace",
      address: "Adyar Seaface, MRC Nagar, Chennai",
      mapUrl: "https://maps.app.goo.gl/9SjDC3RRg9jHZty59",
    },
    dressCode: {
      title: "Royal Emerald & Gold",
      description:
        "Guests are invited to celebrate in rich jewel tones, emerald greens, gold accents, and opulent traditional attire. Kurtas, sherwanis, sarees, and ghararas are warmly encouraged.",
      swatches: ["#071C14", "#1B4332", "#D4AF37", "#40916C", "#E9D8A6"],
    },
    preWeddingEvents: [
      {
        name: "Mehndi Ki Raat",
        date: "November 18",
        time: "5:00 PM",
        location: "Grand Emerald Lawn",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Qawwali & Sufi Night",
        date: "November 19",
        time: "7:30 PM",
        location: "Royal Banquet Hall",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Walima Reception",
        date: "November 22",
        time: "7:00 PM",
        location: "Palace Grand Ballroom",
        mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
      },
    ],
    rsvp: {
      deadline: "Kindly respond by October 25, 2026",
      contact: "For inquiries, WhatsApp +91 98765 43211",
      fields: {
        name: "Your full name",
        email: "Email address",
        attendance: ["Joyfully accepts", "Regretfully declines"],
        guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
        note: "Dietary preferences or blessings",
      },
    },
    theme: {
      ivory: "#F5EFE6",       /* luminous alabaster cream */
      plum: "#071C14",        /* deep imperial emerald */
      lavender: "#0F3B2A",    /* rich forest emerald */
      mauve: "#1E5E43",       /* vibrant jade accent */
      lilac: "#C8D5B9",       /* soft sage cream */
      champagne: "#D4AF37",   /* luminous antique gold */
    },
  },

  sapphire: {
    id: "sapphire",
    name: "Midnight Sapphire & Stardust",
    tagline: "Celestial Arabian Nights",
    tag: "Celestial Sapphire",
    accentColor: "#E5A93C",
    bgPreview: "linear-gradient(135deg, #081026, #14234B)",
    site: {
      title: "Sarah & Rehan | Nikah Invitation",
      description:
        "Join us to celebrate the Nikah of Sarah & Rehan — Saturday, 12th December 2026.",
    },
    couple: {
      brideInitial: "S",
      groomInitial: "R",
      bride: {
        name: "Sarah",
        relation: "Daughter of",
        parents: "Mr. & Mrs. Zafar Khan",
      },
      groom: {
        name: "Rehan",
        relation: "Son of",
        parents: "Mr. & Mrs. Mansoor Ali",
      },
    },
    copy: {
      bismillah: "﷽",
      bismillahTranslation: "",
      welcomeLine: "Under the celestial canopy of night,\nwe request your gracious presence at the Nikah of",
      invitation: "",
      heroClosing: "as two souls journey together\nguided by devotion and love.",
      welcomeTitle: "A Night of Stars & Duas",
      welcomeBody:
        "Like stars written in the heavens, we give thanks to Allah for bringing our paths together. We would be overjoyed to have you celebrate our Nikah ceremony under a starlit evening filled with prayers.",
      gifts:
        "Your gracious presence, heartfelt smiles, and sincere duas are everything we desire.",
      closing: "We look forward to an enchanting celebration with you.",
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      duaTranslation:
        "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
    },
    wedding: {
      isoDate: "2026-12-12T19:30:00+05:30",
      date: "December 12, 2026",
      day: "Saturday",
      time: "07:30 PM",
      timezone: "IST",
    },
    media: {
      introVideo: "./media/intro-sapphire.mp4",
      introPoster: "./media/intro-sapphire.webp",
      music: "./media/music-placeholder.mp3",
      floralDivider: "./assets/images/floral-divider-sapphire.webp",
      scratchFrame: "./assets/images/scratch-frame-sapphire.webp",
      gallery: [
        {
          src: "./media/gallery/01.webp",
          alt: "Midnight sapphire candlelit arches",
          caption: "",
        },
        {
          src: "./media/gallery/02.webp",
          alt: "Joyous laughter and golden celebrations",
          caption: "",
        },
        {
          src: "./media/gallery/03.webp",
          alt: "Starlit floral chandeliers and tables",
          caption: "",
        },
      ],
    },
    program: [
      {
        time: "07:00 PM",
        title: "Starlight Welcome",
        note: "Gourmet sherbet & welcome strings",
      },
      {
        time: "07:30 PM",
        title: "Solemn Nikah",
        note: "Marriage covenant under the arches",
      },
      {
        time: "08:15 PM",
        title: "Ring & Blessings Exchange",
        note: "Blessings and cherished family photographs",
      },
      {
        time: "08:45 PM",
        title: "Celestial Royal Banquet",
        note: "Dinner under a canopy of starlight",
      },
    ],
    venue: {
      name: "ITC Grand Chola",
      address: "Anna Salai, Guindy, Chennai",
      mapUrl: "https://maps.app.goo.gl/9SjDC3RRg9jHZty59",
    },
    dressCode: {
      title: "Midnight Glamour & Celestial Gold",
      description:
        "Evening formals with touches of midnight navy, sapphire blue, metallic gold, and silver shimmer are warmly suggested.",
      swatches: ["#081026", "#14234B", "#E5A93C", "#223A70", "#E0E6F0"],
    },
    preWeddingEvents: [
      {
        name: "Sufi & Ghazal Night",
        date: "December 09",
        time: "7:00 PM",
        location: "The Chola Courtyard",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Mehndi Celebration",
        date: "December 10",
        time: "4:30 PM",
        location: "Rajendra Ballroom",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Walima Banquet",
        date: "December 14",
        time: "7:30 PM",
        location: "Grand Ballroom, ITC",
        mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
      },
    ],
    rsvp: {
      deadline: "Kindly respond by November 15, 2026",
      contact: "For inquiries, call +91 98765 43212",
      fields: {
        name: "Your full name",
        email: "Email address",
        attendance: ["Joyfully accepts", "Regretfully declines"],
        guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
        note: "Special notes for the couple",
      },
    },
    theme: {
      ivory: "#F4F6FB",       /* starry pearl cream */
      plum: "#081026",        /* deep celestial midnight navy */
      lavender: "#14234B",    /* royal sapphire blue */
      mauve: "#223A70",       /* deep twilight blue accent */
      lilac: "#B8C5E6",       /* celestial mist / silver-blue */
      champagne: "#E5A93C",   /* celestial starlight gold */
    },
  },

  rose: {
    id: "rose",
    name: "Blush Rose & Champagne",
    tagline: "Romantic Pastel Flora",
    tag: "Blush Rose Luxe",
    accentColor: "#D9A779",
    bgPreview: "linear-gradient(135deg, #2E101D, #5E223E)",
    site: {
      title: "Zainab & Bilal | Nikah Invitation",
      description:
        "Join us to celebrate the Nikah of Zainab & Bilal — Sunday, 24th January 2027.",
    },
    couple: {
      brideInitial: "Z",
      groomInitial: "B",
      bride: {
        name: "Zainab",
        relation: "Daughter of",
        parents: "Mr. & Mrs. Rashid Malik",
      },
      groom: {
        name: "Bilal",
        relation: "Son of",
        parents: "Mr. & Mrs. Nadeem Akhtar",
      },
    },
    copy: {
      bismillah: "﷽",
      bismillahTranslation: "",
      welcomeLine: "With immense joy and Allah’s blessings,\nwe invite you to witness the Nikah of",
      invitation: "",
      heroClosing: "as they begin a journey blooming\nwith unconditional love and faith.",
      welcomeTitle: "A Garden of Love & Duas",
      welcomeBody:
        "Two souls, two families, united by destiny. We warmly invite you to shower your blessings and celebrate our Nikah surrounded by fragrant blooms, gentle smiles, and eternal prayers.",
      gifts:
        "Your loving presence and cherished prayers are the only gifts we request.",
      closing: "We cannot wait to celebrate this milestone with you.",
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      duaTranslation:
        "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
    },
    wedding: {
      isoDate: "2027-01-24T18:00:00+05:30",
      date: "January 24, 2027",
      day: "Sunday",
      time: "06:00 PM",
      timezone: "IST",
    },
    media: {
      introVideo: "./media/intro-rose.mp4",
      introPoster: "./media/intro-rose.webp",
      music: "./media/music-placeholder.mp3",
      floralDivider: "./assets/images/floral-divider-rose.webp",
      scratchFrame: "./assets/images/scratch-frame-rose.webp",
      gallery: [
        {
          src: "./media/gallery/01.webp",
          alt: "Soft blush rose floral arrangement",
          caption: "",
        },
        {
          src: "./media/gallery/02.webp",
          alt: "Romantic fairy light ambiance and smiles",
          caption: "",
        },
        {
          src: "./media/gallery/03.webp",
          alt: "Pastel florals and rose gold tableware",
          caption: "",
        },
      ],
    },
    program: [
      {
        time: "05:30 PM",
        title: "Rose Petal Welcome",
        note: "Warm reception with Kashmiri kahwa and flowers",
      },
      {
        time: "06:00 PM",
        title: "Sacred Nikah Ceremony",
        note: "Solemnisation of marriage and khutbah",
      },
      {
        time: "06:45 PM",
        title: "Family Congratulation",
        note: "Photographs with bride and groom",
      },
      {
        time: "07:30 PM",
        title: "Grand Reception Dinner",
        note: "An artisanal culinary feast",
      },
    ],
    venue: {
      name: "Taj Coromandel",
      address: "Nungambakkam High Road, Chennai",
      mapUrl: "https://maps.app.goo.gl/9SjDC3RRg9jHZty59",
    },
    dressCode: {
      title: "Pastel Elegance & Rose Gold",
      description:
        "Guests are gently encouraged to wear romantic pastel shades, dusty rose, blush pink, soft sage, warm peach, champagne gold, or pastel formals.",
      swatches: ["#2E101D", "#964B6A", "#D9A779", "#E6CAD4", "#FFF8F3"],
    },
    preWeddingEvents: [
      {
        name: "Floral Haldi Ceremony",
        date: "January 21",
        time: "11:00 AM",
        location: "Taj Coromandel Poolside",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Mehndi & Sangeet",
        date: "January 22",
        time: "5:00 PM",
        location: "Ballroom One",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Walima Feast",
        date: "January 26",
        time: "7:00 PM",
        location: "Grand Pavillion, Taj",
        mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
      },
    ],
    rsvp: {
      deadline: "Kindly respond by December 20, 2026",
      contact: "For inquiries, WhatsApp +91 98765 43213",
      fields: {
        name: "Your full name",
        email: "Email address",
        attendance: ["Joyfully accepts", "Regretfully declines"],
        guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
        note: "Dietary preferences or blessings",
      },
    },
    theme: {
      ivory: "#FFF8F3",       /* warm pearl alabaster */
      plum: "#2E101D",        /* deep velvet rose plum */
      lavender: "#5E223E",    /* rich wine-rose */
      mauve: "#964B6A",       /* romantic dusty rose accent */
      lilac: "#E6CAD4",       /* soft blush petal */
      champagne: "#D9A779",   /* rose gold & warm champagne */
    },
  },

  ivory: {
    id: "ivory",
    name: "Royal Ivory & Brushed Gold",
    tagline: "Noor Minimalist Opulence",
    tag: "Royal Ivory Luxe",
    accentColor: "#D4AF37",
    bgPreview: "linear-gradient(135deg, #FAF6EE, #EADCC8)",
    site: {
      title: "Ayla & Daniyal | Nikah Invitation",
      description:
        "Join us to celebrate the Nikah of Ayla & Daniyal — Saturday, 14th August 2027.",
    },
    couple: {
      brideInitial: "A",
      groomInitial: "D",
      bride: {
        name: "Ayla",
        relation: "Daughter of",
        parents: "Dr. & Mrs. Imran Qureshi",
      },
      groom: {
        name: "Daniyal",
        relation: "Son of",
        parents: "Engr. & Mrs. Asim Siddiqui",
      },
    },
    copy: {
      bismillah: "﷽",
      bismillahTranslation:
        "“And among His signs is that He created for you mates from among yourselves, that you may dwell in tranquility with them, and He has put love and mercy between your hearts.” (Surah Ar-Rum 30:21)",
      welcomeLine: "Under the divine grace and light of Allah (SWT),\nwe request the honor of your presence at the Nikah of",
      invitation: "",
      heroClosing: "as they begin a lifetime illuminated\nby unconditional love, faith, and peace.",
      welcomeTitle: "A Union of Souls & Light",
      welcomeBody:
        "With deep gratitude and joy, we invite our closest family and cherished friends to join us as Ayla and Daniyal commit their hearts in sacred Nikah. May this beautiful beginning be illuminated by your warm presence and heartfelt prayers.",
      gifts:
        "Your presence and heartfelt duas are the only gifts we request on this blessed day.",
      closing: "We look forward to welcoming you with joy.",
      dua: "بَارَكَ اللَّهُ لَكُمَا وَبَارَكَ عَلَيْكُمَا وَجَمَعَ بَيْنَكُمَا فِي خَيْرٍ",
      duaTranslation:
        "May Allah bless you both, shower His blessings upon you, and join you together in goodness.",
    },
    wedding: {
      isoDate: "2027-08-14T18:00:00+05:30",
      date: "August 14, 2027",
      day: "Saturday",
      time: "06:00 PM",
      timezone: "IST",
    },
    media: {
      introVideo: "./media/intro-ivory.mp4",
      introPoster: "./media/intro-ivory.webp",
      music: "./media/music-placeholder.mp3",
      floralDivider: "./assets/images/floral-divider-ivory.webp",
      scratchFrame: "./assets/images/scratch-frame-ivory.webp",
      gallery: [
        {
          src: "./media/gallery/01.webp",
          alt: "Royal Ivory floral and gold stage decor",
          caption: "",
        },
        {
          src: "./media/gallery/02.webp",
          alt: "Family celebration and warm smiles",
          caption: "",
        },
        {
          src: "./media/gallery/03.webp",
          alt: "Candlelit tables with white florals and gold filigree",
          caption: "",
        },
      ],
    },
    program: [
      {
        time: "05:30 PM",
        title: "Guest Reception",
        note: "Warm welcome with saffron kahwa and rose sherbet",
      },
      {
        time: "06:00 PM",
        title: "Nikah Solemnisation",
        note: "Ijab-o-Qubool, Quranic sermon, and communal dua",
      },
      {
        time: "07:00 PM",
        title: "Family Congratulation",
        note: "Greetings, sweets, and portraits with the couple",
      },
      {
        time: "08:00 PM",
        title: "Royal Banquet Dinner",
        note: "An exquisite multi-course royal feast",
      },
    ],
    venue: {
      name: "The Taj Mahal Palace",
      address: "Apollo Bunder, Colaba, Mumbai",
      mapUrl: "https://maps.app.goo.gl/9SjDC3RRg9jHZty59",
    },
    dressCode: {
      title: "Royal Ivory, Gold & Pastel Formals",
      description:
        "Traditional festive or formal evening attire. Gold, champagne, pearl, sage, and jewel-toned suits, sherwanis, sarees, and anarkalis are warmly suggested.",
      swatches: ["#FAF6EE", "#D4AF37", "#2C2621", "#C5A059", "#E8DAC8"],
    },
    preWeddingEvents: [
      {
        name: "White & Gold Haldi",
        date: "August 11",
        time: "11:00 AM",
        location: "Palace Sea Lounge",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Mehndi Celebration",
        date: "August 12",
        time: "5:00 PM",
        location: "Crystal Ballroom",
        mapLink: "https://maps.app.goo.gl/c4WZJk71NhKc7CDGA",
      },
      {
        name: "Walima Feast",
        date: "August 16",
        time: "7:30 PM",
        location: "Grand Ballroom, The Taj",
        mapLink: "https://maps.app.goo.gl/VY3FM2kntM26syuJ8",
      },
    ],
    rsvp: {
      deadline: "Kindly respond by July 10, 2027",
      contact: "For inquiries, WhatsApp +91 98765 43214",
      fields: {
        name: "Your full name",
        email: "Email address",
        attendance: ["Joyfully accepts", "Regretfully declines"],
        guests: ["1 guest", "2 guests", "3 guests", "4 guests"],
        note: "Dietary preferences or warm wishes",
      },
    },
    theme: {
      ivory: "#FAF6EE",       /* luminous pure alabaster cream */
      plum: "#1E1A17",        /* deep warm obsidian espresso (for text & structure) */
      lavender: "#3D342D",    /* rich bronze-espresso accent */
      mauve: "#8E6D38",       /* warm brushed gold tone */
      lilac: "#E8DAC8",       /* soft champagne silk */
      champagne: "#D4AF37",   /* radiant 24K gold */
    },
  },
};

/**
 * Determine active theme:
 * 1. window.TEMPLATE_ID (if preset by template page)
 * 2. URL query param (?theme=emerald or ?template=sapphire)
 * 3. Fallback to 'burgundy' (preserves original default)
 */
(function initActiveConfig() {
  const params = new URLSearchParams(window.location.search);
  const requestedId =
    window.TEMPLATE_ID ||
    params.get("theme") ||
    params.get("template") ||
    "burgundy";

  const activeId = window.INVITATION_CONFIGS[requestedId]
    ? requestedId
    : "burgundy";

  window.ACTIVE_TEMPLATE_ID = activeId;
  window.INVITATION_CONFIG = window.INVITATION_CONFIGS[activeId];
})();
