const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Core Techonomy, LLC',
  tagline: 'At Core Techonomy, our focus is how technology enables your business.',
  url: 'https://docs.coretechonomy.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/coretechonomy.ico',
  // stylesheets: [
  //   'https://fonts.googleapis.com/icon?family=Material+Icons',
  // ],
  organizationName: 'coretechonomy', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Core Techonomy',
      logo: {
        alt: 'My Site Logo',
        src: 'img/coretechonomy.ico',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/coretechonomy/docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      // The application ID provided by Algolia
      appId: '6F81LOD5IN',

      // Public API key: it is safe to commit it
      apiKey: 'a9cfb0574685ab9d1c45c5d9e3baa2b1',

      indexName: 'coretechonomy-docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      //... other Algolia params
    },
    footer: {
      style: 'dark',
      links: [
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a target=blank href="https://coretechonomy.com">Core Techonomy, LLC</a>`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/coretechonomy/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/coretechonomy/docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
