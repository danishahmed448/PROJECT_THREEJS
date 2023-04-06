import express from 'express';
import * as dotenv from 'dotenv';
import {Configuration,OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();
const config = new Configuration ({
    apiKey:process.env.OPENAI_API_KEY,
    organization:process.env.OPENAI_API_ORG
})
const openai = new OpenAIApi(config);

router.route('/').get((req,res)=>{
    res.status(200).json({message:"Hellow from DAALLE"})
})

router.route('/').post(async(req,res)=>{
    try {
        const {prompt} = req.body;
      
        
        const response = await openai.createImage({
            prompt:"A cute cat",
            n:1,
            size:'1024x1024',
            response_format:'b64_json'
        });
        console.log(response)
        const image = response.data.data[0].b64_json;
        res.status(200).json({photo:image});
    } catch (error) {
        if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
          } else {
            console.log(error.message);
          }
        res.status(500).json({message:"Something went wrong"});
    }
})

export default router;