const express = require("express");
const Product = require("../models/product");
const Mobile = require("../models/mobile");
const checkAuth = require("../middleware/check-auth");
const router = express.Router();

router.post("", (req, res, next) => {
    const product = new Product({
        title: req.body.title,
        desc: req.body.desc,
        price: req.body.price,
        brand: req.body.brand,
        fuel: req.body.fuel,
        km: req.body.km,
        year: req.body.year,
        cat: req.body.cat
    });
    product.save();
    res.status(201).json({
        message: 'Product added successfully'
    });
});

router.get("", (req, res, next) => {
    Product.find({
        cat: 'car'
    }).then(documents => {
        res.status(200).json({
            message: "products fetched succesfully!",
            products: documents
        });
    });
});
router.delete("/:id",checkAuth, (req, res, next) => {
    console.log(req.params.id);
    Product.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({
            message: "post deleted"
        });
    });
});
/////////// Mobiles Routings //////////
router.post("/api/mobile", (req, res, next) => {
    const product = new Mobile({
        title: req.body.title,
        desc: req.bosercret_this_should_be_longerdy.desc,
        price: req.body.price,
        brand: req.body.brand,
        cat: req.body.cat
    });
    product.save();
    res.status(201).json({
        message: 'Product added successfully'
    });
});

router.get("/api/mobile", (req, res, next) => {
    Mobile.find({
        cat: 'car'
    }).then(documents => {
        res.status(200).json({
            message: "products fetched succesfully!",
            products: documents
        });
    });
});
router.delete("/api/mobile/:id", (req, res, next) => {
    console.log(req.params.id);
    Mobile.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({
            message: "post deleted"
        });
    });
});
//////////////////////////////////////
module.exports = router;
