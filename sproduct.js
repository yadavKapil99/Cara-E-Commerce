
var productImage = document.querySelectorAll('.i');

var mainImg = document.getElementById('main-image');
var smallImg = document.querySelectorAll('.small-img');

productImage.forEach((e) => {
  e.addEventListener('click', (el) => {
    // var i = el.src;
    window.location.href = 'sproduct.html';
    console.log("hello");
    // mainImg.src = i; 
  });
});



// var images = [];

// function openSProduct() {
//   productImage.forEach((e) => {
//     e.addEventListener('click', (el) => {
//       var i = el.src;
//       images.push(i);
//       window.location.href = 'sproduct.html';
//       mainImg.src = i;
//     });
//     console.log(images.length);
//   });
// }
// openSProduct();


for(let i=0;i<4;i++){
    smallImg[i].addEventListener('click',()=>{
        mainImg.src=smallImg[i].src
    });
}