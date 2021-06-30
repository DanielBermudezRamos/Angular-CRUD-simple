"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
class IndexController {
    index(req, res) {
        res.json({ text: 'La API es /api/games' });
        res.send('Hola Controller!');
    }
}
exports.indexController = new IndexController();
