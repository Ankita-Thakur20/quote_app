const h1 = document.getElementById("heading")
const p =document.querySelector("p")
const button = document.getElementById("btn")
const container =document.getElementById('cont')
 
let colors=['#F0A8D0','#F7B5CA','#FFC6C6','#FFEBD4']
let count = 0;

   const getQuote = async()=>{
   const response= await fetch('http://quotable.io/random')
   const data = await response.json()
   h1.innerText=data.content
   p.innerText=data.author

// count++;
//    console.log(data)
}
// getQuote();

button.addEventListener('click', getQuote);
setInterval(()=>{
    container.style.backgroundColor = colors[count]
    count++
    if (count>=colors.length){
        count = 0
    }
    getQuote();
},5000);