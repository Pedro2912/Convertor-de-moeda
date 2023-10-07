window.addEventListener(("click"),()=>{recomend.classList.add("hidden")})
let oo43 
async function data(){
let dd = await fetch("data.json");
let datd = await dd.json()
 datd = JSON.stringify(datd)
datd = JSON.parse(datd)
oo43 = datd.currency
return datd 
}
data()
const country1 = document.getElementById("coutry")
const countryRes = document.getElementById("coutryResult")
const list = document.querySelector("#list")
const listRes = document.querySelector("#listRes")
const recomend = document.querySelector('.recomended')
const recomendRes = document.querySelector('.recomendedRes')
const ul = recomend.children[0]
const ll = document.createElement('li')
country1.addEventListener('input',()=>{
	search(country1,list,recomend)
})
countryRes.addEventListener(("input"),()=>{
search(countryRes,listRes,recomendRes)
})
// change the values to a inside value in the function to not need to create a copie of the function for every form 
function search(coutry12,list2,rec){
let coutries = Object.keys(oo43)
if (coutry12.value === '') {
rec.classList.add('hidden')

}else{
list2.innerHTML = ''
	rec.classList.remove('hidden')
	coutries.map((v)=>{
if(v.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(coutry12.value.toLowerCase())){ 
	list2.innerHTML +=`<li class='hover:bg-slate-300 block p-1 border-solid border-b-[1px] border-slate-400'><button type="button"  class="pp text-center">${v} (${oo43[v]})</button></li>`
}
})
};
const pp = document.querySelectorAll('.pp')
buttonClick(pp,coutry12,rec)
}
function buttonClick(button, cou, rec){ 
	button.forEach(element => {
element.addEventListener('click',()=> {
cou.value = element.textContent
	
rec.classList.add('hidden')
valuess(oo43[element.textContent])
})	
});	
}
const values = document.querySelector("#value")
const valuesRes = document.querySelector("#valueRes")
function valuess(currency){
}
	values.addEventListener(("input"),()=>{
let o = values.value
let j =  o.split('');
j = o[o.length-1]
console.log(Number(j))	
})

