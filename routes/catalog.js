const express = require("express");
const router = express.Router();

//Controller Modules
const game_controller = require("../controllers/gameController");
const genre_controller = require("../controllers/genreController");
const developer_controller = require("../controllers/developerController");


//Homepage route
router.get("/", game_controller.index);


//Game routes

router.get("/game/create", game_controller.game_create_get);
router.post("/game/create", game_controller.game_create_post);

router.get("/game/:id/delete", game_controller.game_delete_get);
router.post("/game/:id/delete", game_controller.game_delete_post);

router.get("/game/:id/update", game_controller.game_update_get);
router.post("/game/:id/update", game_controller.game_update_post);

router.get("/game/:id", game_controller.game_detail);

router.get("/games", game_controller.game_list);

//Genre routes

router.get("/genre/create", genre_controller.genre_create_get);
router.post("/genre/create", genre_controller.genre_create_get);

router.get("/genre/:id/delete", genre_controller.genre_delete_get);
router.post("/genre/:id/delete", genre_controller.genre_delete_post);

router.get("/genre/:id/update", genre_controller.genre_update_get);
router.post("/genre/:id/update", genre_controller.genre_update_post);

router.get("/genre/:id", genre_controller.genre_detail);

router.get("/genre", genre_controller.genre_list);