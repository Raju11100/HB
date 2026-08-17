export interface MemoryPhoto {
  id: string;
  url: string;
  caption: string;
  location?: string;
  dateTag?: string;
  aspectRatio?: 'portrait' | 'square' | 'landscape';
}

export interface AppreciationCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  iconName?: string;
}

export interface VideoMemoryItem {
  id: string;
  title: string;
  videoUrl: string;
  posterUrl?: string;
  caption?: string;
}

export interface BestFriendFile {
  name: string;
  status: string;
  location: string;
  chaosLevel: string;
  dramaLevel: string;
  laughFrequency: string;
  replacementAvailable: string;
}

export interface LetterData {
  teaser: string;
  subTeaser: string;
  buttonText: string;
  heading: string;
  bodyParagraphs: string[];
  finalLines: {
    line1: string;
    line2: string;
    line3: string;
  };
  signOff: string;
}

export interface BirthdayData {
  name: string;
  subtitle: string;
  musicPath: string;
  openingSequence: {
    greeting: string;
    subtext: string;
    buttonText: string;
  };
  interstitialQuotes: string[];
  photos: MemoryPhoto[];
  timelineMemories: {
    id: string;
    title: string;
    dateOrTag: string;
    description: string;
    imageUrl: string;
  }[];
  bestFriendFiles: BestFriendFile;
  appreciationCards: AppreciationCardItem[];
  videos: VideoMemoryItem[];
  personalLetter: LetterData;
  giftSection: {
    preText: string;
    heading: string;
    buttonText: string;
    modalTitle: string;
    modalMessage: string;
  };
  finalSection: {
    mainTitle: string;
    subtitle: string;
    quote: string;
    finalSignOff: string;
    heroPhotoUrl: string;
  };
}

