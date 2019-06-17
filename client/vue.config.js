module.exports = {
  pages: {
    index: {
      // entry for the page
      entry: 'src/pages/welcome/main.js',
      // the source template
      template: 'public/welcome.html',
      // output as dist/index.html
      filename: 'welcome.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'welcome Page',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
    },
    // when using the entry-only string format,
    // template is inferred to be `public/subpage.html`
    // and falls back to `public/index.html` if not found.
    // Output filename is inferred to be `subpage.html`.
    
  }
}