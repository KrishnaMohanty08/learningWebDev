import mongoose from "mongoose";
const employeeSchema =new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})
const employee =mongoose.model('employee',employeeSchema);
export default employee;
