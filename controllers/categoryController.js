const asyncHandler = require("express-async-handler");
const Category = require("../models/category");

const express = require("express-async-handler");

exports.category_list = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented categorye_list");
})

exports.category_detail = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_detail");
})

exports.category_create_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_create_get");
})

exports.category_create_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_create_post ");
})

exports.category_update_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_update_get");
})

exports.category_update_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_update_post");
})

exports.category_delete_get = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_delete_get");
})

exports.category_delete_post = asyncHandler(async (req, res, next)  => {
    res.send("Not implemented category_delete_post");
})