const projectList = [
  {
    name: "Prints E-Commerce",
    description:
      "Full stack e-commerce store selling travel photo prints. Built from scratch cart and shop interface, checkout powered by Stripe.",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/print.jpeg"),
    github: "https://github.com/raksozorw/oskarforprint",
    site: "https://oskar-for-print.herokuapp.com/",

    key: "0",
    stack: "React, NodeJS, Heroku, Stripe",
    improvements: "Better cart, redirects, and order fulfilment.",
  },
  {
    name: "Stock Data Finder",
    description:
      "Search, display, and save stock data. Performs search query requests for stock tickers on an API and displays basic data on a clean dashboard interface. Allows users to sign in and save a “watchlist” using Firebase.",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/stocks.jpeg"),
    github: "https://github.com/raksozorw/stockfinder",
    site: "https://stocks-cffe6.web.app/home",

    key: "1",
    stack: "React, Redux, Firebase, Material UI",
    improvements:
      "Allow stocks to be searchable by more than ticker symbol, display greater data, display ETFs and indices.",
  },
  {
    name: "Spotify Key Finder",
    description:
      "Uses the Spotify API to provide song data, such as key, tempo, and BPM. Search by song URI or access your currently playing song.",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/spotify.jpeg"),
    github: "https://github.com/raksozorw/spotify-key-finder",
    site: "https://song-key.herokuapp.com/",

    key: "2",
    stack: "React, NodeJS, Heroku",
    improvements:
      "Better sign in interface, choose from list of recently played songs.",
  },
  {
    name: "Creviston Recording",
    description:
      "Personal site for client, advertises music production services. Clean, fully functional, and launched. Utilizes Firebase for database and contact form.",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/tim.jpeg"),
    github: "https://github.com/raksozorw/creviston-recording",
    site: "https://timcreviston.com",

    key: "3",
    stack: "React, Firebase, Bootstrap",
    improvements:
      "Contract completed, however future contract could involve updating styling and improving speed of client sorting function.",
  },

  {
    name: "Recipe Sharing App",
    description:
      "Full stack MERN app. Share recipes with friends, along with photos. Includes user sign in, CRUD options on recipes, photo uploading. ",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/recipe.jpeg"),
    github: "https://github.com/raksozorw/recipe-share-full",
    site: "https://la-recette.herokuapp.com/",

    key: "4",
    stack: "React, Redux, NodeJS, Express, MongoDB, Google Cloud, Bootstrap,",
    improvements:
      "Improve photo uploader, clean up UI/UX, clean code and app architecture.",
  },
  {
    name: "To Do List",
    description:
      "Classic to-do list. CRUD operations, user sign-up/authentication, utilizes Firebase Realtime Database to store list data. Also has a smooth and pleasant interface styled by Material UI. ",
    img: require("/Users/oskarwroz/Documents/WebDev-Projects/portfoliov2/portfoliov2/src/assets/projectImages/todo.jpeg"),
    github: "https://github.com/raksozorw/firebase-todo",
    site: "https://fire-to-do-list.web.app/",

    key: "5",
    stack: "React, Redux, Material UI, Firebase.",
    improvements:
      "The ability to create more lists, share lists, improve sign-in interface, drag and drop functionality.",
  },
];

export default projectList;
