SELECT COUNT(*) FROM Contracts
INNER JOIN Types ON Contracts.Type = Types.ID
WHERE Types.Type = 'Founder'
