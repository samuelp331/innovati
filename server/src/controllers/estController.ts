import {Request, Response} from 'express';
import pool from '../database';

class EstController {
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE notas')
        res.json('estudiantes');
    }
}

const estController = new EstController();
export default estController;