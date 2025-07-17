import { Request, Response } from 'express';
import { db } from '../config/db';
import { Product } from '../models/product.model';

export const getProducts = async (_req: Request, res: Response) => {
  const [rows] = await db.query('SELECT * FROM store_product');
  res.json(rows);
};

export const createProduct = async (req: Request, res: Response) => {
  const p: Product = req.body;
  await db.query(
    `INSERT INTO store_product 
     (product_code, product_type, product_name_la, product_name_en, price, quantity, date_received, status)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    [p.product_code, p.product_type, p.product_name_la, p.product_name_en, p.price, p.quantity, p.date_received, p.status]
  );
  res.json({ message: 'Product created' });
};

export const updateProduct = async (req: Request, res: Response) => {
  const code = req.params.code;
  const p: Product = req.body;
  await db.query(
    `UPDATE store_product SET product_type=?, product_name_la=?, product_name_en=?, price=?, quantity=?, date_received=?, status=? WHERE product_code=?`,
    [p.product_type, p.product_name_la, p.product_name_en, p.price, p.quantity, p.date_received, p.status, code]
  );
  res.json({ message: 'Product updated' });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const code = req.params.code;
  await db.query('DELETE FROM store_product WHERE product_code = ?', [code]);
  res.json({ message: 'Product deleted' });
};
