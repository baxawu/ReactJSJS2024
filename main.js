//1. Let và const
/*1. Let: dùng để khai báo biến (thay thế và khắc phục 1 số nhược điểm của var) 
Và có thể gán giá trị nhiều lần(re-assign)*/

/*2. Const: dùng để khai báo biến không thay đổi được nhưng có thể gán giá trị được  */

//VD của Let:
// var iNum = 5
// if (true) {
//     var iNum=10
// }
// console.log(iNum);
// let iNum = 5
// // let trong Block Scope nên là 2 biến let khác nhau
// if (true)
// {
//     let iNum=10
//     console.log(iNum);
// }
// console.log(iNum);

//VD của const
// const pi =3.14
// pi = 5
// console.log(pi); // sai vì không thể gán giá trị nó kh chấp nhận được

//Tuy nhiên đối với const là 1 đối tượng (Object) thì chúng ta có thể thay đổi được giá trị

//VD:
// const object = {hoTen: 'nguyen van a', Tuoi: 18}
// object.hoTen ="nguyen van b"
// object.Tuoi = 20 // Đúng vì có thể gán giá trị bằng những thuôc tính trong object
// console.log(object);

// object = {hoTen: 'nguyen van b', Tuoi: 19} //Sai vì điều này không thể vì const không gán lại được những object khác

//2. Hoisting var, let and const
//Hoisting nghĩa là có thể sử dụng 1 biến xong sau đó mới cần khai bao biến đó
//Đối với var: khai báo biến tùy ý mặc dù chưa khai báo
//Đối với let và const: khai báo biến trước rồi mới được sử dụng biến đó

// var a;
// console.log(a); // undefined
// a = 20
// console.log(a)// 20

// a = 10
// console.log(a); // Sai vì không thể gọi biến trước khi khai báo
// let a = 20

// a=10
// console.log(a); // Sai vì không thể gọi biến trước khi khai báo
// const a = 20;

//Tổng kết Hoisting là sẽ kéo tất cả các function scope lên đầu

//3. Funtion Scope: Phạm vi khai báo biến bên trong 1 hàm, biến bên trong scope sẽ không lấy được từ bên ngoài. Tuy nhiên biến toàn cục có thể lấy được và sử dụng biến bên trong hàm

// var a = 10; //Global scope
// var functionA = function () {
//   var a = 100; //Function scope
//   console.log(a); //Function scope
// };
// functionA();

// console.log(a); //Global scope

//4. Block Scope: Phạm vi khai báo biến bên trong 1 cặp ngoặc nhọn {}. Biến bên trong scope sẽ không lấy được từ bên ngoài.

// if (true) {
//   var x = 10;
// }
// console.log(x); //10

// if (true) {
//   let y = 10;
// }
// console.log(y); // y is not defined

//Như ta thấy, var không tuân thủ theo quy luật này, nên sử dụng let để khắc phục

//VD:
// var mangButton = document.getElementsByTagName("button");
// for(let i=0 ;i < 3; i++) {
//     mangButton[i].onclick = function() {
//         alert(i)
//     }
// }
// giải thích
// {
// let z= 0
// mangButton[z].onclick= function() {
//     alert(z)
// }
// }
// z=10

//Khi đặt let thì giá trị của z sẽ là 0 vì nó nằm trong phạm vi block scope

//khi đặt là var thì giá trị z sẽ là 10 vì nó sẽ lấy toàn  cục và sẽ bị ảnh hưởng code bên trong

//5. Arrow function: là function được viết rút gọn từ khóa function thay bằng dấu mũi tên. Trong trường hợp hàm chỉ có 1 lệnh return thì ta có thể lượt bỏ chữ return và cặp ngoặc nhọn {}

