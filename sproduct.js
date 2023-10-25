var productImage = document.querySelectorAll('.i');

var mainImg = document.getElementById('main-image');
var smallImg = document.querySelectorAll('.small-img');

// productImage.forEach((e) => {
//   e.addEventListener('click', (el) => {
//     mainImg = el.target.src;
//     console.log(el.target)
//     console.log('main ===',mainImg)
   
//     // window.location.href = 'sproduct.html';
//   });
// });




var images = [];

productImage.forEach((e) => {
    e.addEventListener('click', (el) => {
      var i = el.target.src;
      // console.log(i)

      images.push(i);
      console.log(images);
      window.location.href = 'sproduct.html';
      mainImg.src = images[images.length-1];
      console.log(mainImg.src);
    });
  });


  


for(let i=0;i<4;i++){
    smallImg[i].addEventListener('click',()=>{
        mainImg.src=smallImg[i].src
    });
}