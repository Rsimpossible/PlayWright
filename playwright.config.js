const  { devices }  = require('@playwright/test');
const { report } = require('process');


const config = {
  testDir:  './tests',
  timeout:  40 *10000, //timeout for overall test
    expect  : {
      timeout:  50000, //timeout for assertion
    },

    reporter: 'html',
    use : {

      browserName   : 'chromium',
      headless : false,
      screenshot : 'on', 
      trace : 'on' //'retain-on-failure' can be used only for failed test cases
    }
  }

module.exports = config