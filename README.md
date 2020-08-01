# Documentation

## Basic Layout and Navigation
* This is a single page React Web App: Multiple routes have been configured using __react-router-dom__

* Index page allows the instructor to navigate to either the __create__ route or __evaluate__ route

* Create route has multiple forms where the Task Name, task Description and Task Image can be filled and uploaded.

* Evaluate route lists all the tasks created

* Clicking on any of the tasks allows instructor to navigate to the sub route

* The subroute lists all the submissions and provides a rating counter which can be used to rate each submission

## How to run
* The file includes all the resources required to run this web-app except the **node_modules**
* The node modules can be installed by running **npm install** in the root folder(for backend dependencies) and then inside the client folder(for react dependencies) 
* Then the application can be run by executing **npm run dev** in the root folder. It should be up and running since I have used concurrently.
* If there are any difficulties, please feel free to contact me.

## Assumptions and Choices
* The CSS was kept to a minimum, partly due to the time restraint.
* Since this was a frontend assignment, the questionair instructed that there was no need for a CMS like Contentful as of yet and also because I had limited time, I decided to keep all the **ratings data assigned by instructor to students** in the state which means it'll be lost once the browser is refreshed.
* __If this is not what was wanted then I'd be happy to put in the work and add the required features.__ 

## Create route
* This route is the one which is supported by a basic back-end
* The instructor can enter the task name, description and upload an image here
* Once the upload button is clicked the image gets uploaded to the ./client/public/uploads folder
* The rest of the details about this upload and the upload path is added to state so that it can be viewed inside the evaluate section of the app
* On successfull upload a message is shown as well

## Evaluate route
* All the tasks and submissions are rendered using the the __Array.prototype.map__ function
* For the sake of simplicity and lack of presence of backend, all the data rendered is available locally and is imported and added to the state
* The state is managed using the context API