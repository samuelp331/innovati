import { Router } from 'express'; 
import estController from '../controllers/estController'

class EstRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', estController.list);
        this.router.get('/', estController.soloUno);
        this.router.post('/', estController.create);
        this.router.put('/:id', estController.update);
        this.router.delete('/:id', estController.delete);
    }

}

const estRoutes = new EstRoutes();
export default estRoutes.router;