SELECT FullName FROM Employees WHERE PersonalNumber IN (
	SELECT Employee FROM Contracts
	INNER JOIN Types ON Contracts.Type = Types.ID
	WHERE Types.Type = 'Founder'
);
