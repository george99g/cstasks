DROP TABLE IF EXISTS EmployeeStatuses;

CREATE TABLE EmployeeStatuses (
	ID INTEGER NOT NULL PRIMARY KEY,
	Status TEXT
);

INSERT INTO EmployeeStatuses(ID, Status) VALUES (1, 'Permanent Contract');
INSERT INTO EmployeeStatuses(ID, Status) VALUES (2, 'Ex-employee');
INSERT INTO EmployeeStatuses(ID, Status) VALUES (3, 'Holiday Worker');
INSERT INTO EmployeeStatuses(ID, Status) VALUES (4, 'Temporary MUP');

--Not supported by SQLite
--ALTER TABLE Employees
--ADD COLUMN Status INTEGER NOT NULL DEFAULT 1
--ADD CONSTRAINT FOREIGN KEY(Status) REFERENCES EmployeeStatuses(ID);

ALTER TABLE Employees
RENAME TO Employees_old;
CREATE TABLE Employees (
	FirstName VARCHAR(32),
	LastName VARCHAR(32),
	FullName VARCHAR(128),
	PersonalNumber VARCHAR(13) NOT NULL PRIMARY KEY,
	Address TEXT,
	Status INTEGER NOT NULL DEFAULT 1,
	FOREIGN KEY(Status) REFERENCES EmployeeStatuses(ID)
);
INSERT INTO Employees(FirstName, LastName, FullName, PersonalNumber, Address)
SELECT FirstName, LastName, FullName, PersonalNumber, Address
FROM Employees_old;
DROP TABLE Employees_old;
