 
// import TourModel from'../models/tour.js'
import tourModel from "../models/tour.js";
import mongoose from "mongoose";
export const createTour = async(req,res) => {

   const tour = req.body;

    console.log({tour})
   const newTour = new tourModel({
    ...tour,
    createdAt: new Date().toISOString()
   });
   try {
      await newTour.save();
      res.status(201).json(newTour)
   } catch (error) {
    res.status(404).json({message: 'Somthing went wrong'})
   }
}

export const getTours = async(req,res)=>{
  try {
     const tours = await tourModel.find()
     res.status(200).json({message: 'tour found',tours})
  } catch (error) { 
    res.status(404).json({message: 'Somthin went wrong'})
  }
}


export const getTour = async(req,res)=>{
   const{id} = req.params;
   try {
      const tour = await tourModel.findById(id)
      res.status(200).json(tour)
       
   } catch (error) {
      res.status(404).json({message:'Something went wrong'})
   }
}




export const getTourByUser = async(req,res)=>{
   const {id} = req.params;
   if(!mongoose.Types.ObjectId.isValid(id)){
      return res.status(404).json({message:'User does not exists'})
   }
   const userTour = await tourModel.find({creator:id})
   res.status(200).json(userTour)
}