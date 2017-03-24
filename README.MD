
# Summary

Social Business Starter is a Kickstarter Clone created by Lucian Stroie. It features social businesses listed as projects each with multiple pledge levels that users can choose to back. Take a look at the live site at SocialBusinessStarter.com - you can register as a new user and upload a profile picture or you can use the guest log-in button.

[Live Here] (http://www.socialbusinessstarter.com/)

![](https://giphy.com/gifs/l1KVajetjNXx9fhiE.gif)


# Structure

### Front end

Social Business Starter is a single page app, and the front end is built with React and Redux.

### Back end

Social Business Starter was built using Ruby on Rails with a postgreSQL database. All database queries are made using AJAX, and all responses are JSON objects constructed with jbuilder.


# Features

* Authentication
  * Custom backend authentication. All queries return data that corresponds to the proper user.
  * User can log in from any page in the app. Clicking a pledge level toggles either editing or creates a contribution depending on if the user signed in is the owner of the project or not.
* Create and edit projects with multiple pledge levels.
* Contribute to one of multiple pledge levels with a confirmation button that is rendered on the same page.


# Technologies Used

* React.js
* Redux
* Ruby on Rails
* jBuilder
* PostgreSQL
* Heroku
* BCrypt for authorization
* Paperclip to store the images users may add to any suggestion, using Amazon Web Services
* Figaro to store AWS keys
