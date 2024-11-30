import mongoose from 'mongoose'

const connectDB= async()=>{
    mongoose.connection.on('connected',()=>console.log('Database connected'))
    
    await mongoose.connect(`${process.env.MANGODB_URI}/precripto`)

}
export default connectDB