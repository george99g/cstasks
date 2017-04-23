SELECT * FROM Employees WHERE FirstName IN (
	SELECT FirstName FROM Employees GROUP BY FirstName HAVING COUNT(*) > 1
) ORDER BY FirstName ASC;
