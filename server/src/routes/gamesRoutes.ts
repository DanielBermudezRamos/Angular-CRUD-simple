import { Router } from 'express';
import  gamesController  from '../controllers/GamesController';
class GamesRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    config(): void {
        this.router.get('/', gamesController.list);
        this.router.get('/:id', gamesController.getOne);
        // this.router.get('/', (reg, res) => res.send('Hola Gamers!'));
        this.router.post('/', gamesController.create);
        this.router.put('/:id', gamesController.update);
        this.router.delete('/:id', gamesController.delete);
    }
}
const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;