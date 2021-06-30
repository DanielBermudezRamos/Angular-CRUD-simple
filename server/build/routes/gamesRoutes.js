"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const GamesController_1 = __importDefault(require("../controllers/GamesController"));
class GamesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', GamesController_1.default.list);
        this.router.get('/:id', GamesController_1.default.getOne);
        // this.router.get('/', (reg, res) => res.send('Hola Gamers!'));
        this.router.post('/', GamesController_1.default.create);
        this.router.put('/:id', GamesController_1.default.update);
        this.router.delete('/:id', GamesController_1.default.delete);
    }
}
const gamesRoutes = new GamesRoutes();
exports.default = gamesRoutes.router;
