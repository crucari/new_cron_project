    // index.js
    /*global app*/ 
    /*global cron*/ 
    const fs = require("fs");  
    let shell = require("shelljs"); 
    const express = require("express"); 
    
    app = express();

//deleting the log file from the server on the 21st of every month 
  
      cron.schedule("59 23 * * *", function() {
      console.log("---------------------");
      console.log("Running Cron Job");
        if (shell.exec("sqlite3 database.sqlite .dump > data_dump.sql").code !== 0) {
        shell.exit(1);
      }
      else{
          shell.echo("Database backup completed"); 
      }
      });

    app.listen("3128");
    