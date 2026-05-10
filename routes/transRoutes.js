const express = require('express');
const { addTransaction, getAllTransaction, editTransaction,deleteTransaction } = require('../controllers/transactionCtlr');


const router = express.Router();

//add transaction
router.post('/add-transections', addTransaction);

//edit transaction
router.post('/edit-transections', editTransaction);

router.post('/delete-transections', deleteTransaction);

//get transaction
router.post('/get-transections', getAllTransaction);


module.exports = router;