const Developer = require("../models/developer");
const asyncHandler = require("express-async-handler");

exports.dev_list = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: genre_list");
})


exports.dev_detail = asyncHandler(async (req, res, next) => {
    res.send("NOT IMPLEMENTED: dev_detail")
})

exports.dev_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev create GET");
});

// Handle Author create on POST.
exports.dev_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev create POST");
});

// Display Author delete form on GET.
exports.dev_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev delete GET");
});

// Handle Author delete on POST.
exports.dev_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev delete POST");
});

// Display Author update form on GET.
exports.dev_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev update GET");
});

// Handle Author update on POST.
exports.dev_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED: Dev update POST");
});