import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import {
  addItemToMyList,
  deleteItemFromMyList,
  getItemsFromMyList,
  getItemFromMyList,
  updateItemFromMyList,
} from '../controllers/MyListController.js';

const router = express.Router();

// create application/json parser
const jsonParser = bodyParser.json();

dotenv.config();

router.route('/')
  .post(jsonParser, addItemToMyList);

router.route('/all/:userId')
  .get(getItemsFromMyList);

router.route('/:id')
  .get(getItemFromMyList)
  .delete(jsonParser, deleteItemFromMyList)
  .put(jsonParser, updateItemFromMyList);

export default router;
