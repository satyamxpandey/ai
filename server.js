const express = require("express")
const axios = require("axios")

const app = express()

app.use(express.json())
app.use(express.static("."))

app.post("/generate", async (req,res)=>{

try{

const prompt = req.body.prompt

const response = await axios({
method: "post",
url: "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-2",
data: {
inputs: prompt
},
responseType: "arraybuffer",
headers: {
"Content-Type": "application/json"
}
})

const base64 = Buffer.from(response.data).toString("base64")

const image = `data:image/png;base64,${base64}`

res.json({image})

}catch(e){
console.log(e.message)
res.json({error:"error generating"})
}

})

app.listen(3000,()=>{
console.log("server started")
})
