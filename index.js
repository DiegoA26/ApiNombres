import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const productos = [
    {
        id: 1,
        nombre: "Lapiz",
        precio: 1
    },
    {
        id: 2,
        nombre: "Raton",
        precio: 15
    },
    {
        id: 3,
        nombre: "Cascos",
        precio: 25
    },
];

app.get("/api/productos", (req, res) => {
    res.json(productos);
});

app.post("/api/:nombre/:precio", (req, res) => {
    const { nombre, precio } = req.params;

    const nuevoProducto = {
        id: productos.length,
        nombre,
        precio: Number(precio)
    };

    productos.push(nuevoProducto);

    res.json({
        mensaje: "Nuevo producto añadido! ",
        producto: nuevoProducto
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`API de productos en la url http://localhost:${PORT}`);
});
