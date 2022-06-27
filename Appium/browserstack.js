exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'abhijeetkumar_Um98o5',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'K135W4uQy6tWDae8ArPi',

  updateJob: false,
  specs: ['Specs/login.Test.js'],
  exclude: [],

  capabilities: [{
    project: "First Webdriverio Android Project",
    build: 'Webdriverio Android',
    name: 'first_test',
    device: 'Google Pixel 3',
    os_version: "9.0",
    app: process.env.BROWSERSTACK_APP_ID ||  'bs://c700ce60cf13ae8ed97705a55b8e022f13c5827c',
    'browserstack.debug': true
  }],
    
  logLevel: 'info',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 20000
  }
};