export const birthdayData: BirthdayData = {
  // 1. PERSONAL INFORMATION
  name: "Anamta Karim",
  subtitle: "Today is all about you.",
  musicPath: "/music/birthday-song.mp3",

  // 2. OPENING SEQUENCE
  openingSequence: {
    greeting: "Hey...",
    subtext: "I made something specifically for you.",
    buttonText: "Tap to begin ✨",
  },

  // 3. POETIC INTERSTITIAL TEXTS (between photo reveals)
  interstitialQuotes: [
    "Different places.",
    "Different moods.",
    "Different versions of you.",
    "Still the exact same wonderful person.",
    "And somehow...",
    "you keep making every single memory better.",
  ],

  // 4. FLOATING PHOTO GALLERY
  photos: [
    {
      id: "photo-1",
      url: "/images/birthday-01.jpg",
      caption: "Unfiltered smiles & random moments.",
      dateTag: "Memory 01",
      aspectRatio: "portrait",
    },
    {
      id: "photo-2",
      url: "/images/birthday-02.jpg",
      caption: "One of those days where everything was hilarious.",
      dateTag: "Memory 02",
      aspectRatio: "portrait",
    },
    {
      id: "photo-3",
      url: "/images/birthday-03.jpg",
      caption: "Golden hour and good vibes.",
      dateTag: "Memory 03",
      aspectRatio: "portrait",
    },
    {
      id: "photo-4",
      url: "/images/birthday-04.jpg",
      caption: "Somehow this became an absolute favorite.",
      dateTag: "Memory 04",
      aspectRatio: "portrait",
    },
    {
      id: "photo-5",
      url: "/images/birthday-05.jpg",
      caption: "Maximum energy, zero regrets.",
      dateTag: "Memory 05",
      aspectRatio: "portrait",
    },
    {
      id: "photo-6",
      url: "/images/birthday-06.jpg",
      caption: "Capturing the calm before the chaos.",
      dateTag: "Memory 06",
      aspectRatio: "portrait",
    },
    {
      id: "photo-7",
      url: "/images/birthday-07.jpg",
      caption: "Still collecting core memories together.",
      dateTag: "Memory 07",
      aspectRatio: "portrait",
    },
  ],

  // 5. SCRAPBOOK TIMELINE
  timelineMemories: [
    {
      id: "timeline-1",
      title: "Where it all started",
      dateOrTag: "Chapter 01",
      description: "One of those random ordinary days that somehow turned into a core memory.",
      imageUrl: "/images/birthday-01.jpg",
    },
    {
      id: "timeline-2",
      title: "The Unplanned Adventure",
      dateOrTag: "Chapter 02",
      description: "No map, no real plan, just pure vibes and non-stop laughter.",
      imageUrl: "/images/birthday-03.jpg",
    },
    {
      id: "timeline-3",
      title: "The Chaos Incident",
      dateOrTag: "Chapter 03",
      description: "When we were supposed to be responsible, but decided chaos was more fun.",
      imageUrl: "/images/birthday-05.jpg",
    },
    {
      id: "timeline-4",
      title: "Still Going Strong",
      dateOrTag: "Present Day",
      description: "Another year down, infinite memories left to collect.",
      imageUrl: "/images/birthday-07.jpg",
    },
  ],

  // 6. THE BEST FRIEND FILES (Humorous Dossier)
  bestFriendFiles: {
    name: "Anamta Karim",
    status: "Birthday Girl 👑",
    location: "Jharkhand 📍",
    chaosLevel: "99.9%",
    dramaLevel: "Loading...",
    laughFrequency: "∞ (at literally anything)",
    replacementAvailable: "❌ (1 of 1 Edition)",
  },

  // 7. THINGS I APPRECIATE ABOUT YOU
  appreciationCards: [
    {
      id: "app-1",
      number: "01",
      title: "Your Unmatched Laugh",
      description: "The kind of laugh that instantly cures bad days and makes everyone in the room smile.",
    },
    {
      id: "app-2",
      number: "02",
      title: "Random 2 AM Conversations",
      description: "From deep life talks to utter nonsense that only the two of us would find funny.",
    },
    {
      id: "app-3",
      number: "03",
      title: "Making Ordinary Days Special",
      description: "You have a knack for turning boring routine moments into unforgettable stories.",
    },
    {
      id: "app-4",
      number: "04",
      title: "Unfiltered Honesty",
      description: "Always keeping it real, calling out my silly ideas, and backing me up no matter what.",
    },
    {
      id: "app-5",
      number: "05",
      title: "Just Being You",
      description: "Genuine, loyal, delightfully dramatic, and the absolute best friend anyone could ask for.",
    },
  ],

  // 8. OPTIONAL VIDEO MEMORIES (Gracefully hidden if empty)
  videos: [],

  // 9. PERSONAL LETTER
  personalLetter: {
    teaser: "Okay… enough pictures.",
    subTeaser: "There's something I actually wanted to tell you.",
    buttonText: "Open your letter 💌",
    heading: "Dear Anamta,",
    bodyParagraphs: [
      "Okay, first of all… Happy Birthday! ❤️",
      "I honestly don't know where to start because there are probably a hundred things I could say, and somehow none of them feel enough.",
      "Looking through your pictures while making this little website made me realize something — you have this really effortless way of carrying yourself. Whether you're dressed up, laughing in a random picture, posing for the camera, or just being yourself, there's always this confidence and warmth that somehow comes through. And honestly, you have one of those smiles that makes a picture feel alive.",
      "But what I admire about you isn't just how you look.",
      "You're genuinely one of the coolest girls I've ever met. You're dedicated when you actually care about something, passionate about the things that matter to you, and somehow always willing to help people when they need you. You have your own opinions, your own way of doing things, and you don't really need anyone's permission to be yourself — and I think that's one of the things that makes you, well… you.",
      "You're also slightly terrifying when you're in your \"I hate men\" era.",
      "But considering I'm still here, I guess I've survived the screening process. 😂",
      "Kidding.",
      "Jokes apart, I'm genuinely glad I got to know you and become your friend. There are some people you meet and eventually forget, and then there are people who somehow become part of your everyday memories without you even realizing it. You're definitely one of those people.",
      "And yes… I know this website took me a little longer than it probably should have. 😭",
      "I kept thinking, \"I'll finish it soon,\" and then somehow I ended up spending way too much time choosing things, arranging the pictures, changing little details, fixing things that were already working, and probably overthinking everything.",
      "So, I'm sorry it took a while.",
      "But I wanted to make something that wasn't just another \"Happy Birthday 🎂\" message that disappears after you read it.",
      "I wanted to make something that you could look back at and actually smile at.",
      "I hope this new year of your life gives you more reasons to laugh, more moments you're proud of, people who genuinely appreciate you, and a lot of memories worth keeping.",
      "Keep being dedicated.\nKeep being passionate.\nKeep helping people.\nKeep being unapologetically yourself.",
      "And please don't become too mature this year… we still need the chaos. 😂",
      "Happy Birthday once again, Anamta.",
      "I hope you have an absolutely beautiful day and an even better year ahead.",
    ],
    finalLines: {
      line1: "Stay happy. Stay kind. Stay crazy.",
      line2: "And most importantly…",
      line3: "stay you. ❤️",
    },
    signOff: "— Your annoying best friend",
  },

  // 10. INTERACTIVE GIFT
  giftSection: {
    preText: "Okay...",
    heading: "There's one more thing for you.",
    buttonText: "OPEN GIFT 🎁",
    modalTitle: "HAPPY BIRTHDAY BESTIE! 🎉",
    modalMessage: "May your day be filled with warm memories, endless cake, and zero stress! You deserve the world today.",
  },

  // 11. FINAL REVEAL
  finalSection: {
    mainTitle: "HAPPY BIRTHDAY",
    subtitle: "ANAMTA KARIM",
    quote: "Here's to another year of unforgettable memories.",
    finalSignOff: "Stay exactly as wonderfully crazy as you are. ❤️",
    heroPhotoUrl: "/images/birthday-04.jpg",
  },
};
