module.exports = {
  title: 'Yugawa',
  tagline: 'Hi, I\'m Jeremy. Nice to meet you!',
  url: 'https://yugawa.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'jeremyhager', // Usually your GitHub org/user name.
  projectName: 'jeremyhager.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Yugawa',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
	{to: 'aboutMe', label:'About Me', position:'right'},
        {
          href: 'https://github.com/jeremyhager/yugawa-website',
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
              label: 'Internal.Virtnet Overview',
              to: 'docs/',
            },
            {
              label: 'Linux Sysadmin Guide',
              to: 'docs/nixadmin-guide/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jeremy Hager. Built with Docusaurus.`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      apiKey: 'apiKey',
      indexName: 'yugawa-website',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          //homePageId: 'internal-virtnet-overview',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/jeremyhager/yugawa-website/edit/master',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/jeremyhager/yugawa-website/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
