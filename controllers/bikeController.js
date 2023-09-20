const { body, validationResult } = require("express-validator");
const Bike = require("../models/bike");
const BikeInstance = require("../models/bikeinstance");
const Brand = require("../models/brand");
const Category = require("../models/category");

const asyncHandler = require("express-async-handler");

exports.index = asyncHandler(async (req, res, next) => {
    const [
        numBikes,
        numBikeInstances,
        numBrands,
        numCategorys,
    ] = await Promise.all([
        Bike.countDocuments({}).exec(),
        BikeInstance.countDocuments({}).exec(),
        Brand.countDocuments({}).exec(),
        Category.countDocuments({}).exec(),
    ]);

    res.render("index", {
        title: "Bike Catalogue",
        countBikes: numBikes,
        countBikeInstances: numBikeInstances,
        countBrands: numBrands,
        countCategorys: numCategorys,
    });
})

exports.bike_list = asyncHandler(async (req, res, next)  => {
    const bikes = await Bike.find({}).populate("brand").sort({model: 1}).exec();

    res.render("bike_list", { title: "Bike List", bikes: bikes});
})

exports.bike_detail = asyncHandler(async (req, res, next)  => {
    const [bike, bikeinstances] = await Promise.all([
        Bike.findById(req.params.id).populate("brand").populate("category").exec(),
        BikeInstance.find({bike: req.params.id}).exec()
    ])

    if(bike === null){
        const err = new Error("Bike not found");
        err.status = 404;
        return next(err);
    }

    res.render("bike_detail", { title: "Bike Detail" , bike: bike, bikeinstances: bikeinstances});
})

exports.bike_create_get = asyncHandler(async (req, res, next)  => {
    const [ brands, categories ] = await Promise.all([
        Brand.find().exec(),
        Category.find().exec()
    ]);

    res.render("bike_form", {
        title: "Bike Form",
        brands: brands,
        categories: categories
    });
})

exports.bike_create_post = [

    body("model", "Model must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("brand", "Brand must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("mileage", "Mileage must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("price", "Price must be provided.")
        .trim()
        .isNumeric()
        .isLength({ min: 1 })
        .escape(),
    body("category", "Category must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),


    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const bike = new Bike({
            model: req.body.model,
            brand: req.body.brand,
            mileage: req.body.mileage,
            price: req.body.price,
            category: req.body.category
        })

        if(!errors.isEmpty()){
            
            const [ brands, categories ] = await Promise.all([
                Brand.find().exec(),
                Category.find().exec()
            ]);

            res.render("bike_form", {
                title: "Bike Form",
                brands: brands,
                categories: categories,
                errors: errors.array()
            });
        }else {
            await bike.save();
            res.redirect(bike.url);
        }
    }),
    
]

exports.bike_update_get = asyncHandler(async (req, res, next)  => {
    const [ bike, brands, categories ] = await Promise.all([
        Bike.findById(req.params.id).populate("brand").populate("category").exec(),
        Brand.find({}).exec(),
        Category.find({}).exec(),
    ])

    if(bike === null){
        const err = new Error("Bike not found.");
        err.status = 404;
        return next(err);  
    }

    res.render("bike_form", {
        title: "Bike Update",
        bike: bike,
        brands: brands,
        categories: categories,
    });
})

exports.bike_update_post = [

    body("model", "Model must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("brand", "Brand must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("mileage", "Mileage must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),
    body("price", "Price must be provided.")
        .trim()
        .isNumeric()
        .isLength({ min: 1 })
        .escape(),
    body("category", "Category must be provided.")
        .trim()
        .isLength({ min: 1 })
        .escape(),

    asyncHandler(async (req, res, next) => {
        const errors = validationResult(req);

        const bike = new Bike({
            model: req.body.model,
            brand: req.body.brand,
            mileage: req.body.mileage,
            price: req.body.price,
            category: req.body.category,
            _id: req.params.id
        })

        if(!errors.isEmpty()){
            
            const [ brands, categories ] = await Promise.all([
                Brand.find().exec(),
                Category.find().exec()
            ]);

            res.render("bike_form", {
                title: "Bike Form",
                brands: brands,
                categories: categories,
                errors: errors.array()
            });
        }else {
            const updatedBike = await Bike.findByIdAndUpdate(req.params.id, bike, {});
            res.redirect(updatedBike.url);
        }
    }),
]

exports.bike_delete_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_delete_get");
})

exports.bike_delete_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_delete_post");
})

