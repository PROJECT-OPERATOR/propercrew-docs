const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Proper Crew Docs',
  tagline: '',
  url: 'https://docs.propercrew.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: '/img/favicon.ico',
  organizationName: 'propercrew-docs', // Usually your GitHub org/user name.
  projectName: 'propercrew-docs', // Usually your repo name.
  themeConfig: {
  algolia: {
      apiKey: '5998fcb17055c73c5f19113ca0b428d1',
      indexName: '대단하진 않지만 엄청난걸 검색해보세요!',

      // Optional: see doc section below

      // Optional: see doc section below
      

      // Optional: Algolia search parameters
     // searchParameters: {},

      //... other Algolia params
    },
    navbar: {
      title: 'Proper Crew',
      logo: {
        alt: '',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'home/Index',
          label: 'Home',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'plugins/Index',
          label: 'Plugin',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'bots/Index',
          label: 'Bot',
          position: 'left'
        },
        {
          type: 'doc',
          docId: 'api/Index',
          label: 'API',
          position: 'left'
        },
        {
          href: 'https://discord.projecttl.net/',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/PROJECT-OPERATOR',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        
      ],
      copyright: `Copyright ©${new Date().getFullYear()} Team Project Operator. Licensed under BY-NC-SA, Built with Docusaurus.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        lightIcon: '☀️',
      }
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          // Please change this to your repo.
          editUrl:
            'https://github.com/PROJECT-OPERATOR/propercrew-docs/tree/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
};
