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
      background_url: "src/img/banners/soda-boy.gif",
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
      }, {
        name: "Games",
        links: [
          {
            name: "bad time simulator",
            url: "https://jcw87.github.io/c2-sans-fight/",
            icon: "heart-broken",
            icon_color: "#db4740",
          },
          {
            name: "monkeytype",
            url: "https://monkeytype.com/",
            icon: "keyboard",
            icon_color: "#f28533",
          },
          {
            name: "chess",
            url: "https://www.chess.com/home",
            icon: "chess",
            icon_color: "#b1b946",
          },
        ],
      }, {
        name: "Video",
        links: [
          {
            name: "netflix",
            url: "https://www.netflix.com/",
            icon: "brand-netflix",
            icon_color: "#db4740",
          },
          {
            name: "disney+",
            url: "https://www.disneyplus.com/home",
            icon: "brand-disney",
            icon_color: "#80a99d",
          },
          {
            name: "wco",
            url: "https://www.wcostream.com/",
            icon: "device-tv",
            icon_color: "#f28533",
          },
          {
            name: "theflixer",
            url: "https://theflixer.tv/home",
            icon: "player-play",
            icon_color: "#a3a0be",
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv/",
            icon: "brand-twitch",
            icon_color: "#d3869b",
          },
        ],
      }],
    },
    {
      name: "design",
      background_url: "src/img/banners/cbg-3.gif",
      categories: [
        {
          name: "inspiration",
          links: [
            {
              name: "pinterest",
              url: "https://www.pinterest.es/",
              icon: "brand-pinterest",
              icon_color: "#db4740",
            },
            {
              name: "artstation",
              url: "https://www.artstation.com/?sort_by=community",
              icon: "chart-area",
              icon_color: "#80a99d",
            },
            {
              name: "leonardo.ai",
              url: "https://app.leonardo.ai/",
              icon: "zodiac-leo",
              icon_color: "#a3a0be",
            },
          ],
        },
        {
          name: "resources",
          links: [
            {
              name: "figma",
              url: "https://www.figma.com",
              icon: "brand-figma",
              icon_color: "#d3869b",
            },
            {
              name: "uxpro",
              url: "https://uxpro.cc/",
              icon: "components",
              icon_color: "#b1b946",
            },
            {
              name: "tablericons",
              url: "https://tabler-icons.io/",
              icon: "brand-tabler",
              icon_color: "#80a99d",
            },
            {
              name: "picwish",
              url: "https://www.picswish.com/",
              icon: "camera-selfie",
              icon_color: "#a3a0be",
            },
            {
              name: "photopea",
              url: "https://www.photopea.com/",
              icon: "spiral",
              icon_color: "#8ab87d",
            },
            {
              name: "firefly",
              url: "https://firefly.adobe.com/",
              icon: "brand-adobe",
              icon_color: "#db4740",
            },
            {
              name: "bing create",
              url: "https://www.bing.com/create",
              icon: "brand-bing",
              icon_color: "#80a99d",
            },
          ],
        },
        {
          name: "color",
          links: [
            {
              name: "colorhunt",
              url: "https://colorhunt.co/",
              icon: "color-picker",
              icon_color: "#db4740",
            },
            {
              name: "adobe color",
              url: "https://color.adobe.com/es/create/color-wheel",
              icon: "brand-adobe",
              icon_color: "#80a99d",
            },
            {
              name: "terminalsexy",
              url: "https://terminal.sexy",
              icon: "prompt",
              icon_color: "#f28533",
            },
          ],
        },
      ],
    },
    {
      name: "dev",
      background_url: "src/img/banners/cbg-8.gif",
      categories: [
        {
          name: "coding",
          links: [
            {
              name: "github",
              url: "https://github.com/",
              icon: "brand-github",
              icon_color: "#beac8e",
            },
            {
              name: "chatgpt",
              url: "https://chat.openai.com/",
              icon: "brand-openai",
              icon_color: "#8ab87d",
            },
            {
              name: "vscode",
              url: "https://vscode.dev/",
              icon: "brand-vscode",
              icon_color: "#80a99d",
            },
            {
              name: "phind",
              url: "https://www.phind.com/",
              icon: "zoom-code",
              icon_color: "#beac8e",
            },
            {
              name: "bing chat",
              url: "https://www.bing.com/chat",
              icon: "brand-bing",
              icon_color: "#80a99d",
            },
          ],
        },
        {
          name: "resources",
          links: [  
            {
              name: "bootstrap",
              url: "https://getbootstrap.com/docs/",
              icon: "brand-bootstrap",
              icon_color: "#ad80a2",
            },
            {
              name: "hacktricks",
              url: "https://book.hacktricks.xyz/welcome/readme",
              icon: "biohazard",
              icon_color: "#db4740",
            },
            {
              name: "free-for.dev",
              url: "https://free-for.dev/#/",
              icon: "source-code",
              icon_color: "#8ab87d",
            },
            {
              name: "devhints",
              url: "https://devhints.io/",
              icon: "paperclip",
              icon_color: "#ad80a2",
            },
          ],
        },
        {
          name: "challenges",
          links: [
            {
              name: "hackthebox",
              url: "https://app.hackthebox.com",
              icon: "box",
              icon_color: "#b1b946",
            },
            {
              name: "cryptohack",
              url: "https://cryptohack.org/challenges/",
              icon: "brain",
              icon_color: "#f28533",
            },
            {
              name: "tryhackme",
              url: "https://tryhackme.com/dashboard",
              icon: "brand-onedrive",
              icon_color: "#db4740",
            },
            {
              name: "hackerrank",
              url: "https://www.hackerrank.com/dashboard",
              icon: "code-asterix",
              icon_color: "#b1b946",
            },
          ],
        },
      ],
    },
    {
      name: "study",
      background_url: "src/img/banners/cbg-6.gif",
      categories: [
        {
          name: "writing",
          links: [
            {
              name: "notion",
              url: "https://www.notion.so/",
              icon: "brand-notion",
              icon_color: "#beac8e",
            },
            {
              name: "docs",
              url: "https://docs.google.com/document/u/0/",
              icon: "file-description",
              icon_color: "#80a99d",
            },
            {
              name: "365",
              url: "https://www.microsoft365.com/",
              icon: "brand-office",
              icon_color: "#f28533",
            },
            {
              name: "deepl",
              url: "https://www.deepl.com/translator",
              icon: "language",
              icon_color: "#70919b",
            },
          ],
        },
        {
          name: "university",
          links: [
            {
              name: "umvirtual",
              url: "https://virtual.um.edu.ar/",
              icon: "notebook",
              icon_color: "#626464",
            },
            {
              name: "portal estudiantes",
              url: "https://portal.um.edu.ar/",
              icon: "books",
              icon_color: "#80a99d",
            },
            {
              name: "slack",
              url: "https://slack.com/",
              icon: "brand-slack",
              icon_color: "#d3869b",
            },
            {
              name: "w3schools",
              url: "https://www.w3schools.com/",
              icon: "app-window",
              icon_color: "#8ab87d",
            },
          ],
        },
        {
          name: "tools",
          links: [
            {
              name: "cymath",
              url: "https://www.cymath.com/",
              icon: "calculator",
              icon_color: "#b1b946",
            },
            {
              name: "gitmind",
              url: "https://gitmind.com/",
              icon: "planet",
              icon_color: "#f28533",
            },
            {
              name: "proquest",
              url: "https://www.proquest.com/",
              icon: "book",
              icon_color: "#80a99d",
            },
            {
              name: "parafrasist",
              url: "https://parafrasist.com/",
              icon: "rosette",
              icon_color: "#d3869b",
            },
            {
              name: "scribbr",
              url: "https://www.scribbr.es/",
              icon: "school",
              icon_color: "#f28533",
            },
            {
              name: "resoomer",
              url: "https://resoomer.com/es/",
              icon: "blockquote",
              icon_color: "#db4740",
            },
          ],
        },
      ],
    },
    {
      name: "myself",
      background_url: "src/img/banners/cbg-9.gif",
      categories: [
        {
          name: "mails",
          links: [
            {
              name: "gmail",
              url: "https://mail.google.com/mail/u/0/",
              icon: "brand-gmail",
              icon_color: "#db4740",
            },
          ],
        },
        {
          name: "storage",
          links: [
            {
              name: "drive",
              url: "https://drive.google.com/drive/u/0/my-drive",
              icon: "brand-google-drive",
              icon_color: "#edbe57",
            },
            {
              name: "dropbox",
              url: "https://www.dropbox.com/h?role=personal&di=left_nav",
              icon: "box-seam",
              icon_color: "#80a99d",
            },
            {
              name: "photos",
              url: "https://photos.google.com/",
              icon: "photo",
              icon_color: "#db4740",
            },
            {
              name: "mega",
              url: "https://mega.nz/fm/myfiles",
              icon: "cloud-upload",
              icon_color: "#f28533",
            },
            {
              name: "onedrive",
              url: "https://onedrive.live.com/",
              icon: "brand-onedrive",
              icon_color: "#80a99d",
            },
          ],
        },
        {
          name: "stuff",
          links: [
            {
              name: "linkedin",
              url: "https://www.linkedin.com/feed/",
              icon: "brand-linkedin",
              icon_color: "#80a99d",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(saved_config ?? default_config);
// const CONFIG = new Config(default_config);