//ES5
// let hocVien = {
//     hoTen: 'nguyen van a',
//     lop: '12b2',
//     layThongTinHocVien: function(){
//        function hienThiThongTin() {
//         console.log('Họ tên: ' + this.hoTen + 'Lớp ' + this.lop);
//     }
//     hienThiThongTin()
// }
// }
// hocVien.layThongTinHocVien() //Kết quả là Họ tên: undefined lớp: undefined

//Khi không dùng Arrow function nó sẽ hiểu ngữ cảnh của con trỏ this là của window

//ES 6
// let hocVien = {
//     hoTen: 'nguyen van a',
//     lop: '12b2',
//     layThongTinHocVien: function(){
//        let hienThiThongTin= () => {
//         console.log('Họ tên: ' + this.hoTen + ' Lớp: ' + this.lop);
//     }
//     hienThiThongTin()
// }
// }
// hocVien.layThongTinHocVien()

//Khi sử dụng Arrow function nó sẽ hiểu ngữ cảnh của con trỏ this là của đổi tượng hocVien

//6.Resparameter: Rest là các tham số truyền vào sẽ hợp thành 1 mảng, dùng khi không biết có bao nhiêu tham số đầu vào một hàm

//VD: tính tổng

// function tinhTong(a,b){
//     console.log(a+b);
//     return a+b
// }
//Hàm này nó không lấy nó chỉ lấy ở hàm dưới

// function tinhTong(a,b,c){
//     console.log(a+b+c);
//     return a+b+c
// }
// tinhTong(1,4) // NaN vì hàm trên có 3 tham số, ta truyền thiếu đối số nên là nó sẽ ra NaN
// tinhTong(1,2,3) //6

//Vì JS không cho tính hàm chồng lên nhau.

//VD: Tính tổng ES 6 sử dụng ...resParam

function tinhTongRest(...resParam) {
  let tong = 0;
  for (let i = 0; i < resParam.length; i++) {
    tong += resParam[i];
  }
  console.log(tong);
  return tong;
}

tinhTongRest(1, 2, 3);
tinhTongRest(1, 2);

//VD 2 định nghĩa hàm chồng nhau:
// let mangHocVien = [
//     {
//         maHocVien:0,
//         tenHocVien:'Nguyen Van C',
//     },
//     {
//         maHocVien:1,
//         tenHocVien:'Nguyen Van D',
//     }
// ]

// function xuLyMangHocVien(...resParam){
//     if(resParam.length===2){
//         resParam[1].push(resParam[0])
//         console.log(resParam[1]);
//     } else if (resParam.length > 2){
//         switch (resParam[2]){
//             case 'Delete': {
//                 let index = resParam[1].findIndex(hv => hv.maHocVien === resParam[0].maHocVien)
//                 resParam[1].splice(index,1)
//                 console.log(resParam[1]);
//             };break;
//             case 'Update': {
//                 let index = resParam[1].findIndex(hv => hv.maHocVien === resParam[0].maHocVien)
//                 resParam[1][index].tenHocVien ="Phi Lê";
//                 console.log(resParam[1]);
//             };break;
//         }
//     } else{
//         console.log(resParam[0]);
//     }
// }

// let hv = {
//     maHocVien:2,
//     tenHocVien:'Nguyen Van E',
// }

// xuLyMangHocVien(mangHocVien)
// xuLyMangHocVien(hv, mangHocVien)
// // xuLyMangHocVien(hv, mangHocVien, 'Delete') (Không cmt sẽ lỗi vì nó đã xóa index nên không tìm thấy update)
// xuLyMangHocVien(hv, mangHocVien, 'Update')

//7.Spread Operator: là toán tử 3 chấm, dùng để thêm phần tử vào mảng hoặc thêm thuộc tính vào object, ngược với Rest nó nhận vào mảng và trả ra từng phần tử (Nôm na là kiểu dạng copy từ mảng (hoặc object) gốc sang mảng (hoặc object) mới mà thay đổi mảng (hoặc object) mới mà không thay đổi mảng (hoặc object) gốc)

