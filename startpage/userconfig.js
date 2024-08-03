let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: 'Mendoza, Argentina',
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#db4740",
  },
  search: {
    engines: {
      g: ["https://google.com/search?q=", "Google"],
      b: ["https://bing.com/search?q=", "Bing"],
      d: ["https://duckduckgo.com/html?q=", "DuckDuckGo"],
      y: ["https://youtube.com/results?search_query=", "Youtube"],
      r: ["https://www.reddit.com/search/?q=", "Reddit"],
      i: ["https://www.google.com/search?tbm=isch&q=", "Google Images"],
    },
  },
  keybindings: {
    "s": "search-bar",
    "q": "config-tab",
  },
  disabled: [],
  fastlink: "https://chat.openai.com/",
  openLastVisitedTab: false,
  tabs: [
    {
      name: "media",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [{
        name: "Social",
        links: [
          {
            name: "youtube",
            url: "https://www.youtube.com/",
            icon: "brand-youtube",
            icon_color: "#db4740",
          },
          {
            name: "x",
            url: "https://x.com/",
            icon: "brand-x",
            icon_color: "#beac8e",
          },
          {
            name: "reddit",
            url: "https://www.reddit.com/",
            icon: "brand-reddit",
            icon_color: "#f28533",
          },
          {
            name: "threads",
            url: "https://threads.net/",
            icon: "brand-threads",
            icon_color: "#beac8e",
          },
          {
            name: "whatsapp",
            url: "https://web.whatsapp.com/",
            icon: "brand-whatsapp",
            icon_color: "#b1b946",
          },

        ],
      },  ],
    },
    
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
