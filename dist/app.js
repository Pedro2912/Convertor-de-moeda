async function data(){
let dd = await fetch("data.json");
let datd = await dd.json()
 datd = JSON.stringify(datd)
datd = JSON.parse(datd)
return datd 
}
let oo43 
async function ddd () {
let o =  await data()
let o1 = o.currency
 oo43 =  o1
}
ddd()
const country1 = document.getElementById("coutry")
const recomend = document.querySelector('.recomended')
const ul = recomend.children[0]
const ll = document.createElement('li')
country1.addEventListener('input',()=>{
	console.log(oo43)
if (country1.value === '') {
recomend.classList.add('hidden')	
}else{
recomend.classList.remove('hidden')	
};

});

