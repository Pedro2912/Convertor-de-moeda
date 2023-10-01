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
const list = document.querySelector("#list")
const recomend = document.querySelector('.recomended')
const ul = recomend.children[0]
const ll = document.createElement('li')
country1.addEventListener('input',()=>{
let coutries = Object.keys(oo43)
if (country1.value === '') {
recomend.classList.add('hidden')

}else{
list.innerHTML = ''
	recomend.classList.remove('hidden')
	coutries.map((v)=>{
if(v.toLowerCase().includes(country1.value.toLowerCase())){ 
	list.innerHTML +=`<li class='hover:bg-slate-300 block p-1 border-solid border-b-[1px] border-slate-400'><button type="button"  class="pp text-center">${v} (${oo43[v]})</button></li>`
}

})
};
const pp = document.querySelectorAll('.pp')
buttonClick(pp)
})
function buttonClick(button){
button.forEach(element => {
element.addEventListener('click',()=> {
	if(element.textContent.length>16){
	country1.value = element.textContent.split('(')[0] 
	}else{
country1.value = element.textContent
	}
recomend.classList.add('hidden')
})	
});	
}
const values = document.querySelector("#value")
function valuess(){

}

