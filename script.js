
// slider on the index page
const carouselWords = ['Shirts', 'T-shirts', 'Trousers'];
var slider = document.querySelector('.main-carousel h1');

let currentWordIndex = 0;

function rotateWords() {
if (currentWordIndex >= carouselWords.length) {
  currentWordIndex = 0;
}
const activeWord = carouselWords[currentWordIndex];
// console.log('activeWord===',activeWord);
if(activeWord){
  slider.textContent = activeWord;
}

  currentWordIndex++;
}

setInterval(rotateWords, 1000);




// Featured products on index.html
const items = [
  {
    Image : "img/products/f1.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f2.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f3.jpg",
    Brand : "Peter England",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f4.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f5.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f6.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f7.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/f8.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },


  // In The New Arrivals


  {
    Image : "img/products/n1.jpg",
    Brand : "Adidas",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n2.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n3.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n4.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n5.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 2599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n6.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n7.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  },
  {
    Image : "img/products/n8.jpg",
    Brand : "Puma",
    Product : "Cartoon Astronaut T-shirts",
    Rating : `<i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>`,
    Price : "Rs. 599",
    Cart : `<a><i id="Buy"  class="cart fa-solid fa-cart-shopping"></i></a>`,
  }
];


// container of featured class
const proContainer = document.querySelectorAll(".pro-container");
let itemsIndex = 0;

// loop  for items on the index page
items.forEach((item)=> {
    // Create DOM Elements
    
    const product = document.createElement("div");
    const imgElement = document.createElement("img");
    const des = document.createElement("div");
    const brandSpan = document.createElement("span");
    const productH5 = document.createElement("h5");
    const price = document.createElement("h4");
  
    
    imgElement.src = item.Image;
    brandSpan.textContent = item.Brand;
    productH5.textContent = item.Product;
    price.textContent = item.Price;
  
    const ratingDiv = document.createElement("div");
    ratingDiv.innerHTML = item.Rating;
  
    const cartOption = document.createElement("div");
    cartOption.innerHTML = item.Cart;

    des.appendChild(brandSpan);
    des.appendChild(productH5);
    des.appendChild(ratingDiv);
    des.appendChild(price);
  
    product.appendChild(imgElement);
    product.appendChild(des);
    product.appendChild(cartOption);
  
    // Add class
    des.className = "des";
    product.className = "pro";
    imgElement.className = "i";
    ratingDiv.className = "star";
  
    // Append the product to the container
    if(itemsIndex <8){
      proContainer[0].appendChild(product);
    }
    else {
      proContainer[1].appendChild(product);
    }
    itemsIndex++
});


// for the mobile view
const bar = document.querySelector(".bar");
const nav = document.getElementById("navbar");

bar.addEventListener('click', ()=>{
  nav.classList.add('shuru');
});

const close = document.querySelector('.close-navbar');
close.addEventListener('click',()=>{
  nav.classList.remove('shuru');
});