# Goal
Async web components using Vuejs/view. To represent the new world. Ex composants representing :

activitystreams/ActivityPub .
Holacratie / sociocratie... And many other things

# DEMO
https://scenaristeur.github.io/ovc-jv/demo.html

# What is the next action to do ?
https://github.com/scenaristeur/ovc-jv/projects/1#column-10196291

# Build autonomous webcomponents
Build all with ``` npm run wc-build-all ``` then ``` npm run wc-test ``` to see it live !



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

### BUILD SAVE & PUBLISH

```
npm run git -- "build wc in subfloders"
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



create subbranch with dist folder
- comment the dist folder in the .gitignore file

```
git add dist -f && git commit -m "Initial dist subtree commit"
```

- build & publish to gh-pages

```
npm run build && git add .
git commit -m "my modif"
git push && git subtree push --prefix dist origin gh-pages

```
