import {Request, Response} from 'express';
import pool from '../database';

class GamesController {
    public  list(req: Request, res: Response) {
        pool.query('SELECT * FROM games', (err,rows) => {
            if(err) throw err;
          
            console.log('Data received from Db:');
            console.log(rows);

            res.json(rows);
          });
        
    }
    
    public getOne(req: Request, res: Response) {
        //res.json({text:'mostrando el Juego No ' + req.params.id});
        const { id } = req.params;
        const Query = `SELECT * FROM games WHERE id=${id}`;
        pool.query(Query, (err,rows) => {
            if(err) throw err;
          
            console.log('Data received from Db:');
            console.log(rows);
            if(rows.length > 0) {
                return res.json(rows);
            }
            res.status(404).json({text:'El Juego no Existe'});
          });
    }
    
    public create (req: Request, res: Response) {
        console.log(req.body);
        const Query = `INSERT INTO games (title, descripcion, image) 
                       VALUES("${req.body.title}", "${req.body.description}", "${req.body.image}")`;
        pool.query(Query);
        console.log(Query);
        res.json({message:'Juego Guardado ' + req.body.title + ' - ' + req.body.description +' - '+ req.body.image}); // JSON.stringify(req.body)
    }

    public update (req: Request, res: Response) {
        // res.json({text:'actualizando el juego No ' + req.params.id});
        const {id, title, description, image} = req.params, 
        Query = `UPDATE games SET
                    title = '${title}'
                    descripcion = '${description}'
                    image = '${image}'
                 WHERE id=${id}`;
        pool.query(Query, (err,rows) => {
            if(err) throw err;
          
            res.json({message: `El juego No. ${id} ha sido Actualizado`});
          });
    }

    public delete (req: Request, res: Response) {
        //res.json({text:'eliminando el juego No ' + req.params.id});
        const {id} = req.params, Query = `DELETE FROM games WHERE id=${id}`;
        pool.query(Query, (err,rows) => {
            if(err) throw err;
          
            res.json({message: `El juego No. ${id} ha sido eliminado`});
          });
    }
}


const gamesController = new GamesController();
export default gamesController;