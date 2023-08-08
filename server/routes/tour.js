import express from'express';
const router = express.Router()
 

import {createTour,getTours,getTour,getTourByUser} from'../controllers/tour.js'


router.post('/',createTour);
router.get('/',getTours)
router.get('/:id',getTour)
// router('/ourtours/:id',getTourByUser)
export default router