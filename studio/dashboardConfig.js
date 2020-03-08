export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5e653badd4340b6ad6aac66a',
                  title: 'Sanity Studio',
                  name: 'DerpyOwlProductionWebSite-studio',
                  apiId: '35bc2ccb-7819-476a-bba3-bec39560af5c'
                },
                {
                  buildHookId: '5e653bad7e060083e2e02e4a',
                  title: 'Landing pages Website',
                  name: 'DerpyOwlProductionWebSite',
                  apiId: '1d110193-a47a-4c29-9543-ff9b853baf7c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/WiSiHe/DerpyOwlProductionWebSite',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://DerpyOwlProductionWebSite.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
