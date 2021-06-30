import {Request, Response, text} from 'express';

class IndexController {
    public index(req: Request, res: Response) {
        res.json({text : 'La API es /api/games'});
        res.send('Hola Controller!')
    }
}

export const indexController = new IndexController();