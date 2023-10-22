
// For Blogs
let blogs = [
    {
      Image: "img/blog/b1.jpg",
      Heading: "The Cotton-Jersey Zip-Up Hoodie",
      Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
      HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
      Button: "Continue Reading",
      Date: "01/10/2023"
    },
    {
        Image: "img/blog/b2.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "02/10/2023"
      },
      {
        Image: "img/blog/b3.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "03/10/2023"
      },
      {
        Image: "img/blog/b4.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "04/10/2023"
      },
      {
        Image: "img/blog/b5.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "05/10/2023"
      },
      {
        Image: "img/blog/b6.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "06/10/2023"
      },
      {
        Image: "img/blog/b7.jpg",
        Heading: "The Cotton-Jersey Zip-Up Hoodie",
        Blog: "Kickstarter man braid godard coloring book. Raclette waistcoat selfies yr wolf chartreuse hexagon irony, godard...",
        HiddenBlog: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, iste.",
        Button: "Continue Reading",
        Date: "07/10/2023"
      },
  ];
  
  const blog = document.querySelector("#blog");
  
  blogs.forEach((blogData) => {
    // creating the elements
    const blogBox = document.createElement('div');
  
    const blogImgDiv = document.createElement("div");
    const img = document.createElement("img");
  
    const blogDetails = document.createElement("div");
    const headingH4 = document.createElement("h4");
    const blogP = document.createElement("p");
    const hiddenBlog = document.createElement("div");
    const hiddenBlogP = document.createElement("p");
    const btn = document.createElement("button");
  
    const dateH1 = document.createElement("h1");
  
    // give content to the elements
    img.src = blogData.Image;
  
    headingH4.textContent = blogData.Heading;
    blogP.textContent = blogData.Blog;
    hiddenBlogP.textContent = blogData.HiddenBlog;
    btn.textContent = blogData.Button;
  
    dateH1.textContent = blogData.Date;
  
    // append the elements
    blogImgDiv.appendChild(img);
  
    hiddenBlog.appendChild(hiddenBlogP);
  
    blogDetails.appendChild(headingH4);
    blogDetails.appendChild(blogP);
    blogDetails.appendChild(hiddenBlog);
    blogDetails.appendChild(btn);
  
    blogBox.appendChild(blogImgDiv);
    blogBox.appendChild(blogDetails);
    blogBox.appendChild(dateH1);
  
    blog.appendChild(blogBox);

    blogBox.className = "blog-box";
    blogImgDiv.className = "blog-img"
    blogDetails.className = "blog-details";
    hiddenBlog.className = "hide";
    btn.className = "cont";
  });
  
let contButton = document.querySelectorAll('.cont');
let hiddenEl = document.querySelectorAll(".hide");

contButton.forEach((e) => {
     e.addEventListener('click', () => {

        const hiddenParagraph = e.parentElement.children[2];
        hiddenParagraph.classList.toggle('not-hide');

        if (hiddenParagraph.classList.contains('not-hide')) {
            e.innerHTML = "Read less";
            } 

        else {
            e.innerHTML = "Continue Reading";
    }
    });
});
  
  