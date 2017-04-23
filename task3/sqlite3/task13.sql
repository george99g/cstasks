DROP TABLE IF EXISTS Admin;
CREATE TABLE Admin (
	Employee VARCHAR(13) NOT NULL PRIMARY KEY,
	Username VARCHAR(255) NOT NULL,
	Password VARCHAR(255) NOT NULL,
	LastOnline VARCHAR(255),
	FOREIGN KEY(Employee) REFERENCES Employees(PersonalNumber)
);

INSERT INTO Admin (Employee, Username, Password, LastOnline)
VALUES ('1638101960699', 'howard', '123456789', DATETIME('now'));
