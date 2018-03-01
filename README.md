## Background Generator

Creates a gradient background for a page, displaying the colors along with their hex numbers as CSS code.

Also using this repo to practice git branching and NPM package installation.

NOTES:
* Installed Lodash locally
* Installed Browserify globally
* `browserify main.js > bundle.js` in the terminal creates a `bundle.js` file which adds Lodash's functionality to the project.
  - Need to re-run `browserify main.js > bundle.js` every time I make changes to `main.js` in order to use Browserify functionality. For this reason, I added a script to the `package.json` file.
  - Need to change the script link in `index.html` to point toward `bundle.js`
* Beware using too many dependencies in a project. It adds a lot of files to the project.
* Using live-server
