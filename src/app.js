import name from './API.js'
const ss43 = name
document.addEventListener(("click"),()=>{
	recomend.classList.add("hidden")
	recomendRes.classList.add('hidden')
})
let oo43 
let code
async function data(){
let dd = await fetch("/data.json");
let datd = await dd.json()
	console.log(datd)
datd = JSON.parse(datd)
oo43 = datd.currency
code = datd.abreviation
}
data()
const country1 = document.getElementById("coutry")
const countryRes = document.getElementById("coutryResult")

country1.value= 'Brasil'
countryRes.value= 'Estados Unidos'

const list = document.querySelector("#list")
const listRes = document.querySelector("#listRes")
const recomend = document.querySelector('.recomended')
const recomendRes = document.querySelector('.recomendedRes')
country1.addEventListener('input',()=>{
	search(country1,list,recomend,sig)
})
countryRes.addEventListener(("input"),()=>{
search(countryRes,listRes,recomendRes,sig2)
})
function search(coutry12,list2,rec, sigs){
let coutries = Object.keys(oo43)
if (coutry12.value === '') {
rec.classList.add('hidden')

}else{
list2.innerHTML = ''
	rec.classList.remove('hidden')
	coutries.map((v)=>{
if(`${v}${oo43[v]}`.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase().includes(coutry12.value.toLowerCase().trim())){ 
	list2.innerHTML +=`<li class='hover:bg-slate-300 w-[385px] h-8 block p-1 border-solid border-b-[1px] hover:border-r-[2px]  border-slate-400'>
	<button type="button"  class=" relative h-8 top-0 w-[300px] ${list2.id} pp"> 
	<img class="relative w-[41px] h-6 left-[-34px] top-[0px]"
  src="https://flagcdn.com/h80/${code[v].toLowerCase()}.png"
  srcset="https://flagcdn.com/h160/${code[v].toLowerCase()}.png 2x,
		https://flagcdn.com/h240/${code[v].toLowerCase()}.png 3x"
  height="80"
	alt="${v}">
	<span class='inline relative top-[-24px]'>
	${v} (${oo43[v]})
	</span></button></li>`
	}
	})
	};
	const pp = document.querySelectorAll('.pp')
	buttonClick(pp,coutry12,rec, list2,sigs)
	}
let c1 = 'BRL' 
let c2 = 'USD'
const flags = document.querySelector('#flags1')
const flags2 = document.querySelector('#flags2')
function buttonClick(button, cou, rec, list2,sig){ 
		button.forEach(element => {
	element.addEventListener('click',()=> {
		let g = element.textContent
		g = g.trim('')
		g = g.split('(')
			g[1] = g[1].replace(')','')
        sig.textContent = g[1]
         
	cou.value = g[0]
rec.classList.add('hidden')
		if(list2.id === 'list'){
	c1 = oo43[element.textContent.split('(')[0].trim()]
	let g4 = element.textContent.split('(')[0].trim()
			flags.src = `https://flagcdn.com/h24/${code[g4].toLowerCase()}.png`
        flags.srcset=`https://flagcdn.com/h48/${code[g4].toLowerCase()}.png 2x`
        flags.alt=g4
					}else{
	c2 = oo43[element.textContent.split('(')[0].trim()]
	let g5 = element.textContent.split('(')[0].trim()
			flags2.src = `https://flagcdn.com/h24/${code[g5].toLowerCase()}.png`
        flags2.srcset=`https://flagcdn.com/h48/${code[g5].toLowerCase()}.png 2x`
        flags2.alt=g5
		}
		convert()
	})	
});	
}
const values = document.querySelector("#value")
const valuesRes = document.querySelector("#valueRes")
value.value = 1
function convert(){
let h = 0
let value1st = Number((values.value).replaceAll('.',"").replace(',','.'))
let convertValue = (ss43.data[c1]['value']);
let value2st = Number(ss43.data[c2]['value']);
let valu = (value1st/convertValue*value2st)
if(valu<10){h = 5}
else if(valu<100){h = 4}
else if(valu<1000){h = 3}
else if(valu<10000){h = 2}
else if(valu<100000){h = 1}
valuesRes.value = Number(valu).toLocaleString('pt-BR', {maximumFractionDigits:h});
}
convert()

	values.addEventListener(("input"),()=>{
	
let o = values.value;
		if(o[o.length-1] == ".")o = o.replace(/.$/,",")
 	if(o[o.length-1] == ',' && o.indexOf(',') !== o.length-1) o = o.slice(0,o.length-1)
		o = o.replace(/[^0-9,.]/,'');
 o = o.replaceAll('.', ',');
	values.value = o
	convert()
	}
	)

const deletebtn = document.querySelector('#button1') 
const deletebtn2 = document.querySelector('#button2')
const sig = document.querySelector('#sig')
const sig2 = document.querySelector('#sig2')
deletebtn.addEventListener('click',(e)=>{
	e.preventDefault()
c1 = ''
country1.value = '' 
	flags.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/800px-HD_transparent_picture.png`
        flags.srcset=``
	flags.alt= ''
	sig.textContent = ''

})
deletebtn2.addEventListener('click',(e)=>{
	e.preventDefault()
c2 = ''
countryRes.value = '' 
	flags2.src = `https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/800px-HD_transparent_picture.png`
        flags2.srcset=``
	flags2.alt= ''
	sig2.textContent = ''
})
 document.querySelector('#reverser').addEventListener('click',()=>{
	let g = c1, g1 = c2, g2 = country1.value, g3 = countryRes.value, g4 = flags.src, g5 = flags2.src, g6 = sig.textContent, g7 = sig2.textContent,g8 = flags.srcset, g9 = flags2.srcset
	c1 = g1,c2 = g
	country1.value = g3 , countryRes.value = g2
        flags.src = g5
	flags2.src = g4
	flags.srcset = g9
	flags2.srcset = g8
	sig.textContent = g7
	sig2.textContent = g6
	 convert()
})
document.querySelector('#copy1').addEventListener('click',()=>{
const copy = document.querySelector('#copyText')
copy.textContent = 'copiado'
copy.style.left = '340px'
	navigator.clipboard.writeText(values.value)
})
document.querySelector('#copy2').addEventListener('click',()=>{
const copy = document.querySelector('#copy2Text')
copy.textContent = 'copiado'
copy.style.left = '340px'
	navigator.clipboard.writeText(valuesRes.value)
})
