"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class GamesController {
    list(req, res) {
        database_1.default.query('SELECT * FROM games', (err, rows) => {
            if (err)
                throw err;
            console.log('Data received from Db:');
            console.log(rows);
            res.json(rows);
        });
    }
    getOne(req, res) {
        //res.json({text:'mostrando el Juego No ' + req.params.id});
        const { id } = req.params;
        const Query = `SELECT * FROM games WHERE id=${id}`;
        database_1.default.query(Query, (err, rows) => {
            if (err)
                throw err;
            console.log('Data received from Db:');
            console.log(rows);
            if (rows.length > 0) {
                return res.json(rows);
            }
            res.status(404).json({ text: 'El Juego no Existe' });
        });
    }
    create(req, res) {
        console.log(req.body);
        const Query = `INSERT INTO games (title, descripcion, image) 
                       VALUES("${req.body.title}", "${req.body.description}", "${req.body.image}")`;
        database_1.default.query(Query);
        console.log(Query);
        res.json({ message: 'Juego Guardado ' + req.body.title + ' - ' + req.body.description + ' - ' + req.body.image }); // JSON.stringify(req.body)
    }
    update(req, res) {
        // res.json({text:'actualizando el juego No ' + req.params.id});
        const { id, title, description, image } = req.params, Query = `UPDATE games SET
                    title = '${title}'
                    descripcion = '${description}'
                    image = '${image}'
                 WHERE id=${id}`;
        database_1.default.query(Query, (err, rows) => {
            if (err)
                throw err;
            res.json({ message: `El juego No. ${id} ha sido Actualizado` });
        });
    }
    delete(req, res) {
        //res.json({text:'eliminando el juego No ' + req.params.id});
        const { id } = req.params, Query = `DELETE FROM games WHERE id=${id}`;
        database_1.default.query(Query, (err, rows) => {
            if (err)
                throw err;
            res.json({ message: `El juego No. ${id} ha sido eliminado` });
        });
    }
}
const gamesController = new GamesController();
exports.default = gamesController;