//VD về mảng:
// let mangCu = [1,2,3,4,5,6]

// let mangMoi = [...mangCu]
// console.log(mangMoi);

//Lưu ý, khi sử dụng Spreadoperator thao tác thay đổi các phần tử trên mangMoi nó sẽ không thay đổi các phần tử trên mangCu

// VD về Object:
// let hs1 = {maHS: 1, tenHS: 'Nguyễn văn A'}

// let hs2 = {...hs1, lopHs: 1}
// hs2.tenHS = 'Phi Lê'
// console.log(hs2);

//9. Default Parameter: Cho phép set giá trị mặc định của tham số (Parmeters) của hàm nếu như không có đối số (arguments) truyền vào và ngược lại nếu có đổi số truyền vào thì nó sẽ thay đổi tham số mặc định

function tinhTongDefaultParams(a = 2, b = 5, c = a + b) {
  console.log(a + b + c);
  return a + b;
}

tinhTongDefaultParams(100, 100, 100);

/*Lưu ý: 
Tham số theo thứ tự từ trái sang phải
Tham số mặc định luôn luôn nằm ở bên phải
Tham số thứ 3 sẽ được sử dụng giá trị của 2 tham số phía trước nó.
Tóm lại: Truyền đối số thì tham số mặc đinh lấy đối số mình truyền và không truyền đối số thì nó sẽ lấy tham số mặc định
*/

//10. For...in (Duyệt theo mảng theo index)
//Nó sẽ trả từ 0 1 2 3 4 5 tùy theo trong mảng có bao nhiêu phần tử
let arrayName = [
  { name: "Car", age: 18 },
  { name: "John", age: 28 },
  { name: "Yasuo", age: 20 },
  { name: "Vin", age: 33 },
];
// for(let index in arrayName ){

//     console.log(index,arrayName[index]);
// }

//For...of (Duyệt mảng theo từng phần tử)
//Lấy trong mảng đối tượng, mỗi lần duyệt for...of nó sẽ trả về cho chúng ta đối tượng

for (let items of arrayName) {
  console.log(items.name, items.age);
}

//10. OOP (Lớp đối tượng)

//Javascript cũ
function Student(maHs, hoTen) {
  this.MaHS = maHs;
  this.HoTen = hoTen;
  this.xuatThongTin = function () {
    console.log(this.MaHS, this.HoTen);
  };
}

let hs = new Student(1, "Hugo");
console.log(hs);

hs.xuatThongTin();

//Sử dụng ES6
class StudentEs6 {
  // khai báo thuộc tính trước nhưng không có từ khóa this
  MaHS;
  HoTen;
  constructor(maHs, hoTen) {
    this.MaHS = maHs;
    this.HoTen = hoTen;
  }
  xuatThongTinHs = () => {
    console.log(hsEs6.MaHS, hsEs6.HoTen);
  }; // Ưu tiên dùng Arrow Function hơn vì sẽ dùng Map, filter,...tránh bị ảnh hưởng ngữ cảnh của con trỏ this

  //     xuatThongTinHs(){
  //         console.log(hsEs6.MaHS,hsEs6.HoTen);
  //     }
}

let hsEs6 = new StudentEs6(2, "ES6");
console.log(hsEs6);

hsEs6.xuatThongTinHs();

//11. OOP extends (kế thừa)
//Super(): đại diện cho Lớp cha để gọi lại constructor hoặc phương thức (method)

class NhanVien {
  MaNv;
  TenNv;
  constructor(maNv, tenNv) {
    this.MaNv = maNv;
    this.TenNv = tenNv;
  }
  tinhLuong = () => {
    return 1000;
  };
}

