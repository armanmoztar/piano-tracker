## Piano-Tracker

This application allows users to track their piano sessions by inputting dates, description, and duration. The user can keep track of their activity by viewing the data they have entered in order to see how much time they have spent on the piano.


### Functionality:

- Utilized the MERN stack (MongoDB, Express, React, Node) to create a full-stack application.
- Tied the backend of the application to MongoDB Atlas where our database and cluster is stored
- Created a schema for the database using the [mongoose](https://mongoosejs.com/) library for User and Piano Sessions
- Created an Express server for the backend, attached the cors and express.json middleware (since we will be sending and receiving json), and connected it to the database
- Added API endpoints routes to communicate with the database using incoming HTTP, GET, and POST requests
- Used Postman to test the API endpoint routes
- Installed Axios library to send HTTP requests to the backend allowing to create new users and piano sessions in the database

### To Run Application

First, you would need to create an account on MongoDB Atlas and retrieve your MongoDB credentials. You need to connect your cluster to your application by creating a `.env` file in the server directory of your application.

In your .env file it should look like this:
> ATLAS_URI= mongodb+srv://database:yourpassword@usercluster.xiiyv.mongodb.net/?retryWrites=true&w=majority

*Make sure you have added your ip address to the MongoDB cluster in the 'Network Access' section of the cluster's dashboard.*


Once that is set up, cd into the server directory and type the following:

```
cd server
npm install
nodemon index
```
This will install all the dependencies and start the server.


Finally, to run the react app, go back into the root directory of the application and type:

```
npm start
```

This will start the react app and now you can log and track your piano sessions and activities.
