import express from 'express';

//import controller file
import * as AuthController from '../controllers/user.auth.controller';
import * as ProductController from '../controllers/product.controller';

// get an instance of express router
const router = express.Router();

router.route('/login').post(AuthController.login);
router.route('/register').post(AuthController.register);
router.route('/getList').post(ProductController.getList);


export default router;
