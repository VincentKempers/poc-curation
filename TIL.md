# Today I Learned

Here all all the findings and things I Learned while doing the courses and making the product.
So i can have this all in one place. Here i can show my findings and actually show the progress of what I made.

## Summary

- [VueJS](##VueJS)
  - [Setup](###Setup)
  - [Data](###Data)
  - [Computed](###Computedp)
  - [Watch](###Watch)
  - [Method](###Method)

## VueJS

You can start the VueJS by starting up a node enviroment and installing the CLI `npm install vue-cli`. You can test out and use VueJS via an package in your html by adding `<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>`. But to have more control install vue via `npm` and use the `vue-cli` and vue packages.

### Setup

`npm` node package manager will download the vue js and vue-cli.

### Data

`Data: {}` is the object that can store data. The data can store variables and functions that is directly and immediatly accessible.

### Computed

`Computed: {}` is mostly stored for the functions that will run when triggred. Computed are mostly used for functions that needs to be "hidden".

### Watch

`Watch: {}` is used for getting data or doing things simultaniously on user interactions. Typing in a search field that searches in the meantime for API results will be more accesible via watch. Then lets say an computed.

### Method

`Method: {}` you can store functions that run immediatly and most of the time they run immediatly. You can do things immediatly.

## Hooks

suprisingly didn't learn anything about hooks. Or Webhooks for that matter. I guess I picked the wrong tutorials :laugh:

### beforeCreate

Before instance initialization. (will run immediatly)

### Created

Reactive properties configured; instance not yet mounted. (will run immediatly)

### beforeMount

Template compiled; ready to be inserted in the DOM. (will run immediatly/ instance)

### Mounted

Template inserted in DOM, replacing the "el" element. (will run immediatly/instance)

### beforeUpdate

Data updated; update pending. (will run immediatly/ _when value is set_)

### Updated

Re-rendered to reflect changes. (will run immediatly/ _when value is set_)

### beforeDestroy & destroy

when `vm.$destroy()` is called. Watchers and event handlers removed; no reactivity.

## vue CLI and Webpack

Advantages over single file components

1. Syntax highlighting for HTML
2. Modern JavaScript (ES6 and beyond) support (it doesn't when you use the CDN package)
3. Component-specific (scoped) CSS
4. hot module replacement with webpack

### webpack

With the help of vue-loader you can bundle all the vue files in one .js

Webpack is mostly needed to render all the files

### vue-cli

can help us with the webpack configuration. This cli shown in the lynda.com course is on version 2. So i learned in the meantime how vue-cli 3 works and you can find the configuration [here](application/hello-world).
