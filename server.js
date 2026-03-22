const express = require("express")

const app = express()

app.use(express.json())
app.use(express.static("."))

app.post("/generate", async (req,res)=>{

try{

const prompt = req.body.prompt
const seed = Math.floor(Math.random()*1000000)

const image = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}&width=1024&height=1024&model=flux`

res.json({image})

}catch(e){
res.json({error:"failed"})
}

})

app.listen(3000,()=>{
console.log("server running")
})
