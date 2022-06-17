# Project-2-Repo
Title:
Dream and Drive

Premise: 

Everybody has their dream cars, whether its a 911 GT3 Rs or a Range Rover, everyone has something that catches their eye.
This app will store the data to their specific user session. Maybe one day you'll get rich and have your list saved to know what cars to buy!

The User Story:
Users will be able to sign up ad create an account
Users can select and store cars that they want in their respective accounts and be able to edit and delete certain info.
Users can create new cars specific to them


The Wireframes:
 

<img src='https://i.imgur.com/57Bzal7.png'>

The ERD: 

<img src='https://i.imgur.com/JTNNwfe.png'>


Route Table:

HTTP Method<br>(Verb) | Path/Endpoint/URI  | CRUD Operation | Typical<br>Controller Action |
-----------|------------------|------------------|:---:|
GET     | /                    | path to home screen for log in or signup | home |
GET     | /manufacturers       | Shows index of all manufacturers | index |
POST    | /manufacturers       | Create a new manufacturer | create |
GET     | /manufacturers/:id   | show cars by manufacturer  | show |
PUT     | /manufacturers/:id   | Update specified manufacturer  | update |
GET     | /manufacturers/:id/cars/:car_id  | Delete specified manufacturer | delete |
DELETE  | /manufacturers/:id   | Delete specified manufacturer | delete |
DELETE  | /manufacturers/:id   | Delete specified manufacturer | delete |
DELETE  | /manufacturers/:id   | Delete specified manufacturer | delete |
DELETE  | /manufacturers/:id   | Delete specified manufacturer | delete |

Technologies Used:

CSS
JavaScript
Node.js
Liquid
MongoDB
Mongoose
Express

How To Use:


MVP Requirements:

Be able store data in correct places and specific to user instances.

Have functioning home page, index page, show page, edit, and new page

Pages update, edit, delete , create correctly

All routes are correctly linked to respective pages, and data.


Stretch goals / ICE BOX: