
let inputEnd = document.querySelector('.input__end')
let inp1 = document.querySelector('.inp1')
let wrapper = document.querySelector('.wrapper')
let wrapper2 = document.querySelector('.wrapper2')
let wrapp = document.querySelector('.wrapp')

let count = inputEnd.textContent = 1
let inpV = inp1.value.length

inp1.addEventListener('keyup', (e)=>{
    if(inpV + 1){
        inputEnd.innerHTML = `
        <span class="input-group-text input__end">${(count += 1)}</span>
        `
        if(inputEnd.textContent > 10){
            inputEnd.style.backgroundColor = 'red'
        }
    }
    if(e.keyCode == 8){
        inputEnd.innerHTML = `
        <span class="input-group-text input__end">${(count -= 1)}</span>
        `
    }
})
window.addEventListener('keyup', e=>{
    console.log(e.keyCode);
})


// if(inp1.value == 1){
//     wrapp.innerHTML = `<div class="input-group has-validation">
//     <span class="input-group-text">@</span>
//     <div class="form-floating is-invalid">
//       <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required>
//       <label for="floatingInputGroup2">Username</label>
//     </div>
//     <div class="invalid-feedback">
//       Please choose a username.
//     </div>
//   </div>`
// }

// inp1.addEventListener('keyup', e=>{
//     console.log(inp1.value);
//     let inpL = inp1.value.length
//     if(inpL >= 10){
//         wrapp.innerHTML = `<div class="input-group has-validation">
//         <span class="input-group-text">@</span>
//         <div class="form-floating is-invalid">
//           <input type="text" class="form-control is-invalid" id="floatingInputGroup2" placeholder="Username" required>
//           <label for="floatingInputGroup2">Enrer your username</label>
//         </div>
//         <div class="invalid-feedback">
//           Please choose a username.
//         </div>
//       </div>`
//     }
//     wrapp.innerHTML = ''
//     if(inpL <= 9){
//         wrapp.innerHTML = `
//         <div class="input-group mb-3">
//   <span class="input-group-text">@</span>
//   <div class="form-floating">
//     <input type="text" class="form-control" id="floatingInputGroup1" placeholder="Username">
//     <label for="floatingInputGroup1">Username</label>
//   </div>
// </div>`
//     }
// })
