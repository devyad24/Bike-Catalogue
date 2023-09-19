const asyncHandler = require("express-async-handler");
const Bike = require("../models/bike");
const BikeInstance = require("../models/bikeinstance");
const Brand = require("../models/brand");
const Category = require("../models/category");

const express = require("express-async-handler");

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
    res.send("Not implemented bike_list");
})

exports.bike_detail = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_detail");
})

exports.bike_create_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_create_get");
})

exports.bike_create_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_create_post");
})

exports.bike_update_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_update_get");
})

exports.bike_update_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_update_post");
})

exports.bike_delete_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_delete_get");
})

exports.bike_delete_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented bike_delete_post");
})

