// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Everyone Plays the Same Song - Covers Project',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './blog/*.md',
        typeName: 'Post',
        remark: {
        },
        refs: {
          tags:{  
            typeName: 'Tag',
            route: '/tags/:id',
            create: true
          }
        }
      }
    },
    // {
    //   use: `gridsome-plugin-netlify-cms`,
    //   options: {
    //     publicPath: process.env.CMS_PUBLIC_PATH
    //   }
    // },
    // {
    //   use: '@gridsome/plugin-google-analytics',
    //   options: {
    //     id: process.env.GOOGLE_ANALYTICS_KEY
    //   }
    // }
  ]
}