//Sử dụng extends để kế thừa từ thằng cha (NhanVien)
class QuanLy extends NhanVien {
  dsPhongBan = [];
  // Ta phải bắt buộc tạo lại contructor
  // Muốn kế thừa contructor từ thằng cha (NhanVien) thì phải thêm super và tham số của contructor của thằng con bắt buộc phải giống với thằng cha
  //Nếu muốn thêm 1 tham số của thằng con thì ta thêm vào contructor của thằng con và thêm ở dưới sau Super
  constructor(maNv, tenNv, mangPhongBan) {
    super(maNv, tenNv);
    this.dsPhongBan = mangPhongBan;
  }
  //Nếu muốn gọi lại tính lương của thằng cha (NhanVien) thì thêm super
  tinhLuong = () => {
    return super.tinhLuong() + 10000;
  };
}

let qly = new QuanLy(1, "Phi", [{ maPB: 1, tenPB: "Cyber" }]);
console.log(qly);

//Một số hàm để sử lý trong mảng (Array) trong ES6
//13. Filter là phương thức trả về kết quả là một MẢNG với tất cả các phần tử vượt qua kiểm tra được thực hiện bởi hàm được cung cấp

//VD: Ta có 1 mảng với các đối tượng
let mangSpFilter = [
  { maSp: 1, tenSp: "Iphone15", giaSp: 17500000, HangSx: "Apple" },
  { maSp: 2, tenSp: "Iphone15 Pro Max", giaSp: 25500000, HangSx: "Apple" },
  { maSp: 3, tenSp: "S23 Ultra", giaSp: 20000000, HangSx: "Samsung" },
  { maSp: 4, tenSp: "S23", giaSp: 17500000, HangSx: "Samsung" },
  { maSp: 5, tenSp: "Xiao Mi 11", giaSp: 20500000, HangSx: "Xiao Mi" },
  { maSp: 6, tenSp: "Xiao Mi 9", giaSp: 10500000, HangSx: "Xiao Mi" },
  { maSp: 7, tenSp: "S23 5G", giaSp: 15500000, HangSx: "Samsung" },
  { maSp: 8, tenSp: "Iphone11", giaSp: 11500000, HangSx: "Apple" },
];

// lấy danh sách các điện thoại thuộc hãng sản xuất Apple
// Dùng hàm filter với callback truyền vào và trả về sanPham nào thỏa điều kiện HangSx === "Apple"

let getAppleBrand = mangSpFilter.filter((sanPham) => {
  return sanPham.HangSx === "Apple";
}); // cách ghi đầy đủ khi có return

let getSamsungBrand = mangSpFilter.filter((sanPham) => sanPham.tenSp === "S23");

let getXiaomiBrand = mangSpFilter.filter(
  (sanPham) => sanPham.giaSp <= 17000000
);

console.log(getAppleBrand);
console.log(getSamsungBrand);
console.log(getXiaomiBrand);

//14. Find là phương thức trả về kết quả là 1 đối tượng với phần tử vượt qua kiểm tra được thực hiện bởi hàm cung cấp, Nếu không có phần tử nào thỏa điều kiện trả về undefine
//Nếu ta tìm HangSx mà trùng nhau thì nó sẽ lấy cái đầu tiên
//Chỉ dùng Find khi mà đối tượng đó chỉ có duy nhất 1 đặc trưng như là maSp, hoặc là tenSp
//Tóm lại: Find là tìm trên những thuộc tính đặc trưng của đối tượng trong 1 mảng

//VD:
let mangSpFind = [
  { maSp: 1, tenSp: "Iphone15", giaSp: 17500000, HangSx: "Apple" },
  { maSp: 2, tenSp: "Iphone15 Pro Max", giaSp: 25500000, HangSx: "Apple" },
  { maSp: 3, tenSp: "S23 Ultra", giaSp: 20000000, HangSx: "Samsung" },
  { maSp: 4, tenSp: "S23", giaSp: 17500000, HangSx: "Samsung" },
  { maSp: 5, tenSp: "Xiao Mi 11", giaSp: 20500000, HangSx: "Xiao Mi" },
  { maSp: 6, tenSp: "Xiao Mi 9", giaSp: 10500000, HangSx: "Xiao Mi" },
  { maSp: 7, tenSp: "S23 5G", giaSp: 15500000, HangSx: "Samsung" },
  { maSp: 8, tenSp: "Iphone11", giaSp: 11500000, HangSx: "Apple" },
];

