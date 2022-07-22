import {Request, Response} from 'express';
import pool from '../database';

class EstController {
    public async list (req: Request, res: Response) {
        const estudiantes = await pool.query('SELECT * FROM estudiantes');
        res.json(estudiantes);
    }

    public async soloUno (req: Request, res: Response): Promise<any> {
       const {id} = req.params;
       const estudiantes = await pool.query('SELECT * FROM estudiantes WHERE id = ?', [id]);
       if (estudiantes.length > 0){
        return res.json(estudiantes[0]);
       }
       res.status(404).json ({text: "es estudiante no se encuentra"});
    }

    public async create (req: Request, res: Response) {
        await pool.query('INSERT INTO estudiantes set ?'[req.body]);
        res.json({message: 'perfil creado'});
    }

    public async update (req: Request, res: Response) {
       const {id} = req.params;
       await pool.query('UPDATE estudiantes SET ? WHERE id = ?', [id]);
       res.json({message: "el estudiante se ha actualizado"});
    }

    public async delete (req: Request, res: Response) {
        
        const {id} = req.params;
        await pool.query('DELETE FROM estudiantes WHERE id = ?', [id]);
        res.json({message: "el estudiante se ha eliminado"});
    }
}

const estController = new EstController();
export default estController;