"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/api/data", (req, res) => {
    const foodData = [
        {
            id: 1,
            name: "Boiled Egg",
            price: 10,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/egg.png",
            type: "breakfast",
        },
        {
            id: 2,
            name: "RAMEN",
            price: 25,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/ramen.png",
            type: "lunch",
        },
        {
            id: 3,
            name: "GRILLED CHICKEN",
            price: 45,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/chicken.png",
            type: "dinner",
        },
        {
            id: 4,
            name: "CAKE",
            price: 18,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/cake.png",
            type: "breakfast",
        },
        {
            id: 5,
            name: "BURGER",
            price: 23,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/burger.png",
            type: "lunch",
        },
        {
            id: 6,
            name: "PANCAKE",
            price: 25,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
            img: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map