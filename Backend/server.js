
import express, { response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import axios from 'axios';
import crypto from 'crypto';
import bodyParser from 'body-parser';
import connectToDatabase from './server/db/db.js';
import errorHandler from './server/middleware/errorHandler.js'
import { enquiryRoutes ,contactRoutes,countRoutes} from './server/routes/index.js';
import { request } from 'http';


dotenv.config();
connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(errorHandler);
app.use(bodyParser.json());
app.use("/course-enquiry", enquiryRoutes);
app.use("/contactus", contactRoutes);
app.use("/count", countRoutes);

app.get('/', (req, res) => {
    res.send('Trust-Backend!');
});

// let salt_key ='96434309-7796-489d-8924-ab56988a6076';
// let merchant_id = "PGTESTPAYUAT86";
let salt_key ='34ddb360-29e7-4861-af0f-e15eecff2671';
let merchant_id = "M22TM71N47FNZ";

app.post('/order', async (req, res) => {
    try {
        let {
            transactionId,
            amount,
            name,
            mobile,
        } = req.body;
        
        const data = {
            merchantId: merchant_id, 
            merchantTransactionId: transactionId,
            name: name,
            amount: amount * 100,
            mobileNumber:mobile,
            redirectUrl: `http://localhost:3009/status?id=${transactionId}`, 
            redirectMode: 'POST',
            paymentInstrument: { type: "PAY_PAGE" }
        }
        
        const payload = JSON.stringify(data);
        const payloadMain = Buffer.from(payload).toString('base64');
        const string = payloadMain + '/pg/v1/pay' + salt_key; 
        const Sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = Sha256 + '###' + 1;

        // const prod_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay";
        const prod_URL = "https://api.phonepe.com/apis/hermes/pg/v1/pay";

        const options = {
            method: "POST",
            url: prod_URL, 
            headers: {
                'accept': "application/json",
                "Content-Type": "application/json", 
                "X-VERIFY": checksum
            },
            data: {
                request: payloadMain
            }
        }
        
        const response = await axios(options);
        res.json(response.data);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

app.post('/status', async (req, res) => {
    try {
        const merchantTransactionId = req.query.id;
        const merchantId = merchant_id;
        const keyIndex = 1;

        const string = `/pg/v1/status/${merchantId}/${merchantTransactionId}` + salt_key;
        const Sha256 = crypto.createHash('sha256').update(string).digest('hex');
        const checksum = Sha256 + '###' + keyIndex;

        const url = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`;

        const response = await axios.get(url, {
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json',
                'X-VERIFY': checksum,
                'X-MERCHANT-ID': merchantId,
            },
        });

        console.log("Payment Status Response:", response.data); // Debugging

        if (response.data.success) {
            return res.redirect('http://localhost:3000');
        } else {
            return res.redirect('https://localhost:3000/home?payment=fail');
        }
    } catch (error) {
        console.error("Error checking payment status:", error);
        res.status(500).json({ error: "Failed to check payment status" });
    }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`our trust-backend Server is running on http://localhost:${ PORT }`);
});
