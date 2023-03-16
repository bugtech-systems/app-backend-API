import express from 'express';
import {
    createUser,
    generateOtp,
    signin
} from '../controllers/auth.js';
import { authorize, protect } from '../middleware/auth.js';

const router = express.Router();


router.route('/signup').post([
    // protect,
    // authorize('admin'), 
    createUser])

router.route('/signin').post(signin)
router.route('/generate-otp').post([
    protect,
    authorize('user'), 
    generateOtp])

export default router;