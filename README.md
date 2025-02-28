# portfolio

This application was generated using JHipster 8.9.0, you can find documentation and help at [https://www.jhipster.tech/documentation-archive/v8.9.0](https://www.jhipster.tech/documentation-archive/v8.9.0).

## Project Structure

## Development

The build system will install automatically the recommended version of Node and npm.

We provide a wrapper to launch npm.
You will only need to run this command when dependencies change in [package.json](package.json).

```
./npmw install
```

We use npm scripts and [Webpack][] as our build system.

Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

```
./mvnw
./npmw start
```

Npm is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `./npmw update` and `./npmw install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `./npmw help update`.

The `./npmw run` command will list all the scripts available to run for this project.

### PWA Support

JHipster ships with PWA (Progressive Web App) support, and it's turned off by default. One of the main components of a PWA is a service worker.

The service worker initialization code is commented out by default. To enable it, uncomment the following code in `src/main/webapp/index.html`:

```html
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(function () {
      console.log('Service Worker Registered');
    });
  }
</script>
```

Note: [Workbox](https://developers.google.com/web/tools/workbox/) powers JHipster's service worker. It dynamically generates the `service-worker.js` file.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

```
./npmw install --save --save-exact leaflet
```

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

```
./npmw install --save-dev --save-exact @types/leaflet
```

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:
Note: There are still a few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

## Building for production

## Testing

### Client tests

Unit tests are run by [Jest][]. They're located near components and can be run with:

```
./npmw test
```

[JHipster Homepage and latest documentation]: https://www.jhipster.tech
[JHipster 8.9.0 archive]: https://www.jhipster.tech/documentation-archive/v8.9.0
[Using JHipster in development]: https://www.jhipster.tech/documentation-archive/v8.9.0/development/
[Using Docker and Docker-Compose]: https://www.jhipster.tech/documentation-archive/v8.9.0/docker-compose
[Using JHipster in production]: https://www.jhipster.tech/documentation-archive/v8.9.0/production/
[Running tests page]: https://www.jhipster.tech/documentation-archive/v8.9.0/running-tests/
[Code quality page]: https://www.jhipster.tech/documentation-archive/v8.9.0/code-quality/
[Setting up Continuous Integration]: https://www.jhipster.tech/documentation-archive/v8.9.0/setting-up-ci/
[Node.js]: https://nodejs.org/
[NPM]: https://www.npmjs.com/
[Webpack]: https://webpack.github.io/
[BrowserSync]: https://www.browsersync.io/
[Jest]: https://jestjs.io
[Leaflet]: https://leafletjs.com/
[DefinitelyTyped]: https://definitelytyped.org/
