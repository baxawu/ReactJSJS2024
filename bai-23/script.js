const input = document.querySelector("input")
const buttonSend = document.querySelector("#send")
const buttonClear = document.querySelector("#clear")
const buttonUp = document.querySelector("#up")
const buttonClearAll = document.querySelector("#clearAll")
const resultDiv= document.querySelector("#result")

buttonSend.addEventListener("click", () =>{
    const name = input.name
    const value = input.value

    if(value) {
        //Thêm dữ liệu (key,value)
        localStorage.setItem(name, value)

        //Lấy dữ liệu (value)
        const email = localStorage.getItem("email")
        resultDiv.innerHTML = email
    }

})

buttonClear.addEventListener("click", ()=>{
    //Xóa dữ liệu (value)
localStorage.removeItem("email")
resultDiv.innerHTML = ""
})


let count = 0
buttonUp.addEventListener("click", ()=>{
localStorage.setItem(`key${count}`,`value${count}`)
localStorage.removeItem(`key${count}`)
count++
})

buttonClearAll.addEventListener("click", ()=>{
    //Xóa tất cả các key và value
    localStorage.clear()
});

// for (let i = 0 ; i < localStorage.length; i++) {
//     console.log(i);
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     console.log(key, value);
// }


//SessionStorage hoạt động theo phiên, nếu đóng trình duyệt sẽ mất

// sessionStorage.setItem("token","hfijjagchdfaugdfakndhjka")