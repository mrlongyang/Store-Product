import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.route';
import employeesRoutes from './routes/employees.route';
import salesRoutes from './routes/sales.route';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/products', productRoutes);
app.use('/api/employees', employeesRoutes);
app.use('/api/sales', salesRoutes);

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
