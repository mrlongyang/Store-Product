import { Request, Response } from 'express';
import { db } from '../config/db';
import { Employees } from '../models/employees.model';

export const getEmployees = async (_req: Request, res: Response) => {
     const [rows] = await db.query('SELECT * FROM store_employees');
     res.json(rows);
};

export const createEmployees = async (req: Request, res: Response) => {
     const e: Employees = req.body;
     await db.query(
          `INSERT INTO store_employees
          (employee_code, full_name, position, department, date_of_birth, phone, date_of_entry)
          VALUES (?, ?, ?, ?, ?, ?, ?)`,
          [e.employee_code, e.full_name, e.position, e.department, e.date_of_birth, e.phone, e.date_of_entry]
     );
     res.json({ message: 'Employees Created'})
};

export const updateEmployees = async (req: Request, res: Response) => {
     const code = req.params.code;
     const e: Employees = req.body;
     await db.query(
          `UPDATE store_employees SET full_name=?,
          position=?, department=?, date_of_birth=?,
          phone=?, date_of_entry=? WHERE employee_code=?`,
          [e.full_name, e.position, e.department, e.date_of_birth, e.phone, e.date_of_entry, code]
     );
     res.json({ message: 'Employees Updated' });
};

export const deleteEmployees = async (req: Request, res: Response) => {
     const code = req.params.code;
     await db.query('DELETE FROM store_employees WHERE employee_code = ?', [code]);
     res.json({ message: 'Employee Deleted'})
}