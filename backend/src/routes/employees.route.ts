import { Router } from 'express';
import { getEmployees, createEmployees, updateEmployees, deleteEmployees } from '../controllers/employees.controller';

const router = Router();

router.get('/', getEmployees);
router.post('/', createEmployees);
router.put('/:code', updateEmployees);
router.delete('/:code', deleteEmployees);

export default router;