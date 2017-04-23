SELECT * FROM Employees
INNER JOIN Contracts ON Employees.PersonalNumber = Contracts.Employee
ORDER BY Contracts.Salary DESC LIMIT 1;
