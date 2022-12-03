let rePassword = document.querySelector('.rePassword')
let rePass2 = document.querySelector('.rePass2')
let rePass = document.querySelector('.rePass')
let btnR = document.querySelector('.btnR')
let settPass = document.querySelector('.btnSett')
let btnPass1 = document.querySelector('.btnPass1')
let None = document.querySelector('.None')
let rList2 = document.querySelector('.rList2')

btnR.addEventListener('click', ()=>{
    None = rePass2.value
    if(rePass2.value == rePass.value && rePass.value.length >= 4){
        tgWrapper.style.display = 'block'
        tgWrapper.style.display = 'flex'
        rePassword.style.display = 'none'
        lockPass.style.display = 'block'
        newPass = rePass2.value
        console.log(newPass);
        rePass.value = ''
        rePass2.value = ''
    }
    else{
        rePass.classList.add('errorPass')
        rePass2.classList.add('errorPass')
        rList2.style.display = 'block'
    }
})

settPass.addEventListener('click', ()=>{
    rePassword.style.display = 'block'
    rePassword.style.display = 'flex'
    lockPass.style.display = 'block'
    tgWrapper.style.display = 'none'
})

btnPass.addEventListener('click', ()=>{
    if(inpPass.value == None){
        tgWrapper.style.display = 'block'
        tgWrapper.style.display = 'flex'
        tgPassword.style.display = 'none'
        console.log('Siz yangi parol orqalik kirdingiz');
        console.log(`${None} bu esa parolingiz`);
        inpPass.classList.remove('errorPass')
        lockPass.style.display = 'block'
    }
    else{
        inpPass.classList.add('errorPass')
    }
})
