import { Router } from 'express';
import { getSales, createSales, deleteSale } from '../controllers/sales.controller';

const router = Router();

router.get('/', getSales);
router.post('/', createSales);
router.delete('/:bill/:product', deleteSale);


export default router;