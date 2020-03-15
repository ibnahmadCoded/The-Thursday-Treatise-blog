export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5e6e498c63bfb83920640d4a',
                  title: 'Sanity Studio',
                  name: 'The-Thursday-Treatise-blog-studio',
                  apiId: 'c124d2e0-4fa6-428d-8362-03ccb1c18005'
                },
                {
                  buildHookId: '5e6e498c75ff99501839f3fd',
                  title: 'Blog Website',
                  name: 'The-Thursday-Treatise-blog',
                  apiId: 'ab6b393b-4fc5-47e8-9c04-29f0c8863d36'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ibnahmadCoded/The-Thursday-Treatise-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://The-Thursday-Treatise-blog.netlify.com', category: 'apps'}
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
