export default {
  app: {
    token: "27bba61c4f074e1e9aa1cc89f286e96b", // <- enter your token here
    muted: true, // <- mute microphone by default
    googleIt: false // <- ask users to google their request, in case of input.unknown action
  },
  locale: {
    strings: {
      welcomeTitle: "Hallo, ik ben Alfred. Vraag me iets om te beginnen",
      welcomeDescription: `Vraag mij is over "evenementen"`,
      offlineTitle: "Oh, nee!",
      offlineDescription:
        "Hallo, !? Hallo!? Volgens mij heb jij geen internet. Probeer het zo nog een keer.. ",
      queryTitle: "Vraag me iets..."
    },
    settings: {
      speechLang: "nl-NL", // <- output language
      recognitionLang: "nl-NL" // <- input(recognition) language
    }
  }
};
