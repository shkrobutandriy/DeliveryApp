const products = document.getElementById("food_products");
// const productsAll = document.querySelectorAll(".food_products");
const shop = document.getElementById("shop");
const shops = document.querySelectorAll(".shop");
const delivery = {
  fastfoods: {
    mcdonalds: [
      {
        name: "Hamburger",
        price: 28,
        id: 1,
        itemNumber: 0,
        img: "img/McHamburger.jfif",
      },
      {
        name: "Cheeseburger",
        price: 32,
        id: 2,
        itemNumber: 0,
        img: "img/McCheeseburger.jfif",
      },
      {
        name: "Double Cheeseburger",
        price: 53,
        id: 3,
        itemNumber: 0,
        img: "img/McDoubleCheeseburger.jfif",
      },
      {
        name: "Big Mac",
        price: 62,
        id: 4,
        itemNumber: 0,
        img: "img/McBigMac.jfif",
      },
      {
        name: "Big Texas",
        price: 99,
        id: 5,
        itemNumber: 0,
        img: "img/McBigTexas.jfif",
      },
      {
        name: "Big Taisty",
        price: 95,
        id: 6,
        itemNumber: 0,
        img: "img/McBigTaisty.jfif",
      },
      {
        name: "French fries small",
        price: 30,
        id: 7,
        itemNumber: 0,
        img: "img/McFrenchfries.jfif",
      },
      {
        name: "French fries big",
        price: 35,
        id: 8,
        itemNumber: 0,
        img: "img/McFrenchfries.jfif",
      },
      {
        name: "Chicken McNuggets 6 pcs.",
        price: 55,
        id: 9,
        itemNumber: 0,
        img: "img/McChickenNuggets.jfif",
      },
      {
        name: "Chicken McNuggets 9 pcs.",
        price: 72,
        id: 10,
        itemNumber: 0,
        img: "img/McChickenNuggets.jfif",
      },
      {
        name: "Coca-cola 0,5",
        price: 25,
        id: 11,
        itemNumber: 0,
        img: "img/coca-cola.jpg",
      },
      {
        name: "Fanta 0,5",
        price: 25,
        id: 12,
        itemNumber: 0,
        img: "img/fanta.jfif",
      },
      {
        name: "Juice 0,5",
        price: 35,
        id: 13,
        itemNumber: 0,
        img: "img/rich.jpg",
      },
    ],
    kfs: [
      {
        name: "Cheeseburger",
        price: 40,
        id: 1,
        itemNumber: 0,
        img: "img/KFC-CheeseBurge.png",
      },
      {
        name: "Cheeseburger De Luxe",
        price: 62,
        id: 2,
        itemNumber: 0,
        img: "img/KFC-CheeseburgerDeLuxe.jfif",
      },
      {
        name: "Chefburger",
        price: 59,
        id: 3,
        itemNumber: 0,
        img: "img/KFC-Chefburger.jfif",
      },
      {
        name: "Double Schefburger",
        price: 93,
        id: 4,
        itemNumber: 0,
        img: "img/KFC-DoubleSchefburger.png",
      },
      {
        name: "French fries",
        price: 36,
        id: 5,
        itemNumber: 0,
        img: "img/KFS-Frenchfries.jfif",
      },
      {
        name: "Junior Twister",
        price: 45,
        id: 6,
        itemNumber: 0,
        img: "img/KFC-JuniorTwister.jfif",
      },
      {
        name: "Twister with toaster",
        price: 67,
        id: 7,
        itemNumber: 0,
        img: "img/KFC-Twister-with-toaster.jfif",
      },
      {
        name: "Coca-cola 0,5",
        price: 25,
        id: 8,
        itemNumber: 0,
        img: "img/coca-cola.jpg",
      },
      {
        name: "Fanta 0,5",
        price: 25,
        id: 9,
        itemNumber: 0,
        img: "img/fanta.jfif",
      },
      {
        name: "Juice 0,5",
        price: 35,
        id: 10,
        itemNumber: 0,
        img: "img/rich.jpg",
      },
    ],
    noa: [
      {
        name: "Midori roll",
        price: 179,
        id: 1,
        itemNumber: 0,
        img: "img/NOA-Rol-midori.png",
      },
      {
        name: "Chiara's role",
        price: 62,
        id: 2,
        itemNumber: 0,
        img: "img/Noa-Rol-kiara.png",
      },
      {
        name: "Roll Nobu",
        price: 119,
        id: 3,
        itemNumber: 0,
        img: "img/NOA-Rol-nobu.png",
      },
      {
        name: "Roll Acaio",
        price: 189,
        id: 4,
        itemNumber: 0,
        img: "img/NOA-Rol-akajo.png",
      },
      {
        name: "Roll with tuna tartare",
        price: 209,
        id: 5,
        itemNumber: 0,
        img: "img/NOA_Rol-z-tartarom-z-tunczya.png",
      },
      {
        name: "Roll with salmon and shrimp",
        price: 279,
        id: 6,
        itemNumber: 0,
        img: "img/NOA-Roll-with-salmon-and-shrimp.png",
      },
      {
        name: "Hot Abby with shrimp and eel",
        price: 249,
        id: 7,
        itemNumber: 0,
        img: "img/NOA-Hot-Abby-with-shrimp-and-eel.png",
      },
      {
        name: "Akami roll with tuna",
        price: 239,
        id: 8,
        itemNumber: 0,
        img: "img/NOA-Akami-roll-with-tuna.png",
      },
      {
        name: "Coca-cola 0,5",
        price: 25,
        id: 9,
        itemNumber: 0,
        img: "img/coca-cola.jpg",
      },
      {
        name: "Fanta 0,5",
        price: 25,
        id: 10,
        itemNumber: 0,
        img: "img/fanta.jfif",
      },
      {
        name: "Juice 0,5",
        price: 35,
        id: 11,
        itemNumber: 0,
        img: "img/rich.jpg",
      },
    ],
    piec: [
      {
        name: "Formajipesto",
        price: 219,
        id: 1,
        itemNumber: 0,
        img: "img/La-Formajipesto.jpg",
      },
      {
        name: "Javelin",
        price: 215,
        id: 2,
        itemNumber: 0,
        img: "img/La-Javelin.jpg",
      },
      {
        name: "Pizza La Piec",
        price: 230,
        id: 3,
        itemNumber: 0,
        img: "img/La-Piec.jpg",
      },
      {
        name: "Caesario",
        price: 257,
        id: 4,
        itemNumber: 0,
        img: "img/La-Tsezario.jpg",
      },
      {
        name: "Quattro formage",
        price: 241,
        id: 5,
        itemNumber: 0,
        img: "img/La-Kvatro.jpg",
      },
      {
        name: "Capricciosa",
        price: 208,
        id: 6,
        itemNumber: 0,
        img: "img/La-Capricciosa.jpg",
      },
      {
        name: "Carbonara",
        price: 202,
        id: 7,
        itemNumber: 0,
        img: "img/La-Carbonara.jpg",
      },
      {
        name: "Diabola",
        price: 209,
        id: 8,
        itemNumber: 0,
        img: "img/La-Diabola.jpg",
      },
      {
        name: "Coca-cola 0,5",
        price: 25,
        id: 9,
        itemNumber: 0,
        img: "img/coca-cola.jpg",
      },
      {
        name: "Fanta 0,5",
        price: 25,
        id: 10,
        itemNumber: 0,
        img: "img/fanta.jfif",
      },
      {
        name: "Juice 0,5",
        price: 35,
        id: 11,
        itemNumber: 0,
        img: "img/rich.jpg",
      },
    ],
  },
  renderProducts(shop) {
    if (this.cart.items.length === 0) {
      products.innerHTML = "";
      this.fastfoods[shop].map((product) => {
        const productCard = `
      <div class="item" data-product-id="${product.id}">
      <article class="productCard">
        <img src=${product.img} alt="">
        <h2 class="productName">${product.name}</h2>
          <div class="price_buy">
            <span class="price_product">${product.price.toFixed(2)}$</span>
            <button class="buy" id="buy" data-${shop}="${
          product.id
        }">Add to cart</button>
          </div>
      </article>
      </div>
      `;
        products.innerHTML += productCard;
      });
    }
  },
  cart: {
    items: [],
    add(shop, id) {
      const { items } = this;
      console.log(items);
      items.map((item) => {
        console.log(item.id, id);
        console.log(item);
        if (item.id === id) {
          item.quantity += 1;
          return;
        }
      });
      delivery.fastfoods[shop].map((item) => {
        if (item.id == id) {
          const newProduct = {
            ...item,
            quantity: 1,
          };
          items.push(newProduct);
        }
      });
    },
  },
};
shop.addEventListener("click", (e) => {
  if (delivery.cart.items.length === 0) {
    const name = e.target.dataset.shopName;
    for (const item of shops) {
      item.classList.remove("active");
    }
    e.target.classList.add("active");
    delivery.renderProducts(name);
  } else {
    alert("You can only deliver from one store");
    const us = confirm("clean cart");
    console.log(us);
    
  }
});
products.addEventListener("click", (e) => {
  const shop = String(Object.keys(e.target.dataset));
  const id = +e.target.dataset[shop];
  delivery.cart.add(shop, id);
  console.log(shop);
});
