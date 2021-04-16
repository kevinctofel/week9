const listoftodos = require("./STORE");
const express = require("express");
const cors = require("cors");
const PORT = 8080;
const app = express();

app.get("/todos", cors(), function (req, res) {
      res.status(200).send(listoftodos);
});

app.get("/health", function (req, res) {
   res.status(200).send("<h3>Server is healthy</h3>")
});

app.get("/delete"), cors(), function (req, res) {
   res.status(200).send("<h3>Delete page, eventually will show todos - 1</h3>")
}

app.listen(PORT, () => {
   console.log(`Server is listening on port ${PORT}`)
});









/*

 HOMEWORK

  /server

  1. create a route for editing posts (complete and edit text)
  2. create a route to delete a post
  
  /client

  1. Add appropriate fetch requests to make your todo app to use data from our server
     whenever we need updated data: adding, editing or deleting or initial read

     Example:

        a. initial read - do a fetch
        b. add a post - get data from user, do a post request, have the server add to server todos object
           and return and updated todos array
        c. edit a post (complete or edit text) - get updates from user, do a put request, have the server
           update the todos object and return back the updated todos array
 */

// app.listen on port 8080 (client is running on port 3000)


// setup a script in package.json to execute nodemon to our server file