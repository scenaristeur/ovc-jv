module.exports = {
  // options...
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ovc-jv/'
  : '/'
  ,
/*  pages: {
    loadShape: {
      entry: 'src/components/LoadShape.vue',
    template: 'client/public/index.html',
    },
    helloWorld: {
      entry: 'src/components/HelloWorld.vue',
     template: 'client/public/index.html',
    },
  },*/
}
