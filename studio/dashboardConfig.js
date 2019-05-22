export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ce4becc56241db73a705c3c',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-piip4s6a',
                  apiId: 'd24cf4a3-d3ce-44e8-9941-1d42e1f26f3d'
                },
                {
                  buildHookId: '5ce4becd43d9952508a94f5c',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-urger15y',
                  apiId: '7275c46e-b99d-4a83-97b7-e44700b8335a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fpgdev/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-urger15y.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
