const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())
app.use(express.static("."))

app.post("/generate", async (req,res)=>{

const prompt = req.body.prompt

const response = await axios.post(
"https://api.openai.com/v1/images/generations",
{
model:"gpt-image-1",
prompt:prompt
},
{
headers:{
"Authorization":"Bearer YOUR_API_KEY"
}
})

res.json({
image: response.data.data[0].url
})

})

app.listen(3000)
