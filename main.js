const express = require('express');
const { Router } = express;

const app = express();
const PORT = 8080;
const router = Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

app.use('/api/products', router);
app.use(express.static('public'));

// PRODUCTS
products = [
  {
    id: 1,
    title: 'taza de ceramica',
    price: 0,
    thumbnail:
      'https://http2.mlstatic.com/D_NQ_NP_678892-MLA48756110373_012022-W.jpg',
  },
  {
    id: 2,
    title: 'taza de ceramica',
    price: 0,
    thumbnail:
      'https://http2.mlstatic.com/D_NQ_NP_678892-MLA48756110373_012022-W.jpg',
  },
  {
    id: 3,
    title: 'taza de ceramica',
    price: 0,
    thumbnail:
      'https://http2.mlstatic.com/D_NQ_NP_678892-MLA48756110373_012022-W.jpg',
  },
  {
    id: 4,
    title: 'taza de ceramica',
    price: 0,
    thumbnail:
      'https://http2.mlstatic.com/D_NQ_NP_678892-MLA48756110373_012022-W.jpg',
  },
];

router.get('/', (req, res) => {
  res.json(products);
});

router.get('/:id', (req, res) => {
  let { id } = req.params;
  res.send(products.find((item) => item.id == id));
});

router.post('/', (req, res) => {
  let newItem = { id: products.length + 1, ...req.body };
  products.push(newItem);
  res.json(newItem);
});
router.put('/:id', (req, res) => {
  let { id } = req.params;
  let itemToEdit = products.find((item) => item.id == id);
  let { title, price, thumbnail } = req.body;
  if (title) {
    itemToEdit.title = title;
  }
  if (price) {
    itemToEdit.price = price;
  }
  if (thumbnail) {
    itemToEdit.thumbnail = thumbnail;
  }
  res.send(itemToEdit);
});

router.delete('/:id', (req, res) => {
  let { id } = req.params;
  let index = products.findIndex((item) => item.id == id);
  products.splice(index, 1);
  res.send(products);
});
const server = app.listen(PORT, () => {
  console.log('servidor corriendo en el puerto ' + PORT);
});

server.on('error', (error) => {
  throw new Error('error al correr el servidor' + error);
});
