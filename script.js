async function generate(){

const prompt = document.getElementById("prompt").value

const seed = Math.floor(Math.random()*1000000)

const image =
`https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?seed=${seed}&width=1024&height=1024&model=flux`

document.getElementById("result").innerHTML =
`<img src="${image}" />`

}
