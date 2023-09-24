const country1 = document.getElementById("coutry")
const recomend = document.querySelector('.recomended')
const ul = recomend.children[0]
const recomendedCoutries = []
const ll = document.createElement('li')
country1.addEventListener('input',()=>{
if (country1.value === '') {
recomend.classList.add('hidden')	
}else{
recomend.classList.remove('hidden')
ul.innerHTML = ll.textContent='dede'
 }
})

