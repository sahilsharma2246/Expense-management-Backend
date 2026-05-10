const transactionModel = require("../models/transactionModel");
const moment = require('moment');

const getAllTransaction = async (req , resp) =>{
    try {
        const {frequency,startDate,type} = req.body
        const transaction = await  transactionModel.find({
            ...(frequency !== "custom" ? {
                date:{
                    $gt: moment().subtract(Number(frequency),"d").toDate(), 
                },
            } : {
                date:{
                    $gte: startDate[0],
                    $lte: startDate[1],
                }
            }),
            userid:req.body.userid,
            ...(type!=="all" && {type}),
        });
        resp.status(201).json(transaction);
    
    } catch (error) {
        console.log(error);
        resp.status(500).json(error);
        
    }
};

const editTransaction = async (req,resp)=>{
    try {
        await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
        resp.status(200).send("Edit Successfully")
        
    } catch (error) {
        console.log(error);
        resp.status(500).json(error);
    }
}

const deleteTransaction = async (req,res)=>{
    try {
        await transactionModel.findOneAndDelete({_id:req.body.transactionId});
        res.status(200).send("Delete Successfully")
        
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
        
    }

}
const addTransaction = async (req, resp) =>{
    try {
        const newTransaction = new transactionModel(req.body);
        await newTransaction.save();
        resp.status(201).send("Transaction created")
    } catch (error) {
        console.log(error);
        resp.status(500).json(error);
        
    }
};

module.exports = {getAllTransaction, addTransaction,editTransaction,deleteTransaction};