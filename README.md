# whats-outside-api
There is one rule that must be followed… your application must follow the theme, “What’s Outside?”. You and your team are free to interpret that in any way you see fit (keep it Safe For Work, though)!

## Project Proposal
- Writeups of the design
  - What is it you are going to build and how does it fit the theme?
  - What tools will be used?
  - How long long will development of each part of the application take?
- API documentation
- UML (or similar) Database Documentation
- Wireframes for any implemented UI elements of the application

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
    - Authenticate users
	- Allow for pagination of data
	- Allow for caching of data to reduce hits to database
  - **API must also implement ONE of the following:**
    - Queueing systems
	- Web Sockets
  
## The Frontend
- Refer to wireframe for UI elements
  - **Page 1:**
    - Get started button to handle user authentication before allowing user to access the application
      - If not authenticated, user must be given an error and not allowed access to next page (where the application is)
	  - If authenticated, user can access the next page (where the application is)
  - **Page 2:**
    - 4 Cities to query
	  - User has ability to choose which city to query
	    - Can query multiple cities at once
	  - User has options of filtering with the following:
	    - Nature
		- Parks
		- Museums
		- Landmarks
		- Transportation
	  - Result Per Page? Option for pagination.
	  - Submit button to submit query
	    - Allow for caching of data to reduce hits to database
	- Results are displayed below filtering options and submit button.

