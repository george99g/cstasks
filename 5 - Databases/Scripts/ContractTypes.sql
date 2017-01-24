IF EXISTS(SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID('ContractTypes'))
BEGIN;
    DROP TABLE [ContractTypes];
END;
GO

CREATE TABLE [ContractTypes] (
    [ContractTypesID] INTEGER NOT NULL IDENTITY(1, 1),
    [Id] INTEGER NULL,
    [Type] VARCHAR(MAX) NULL,
    PRIMARY KEY ([ContractTypesID])
);
GO

INSERT INTO ContractTypes([Id],[Type]) VALUES(1,'Permanent');
INSERT INTO ContractTypes([Id],[Type]) VALUES(2,'Trainee');
INSERT INTO ContractTypes([Id],[Type]) VALUES(3,'Broker');
INSERT INTO ContractTypes([Id],[Type]) VALUES(4,'External');
INSERT INTO ContractTypes([Id],[Type]) VALUES(5,'Founder');