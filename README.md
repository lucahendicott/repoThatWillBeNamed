
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)  This project is licensed under the terms of the MIT license. 

  # Mix Tape Generation

  ## Table of Contents
  * [Description](#description)
  * [Technologies & Usage](#technologies-&-usage) 
  * [Installation](#installation)
  * [License](#license)
  * [Tests](#tests)
  * [Contributions & Questions](#contributions)


  ## Description
  Mix Tape Generation is an app that allows you to search songs by track and build personalized playlists from your search results.
  It calls on the Napster API and uses GET and POST routes to retreive and add new data. CRUD functionality is implemented to create and manipulate the playlists.
  The app is backed by a MySQL database with a Sequelize ORM.
  The server for the app runs on Node and Express.

  As A music lover, I WANT to access my favorite music SO THAT I can save it to awesome playlists that I can listen to.

  ## Technologies & Usage
  *  Third party API, HTML, CSS, Node, JavaScript, MySQL, Sequelize, Express, and other npm dependencies. There are various back end api routes that connect end points for creating, updating and deleting playlists and songs. All these end points were tested through postman and functioning properly. The updating a playlist name function wasn't quite implemented on the front end. Definietely working on that for future develpmonet.

  All of the front end functionality is in app.js under the public folder. We have various functions fetching the api's from the back end. When the user types a playlist name and clicks "create". That fetches the create playlist api from the back. When a User enters a keyword and clicks "search", that generates search results from napsters music API. Each result returns as a button that can be clicked to save to your playlist. When the songs are clicks that calls the create songs api from the back end and stores the song into the DB with a PlaylistID that matches the playlist it was saved to. 

  Once songs are in the current playlist. Users can click the songs there to delete them from the playlist and the DB. This calls the delete songs api from the back end, also using a remove parent node on the front end js to remove the element from the page as well. 

  Once a playlist or multiple is saved, the user can click on "saved playlists" this will populate the saved playlists in the DB to the page as buttons. Each playlist can be clicked to reveal the songs inside. Those songs are buttons as well, when they are click they are deleted from the DB, but the remove parent node on the front end to remove the button is buggy. Still working on getting those removed from the screen when clicked


  ## Installation
  App runs as is in the browser. No installs or downloads necessary.

  ## License
  [![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)  This project is licensed under the terms of the MIT license.

  ## Tests
  No tests

  ## Contributions
  Group Project by Team Alpha Flight. Contact any group members for further questions regarding the app and its functionality. 
  
  Lucah Endicott 
  * Email: lucahdavid88@gmail.com
  * GitHub Profile: [https://github.com/lucahendicott]
  * GitHub Username: lucahendicott

  Francisco Rones
  * Email: iNinorones@gmail.com
  * GitHub Profile: [https://github.com/francisN21]
  * GitHub Username: francisN21

  Alexis
  * Email: lex4736@gmail.com
  * GitHub Profile: [https://github.com/lex4736]
  * GitHub Username: lex4736

  Lara Zegart
  * Email: laraezegart@gmail.com
  * GitHub Profile: [https://github.com/lzegart]
  * GitHub Username: lzegart

  