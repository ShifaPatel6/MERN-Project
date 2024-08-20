import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
dotenv.config();

mongoose.connect(process.env.MONGO)
       .then(() => {
              console.log('connected to database');
       }
       ).catch((err) => {
              console.log(err);
       }
       );
       const app = express();
app.listen(3000, () => {
       console.log("Server is running on port 3000!!!")
}
);