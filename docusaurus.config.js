// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TokuzouServerDocs',
  tagline: 'TokuzouServerDocs',
  url: 'https://docs.tokuzouserver.net',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tokuzou0829', // Usually your GitHub org/user name.
  projectName: 'tokuzouserver-docs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', 
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/tokuzou0829/tokuzouserver-docs/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TokuzouServerDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/tokuzou0829/tokuzouserver-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Welcome',
                to: '/',
              },
              {
                label: 'TokuzouServerIMG',
                to: '/TokuzouServerIMG/About-TokuzouServerIMG',
              },
              {
                label: 'TokuzouServerACC',
                to: '/TokuzouServerACC/About-TokuzouServerACC',
              },
            ],
          },
          {
            title: 'Service',
            items: [
              {
                label: 'TokuzouServerACC',
                href: 'https://acc.tokuzouserver.net/',
              },
              {
                label: 'TokuzouServerIMG',
                href: 'https://img.tokuzouserver.net/',
              },
              {
                label: 'HomePage',
                href: 'https://tokuzouserver.net/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/tokuzou0829/tokuzouserver-docs',
              },
            ],
          },
        ],
        copyright: `Copyright ?? ${new Date().getFullYear()} TokuzouServer.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
module.exports = config;
