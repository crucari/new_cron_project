    // index.js
    /*global app*/ 
    const cron = require("node-cron");  //task scheduler in JS for node.js
    const express = require("express"); //powers the web server
    const fs = require("fs"); //node file systme module 

    app = express();

//deleting the log file from the server on the 21st of every month 
  
      cron.schedule(" * * 21 * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
      fs.unlink("./error.log", err => {
        if (err) throw err;
        console.log("Error file succesfully deleted");
      });
    });

    app.listen("3128");
    

//cron-jobs-node 