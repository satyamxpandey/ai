const express = require("express")

const app = express()

app.use(express.json())
app.use(express.static("."))

app.post("/generate", async (req,res)=>{

try{

const prompt = req.body.prompt

const image = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}`

res.json({image})

}catch(e){

res.json({error:"failed"})

}

})

app.listen(3000,()=>{
console.log("server running")
})
