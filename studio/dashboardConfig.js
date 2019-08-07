export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5d4ad73e5ed8573e9560e741',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-linkedin-studio',
                  apiId: '298e12a2-4e6c-47dc-972c-fdd49f1e2259'
                },
                {
                  buildHookId: '5d4ad73e4f3e0f38e19d88dd',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-linkedin',
                  apiId: '95f403e9-ca8a-40f4-92e6-6a520ce16370'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dev1010/sanity-sapper-blog-linkedin',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-linkedin.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
