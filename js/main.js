fetch('https://jsonplaceholder.typicode.com/users')
.then((res)=> res.json())
.then(data => mapper(data))
let a = 0
function mapper(data){
    console.log(data);
    data.forEach(e => {
        let center__ul = document.querySelector('.center__ul')
        let newbutton = document.createElement('button')
        let newLi = document.createElement('li')
        newLi.setAttribute('class', 'newLi')
        newLi.innerHTML = e.username

        let newLi2 = document.createElement('li')
        newLi2.setAttribute('class', 'newLi2')
        newLi2.innerHTML = e.name

        newbutton.setAttribute('class', 'newBtn')
        newbutton.appendChild(newLi)
        newbutton.appendChild(newLi2)

        
        newbutton.setAttribute('id', a+=1)

        center__ul.appendChild(newbutton)
    });
}

setTimeout(()=>{
    
fetch('https://jsonplaceholder.typicode.com/posts')
.then((resp) => resp.json())
.then((posts) => {
    console.log(posts);
    tgpost(posts)
})

function tgpost(data){
    let Btn = document.querySelectorAll('.newBtn')
    let rigth__tg = document.querySelector('.rigth__ul')
    
    Btn.forEach(w=>{
        let num = 0
        num += 1
        w.addEventListener('click', ()=>{
            rigth__tg.innerHTML = ''
            data.forEach(r=>{
                if(w.id == r.userId){
                    const newLi = document.createElement('li')
                    newLi.innerHTML = r.title
                    newLi.setAttribute('class', 'post')
                    newLi.classList.add('tg__blue')
                    rigth__tg.appendChild(newLi)
                    const newLi2 = document.createElement('li')
                    let plus1 = r.userId + 1
                    if(plus1){
                        newLi2.innerHTML = r.title
                        newLi2.setAttribute('class', 'post')
                        newLi2.style.marginLeft = '-30px'
                        rigth__tg.appendChild(newLi2)
                    }
                }
            })
        })
    })
}
},100)

let btn = document.querySelectorAll('.btn')

btn.forEach(e=>{
    e.addEventListener('click', (e)=>{
        let newBtn = document.querySelectorAll('.newBtn')
        if(e == e){
            newBtn[0].classList.add('block')
            newBtn[1].style.display = 'block'
            newBtn.style.display = 'none'
        }
    })
})