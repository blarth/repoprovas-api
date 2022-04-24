INSERT INTO terms ("number") VALUES (1);
INSERT INTO terms ("number") VALUES (2);
INSERT INTO terms ("number") VALUES (3);
INSERT INTO terms ("number") VALUES (4);
INSERT INTO terms ("number") VALUES (5);
INSERT INTO terms ("number") VALUES (6);
INSERT INTO terms ("number") VALUES (7);
INSERT INTO terms ("number") VALUES (8);
INSERT INTO terms ("number") VALUES (9);
INSERT INTO terms ("number") VALUES (10);


INSERT INTO disciplines ("name", "termId") VALUES ('calc 1', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('phisics 1', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 2', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('phisics 2', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 3', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 4', 4);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 5', 5);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 6', 6);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 7', 7);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 8', 8);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 9', 9);
INSERT INTO disciplines ("name", "termId") VALUES ('calc 10', 10);


INSERT INTO teachers ("name") VALUES ('Edu');
INSERT INTO teachers ("name") VALUES ('Leo');
INSERT INTO teachers ("name") VALUES ('Marcus');
INSERT INTO teachers ("name") VALUES ('Yann');

INSERT INTO categories ("name") VALUES ('P1');
INSERT INTO categories ("name") VALUES ('P2');
INSERT INTO categories ("name") VALUES ('P3');
INSERT INTO categories ("name") VALUES ('P4');


INSERT INTO "teachersDisciplines" ("teacherId" , "disciplineId") VALUES (1, 1);
INSERT INTO "teachersDisciplines" ("teacherId" , "disciplineId") VALUES (2, 2);
INSERT INTO "teachersDisciplines" ("teacherId" , "disciplineId") VALUES (3, 3);
INSERT INTO "teachersDisciplines" ("teacherId" , "disciplineId") VALUES (4, 4);
INSERT INTO "teachersDisciplines" ("teacherId" , "disciplineId") VALUES (1, 3);


INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId") VALUES ('CSS Test','testpdf', 1, 2);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId") VALUES ('CSS Test 2', 'testpdf', 2, 3);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId") VALUES ('CSS Test 3', 'testpdf', 3, 5);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teacherDisciplineId") VALUES ('CSS Test 4', 'testpdf', 4, 1);