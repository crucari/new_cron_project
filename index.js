//     // index.js
//     /*global app*/ 
//     const cron = require("node-cron");
//     const express = require("express");
//     const fs = require("fs");

//     app = express();

// // schedule tasks to be run on the server   
//     cron.schedule("* * * * *", function() {
//       console.log("running a task every minute");
//     });

//     app.listen(3128);
    
    // index.js
    const fs = require("fs");
    let shell = require("shelljs");
    const express = require("express");

    app = express();

    // To backup a database
    cron.schedule("59 23 * * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
      if (shell.exec("sqlite3 database.sqlite  .dump > data_dump.sql").code !== 0) {
        shell.exit(1);
      }
      else{
        shell.echo("Database backup complete");
      }
    });
    app.listen("3128");