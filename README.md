# whats-outside-api
Using all of the skills you’ve developed over the last two trimesters, you are now tasked with creating your very own ***Custom API from scratch!*** This includes creating your own database with custom scripts that setup the database, creating custom datasets to populate your database with, handling the ETL process, creating the API (required: user auth, pagination, caching, queuing systems VS web sockets), and creating the frontend.

There is only rule that must be followed… your application must follow the theme, ```“What’s Outside?”.``` You and your team are free to interpret that in any way you see fit (keep it Safe For Work, though)!

## Production
While developing this application, I encountered a problem where my ```react-app``` was restricted to ```import```,
and my ```express server``` was restricted to ```require```. I know of ```babel``` and it's capabilities, but due to the deadline
of the project and my lack of experience with it, I decided to take my own approach instead.

**To run the application as intended, follow the instructions below:**
- Clone the repository (This will be the working directory for ONLY our express server)
  - ```git clone https://github.com/tayloradam1999/whats-outside-api.git```
  - Move into working directory
    - ```cd whats-outside-api```
	- (You can rename this directory to whatever makes you think '*express server*, not *react app*!')
- Setup the Database
  - Run the script that installs postgresql and creates the database
    - ```./scripts/installPostgreSQL```
  - Run the script that creates the tables
	- ```sudo -u postgres psql``` - Enter postgres cli
	- ```\i scripts/setupDatabase.sql``` - Execute sql script
	- ```\q``` - Quit postgres cli
  - Run the script that handles the ETL process
    - ```Python3 ./scripts/pandasETL.py```
- Before installing any dependencies, delete ```react-app``` from the working directory
  - ```rm -rf react-app```
- Install the dependencies for our express server
  - ```npm install```
- Start the express server
  - ```npm run devStart```

*Now that our express server is running, we can create another working directory for our react application.*
- Clone the repository again, but make sure the previous directory does not have the same name as the new directory
  - ```git clone https://github.com/tayloradam1999/whats-outside-api.git```
  - Move into working directory
	- ```cd whats-outside-api/react-app```
- Install the dependencies for our react application
  - ```npm install```
- Start the react application
  - ```npm start```
- Wait for text to appear in window and press *Get Started* to continue

## Project Proposal
- **Writeups of the design**
  - What is it you are going to build and how does it fit the theme?
  - What tools will be used?
  - How long will development of each part of the application take?
- **API documentation**
- **UML** (or similar) **Database Documentation**
- **Wireframes** for any implemented UI elements of the application

## The Backend
- **Setup Database**
  - I have chosen ```PostgreSQL``` for this application
  - Create custom ```PostgreSQL``` scripts to install database
- **Create dataset for the application**
  - Custom ```CSV``` files with format of previously written UML database documentation
- **Finish Database Setup**
  - Create custom ```PostgreSQL``` scripts to create tables to hold data from dataset
- **ETL process**
  - Now that our database is setup, we can start importing data into our database
    - Create custom ```python``` script using ```pandas``` to import data into our database from CSV files
- **Create API**
  - I have chosen ```Express``` for this application
  - **API must do the following:**
    - [Authenticate users](https://www.youtube.com/watch?v=Ud5xKCYQTjM)
	- Allow for pagination of data
	- Allow for caching of data to reduce hits to database
  - **API must also implement ONE of the following:**
    - Queueing systems
	- [Web Sockets](https://www.youtube.com/watch?v=ZKEqqIO7n-k)

## The Frontend
- I have chosen ```React``` and ```Material UI``` for this application
  - **App-header**
    - Scrolling text welcoming user to application
    - Get started Material UI button
	  - Button should scroll user down to app-body
  - **App-body**
    - A row of buttons indicating cities to query
	  - User can choose 0, 1, or many cities
	- A 2nd row of buttons indicating filters to query with
	  - User can choose 0, 1, or many filters
	- Output of query results
	  - Output is in new h1 under app-body
