exports.config={
    maxInstances: 10,
    specs:[
       
    ],
    suites:{
        
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