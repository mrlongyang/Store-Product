// run backend

npx ts-node src/index.ts


// sql command 1.1 -> 1.4

✅ 1. Calculate total sales of each bill

SELECT 
    bill_number,
    SUM(total_price) AS total_bill_amount
FROM 
    store_sales
GROUP BY 
    bill_number;

✅ 2. Calculate total sales amount by payment method (Cash, Card, QR)

SELECT 
    payment_method,
    SUM(total_price) AS total_sales_amount
FROM 
    store_sales
GROUP BY 
    payment_method;

✅ 3. Fetch products with price ≥ 30,000

SELECT 
    * 
FROM 
    store_product
WHERE 
    price >= 30000;

✅ 4. Fetch products with quantity > 50

SELECT 
    * 
FROM 
    store_product
WHERE 
    quantity > 50;