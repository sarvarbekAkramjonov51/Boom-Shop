import express from "express";
import { create } from "express-handlebars";
import mongoose from "mongoose";
import AuthRoutes from "./routes/auth.js";
import ProductsRoutes from "./routes/products.js";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();

const hbs = create({
	defaultLayout: "main",
	extname: "hbs",
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", "./views");
app.use(express.json());

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.use(AuthRoutes);
app.use(ProductsRoutes);

mongoose.set("strictQuery", false);
await mongoose.connect(process.env.MONGO_URL);
console.log("Connected to DB ✅");

const PORT = process.env.PORT || 4100;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
