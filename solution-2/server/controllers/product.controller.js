import mongoose from 'mongoose';

//import models
import Product from '../models/product.model';
import User from '../models/user.model';

export const getList = (req, res) => {
    User.find({}).exec((err, products) => {
        if (err) {
            return res.json({ status: 400, message: 'Invalid Request!' });
        } else {
            return res.json({ status: 200, message: 'Feched products list successfuly.', products: products});
        }
    });
}
// export const getList = (req, res) => {
//     Product.find({}).exec((err, products) => {
//         if (err) {
//             return res.json({ status: 400, message: 'Invalid Request!' });
//         } else {
//             return res.json({ status: 400, message: 'Feched products list successfuly.' });
//         }
//     });
// }








