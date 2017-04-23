DROP TABLE IF EXISTS Employees;

CREATE TABLE Employees (
	FirstName VARCHAR(32),
	LastName VARCHAR(32),
	FullName VARCHAR(128),
	PersonalNumber VARCHAR(13) NOT NULL PRIMARY KEY,
	Address TEXT
);
