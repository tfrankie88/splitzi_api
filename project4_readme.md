# Tim Frankie: Project 4 - Splitzi #
_____

### WDI Project #4: Final Project ###

This final project is a menu database designed to assists in diner's payment methods

1.) **Explanations of the technologies used**

- This project used<br>
• **[css]**<br>
general style of the site<br>
• **[javascript]**<br>
language to implement the fundimental logic of the site
• **[EXPRESS]**<br>
was used to implement the routing structure of the backend<br>
• **[node.js]** was the JavaScript environment for the communication between server and & application<br>
• **[CSS]**<br>
gave the style and organized the layout/aesthetics of the site<br>
• **[REACT-JSX]**<br>
is a feature-rich JavaScript environment which allows for single page functionality<br>
• **[React-Slingshot]**<br>
out of the box React environment for rapid application development<br>
• **BROWSER** developer tools in both **[Google Chrome]** and **[Apple Safari]**, for debugging logic commands and making adjustments prior to changing the source code.<br>
• **[PSQL]** building database<br>
• **[npm packages]** modules for simplifying large chuncks of complex code
*body parser* - pulls from the massive amount of meta data,
*morgan* - logger,
*path* - grabs local static files,
*pg-promise* - simplifies communication with postgres
• **[Heroku]** web application deployment and database<br>

2.) **Approach Taken**
*backend*
- plan/build schema
- set routes in api
- build models
- test routes and models
  - back end consists of two tables in splitzi database<br>![schema]
  **table 1:** restaurant/user<br>
  **table 2:** menu connected to restaurant with restaurant_id
  - search for menu was conducted in a one to many
*front end*
- access React Slingshot
- build layout and components
- connect fetch calls for post and get coveralls

***Thank you all who helped***.<br>

3.) **User Stories**
- their are essentially two user stories
- **restaurant user**
  - a restaurant owner can..
    • create a profile
    • securely log in via bcrypt hash syncing and json web tokens
    • add menu items and their price to database associated to menu
    • log out
- **restaurant patron**
  - a patron does not need to log in to access the service
  - a patron can search for restuarants and pull a restaurants menu as long as it exists in the database



4.) **Wireframe**<br>
![wireframe1]
![wireframe3]
![wireframe2]
![wireframe4]

5.) **How To Use**

Using simple clicks and hovers a user can navigate the layout and utilize the full crud application, on both mobile and desktop device.

6.) **Unsolved Problems**
- I wouldn't call the next phase in this build problems as much as next steps. In ordet to have the successful application that I dream to build I need to control react more and utilize it's states better. Once I can accomplish that I want to build out he components and implement the math logic of dividing menu items and associating each diner to their respected item or item fraction price.

- I also found a great API for searching taxes associated to the state that the restaurant is located in. Because each restaurant was asked to give their state and postal code in signup those parameters can be used in the [API] fetch call along with the key that I acquired, that will be be divided and added to each patron in the final calculation.

[CSS]: https:en.wikipedia.org/wiki/Cascading_Style_Sheets
[JavaScript]: https://www.javascript.com/
[jQuery]:https:jquery.com/
[Google Chrome]:https://developers.google.com/web/tools/
[Apple Safari]:https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html
[node.js]:https://nodejs.org/en/
[REACT-JSX]:https://facebook.github.io/react/
[React-Slingshot]:https://github.com/coryhouse/react-slingshot
[PSQL]:https://www.postgresql.org/
[express]:https://www.npmjs.com/package/express
[bootstrap]:http://getbootstrap.com/
[npm packages]:https://www.npmjs.com/
[heroku]:heroku.com
[schema]:http://i.imgur.com/TY7pfB0.png
[wireframe1]:http://i.imgur.com/WyIlLzu.png
[wireframe3]:http://i.imgur.com/DUtsoUb.png
[wireframe2]:http://i.imgur.com/VIXduK7.png
[wireframe4]:http://i.imgur.com/OaoArqZ.png
