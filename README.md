
# Build autonomous webcomponents
npm run wc-build-shighl-onlycomp

"wc-build-shighl": "npm run build -- --target wc-async --inline-vue --name shighl ./src/components/*.vue,./src/App.vue",

(could remove --inline ?)

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
# inspiré de
https://dev.to/oxyyyyy/simple-weather-app-on-vue-js-1g20
