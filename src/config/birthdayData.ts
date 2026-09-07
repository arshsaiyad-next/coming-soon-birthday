/**
 * Central Configuration for the Coming Soon Birthday Teaser.
 * Enriched with authentic Urdu language script (اردو رسم الخط),
 * romantic Hinglish transliteration, and Urdu Words Treasury.
 */

export interface UrduWordHighlight {
  word: string;
  meaning: string;
}

export interface BirthdayShayari {
  id: string;
  lines: string[];
  urduLines?: string[];
  vibe: string;
  urduWords?: UrduWordHighlight[];
}

export interface EnglishPoem {
  id: string;
  title: string;
  lines: string[];
  vibe: string;
}

export interface CipherRiddle {
  question: string;
  hint: string;
  correctAnswer: string;
  options: string[];
}

export interface UrduTreasuryWord {
  word: string;
  urduScript: string;
  pronunciation: string;
  meaning: string;
  romanticNote: string;
}

export interface BirthdayConfig {
  birthdayName: string;
  yourName: string;
  birthdayDate: string;
  timezone: string;
  teaserMessage: string;
  teaserAudio: string;
  teaserPhotos: string[];
  futureSurpriseUrl: string;

  secretFiles: {
    id: string;
    fileNumber: string;
    title: string;
    clue: string;
    tag: string;
  }[];

  guessingOptions: {
    id: string;
    label: string;
    reaction: string;
    teaserReply: string;
  }[];

  upcomingBirthdayShayaris: BirthdayShayari[];
  englishPoetry: EnglishPoem[];

  urduTreasury: UrduTreasuryWord[];

  cipherPuzzle: {
    title: string;
    subtitle: string;
    secretDateCode: string;
    riddles: CipherRiddle[];
    successMessage: string;
  };

  royalEnvelope: {
    sealNumber: string;
    senderNote: string;
    parchmentHeading: string;
    parchmentBody: string[];
    parchmentSignoff: string;
  };
}

