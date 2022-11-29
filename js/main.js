// let loading = document.querySelector('.loading')

// const test = setInterval(() => {
//     loading
// },1000);

// setTimeout(() => {
//     loading.style.display = 'none'
// }, 2000);

let loading = document.querySelector('.loading')

const test = setInterval(()=>{
    fetch('http://jsonplaceholder.typicode.com/photos')
    .then((res)=> res.json())
    .then((data)=> {
        console.log(data);
    })
},1000)

setTimeout(()=>{
    clearInterval(test)
    loading.style.display = ' none'
},1000)


