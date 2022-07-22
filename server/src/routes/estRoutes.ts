import { Router } from 'express'; 
import estController from '../controllers/estController'

class EstRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', estController.index);
    }

}

const estRoutes = new EstRoutes();
export default estRoutes.router;