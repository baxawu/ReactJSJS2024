// const c = 10;


const tinhToan = () => {
    // const c = 20 // Ưu tiên thằng bên trong hơn ở c bên ngoài toàn cục
    const tong = (a, b) => {
        // const c= 30 // Ưu tiên thằng trong cùng
        // return a + b + c;
        return a + b ;
    }

    const hieu = (a, b) => {
        return a - b;
    }
    const tich = (a, b) => {
        return a * b;
    }
    const thuong = (a, b) => {
        return a / b;
    }
    return {
        tong: tong,
        hieu: hieu,
        tich: tich,
        thuong: thuong
    }
}

// const tt = tinhToan()
// console.log(tt);
// //Lấy giá trị kiểu Object
// console.log(tt.tong(10,40));
// console.log(tt.hieu(10,40));
// console.log(tt.tich(10,40));
// console.log(tt.thuong(10,40));




//cloresure gọi hàm kiểu Object

const infor = () => {
    let fullName = "Lê Nhựt Phi"
    
    const getFullName= () =>{
        return fullName
    }

    const setFullName= (string) =>{
        fullName = string
    }

    return {
        get : getFullName,
        set : setFullName
    }
}

const inforUser = infor()
console.log(inforUser.get());
console.log(inforUser.set(`Huỳnh Cát Tâm Đoan`));
console.log(inforUser.get());