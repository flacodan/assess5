---PROBLEM 1---
SELECT email 
FROM customers;

---PROBLEM 2---
SELECT id 
FROM orders 
WHERE customer_id = 
    (SELECT id 
    FROM customers 
    WHERE fname = 'Elizabeth' AND lname = 'Crocker'
    );

---PROBLEM 3---
SELECT SUM(num_cupcakes) 
FROM orders 
WHERE processed = FALSE;

---PROBLEM 4---
SELECT c.name, SUM(o.num_cupcakes) 
FROM cupcakes AS c 
LEFT JOIN orders AS o 
    ON c.id = o.cupcake_id 
GROUP BY c.name 
ORDER BY c.name;

---PROBLEM 5---
SELECT c.email, SUM(o.num_cupcakes) AS total 
FROM customers AS c 
JOIN orders AS o 
    ON c.id = o.customer_id 
GROUP BY c.email 
ORDER BY total DESC;

---PROBLEM 6---
