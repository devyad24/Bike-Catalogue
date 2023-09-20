#! /usr/bin/env node

console.log(
  'This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: node populatedb "mongodb+srv://cooluser:coolpassword@cluster0.lz91hw2.mongodb.net/local_library?retryWrites=true&w=majority"'
);

// Get arguments passed on command line
const userArgs = process.argv.slice(2);

const Bike = require("./models/bike");
const BikeInstance = require("./models/bikeinstance");
const Brand = require("./models/brand");
const Category = require("./models/category");

const categories = [];
const brands = [];
const bikes = [];
const bikeinstances = [];

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

const mongoDB = userArgs[0];

main().catch((err) => console.log(err));

async function main() {
  console.log("Debug: About to connect");
  await mongoose.connect(mongoDB);
  console.log("Debug: Should be connected?");
  await createCategories();
  await createBrands();
  await createBikes();
  await createBikeInstances();
  console.log("Debug: Closing mongoose");
  mongoose.connection.close();
}

// We pass the index to the ...Create functions so that, for example,
// category[0] will always be the Scooter category, regardless of the order
// in which the elements of promise.all's argument complete.
async function categoryCreate(index, name) {
  const category = new Category({ name: name });
  await category.save();
  categories[index] = category;
  console.log(`Added category: ${name}`);
}

async function brandCreate(index, name) {
  const brand = new Brand({ name: name });
  await brand.save();
  brands[index] = brand;
  console.log(`Added brand: ${name}`);
}

async function bikeCreate(index, model, brand, mileage, price, category) {
  const bikedetail = {
    model: model,
    brand: brand,
    mileage: mileage,
    price: price,
  };
  if (category != false) bikedetail.category = category;

  const bike = new Bike(bikedetail);
  await bike.save();
  bikes[index] = bike;
  console.log(`Added bike: ${model}`);
}

async function bikeInstanceCreate(index, bike, registration_no, showroom, price) {
  const bikeinstancedetail = {
    bike: bike,
    registration_no: registration_no,
    showroom: showroom,
    price: price,
  };

  const bikeinstance = new BikeInstance(bikeinstancedetail);
  await bikeinstance.save();
  bikeinstances[index] = bikeinstance;
  console.log(`Added bikeinstance: ${registration_no}`);
}

async function createCategories() {
  console.log("Adding Categories");
  await Promise.all([
    categoryCreate(0, "Scooter"),
    categoryCreate(1, "Cruiser"),
    categoryCreate(2, "Dirt Bike"),
    categoryCreate(3, "Sports Bike"),
    categoryCreate(4, "Commuter"),
    categoryCreate(5, "Street Bike"),
  ]);
}

async function createBrands() {
  console.log("Adding brands");
  await Promise.all([
    brandCreate(0, "Bajaj"),
    brandCreate(1, "Kawasaki"),
    brandCreate(2, "Hero"),
    brandCreate(3, "Royal Enfield"),
    brandCreate(4, "TVS"),
  ]);
}

async function createBikes() {
  console.log("Adding Bikes");
  await Promise.all([
    bikeCreate(0,
      "Bajaj Pulsar RS 200",
      brands[0],
      35,
      171783,
      categories[1]
    ),
    bikeCreate(1,
      "Kawasaki Z900",
      brands[1],
      16,
      919973,
      categories[3]
    ),
    bikeCreate(2,
      "Hero Splendor Plus",
      brands[2],
      70,
      74491,
      categories[4]
    ),
    bikeCreate(3,
      "Royal Enfield Himalayan",
      brands[3],
      30,
      215881,
      categories[2]
    ),
    bikeCreate(4,
      "Royal Enfield Hunter 350",
      brands[3],
      35,
      149900,
      categories[5]
    ),
    bikeCreate(5,
      "TVS Apache RTR 160",
      brands[4],
      45,
      119981,
      categories[5]
    ),
    bikeCreate(6,
      "TVS Ronin",
      brands[4],
      40,
      149097,
      categories[1]
    ),
  ]);
}

async function createBikeInstances() {
  console.log("Adding bikeinstances");
  await Promise.all([
    bikeInstanceCreate(0, bikes[0], "34KE34898G", "Bhagat Laal Showroom", 180000),
    bikeInstanceCreate(1, bikes[1], "34ME34898U", "Andheri Showroom", 170000),
    bikeInstanceCreate(2, bikes[2], "34ME34898Z", "Brijlaal Showroom", 110000),
    bikeInstanceCreate(3, bikes[3], "54ME34898Z", "Ambika Showroom", 110000),
    bikeInstanceCreate(4, bikes[4], "84ME34898Z", "Moti Showroom", 110000),
    bikeInstanceCreate(5, bikes[5], "64ME34898Z", "Amrit Showroom", 110000),
    bikeInstanceCreate(6, bikes[6], "74ME34898Z", "Pant Showroom", 110000),
    bikeInstanceCreate(7, bikes[4], "94ME34898Z", "Automax Showroom", 110000),
    bikeInstanceCreate(8, bikes[3], "24ME34898Z", "Zeta Showroom", 110000),
    bikeInstanceCreate(9, bikes[1], "44ME34898Z", "Nova Showroom", 110000),
  ]);
}