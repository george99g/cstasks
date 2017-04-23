DROP TABLE IF EXISTS Contracts;

CREATE TABLE Contracts (
	ID INTEGER NOT NULL PRIMARY KEY,
	Employee VARCHAR(13),
	StartDate VARCHAR(255),
	EndDate VARCHAR(255),
	Type INTEGER,
	Salary INTEGER,
	FOREIGN KEY(Type) REFERENCES Types(ID),
	FOREIGN KEY(Employee) REFERENCES Employees(PersonalNumber)
);

DROP TABLE IF EXISTS Types;

CREATE TABLE Types (
    ID INTEGER NOT NULL PRIMARY KEY,
    Type TEXT NULL
);

INSERT INTO Types (ID, Type) VALUES (1, 'Permanent');
INSERT INTO Types (ID, Type) VALUES (2, 'Trainee');
INSERT INTO Types (ID, Type) VALUES (3, 'Broker');
INSERT INTO Types (ID, Type) VALUES (4, 'External');
INSERT INTO Types (ID, Type) VALUES (5, 'Founder');

INSERT INTO Contracts (Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1638101960699','2013-08-14','2015-11-02',2,1694
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1690102763999','2013-08-22','2015-11-25',5,1473
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1663030468899','2013-11-15','2015-01-08',4,1053
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1656060585799','2014-04-12','2015-05-17',1,1459
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1649071670699','2013-05-19','2016-03-23',5,2123
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1610071485899','2014-07-02','2015-04-20',3,1451
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1612042214199','2013-06-12','2015-04-19',1,2666
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1697123009399','2013-04-25','2015-02-12',5,2073
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1679082887899','2014-06-11','2015-06-21',3,1446
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1614123058399','2013-02-12','2015-02-15',1,1027
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1672121727299','2014-09-12','2016-03-30',3,2353
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1639111424099','2014-07-24','2015-11-15',3,2987
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1629111826499','2014-08-11','2015-03-15',5,1062
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1673031030599','2014-06-17','2016-08-02',4,1192
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1687082027499','2013-10-05','2016-12-01',4,2704
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1660101327899','2014-09-10','2015-05-25',2,1947
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1671080594899','2014-01-30','2015-09-16',4,2682
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1621120257099','2014-06-01','2015-04-25',3,2461
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1688061036599','2014-10-21','2016-01-28',5,2890
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1645081233599','2013-05-15','2016-01-21',3,1427
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1688110965299','2013-12-06','2015-07-05',3,1544
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1657091832999','2014-02-05','2016-05-03',1,1868
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1641040850299','2013-10-05','2015-11-07',2,2351
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1645060348099','2012-12-23','2016-10-10',5,2295
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1688110965299','2012-12-04','2015-05-03',1,1591
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1657091832999','2013-02-11','2015-10-13',3,1303
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1641040850299','2013-03-09','2016-08-09',1,2055
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1645060348099','2014-06-19','2015-10-22',1,1042
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1610112340999','2014-07-14','2014-12-20',1,2617
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1600093011199','2014-10-02','2016-11-06',1,2458
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1662111636799','2014-10-13','2015-04-23',5,2312
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1641010143299','2013-01-23','2015-03-22',5,1828
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1611092210699','2013-03-13','2015-10-28',4,2403
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1610071200199','2013-05-25','2016-05-05',3,2530
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1641082300899','2013-02-01','2016-03-17',3,1507
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1616010990599','2013-06-04','2015-05-22',2,2242
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1608011757899','2014-05-16','2016-08-31',5,1485
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1651111604899','2014-05-02','2016-03-26',3,2763
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1645120523199','2013-04-18','2016-10-20',5,1501
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1663030110499','2014-04-23','2015-11-10',1,2338
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1655011006999','2014-05-02','2016-09-08',5,2745
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1657071506899','2013-09-26','2014-12-30',1,2302
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1666022309999','2014-06-20','2015-04-15',2,1381
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1692021165999','2013-05-11','2016-08-04',1,1881
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1605052583399','2014-06-23','2015-12-14',2,2505
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1671102200599','2014-09-01','2015-07-31',1,1234
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1658072947499','2014-12-14','2015-08-08',5,2463
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1652082662399','2014-11-26','2015-11-24',3,2690
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1663022687699','2014-06-02','2015-01-20',5,1484
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1605032778799','2014-06-12','2016-10-05',3,2634
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1675042575999','2014-12-06','2015-07-19',5,2624
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1628071028099','2014-08-09','2016-07-31',5,2525
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1638092657699','2013-11-11','2015-04-09',3,1907
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1661030649599','2014-09-16','2015-04-10',3,2363
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1685082642399','2013-10-13','2016-07-20',1,1412
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1683122486399','2014-04-25','2016-06-20',1,2753
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1699093094799','2013-08-14','2016-07-30',4,2424
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1617061384599','2013-09-14','2016-08-21',1,2649
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1625021449999','2013-01-21','2015-07-31',4,2375
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1603090651399','2014-03-19','2014-12-28',3,2686
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1650071281399','2013-06-01','2015-01-22',2,2676
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1616081310199','2013-01-03','2016-10-09',5,1023
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1621101566299','2013-07-05','2016-03-03',4,1183
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1684112600299','2013-10-17','2016-10-24',2,2598
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1686101790799','2014-10-01','2016-04-30',1,2040
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1673020331899','2014-03-14','2016-02-20',2,1869
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1628041468599','2013-06-17','2016-07-28',2,2885
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1607072589899','2014-04-11','2016-04-30',3,1950
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1696081343499','2013-03-28','2016-06-21',5,1868
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1695051965899','2013-09-01','2016-07-04',3,1608
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1613062373199','2013-11-02','2015-03-19',2,2260
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1651040420699','2014-04-04','2016-06-23',3,2998
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1616121288999','2013-08-24','2015-01-22',5,1679
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1637042028799','2013-05-15','2016-03-11',3,1033
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1628022901799','2013-03-29','2016-03-24',1,2585
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1697020120199','2014-01-15','2016-07-20',1,1740
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1640092847699','2014-08-06','2016-10-23',3,2014
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1637040956899','2014-07-04','2016-12-04',1,1811
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1659060565899','2013-09-18','2016-08-24',1,2959
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1629101448999','2013-06-05','2014-12-31',1,2653
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1629041299099','2014-01-26','2016-03-16',4,2195
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1633082889699','2013-05-12','2016-03-19',3,1393
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1636080811599','2013-05-15','2015-11-29',3,2272
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1695110830799','2014-09-05','2016-11-03',2,1818
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1659022870799','2014-03-31','2016-05-16',4,1331
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1622040827699','2013-10-26','2015-06-16',1,1220
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1617092192999','2013-05-10','2015-12-03',3,1826
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1654063084899','2013-05-16','2016-02-25',3,2444
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1644092772699','2013-03-16','2015-08-02',1,1448
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1683100149799','2013-06-06','2015-08-21',5,2501
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1646051314499','2014-05-11','2015-01-08',1,2081
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1677080208299','2014-03-25','2016-03-18',2,1010
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1659070462299','2014-02-17','2016-07-11',3,2223
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1617022097299','2014-08-10','2015-09-29',1,2140
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1661091567899','2014-07-23','2015-04-11',4,2841
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1664061231799','2013-02-17','2015-05-11',2,1012
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1697091029799','2013-04-27','2016-11-07',2,1951
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1611021113599','2014-01-14','2015-11-10',2,2669
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1632120710399','2013-04-18','2015-02-04',3,2572
);
INSERT INTO Contracts(Employee, StartDate, EndDate, Type, Salary) VALUES (
	'1644071108099','2013-04-10','2016-11-29',4,2946
);