export const birthdayData: BirthdayConfig = {
  birthdayName: "My Princess",
  yourName: "The One Who Counts Every Second",
  birthdayDate: "2026-09-20T00:00:00+05:30",
  timezone: "Asia/Kolkata",

  teaserMessage: "Parda-e-raaz ke peeche, ek khoobsurat jahan saj raha hai... faqat aapke liye.",
  teaserAudio: "/assets/teaser.mp3",
  teaserPhotos: [],
  futureSurpriseUrl: "/birthday",

  // Secret Dossier
  secretFiles: [
    {
      id: "file-01",
      fileNumber: "PARDA 01",
      title: "Naqsh-e-Inception",
      clue: "Something crafted exclusively for your tabassum is underway. Every detail has you in mind.",
      tag: "IN PROGRESS",
    },
    {
      id: "file-02",
      fileNumber: "PARDA 02",
      title: "Husan-o-Nazaakat Metric",
      clue: "Someone is turning another year more gorgeous and graceful. 👀 No arguments allowed.",
      tag: "CONFIRMED",
    },
    {
      id: "file-03",
      fileNumber: "PARDA 03",
      title: "Khaas Blueprint",
      clue: "A heartfelt surprise is under construction. It remains sealed until the clock strikes 12.",
      tag: "TOP SECRET",
    },
    {
      id: "file-04",
      fileNumber: "PARDA 04",
      title: "Dastak-e-Midnight",
      clue: "Access will be granted on 20.09.26 at midnight IST. You are the only intended keyholder.",
      tag: "LOCKED WITH LOVE",
    },
  ],

  // Romantic Guessing Dilemmas
  guessingOptions: [
    {
      id: "guess-1",
      label: "A Sweet Love Secret? 💌",
      reaction: "Koi Poshida Raaz? 🤫",
      teaserReply: "Dil ke raaz waqt aane par hi khoobsurat lagte hain. You'll have to wait for midnight.",
    },
    {
      id: "guess-2",
      label: "A Special Surprise? 🎀",
      reaction: "Ek Anmol Tofa? ✨",
      teaserReply: "Agar abhi sab bata diya toh uss nazaakat bhari muskurahat ka maza aadha ho jaayega.",
    },
    {
      id: "guess-3",
      label: "Something Crazy & Beautiful? 🌹",
      reaction: "Kuch Bepanaah Haseen? 💖",
      teaserReply: "Let's just say 20 September will be etched in memory forever. Get ready.",
    },
  ],

  // Romantic Shayaris with authentic Urdu script + Hinglish
  upcomingBirthdayShayaris: [
    {
      id: "shayari-1",
      urduLines: [
        "خاموش فضاؤں میں ایک آہٹ سی آنے لگی ہے،",
        "۲۰ ستمبر کو میری جان کا دن آنے لگا ہے... 🌸"
      ],
      lines: [
        "Khamosh fizaaon mein ek aahat si aane lagi hai,",
        "20 September ko meri jaan ka din aane laga hai... 🌸"
      ],
      vibe: "Shab-e-Intezaar • شبِ انتظار",
      urduWords: [
        { word: "آہٹ (Aahat)", meaning: "Delicate whispering arrival" },
        { word: "جان (Jaan)", meaning: "My dearest heartbeat / life" },
      ],
    },
    {
      id: "shayari-2",
      urduLines: [
        "تیری نزاکت اور تبسم کی عنایت ہے یہ فضا،",
        "وقت آنے پر ہی کھلے گا یہ روحانی پردۂِ وفا... ✨"
      ],
      lines: [
        "Teri nazaakat aur tabassum ki inaayat hai yeh fiza,",
        "Waqt aane par hi khulega yeh ruhaani parda-e-wafa. ✨"
      ],
      vibe: "Nazaakat-o-Wafa • نزاکت و وفا",
      urduWords: [
        { word: "نزاکت (Nazaakat)", meaning: "Elegance, gentleness, grace" },
        { word: "تبسّم (Tabassum)", meaning: "A sweet, gentle smile" },
        { word: "عنایت (Inaayat)", meaning: "Divine blessing / gift" },
        { word: "روحانی (Ruhaani)", meaning: "Spiritual / deeply soulful" },
      ],
    },
    {
      id: "shayari-3",
      urduLines: [
        "دل کی ہر دھڑکن کو تھوڑا سنبھال کر رکھیے جانِ من،",
        "ہم بھی منتظر ہیں اس ۱۲ بجے کی دستک کے سنگ... ⏳"
      ],
      lines: [
        "Dil ki har dhadkan ko thoda sambhal kar rakhiye jaan-e-mann,",
        "Hum bhi muntazir hain uss 12 baje ki dastak ke sang. ⏳"
      ],
      vibe: "Muntazir Lamhaat • منتظر لمحات",
      urduWords: [
        { word: "جانِ من (Jaan-e-Mann)", meaning: "Sweetheart of my soul" },
        { word: "منتظر (Muntazir)", meaning: "Waiting with tender longing" },
        { word: "دستک (Dastak)", meaning: "The knock at midnight" },
      ],
    },
    {
      id: "shayari-4",
      urduLines: [
        "چشمِ بد دور! ہر لمحہ تیری زندگی میں سکون اور نور لائے،",
        "یہ سلسلۂِ انتظار تیرے لیے سب سے انمول تحفہ لائے... 🌹"
      ],
      lines: [
        "Chashm-e-baddoor! Har lamha teri zindagi mein sukoon aur noor laaye,",
        "Yeh silsila-e-intezaar tere liye sabse anmol tofa laaye. 🌹"
      ],
      vibe: "Dua & Sukoon • دعا و سکون",
      urduWords: [
        { word: "چشمِ بد دور (Chashm-e-baddoor)", meaning: "May no evil eye ever touch you" },
        { word: "سکون (Sukoon)", meaning: "Deep serenity and peace" },
        { word: "نور (Noor)", meaning: "Radiant, celestial glow" },
      ],
    },
    {
      id: "shayari-5",
      urduLines: [
        "نہ سوال پوچھو، نہ کوئی قیاس لگاؤ میری جان،",
        "ذوقِ انتظار کا لطف اٹھاؤ، وقت آئے گا عالی شان... 🎀"
      ],
      lines: [
        "Na sawaal pucho, na koi qayaas lagao meri jaan,",
        "Zauq-e-intezaar ka lutf uthao, waqt aayega aalishan. 🎀"
      ],
      vibe: "Zauq-e-Intezaar • ذوقِ انتظار",
      urduWords: [
        { word: "قیاس (Qayaas)", meaning: "Guesswork or assumptions" },
        { word: "ذوقِ انتظار (Zauq-e-Intezaar)", meaning: "The sweet taste of waiting" },
        { word: "لطف (Lutf)", meaning: "Joyful delight" },
      ],
    },
    {
      id: "shayari-6",
      urduLines: [
        "مکمل ہوگی یہ داستاں جب ۲۰ ستمبر آئے گا،",
        "تیرے دیدار کے ساتھ ہی نیا سال مسکرائے گا... ❤️"
      ],
      lines: [
        "Mukammal hogi yeh daastaan jab 20 September aayega,",
        "Tere deedar ke saath hi naya saal muskurayega. ❤️"
      ],
      vibe: "Deedar-e-Khaas • دیدارِ خاص",
      urduWords: [
        { word: "مکمل (Mukammal)", meaning: "Perfect and complete" },
        { word: "دیدار (Deedar)", meaning: "A beloved glimpse" },
      ],
    },
  ],

  // Interactive Urdu Words Treasury with authentic Urdu script
  urduTreasury: [
    {
      word: "Tabassum",
      urduScript: "تبسّم",
      pronunciation: "Ta-bas-sum",
      meaning: "A sweet, gentle smile",
      romanticNote: "The smile that makes the whole countdown worth waiting for.",
    },
    {
      word: "Ruhaani",
      urduScript: "روحانی",
      pronunciation: "Roo-haa-nee",
      meaning: "Soulful & sacred",
      romanticNote: "The depth of love that goes beyond ordinary words.",
    },
    {
      word: "Nazaakat",
      urduScript: "نزاکت",
      pronunciation: "Na-zaa-kat",
      meaning: "Delicacy, elegance, and grace",
      romanticNote: "The natural charm she carries in every gesture.",
    },
    {
      word: "Muntazir",
      urduScript: "منتظر",
      pronunciation: "Mun-ta-zir",
      meaning: "Waiting with sweet longing",
      romanticNote: "How my heart waits for her birthday midnight.",
    },
    {
      word: "Sukoon",
      urduScript: "سکون",
      pronunciation: "Su-koon",
      meaning: "Peace, tranquility, calm",
      romanticNote: "The feeling of finding peace just by hearing her voice.",
    },
    {
      word: "Noor",
      urduScript: "نور",
      pronunciation: "Noor",
      meaning: "Radiant, celestial light",
      romanticNote: "The glow she brings into every moment.",
    },
    {
      word: "Inaayat",
      urduScript: "عنایت",
      pronunciation: "In-aa-yat",
      meaning: "Divine blessing / gift of grace",
      romanticNote: "Having her in life is the greatest blessing.",
    },
    {
      word: "Chashm-e-Baddoor",
      urduScript: "چشمِ بد دور",
      pronunciation: "Chashm-e-Bad-door",
      meaning: "May no evil eye ever touch you",
      romanticNote: "A silent prayer said every single time I see her.",
    },
  ],

  // English Poetics
  englishPoetry: [
    {
      id: "poem-1",
      title: "The Starlight Arrival",
      lines: [
        "In the quiet corridor of time, something breathtaking is taking shape.",
        "Wait for the midnight that turns 20th September into pure starlight."
      ],
      vibe: "Celestial Romance",
    },
    {
      id: "poem-2",
      title: "More Than Just a Date",
      lines: [
        "The calendar holds ordinary days, but this one holds your heartbeat.",
        "A velvet secret waiting for the clock to strike twelve."
      ],
      vibe: "Sweet Whispers",
    },
    {
      id: "poem-3",
      title: "The Art of Anticipation",
      lines: [
        "Some revelations are worth every gentle tick of the clock.",
        "The sweetest chapters are always guarded by patience and love."
      ],
      vibe: "Timeless Devotion",
    },
  ],

  // Problem Solving: Romantic Cipher Puzzle with Urdu words
  cipherPuzzle: {
    title: "THE VAULT OF 20.09",
    subtitle: "A sweet love puzzle! Solve the 3 questions to unlock a secret whisper.",
    secretDateCode: "20",
    riddles: [
      {
        question: "Which magical day in September belongs exclusively to the most special girl?",
        hint: "Look at the countdown target date on this page...",
        correctAnswer: "20",
        options: ["14", "20", "28", "07"],
      },
      {
        question: "Which Urdu word describes 'a sweet, gentle smile (تبسّم)' that lights up the world?",
        hint: "Look at our Guldasta-e-Alfaaz...",
        correctAnswer: "Tabassum",
        options: ["Tabassum", "Aafat", "Toofan", "Sawaal"],
      },
      {
        question: "Which Urdu word represents 'waiting with deep, tender longing (منتظر)'?",
        hint: "Remember our classified shayari words...",
        correctAnswer: "Muntazir",
        options: ["Sukoon", "Muntazir", "Ruhaani", "Inaayat"],
      },
    ],
    successMessage: "CIPHER DECRYPTED: Access Granted to My Favorite Person! Secret Whisper #01 Unlocked: 'Everything on 20 September 2026 is designed just to bring a sweet Tabassum to your face. Count the days with me, meri jaan.' 💖",
  },

  // Romantic Wax Seal Envelope
  royalEnvelope: {
    sealNumber: "20",
    senderNote: "A SEALED KHAT FROM THE HEART",
    parchmentHeading: "Khat-e-Intezaar • A Little Whisper",
    parchmentBody: [
      "Meri jaan, to the girl who turns ordinary moments into pure noor—",
      "I know you are curious, and you're probably trying to guess what is coming behind this parda-e-raaz. But trust me, some surprises are too precious to rush.",
      "Everything being planned for you is filled with warmth, ruhaaniyat, and unconditional love. Keep watching the countdown, because the moment the clock strikes midnight on 20 September, the wait will be worth every second."
    ],
    parchmentSignoff: "Aapka Muntazir, Always",
  },
};
