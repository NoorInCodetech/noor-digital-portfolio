// Wait for the DOM content to load
document.addEventListener("DOMContentLoaded", (event) => {
  // Select necessary elements
  const menuItems = document.querySelectorAll(".menuItem");
  const wrapper = document.querySelector(".sliderWrapper");
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductDesc = document.querySelector(".productDesc");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");
  const checkoutButton = document.querySelector(".payButton");
  const paymentForm = document.querySelector(".paymentForm");
  const payInputs = document.querySelectorAll(".payInput");
  // Product data
  const products = [
    {
      id: 1,
      title: "MEN COLLECTION",
      price: 2500,
      desc: "Discover sophistication redefined with Noor's men's fashion, tailored for the modern gentleman who values both tradition and innovation.",
      colors: [
        {
          code: "darkblue",
          img: "../assets/mens.jpeg",
        },
        {
          code: "black",
          img: "../assets/mensFashion.jpeg",
        },
      ],
    },
    {
      id: 2,
      title: "WOMEN COLLECTION",
      price: 3000,
      desc: "Embrace elegance with Noor's women's fashion, designed to make you stand out with timeless style and contemporary flair.",
      colors: [
        {
          code: "lightgray",
          img: "../assets/women-collection.jpeg",
        },
        {
          code: "green",
          img: "../assets/pinkdress.jpeg",
        },
      ],
    },
    {
      id: 3,
      title: "JEWELARY AND COSMETICS",
      price: 900,
      desc: "Adorn yourself with Noor's exquisite jewelry and cosmetics, perfect for adding a touch of sparkle to your everyday look.",
      colors: [
        {
          code: "pink",
          img: "../assets/makeup.jpeg",
        },
        {
          code: "green",
          img: "../assets/cosmetics.jpeg",
        },
      ],
    },
    {
      id: 4,
      title: "HOME LIVING PRODUCTS",
      price: 2000,
      desc: "Enhance your home with Noor's unique living products, blending functionality and style for a modern living space.",
      colors: [
        {
          code: "black",
          img: "../assets/living.jpeg",
        },
        {
          code: "lightgray",
          img: "../assets/livingp.jpeg",
        },
      ],
    },
    {
      id: 5,
      title: "ELECTRONICS",
      price: 1500,
      desc: "Discover the latest electronics with Noor's collection, featuring cutting-edge technology and innovative designs.",
      colors: [
        {
          code: "lightpink",
          img: "../assets/smart.jpeg",
        },
        {
          code: "black",
          img: "../assets/smartapp.jpeg",
        },
      ],
    },
  ];

  let chosenProduct = products[0];

  // Function to update product details
  const updateProductDetails = (product) => {
    currentProductTitle.textContent = product.title;
    currentProductPrice.textContent = product.price + "RS";
    currentProductDesc.textContent = product.desc;
    currentProductImg.src = product.colors[0].img;
    currentProductSizes.textContent=product.size;

    currentProductColors.forEach((color, index) => {
      if (product.colors[index]) {
        color.style.backgroundColor = product.colors[index].code;
        color.style.display = "inline-block";
        color.addEventListener("click", () => {
          currentProductImg.src = product.colors[index].img;
        });
      } else {
        color.style.display = "none";
      }
    });
  };
      currentProductSizes.forEach((size, index)=>{
        size.addEventListener("click" ,() => {
          currentProductSizes.forEach((size)=>{
          size.style.backgroundColor = "white";
          size.style.color = "black";
          });
          size.style.backgroundColor = "black";
          size.style.color = "white";
        });
      });

  // Initialize with the first product
  updateProductDetails(chosenProduct);

  // Event listener for menu items
  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      // Change the current slide
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
      // Update the chosen product
      chosenProduct = products[index];
      // Update product details
      updateProductDetails(chosenProduct);
    });
  });

  productButton.addEventListener("click", () => {
    payment.style.display = "flex";
  });

  close.addEventListener("click", () => {
    payment.style.display = "none";
    paymentForm.reset();
    checkoutButton.disabled = true; // Ensure button is disabled when modal closes
  });

  function checkInputs() {
    let allFilled = true;
    payInputs.forEach((input) => {
      if (input.value.trim() === "") {
        allFilled = false;
      }
    });
    checkoutButton.disabled = !allFilled;
  }

  payInputs.forEach((input) => {
    input.addEventListener("input", checkInputs);
  });

  paymentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const allFieldsFilled = Array.from(payInputs).every(
      (input) => input.value.trim() !== ""
    );
    if (!allFieldsFilled) {
      alert("Please fill all of the fields");
    } else {
      alert("Payment successful and your order is placed!");
      payment.style.display = "none";
      paymentForm.reset();
      checkoutButton.disabled = true; // Ensure button is disabled after successful payment
    }
  });
});
