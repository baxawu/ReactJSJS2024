import {fetchApi} from "./helpers/fetchApi.js"

//Đặt biến để code gọn hơn với fetch
// const fetchApi = (url) => {
//   const result = fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       return data;
//     });
//   return result
// };

//Get category
fetchApi("http://localhost:3000/category")
  .then((data) => {
    let htmls = "";
    data.forEach((item) => {
      htmls += `
        <div class="product-item">${item}</div>
        `;
    });
    const divCategory = document.querySelector("#category");
    divCategory.innerHTML = htmls;
  });
// End GET category

// Get Product
fetchApi(" http://localhost:3000/products")
  .then(data => {
    let htmls = "";
    data.forEach(item => {
      htmls += `
        <div class="product-item">
        <img src="${item.thumbnail}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.price}</p>
        </div>
        `;
    });

    //Hiển thị hình ảnh
    const divCategory = document.querySelector("#products");
    divCategory.innerHTML = htmls;
  });

// End GET product