//Tìm sp có MaSp là 3
let dtSamsung = mangSpFind.find((sanpham) => sanpham.maSp === 3);

if (dtSamsung != undefined) {
  console.log(dtSamsung);
} else {
  console.log("không tìm thấy sản phẩm! ");
}

console.log(dtSamsung);

//15.Find index là phương thức trả về kết quả chỉ số phần tử ứng với vị trí phần tử trong mảng. Nếu không có phần tử nào thỏa điều kiện
//Chỉ dùng Find khi mà đối tượng đó chỉ có duy nhất 1 đặc trưng như là maSp, hoặc là tenSp
//Nếu ta tìm HangSx mà trùng nhau thì nó sẽ lấy cái index đầu tiên

//VD:
let mangSpFindIndex = [
  { maSp: 1, tenSp: "Iphone15", giaSp: 17500000, HangSx: "Apple" },
  { maSp: 2, tenSp: "Iphone15 Pro Max", giaSp: 25500000, HangSx: "Apple" },
  { maSp: 3, tenSp: "S23 Ultra", giaSp: 20000000, HangSx: "Samsung" },
  { maSp: 4, tenSp: "S23", giaSp: 17500000, HangSx: "Samsung" },
  { maSp: 5, tenSp: "Xiao Mi 11", giaSp: 20500000, HangSx: "Xiao Mi" },
  { maSp: 6, tenSp: "Xiao Mi 9", giaSp: 10500000, HangSx: "Xiao Mi" },
  { maSp: 7, tenSp: "S23 5G", giaSp: 15500000, HangSx: "Samsung" },
  { maSp: 8, tenSp: "Iphone11", giaSp: 11500000, HangSx: "Apple" },
];

//Tìm mã sản phẩm 6
let indexFind = mangSpFindIndex.findIndex((sanpham) => sanpham.maSp === 7);

if (indexFind !== -1) {
  //Dùng để xóa phần tử
  mangSpFindIndex.splice(indexFind, 1);
  console.log(mangSpFindIndex);
} else {
  console.log(indexFind);
}
console.log(mangSpFindIndex[indexFind]);

//16. For each là thực thi một hàm 1 lần cho mỗi phần tử. Nôm na là mảng có 8 phần tử sẽ thực thi thực thi hàm đó 8 lần, hàm nhận tham số vào là từng phần tử của mảng và vị trí foreach((item,index) => {})
// Mục đích duyệt mảng hoặc là in ra 1 cái gì đó.

//VD:
let mangSpForEach = [
  { maSp: 1, tenSp: "Iphone15", giaSp: 17500000, HangSx: "Apple" },
  { maSp: 2, tenSp: "Iphone15 Pro Max", giaSp: 25500000, HangSx: "Apple" },
  { maSp: 3, tenSp: "S23 Ultra", giaSp: 20000000, HangSx: "Samsung" },
  { maSp: 4, tenSp: "S23", giaSp: 17500000, HangSx: "Samsung" },
  { maSp: 5, tenSp: "Xiao Mi 11", giaSp: 20500000, HangSx: "Xiao Mi" },
  { maSp: 6, tenSp: "Xiao Mi 9", giaSp: 10500000, HangSx: "Xiao Mi" },
  { maSp: 7, tenSp: "S23 5G", giaSp: 15500000, HangSx: "Samsung" },
  { maSp: 8, tenSp: "Iphone11", giaSp: 11500000, HangSx: "Apple" },
];

//Duyệt mảng (không cần sử dụng return)

mangSpForEach.forEach((sanPham, index) => {
  console.log(sanPham);
});

