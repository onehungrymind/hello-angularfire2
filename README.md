## RESTful Angular 2 application
A RESTful master-detail application built using Angular 2.

## Dependencies
- You must have `node v >= 4.0` and `npm` installed (via `brew install node` or [NodeJS.org](https://nodejs.org/en/));
- `npm i -g typings webpack-dev-server webpack rimraf json-server`
- If you have already installed `typings`, make sure to update it to `1.x`

### Getting Started

There are two main parts to this application. The first is the server, for which we are using `json-server` to simulate a REST api. The second part is the Angular 2 application which we will use `webpack-dev-server` to display.  

To get started run the commands below.

```bash
$ git clone https://github.com/onehungrymind/fem-ng2-rest-app.git
$ cd fem-ng2-rest-app
$ npm install
$ typings install
$ npm start
```

Then navigate to [http://localhost:3001](http://localhost:3001/#/items) in your browser.
