IF EXISTS(SELECT 1 FROM sys.tables WHERE object_id = OBJECT_ID('Contracts'))
BEGIN;
    DROP TABLE [Contracts];
END;
GO

CREATE TABLE [Contracts] (
    [ContractsID] INTEGER NOT NULL IDENTITY(1, 1),
    [StartDate] VARCHAR(255),
    [EndDate] VARCHAR(255),
    [ContactType] INTEGER NULL,
    [Salary] INTEGER NULL,
    PRIMARY KEY ([ContractsID])
);
GO

INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.08.13','02.11.15',2,1694);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('22.08.13','25.11.15',5,1473);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('15.11.13','08.01.15',4,1053);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.04.14','17.05.15',1,1459);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('19.05.13','23.03.16',5,2123);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.07.14','20.04.15',3,1451);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.06.13','19.04.15',1,2666);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('25.04.13','12.02.15',5,2073);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.06.14','21.06.15',3,1446);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.02.13','15.02.15',1,1027);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.09.14','30.03.16',3,2353);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('24.07.14','15.11.15',3,2987);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.08.14','15.03.15',5,1062);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('17.06.14','02.08.16',4,1192);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.10.13','01.12.16',4,2704);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('10.09.14','25.05.15',2,1947);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('30.01.14','16.09.15',4,2682);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.06.14','25.04.15',3,2461);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('21.10.14','28.01.16',5,2890);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('15.05.13','21.01.16',3,1427);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('06.12.13','05.07.15',3,1544);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.02.14','03.05.16',1,1868);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.10.13','07.11.15',2,2351);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('23.12.12','10.10.16',5,2295);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('04.12.12','03.05.15',1,1591);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.02.13','13.10.15',3,1303);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('09.03.13','09.08.16',1,2055);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('19.06.14','22.10.15',1,1042);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.07.14','20.12.14',1,2617);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.10.14','06.11.16',1,2458);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('13.10.14','23.04.15',5,2312);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('23.01.13','22.03.15',5,1828);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('13.03.13','28.10.15',4,2403);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('25.05.13','05.05.16',3,2530);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.02.13','17.03.16',3,1507);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('04.06.13','22.05.15',2,2242);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('16.05.14','31.08.16',5,1485);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.05.14','26.03.16',3,2763);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('18.04.13','20.10.16',5,1501);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('23.04.14','10.11.15',1,2338);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.05.14','08.09.16',5,2745);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('26.09.13','30.12.14',1,2302);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('20.06.14','15.04.15',2,1381);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.05.13','04.08.16',1,1881);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('23.06.14','14.12.15',2,2505);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.09.14','31.07.15',1,1234);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.12.14','08.08.15',5,2463);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('26.11.14','24.11.15',3,2690);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.06.14','20.01.15',5,1484);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.06.14','05.10.16',3,2634);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('06.12.14','19.07.15',5,2624);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('09.08.14','31.07.16',5,2525);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.11.13','09.04.15',3,1907);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('16.09.14','10.04.15',3,2363);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('13.10.13','20.07.16',1,1412);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('25.04.14','20.06.16',1,2753);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.08.13','30.07.16',4,2424);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.09.13','21.08.16',1,2649);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('21.01.13','31.07.15',4,2375);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('19.03.14','28.12.14',3,2686);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.06.13','22.01.15',2,2676);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('03.01.13','09.10.16',5,1023);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.07.13','03.03.16',4,1183);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('17.10.13','24.10.16',2,2598);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.10.14','30.04.16',1,2040);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.03.14','20.02.16',2,1869);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('17.06.13','28.07.16',2,2885);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.04.14','30.04.16',3,1950);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('28.03.13','21.06.16',5,1868);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('01.09.13','04.07.16',3,1608);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('02.11.13','19.03.15',2,2260);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('04.04.14','23.06.16',3,2998);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('24.08.13','22.01.15',5,1679);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('15.05.13','11.03.16',3,1033);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('29.03.13','24.03.16',1,2585);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('15.01.14','20.07.16',1,1740);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('06.08.14','23.10.16',3,2014);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('04.07.14','04.12.16',1,1811);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('18.09.13','24.08.16',1,2959);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.06.13','31.12.14',1,2653);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('26.01.14','16.03.16',4,2195);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('12.05.13','19.03.16',3,1393);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('15.05.13','29.11.15',3,2272);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('05.09.14','03.11.16',2,1818);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('31.03.14','16.05.16',4,1331);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('26.10.13','16.06.15',1,1220);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('10.05.13','03.12.15',3,1826);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('16.05.13','25.02.16',3,2444);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('16.03.13','02.08.15',1,1448);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('06.06.13','21.08.15',5,2501);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('11.05.14','08.01.15',1,2081);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('25.03.14','18.03.16',2,1010);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('17.02.14','11.07.16',3,2223);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('10.08.14','29.09.15',1,2140);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('23.07.14','11.04.15',4,2841);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('17.02.13','11.05.15',2,1012);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('27.04.13','07.11.16',2,1951);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('14.01.14','10.11.15',2,2669);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('18.04.13','04.02.15',3,2572);
INSERT INTO Contracts([StartDate],[EndDate],[ContactType],[Salary]) VALUES('10.04.13','29.11.16',4,2946);