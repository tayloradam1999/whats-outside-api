-- language: sql for postgres
--
-- SQL script that sets up the database for the Whats-Outside-API.
--
-- After your postgres database is created through installing PostgreSQL,
-- run this script to setup the database in the format of my UML database documentation.

-- Create table 'cities'
CREATE TABLE IF NOT EXISTS cities(
	id SERIAL PRIMARY KEY,
	city text UNIQUE NOT NULL,
	population INTEGER NOT NULL,
	climate text NOT NULL,
	nature text[] NOT NULL,
	jobs text[] NOT NULL,
	parks text[] NOT NULL,
	museums text[] NOT NULL,
	landmarks text[] NOT NULL,
	transportation text[] NOT NULL
);