//17.Map là tương tự forEach () nhưng khác ở chỗ hàm map có giá trị trả về là 1 mảng mới được tạo ra từ các đối tượng return trong call back function.
//Bắt buộc phải sử dụng return
//Map thường để tạo nội dung trong react sử dụng rất là nhiều

//VD:
let mangSpMap = [
  { maSp: 1, tenSp: "Iphone15", giaSp: 17500000, HangSx: "Apple" },
  { maSp: 2, tenSp: "Iphone15 Pro Max", giaSp: 25500000, HangSx: "Apple" },
  { maSp: 3, tenSp: "S23 Ultra", giaSp: 20000000, HangSx: "Samsung" },
  { maSp: 4, tenSp: "S23", giaSp: 17500000, HangSx: "Samsung" },
  { maSp: 5, tenSp: "Xiao Mi 11", giaSp: 20500000, HangSx: "Xiao Mi" },
  { maSp: 6, tenSp: "Xiao Mi 9", giaSp: 10500000, HangSx: "Xiao Mi" },
  { maSp: 7, tenSp: "S23 5G", giaSp: 15500000, HangSx: "Samsung" },
  { maSp: 8, tenSp: "Iphone11", giaSp: 11500000, HangSx: "Apple" },
];

//Duyệt mảng (Bắt buộc sử dụng return)

let mangMoi = mangSpForEach.map((sanPham, index) => {
  if (sanPham.maSp % 2 === 0) {
    return sanPham;
  }
  return 0;
});
console.log(mangMoi);

//JSON: bắt buộc key phải có dấu ngoặc kép

//Object bình thường
let inforUser = {
  fullName: "Phi Lê",
  email: "jkj822925@gmail.com",
  age: 18,
};

//VD1: JSON có giá trị là object
let inforUserJSON = `
{
  "fullName": "Phi Lê",
  "email": "jkj822925@gmail.com",
  "age": 18
}
`;

console.log(inforUserJSON);

//Convert JSON to JS
let inforUserJSONtoJS = JSON.parse(inforUserJSON);
//Convert JS to JSON
let inforUserJStoJSON = JSON.stringify(inforUser);

console.log(inforUserJSONtoJS.fullName);
console.log(inforUserJSONtoJS.email);
console.log(inforUserJSONtoJS.age);
console.log(inforUserJStoJSON);

//VD2: JSON có giá trị là number

let jsonNumber = `5`;

console.log(jsonNumber);
//Convert JSON to to number
console.log(JSON.parse(jsonNumber));

//VD3: JSON có giá trị là string
let jsonString = `"Xin chào bạn!"`;

console.log(jsonString);
//Convert JSON to to string
console.log(JSON.parse(jsonString));

//VD4: JSON có giá trị là boolean
let jsonBoolean = `true`;

console.log(jsonBoolean);
//Convert JSON to string
console.log(JSON.parse(jsonBoolean));

//VD4: JSON có giá trị là array
let jsonArray = `[
  {
    "id": 1,
    "name": "Phi Lê",
    "email": "jkj822925@gmail.com"

  },
  {
    "id": 3,
    "name": "Phi Lê 1",
    "email": "jkj822925@gmail.com"

  },
  {
    "id": 2,
    "name": "Phi Lê 2",
    "email": "jkj822925@gmail.com"

  }

]`;

//Convert JSON to Array
let listUser = JSON.parse(jsonArray);

let htmls = ""

listUser.forEach(items => {
  htmls += `<div class="user-item">
  <div class="inner-name">${items.name}</div>
  <div class="inner-email">${items.email}</div>
  </div>`;
})

const divUserList = document.querySelector("#listUser")
divUserList.innerHTML = htmls

console.log(htmls);

//VD5: JSON có giá trị là null
let jsonNull = `null`;

console.log(jsonNull);
//Convert JSON to string
console.log(JSON.parse(jsonNull));
