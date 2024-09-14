import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '62a'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '495'),
    exact: true
  },
  {
    path: '/blog/authors/extraskilled-56',
    component: ComponentCreator('/blog/authors/extraskilled-56', '7d1'),
    exact: true
  },
  {
    path: '/blog/welcome-blog',
    component: ComponentCreator('/blog/welcome-blog', 'b40'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/test',
    component: ComponentCreator('/test', '78b'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd34'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5ca'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '9e8'),
            routes: [
              {
                path: '/docs/category/gwin-compiler',
                component: ComponentCreator('/docs/category/gwin-compiler', '5b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/gwin-compiler---headers',
                component: ComponentCreator('/docs/category/gwin-compiler---headers', 'e9e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/gwin-compiler---intro',
                component: ComponentCreator('/docs/category/gwin-compiler---intro', '94c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gwin-compiler/Headers/intro',
                component: ComponentCreator('/docs/gwin-compiler/Headers/intro', 'a2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gwin-compiler/Intro/',
                component: ComponentCreator('/docs/gwin-compiler/Intro/', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gwin-compiler/Intro/installation',
                component: ComponentCreator('/docs/gwin-compiler/Intro/installation', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/gwin-compiler/make-a-c-program',
                component: ComponentCreator('/docs/gwin-compiler/make-a-c-program', 'b55'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '61d'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2e1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
