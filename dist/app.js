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
const list = document.querySelector("#list")
const recomend = document.querySelector('.recomended')
const ul = recomend.children[0]
const ll = document.createElement('li')
country1.addEventListener('input',()=>{
let coutries = Object.keys(oo43)
	console.log(coutries)
if (country1.value === '') {
recomend.classList.add('hidden')

}else{
list.innerHTML = ''
	recomend.classList.remove('hidden')
coutries.map((v)=>{
if(v.toLowerCase().includes(country1.value.toLowerCase())){ 
console.log(recomend.children)
	list.innerHTML +=`<li class='hover:bg-slate-300 block p-1 border-solid border-b-[1px] border-slate-400'><button class="text-center">${v}(${oo43[v]})</button></li>`
}
})
};

});

