import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
	res.render("index", {
        title : "Boom Shop | Akramjonov",
    });
});

router.get("/add", (req, res) => {
	res.render("add", {
        title : "Add Product | Akramjonov",
        isAdd : true,
    });
});

router.get("/products", (req, res) => {
	res.render("products", {
        title : "Products | Akramjonov",
        isProducts : true,
    });
});

export default router;
