export default {
  app: {
    token: "27bba61c4f074e1e9aa1cc89f286e96b", // <- enter your token here
    muted: false, // <- mute microphone by default
    googleIt: true // <- ask users to google their request, in case of input.unknown action
  },
  locale: {
    strings: {
      welcomeTitle: "Hallo, ik ben Alfred. Vraag me iets om te beginnen",
      welcomeDescription: `Je kan 'hallo' typen of je kan op het microfoontje klikken`,
      offlineTitle: "Oh, nee!",
      offlineDescription:
        "Het ziet er naar uit dat je geen internet hebt! probeer het later nog eens!",
      queryTitle: "Vraag me iets...",
      voiceTitle: "hmm?..."
    },
    settings: {
      speechLang: "nl-NL", // <- output language
      recognitionLang: "nl-NL" // <- input(recognition) language
    }
  }
};
