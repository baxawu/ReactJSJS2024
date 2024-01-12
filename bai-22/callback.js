import { tong } from "./helpersCallback/tong.js"; 
import { kiemTraChanLe } from "./helpersCallback/kiemTraChanLe.js";
import { kiemTraSoDuong } from "./helpersCallback/kiemTraSoDuong.js";

//VD1: dạng thường
// function ham1() {
//     console.log("ham1");
// }

// function ham2() {
//     console.log("ham2");
// }

// ham1()
// ham2()

//VD2: Dạng callback
// function ham1(callback) {
//     console.log("ham1");
//     callback()
// }

// function ham2() {
//     console.log("ham2");
// }

// ham1(ham2);

//VD3: 

// function kiemTraSoDuong(so) {
//     if (so >= 0) {
//         console.log("Đây là số dương");
//     } else {
//         console.log("Đây là số âm");
//     }
// }

// function kiemTraChanLe(so) {
//     if (so % 2 === 0) {
//         console.log("Đây là số chẵn");
//     } else {
//         console.log("Đây là số lẻ");
//     }
// }

// function tong (a, b, callback){
//     let ketQua = a + b
//     console.log(ketQua);
//     callback(ketQua)
// }

tong(10,20,kiemTraSoDuong )

tong(10,15,kiemTraChanLe )

//VD4: Tách theo dạng module ở dòng 1,2,3 và gọi hàm ở dòng 53, 55

tong(1,-20,kiemTraSoDuong )

tong(10,-15,kiemTraChanLe )


