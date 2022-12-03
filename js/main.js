let tgWrapper = document.querySelector('.wrapper')
let tgPassword = document.querySelector('.password')
let rigth__tg = document.querySelector('.rigth__ul')
let inpPass = document.querySelector('.inpPass')
let btnPass = document.querySelector('.btnPass')
let lockPass = document.querySelector('.lockBtn')
let setPass = document.querySelector('.lockSett')

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

    let btn = document.querySelectorAll('.btn')
    let newBttn = document.querySelectorAll('.newBtn')
    let elbtnFul = document.querySelector('.btn__full')
    
    elbtnFul.addEventListener('click', (e)=>{
        console.log(e.target.id);
        newBttn.forEach(i=>{
            if(e.target.id == 'all'){
                i.style.display = 'block'
            }
        })
    })

    btn.forEach(e=>{
        rigth__tg.innerHTML = ''
        e.addEventListener('click', ()=>{
            newBttn.forEach(a => {
                rigth__tg.innerHTML = ''
                if(e.id == 1){
                    a.style.display = 'none'
                    newBttn[0].style.display = 'block'
                    newBttn[1].style.display = 'block'
                    console.log(e.id);
                }
                else if(e.id == 2){
                    a.style.display = 'none'
                    newBttn[2].style.display = 'block'
                    newBttn[3].style.display = 'block'
                }
                else if(e.id == 3){
                    a.style.display = 'none'
                    newBttn[4].style.display = 'block'
                    newBttn[5].style.display = 'block'
                }
                else if(e.id == 4){
                    a.style.display = 'none'
                    newBttn[6].style.display = 'block'
                    newBttn[7].style.display = 'block'
                }
                else if(e.id == 5){
                    a.style.display = 'none'
                    newBttn[8].style.display = 'block'
                    newBttn[9].style.display = 'block'
                }
                else{
                    console.log('hato');
                }
            })
        })
    })    
}
},100)

let elinp1 = document.querySelector('.inp1')

elinp1.addEventListener('click', ()=>{
    elinp1.style.backgroundColor = '#0E1621'
    elinp1.style.width = '120px'
    window.addEventListener('mousedown', ()=>{
        elinp1.style.width = '100px'
    })
})

let elbtn2 = document.querySelector('.btn2')
let eltg__icon = document.querySelector('.tg__icon')
let elbtn3 = document.querySelector('.btn3')
let elbtnFul = document.querySelector('.btn__full')
let setPass1 = document.querySelector('.btnSett')

elbtn3.style.display = 'none'

elbtn2.addEventListener('click', ()=>{
    eltg__icon.style.display = 'block'
    eltg__icon.style.transition = '0.5s all ease'
    elbtn2.style.display = 'none'
    elbtn3.style.display = 'block'
    elbtnFul.style.display = 'none'
    setPass1.style.display = 'none'
})

elbtn3.addEventListener('click', ()=>{
    eltg__icon.style.display = 'none'
    eltg__icon.style.transition = '0.5s all'
    elbtn2.style.display = 'block'
    elbtn3.style.display = 'none'
    elbtnFul.style.display = 'block'
    setPass1.style.display = 'block'
})

let elbtn4 = document.querySelector('.btn4')
let elbtn5 = document.querySelector('.btn5')
let elbtn6 = document.querySelector('.btn6')
let ellft = document.querySelector('.lft')

elbtn4.addEventListener('click', (e)=>{
    if(e == e){
        elbtn5.style.display = 'block'
        elbtn6.style.display = 'block'
    }
    window.addEventListener('mousedown', ()=>{
        elbtn5.style.display = 'none'
        elbtn6.style.display = 'none'
        ellft.style.backgroundColor = 'transparent'
    })
})


ellft.addEventListener('click', ()=>{
    ellft.style.backgroundColor = '#17212B'
})

window.addEventListener('keyup', (e)=>{
    if(e.keyCode == 13){
        if(inpPass.value == '1234'){
            tgWrapper.style.display = 'block'
            tgWrapper.style.display = 'flex'
            tgPassword.style.display = 'none'
        }
        else{
            inpPass.classList.add('errorPass')
        }
    }
})

btnPass.addEventListener('click', ()=>{
    if(inpPass.value == '1234'){
        tgWrapper.style.display = 'block'
        tgWrapper.style.display = 'flex'
        tgPassword.style.display = 'none'
        console.log('Siz eski parol orqalik kirdingiz');
    }
    else{
        inpPass.classList.add('errorPass')
    }
})

lockPass.addEventListener('click', ()=>{
    tgWrapper.style.display = 'none'
    tgPassword.style.display = 'block'
    tgPassword.style.display = 'flex'
    inpPass.value = ''
})

let backInp = document.querySelector('.backInp')

backInp.addEventListener('click', ()=>{
    inpPass.value = '1234'
})