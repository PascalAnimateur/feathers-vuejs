# feathers-vuejs

> Feathers / Vue.js 2.0 / MongoDB full-stack boilerplate.

## About

This project uses [Feathers](http://feathersjs.com) and [Vue.js](http://vuejs.org/) to provide an open source, full-stack boilerplate for building real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Clone or fork this repo and install dependencies
    
    ```
    git clone https://github.com/PascalAnimateur/feathers-vuejs.git
    cd feathers-vuejs
    npm install
    ```

3. Start your app
    
    ```
    # Development
    npm start
    
    # Production
    npm run postinstall
    HOST=localhost PORT=3030 MONGODB_URI=mongodb://localhost:27017/FeathersVuejs npm start --prod
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g feathers-cli             # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers generate model                 # Generate a new Model
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

While waiting for the official Vue.js 2.0 documentation, starter resources can be found [here](https://github.com/vuejs/vue/wiki/Vue-2.0-Beta---Starter-Resources). 

## Changelog

__0.1.1__

- Initial Vue.js / vuex / vue-router frontend
- Webpack development (HMR) / production configuration
- Initial authentication vuex module with local auth strategy

__0.1.0__

- Initial Feathers / MongoDB application
- Configurable HOST, PORT, MONGODB_URI and FEATHERS_AUTH_SECRET in config/production.json

## License

Copyright (c) 2016

Licensed under the [MIT license](LICENSE).
