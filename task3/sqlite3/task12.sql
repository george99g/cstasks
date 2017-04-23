UPDATE Employees
SET Status = (
	SELECT ID FROM EmployeeStatuses WHERE Status = 'Ex-employee' LIMIT 1
)
WHERE Employees.PersonalNumber NOT IN (
	SELECT PersonalNumber FROM Employees
	INNER JOIN Contracts ON Contracts.Employee = Employees.PersonalNumber
	INNER JOIN Types ON Contracts.Type = Types.ID
	WHERE Types.Type = 'Founder'
) AND Employees.PersonalNumber IN (
	SELECT PersonalNumber FROM Employees
	INNER JOIN Contracts ON Contracts.Employee = Employees.PersonalNumber
	WHERE DATE(Contracts.EndDate) > DATE('now')
);
