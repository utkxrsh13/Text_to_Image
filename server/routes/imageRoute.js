import express from 'express'
import {getImage} from '../controllers/imageController.js'
import userAuth from '../middlewares/auth.js';

const imageRouter = express.Router();

imageRouter.post('/generate-image',userAuth,getImage)

export default imageRouter