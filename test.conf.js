exports.config={
    maxInstances: 10,
    specs:[
       
    ],
    suites:{
        signin:['./test_scripts/Login/LoginForm.js']
    },
    host:'localhost',
    port:9515,
    path:'/',
    capabilities:[
        {
            browserName:'chrome'
        }
    ],
    framework:'mocha',
    mochaOpts:{
        ui:'bdd',
        timeout:600000
    },
    logLevel:'verbose'
}