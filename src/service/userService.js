const userModel = require('../model/schema')

const insertUserData = async(req,res)=>{
    const{name,phoneNo,age,gender}=req.body
    try {
        const userdetails = new userModel({
            name:name,
            phoneNo:phoneNo,
            age:age,
            gender:gender
        })
        await userdetails.save()
        res.send('userData successfully inserted')
    } catch (error) {
      console.log(error)
      res.status(500).send('Internal server error');
    }
}

const getData = async(req,res)=>{
    try {
        const getUserData =  await userModel.find()
        res.send(getUserData);
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error');
    }
}

const updateUser = async(req,res)=>{
    const{name,phoneNo,age,gender}=req.body
    const id = req.params.id
    try {
         await userModel.findByIdAndUpdate(id,{
            name,
            phoneNo,
            age,
            gender
        });
        res.send('data updated successfully')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error');
    }
}

const deleteData = async(req,res)=>{
    try {
        const id = req.params.id
        await userModel.findByIdAndDelete(id)
        res.send('user deleted successfully')
    } catch (error) {
        console.log(error)
        res.status(500).send('Internal server error');
    }
}

module.exports = {insertUserData,getData,updateUser,deleteData}