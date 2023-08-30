const express = require("express");
const router = express.Router();

//Controller Modules
const bike_controller = require("../controllers/bikeController");
const bikeinstance_controller = require("../controllers/bikeInstaceController");
const brand_controller = require("../controllers/brandController");
const category_controller = require("../controllers/categoryController");

//Homepage route
router.get("/", bike_controller.index);

//Bike routes

router.get("/bike/create", bike_controller.bike_create_get);
router.post("/bike/create", bike_controller.bike_create_post);

router.get("/bike/:id/delete", bike_controller.bike_delete_get);
router.post("/bike/:id/delete", bike_controller.bike_delete_post);

router.get("/bike/:id/update", bike_controller.bike_update_get);
router.post("/bike/:id/update", bike_controller.bike_update_post);

router.get("/bike/:id", bike_controller.bike_detail);

router.get("/bikes", bike_controller.bike_list);

//BikeInstance routes

router.get("/bikeinstance/create", bikeinstance_controller.bikeinstance_create_get);
router.post("/bikeinstance/create", bikeinstance_controller.bikeinstance_create_post);

router.get("/bikeinstance/:id/delete", bikeinstance_controller.bikeinstance_delete_get);
router.post("/bikeinstance/:id/delete", bikeinstance_controller.bikeinstance_delete_post);

router.get("/bikeinstance/:id/update", bikeinstance_controller.bikeinstance_update_get);
router.post("/bikeinstance/:id/update", bikeinstance_controller.bikeinstance_update_post);

router.get("/bikeinstance/:id", bikeinstance_controller.bikeinstance_detail);

router.get("/bikeinstances", bikeinstance_controller.bikeinstance_detail);

//Brand routes
router.get("/brand/create", brand_controller.brand_create_get);
router.post("/brand/create", brand_controller.brand_create_post);

router.get("/brand/:id/delete", brand_controller.brand_delete_get);
router.post("/brand/:id/delete", brand_controller.brand_delete_post);

router.get("/brand/:id/update", brand_controller.brand_update_get);
router.post("/brand/:id/update", brand_controller.brand_update_post);

router.get("/brand/:id", brand_controller.brand_detail);

router.get("/brands", brand_controller.brand_list);

//Category routes
router.get("/category/create", category_controller.category_create_get);
router.post("/category/create", category_controller.category_create_post);

router.get("/category/:id/delete", category_controller.category_delete_get);
router.post("/category/:id/delete", category_controller.category_delete_post);

router.get("/category/:id/update", category_controller.category_update_get);
router.post("/category/:id/update", category_controller.category_update_post);

router.get("/category/:id", category_controller.category_detail);

router.get("/categories", category_controller.category_list);

module.exports = router;