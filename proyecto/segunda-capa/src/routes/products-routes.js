import express from 'express';
import {
  getDatosControllers,
  postDatosControllers,
} from '../controllers/products-controller';

const router = express.Router();

// get
router.get("/", getDatosControllers);

// POST
router.post("/", postDatosControllers);

module.exports = router;
