INSERT INTO department (name)
VALUES 
('Production'), 
('Operations'), 
('Legal'), 
('Information Technology'), 
('Management'), 
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES 
('Engineer', 100000, 1), 
('Accountant', 90000, 2), 
('Lawyer', 90000, 3), 
('IT Specialist', 70000, 4), 
('Project Manager', 120000, 5), 
('Telemarketer', 60000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Sophia', 'Johnson', 1, 5),
('Noah', 'Smith', 2, 5),
('Olivia', 'Williams', 3, 5),
('Liam', 'Jones', 4, 5),
('Ava', 'Brown', 5, NULL),
('Lucas', 'Davis', 6, 9),
('Mia', 'Anderson', 1, 9),
('Ethan', 'James', 2, 9),
('Isabella', 'Martinez', 5, NULL);