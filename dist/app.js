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
		list2.innerHTML +=`<li class='hover:bg-slate-300 block p-1 border-solid border-b-[1px] border-slate-400'><button type="button"  class="${list2.id} pp" text-center">${v} (${oo43[v]})</button></li>`
	}
	})
	};
	const pp = document.querySelectorAll('.pp')
	buttonClick(pp,coutry12,rec, list2)
	}
let c1 
let c2
	function buttonClick(button, cou, rec, list2){ 
		button.forEach(element => {
	element.addEventListener('click',()=> {
	cou.value = element.textContent
		
	rec.classList.add('hidden')
		if(list2.id === 'list'){
	c1 = oo43[element.textContent.split('(')[0].trim()]
	}else{
	c2 = oo43[element.textContent.split('(')[0].trim()]
	}
	valuess(c1,c2)
	})	
});	
}

export default function valuess(curency){
console.log(curency)
}

const values = document.querySelector("#value")
const valuesRes = document.querySelector("#valueRes")
	values.addEventListener(("input"),()=>{
let o = values.value
let j =  o.split('');
if(isNaN(Number(j[j.length-1]))){
j.pop()
j = j.join("")
values.value = j
}
	})

