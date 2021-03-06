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
      apiKey: '406ff157c4ff357db7481338604f745f',
      indexName: 'coretechonomy-docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: see doc section below
      appId: 'SM9YS96ZVC',

      // Optional: Algolia search parameters
      searchParameters: {},

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
