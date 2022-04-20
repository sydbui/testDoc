const globalNavbar = [
  { text: 'Home', link: '/' },
  { text: 'Admin Guide', link: '/admin/' },
  { text: 'Developer Docs', link: '/developer/' },
  { text: 'Design Prototypes', link: '/design' },
  {
    text: 'Firebase',
    items: [
      {
        text: 'Development',
        link:
          'https://airtable.com/invite/l?inviteId=invesIqGWvEme1unA&inviteToken=d2b75868ccb369533de5ecc1856f5b51ce59a1f8634a5e63f269b49ae6c7c829',
      },
    ],
  },
  {
    text: 'GitHub',
    items: [
      {
        text: 'Title',
        link: 'https://github.com/calblueprint/',
      },
      {
        text: 'Title [Delete if only one Repo]',
        link: 'https://github.com/calblueprint/',
      },
    ],
  },
];

const adminSidebar = [
  {
    title: 'Admin Guide',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/admin/subtitle',
    ],
  },
];

const devSidebar = [
  {
    title: 'Developer Guide',
    collapsable: false,
    sidebarDepth: 2,
    children: [
      '/developer/subtitle',
    ],
  },
  {
    title: 'Another Subthing',
    sidebarDepth: 2,
    children: [
      ['/developerSub/', 'Introduction'],
      '/developerSub/subtitle',
    ],
  },

];

module.exports = {
  title: 'Documentation Boiler Plate',
  description:
    "Documentation for the projects developed by @calblueprint for [NPO]",
  // head: [
  //   [
  //     'link',
  //     {
  //       rel: 'icon',
  //       type: 'image/png',
  //       href: '/logo.png',
  //     },
  //   ],
  // ],
  themeConfig: {
    // Git repo and edit links
    repo: 'calblueprint',
    docsDir: 'docs',
    docsBranch: 'docs',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    lastUpdated: 'Last Updated',
    smoothScroll: true,
    nav: globalNavbar,
    sidebar: {
      '/admin': adminSidebar,
      '/developer': devSidebar,
    },
  },
  plugins: [
    [
      'vuepress-plugin-container',
      {
        type: 'rightlink',
        defaultTitle: '',
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        before: (info) => `<div class="callout"><p class="title">${info}</p>`,
        after: '</div>',
      },
    ],
  ],
};
