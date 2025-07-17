import { Router } from 'express';
import { getSales, createSales, deleteSales } from '../controllers/sales.controller';

const router = Router();

router.get('/', getSales);
router.post('/', createSales);
router.delete('/:bill/:product', deleteSales);


export default router;