# Setting Up terria

## Prerequisites
TerriaJS can be built and run on almost any macOS, Linux, or Windows system. The following are required to build TerriaJS:

- The Bash command shell. On macOS or Linux you almost certainly already have this. On Windows, you can easily get it by installing Git for Windows. In the instructions below, we assume you're using a Bash command prompt.
- [Node.js](https://nodejs.org/en/) v8.0 or later. v10.x is also known to work. You can check your node version by running node --version on the command-line.
- npm v6.0 or later. npm is usually installed automatically alongside the above. You can check your npm version by running npm --version.

## Building and running Terria locally
Open a shell and run:

```
cd foss4g2019
npm install && npm run gulp build && npm start
```

Then navigate to `http://localhost:3001` and you should see your map!
