# whats-outside-api
Using all of the skills you’ve developed over the last two trimesters, you are now tasked with creating your very own ***Custom API from scratch!*** This includes creating your own database with custom scripts that setup the database, creating custom datasets to populate your database with, handling the ETL process, creating the API (required: user auth, pagination, caching, queuing systems VS web sockets), and creating the frontend.

There is only rule that must be followed… your application must follow the theme, ```“What’s Outside?”.``` You and your team are free to interpret that in any way you see fit (keep it Safe For Work, though)!

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
	  - `work in progress, may output to page or console`

