DROP TABLE IF EXISTS ContractTypes;

CREATE TABLE ContractTypes (
    ContractTypesID INTEGER NOT NULL PRIMARY KEY,
    Id INTEGER NULL,
    Type TEXT NULL
);

INSERT INTO ContractTypes(Id, Type) VALUES(1,'Permanent');
INSERT INTO ContractTypes(Id, Type) VALUES(2,'Trainee');
INSERT INTO ContractTypes(Id, Type) VALUES(3,'Broker');
INSERT INTO ContractTypes(Id, Type) VALUES(4,'External');
INSERT INTO ContractTypes(Id, Type) VALUES(5,'Founder');
