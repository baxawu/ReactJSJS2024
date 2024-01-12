//VD1: Promise thông thường để sử lý Callback hell
// var a = 10

// var promise = new Promise((resolve, reject) =>  {
//     if (a !== undefined && a !== null && a !== "")
//     {
//         resolve(a) // Giả sử thành công

//     } else{
//         reject(a) // Giả sử thất bại
//     }


// })

// promise
// .then ((success) => {
//     console.log(success);
//     return success
// })
// .then ((success2) => {
//     const b = 20
//     console.log(success2 + b);
//     return success2 + b
// })
// .then ((success3) => {
//     const c =30
//     console.log(success3 + c);
// })
// .catch((error) => {
//     console.log("Lỗi",error);
// })
// .finally (() => {
//     console.log("Luôn luôn vào đây");
// })

//VD 2: Có 3 trạng thái pending, fullfield, rejected
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve()
//         reject()
//     }, 3000)
// })
// console.log(promise);

// setTimeout(() => {
//     console.log("Sau 1 giây", promise);
// },1000)

// setTimeout(() => {
//     console.log("Sau 1 giây", promise);
// },2000)

// setTimeout(() => {
//     console.log("Sau 1 giây", promise);
// },3000)


//VD 3: Promise All
let a = 10 
let b = 20 
let c = 30 
let d = 40 
let e = 50 
let f = 60 


let sum1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(a + b)
    }, 3000)
})

let sum2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(c + d)
    }, 4000)
})

let sum3 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve(e + f)
    }, 6000)
})

Promise.all([sum1, sum2, sum3])
.then(([sum1, sum2, sum3])=>{
    let sum = sum1 + sum2 + sum3
    console.log(sum);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("Luôn vào đây!");
})


