import { Request, Response } from 'express';
import { db } from '../config/db';
import { Sales } from '../models/sales.model';

export const getSales = async (_req: Request, res: Response) => {
  const [rows] = await db.query('SELECT * FROM store_sales');
  res.json(rows);
};

export const createSales = async (req: Request, res: Response) => {
  try {
    const s: Sales = req.body;

    await db.query(
      `INSERT INTO store_sales 
      (bill_number, product_code, quantity, price, total_price, billing_date, seller_code, payment_method, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        s.bill_number,
        s.product_code,
        s.quantity,
        s.price,
        s.total_price,
        s.billing_date,
        s.seller_code,
        s.payment_method,
        s.status
      ]
    );

    res.json({ message: 'Sale Created' });
  } catch (error) {
    console.error('Create sale error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteSale = async (req: Request, res: Response) => {
  const { bill, product } = req.params;

  try {
    const [result] = await db.query(
      'DELETE FROM store_sales WHERE bill_number = ? AND product_code = ?',
      [bill, product]
    );

    res.json({ message: 'Sale deleted successfully' });
  } catch (error) {
    console.error('Delete sale error:', error);
    res.status(500).json({ error: 'Failed to delete sale' });
  }
};
