require("dotenv").config();

const siteMetadata = {
  title: `Mohammed Shahoe`,
  name: `Mohammed Y. Shahoe`,
  siteUrl: `https://mohammed.shahoe`,
  description: `Welcome to Mohammed Shahoe's Official Website`,
  hero: {
    heading: `Welcome`,
    maxWidth: 652,
  },
  social: [
    {
      name: "facebook",
      url: "https://facebook.com/mohammedshahoe"
    },
    {
      name: "twitter",
      url: `https://twitter.com/mshahoe`,
    },
    { name: "github",
      url: `https://github.com/muyabb`,
    },
    { name: "linkedin",
      url: `https://www.linkedin.com/in/mohammedshahoe`,
    },
    {
      name: `mailto`,
      url: `mailto:muyabb@yahoo.com`,
    },
  ],
};

const plugins = [
  {
    resolve: "@narative/gatsby-theme-novela",
    options: {
      contentPosts: "content/posts",
      contentAuthors: "content/authors",
      rootPath: "/",
      basePath: "/",
      authorsPage: true,
      mailchimp: true,
      sources: {
        local: true,
        contentful: false,
      },
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Mohammed Shahoe`,
      short_name: `MShahoe`,
      start_url: `/`,
      background_color: `#fff`,
      theme_color: `#fff`,
      display: `standalone`,
      icon: `src/assets/favicon.png`,
    },
  },
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-161595051-1",
    },
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
      "https://mohammedshahoe.us10.list-manage.com/subscribe/post?u=98db65742b16f1ee8abc7508b&amp;id=fb2f994628",
    },
  },
];

module.exports = {
  siteMetadata,
  plugins,
};
