const products = document.getElementById("food_products");
const shop = document.getElementById("shop");
const shops = document.querySelectorAll(".shop");
const carts = document.getElementById("cart_products");
const formUsers = document.getElementById("formUsers");
const submit = document.getElementById("submit");
const cleanCart = document.getElementById("cleanCart");
const price = document.getElementById("price");
const search = document.getElementById("search");
const orderList = document.getElementById("orderList");

const delivery = {
  food: [
    {
      name: "Hamburger",
      id: 1,
      price: 28,
      itemNumber: 0,
      img: "img/McHamburger.jfif",
      type: "mac",
    },
    {
      name: "Cheeseburger",
      id: 2,
      price: 32,
      itemNumber: 0,
      img: "img/McCheeseburger.jfif",
      type: "mac",
    },
    {
      name: "Double Cheeseburger",
      id: 3,
      price: 53,
      itemNumber: 0,
      img: "img/McDoubleCheeseburger.jfif",
      type: "mac",
    },
    {
      name: "Big Mac",
      id: 4,
      price: 62,
      itemNumber: 0,
      img: "img/McBigMac.jfif",
      type: "mac",
    },
    {
      name: "Big Texas",
      id: 5,
      price: 99,
      itemNumber: 0,
      img: "img/McBigTexas.jfif",
      type: "mac",
    },
    {
      name: "Big Taisty",
      id: 6,
      price: 95,
      itemNumber: 0,
      img: "img/McBigTaisty.jfif",
      type: "mac",
    },
    {
      name: "French fries small",
      id: 7,
      price: 30,
      itemNumber: 0,
      img: "img/McFrenchfries.jfif",
      type: "mac",
    },
    {
      name: "French fries big",
      id: 8,
      price: 35,
      itemNumber: 0,
      img: "img/McFrenchfries.jfif",
      type: "mac",
    },
    {
      name: "Chicken McNuggets 6 pcs.",
      id: 9,
      price: 55,
      itemNumber: 0,
      img: "img/McChickenNuggets.jfif",
      type: "mac",
    },
    {
      name: "Chicken McNuggets 9 pcs.",
      id: 10,
      price: 72,
      itemNumber: 0,
      img: "img/McChickenNuggets.jfif",
      type: "mac",
    },
    {
      name: "Coca-cola 0,5",
      id: 11,
      price: 25,
      itemNumber: 0,
      img: "img/coca-cola.jpg",
      type: "mac",
    },
    {
      name: "Fanta 0,5",
      id: 12,
      price: 25,
      itemNumber: 0,
      img: "img/fanta.jfif",
      type: "mac",
    },
    {
      name: "Juice 0,5",
      id: 13,
      price: 35,
      itemNumber: 0,
      img: "img/rich.jpg",
      type: "mac",
    },
    {
      name: "Cheeseburger",
      id: 14,
      price: 40,
      itemNumber: 0,
      img: "img/KFC-CheeseBurge.png",
      type: "kfc",
    },
    {
      name: "Cheeseburger De Luxe",
      id: 15,
      price: 62,
      itemNumber: 0,
      img: "img/KFC-CheeseburgerDeLuxe.jfif",
      type: "kfc",
    },
    {
      name: "Chefburger",
      id: 16,
      price: 59,
      itemNumber: 0,
      img: "img/KFC-Chefburger.jfif",
      type: "kfc",
    },
    {
      name: "Double Schefburger",
      id: 17,
      price: 93,
      itemNumber: 0,
      img: "img/KFC-DoubleSchefburger.png",
      type: "kfc",
    },
    {
      name: "French fries",
      id: 18,
      price: 36,
      itemNumber: 0,
      img: "img/KFS-Frenchfries.jfif",
      type: "kfc",
    },
    {
      name: "Junior Twister",
      id: 19,
      price: 45,
      itemNumber: 0,
      img: "img/KFC-JuniorTwister.jfif",
      type: "kfc",
    },
    {
      name: "Twister with toaster",
      id: 20,
      price: 67,
      itemNumber: 0,
      img: "img/KFC-Twister-with-toaster.jfif",
      type: "kfc",
    },
    {
      name: "Coca-cola 0,5",
      id: 21,
      price: 25,
      itemNumber: 0,
      img: "img/coca-cola.jpg",
      type: "kfc",
    },
    {
      name: "Fanta 0,5",
      id: 22,
      price: 25,
      itemNumber: 0,
      img: "img/fanta.jfif",
      type: "kfc",
    },
    {
      name: "Juice 0,5",
      id: 23,
      price: 35,
      itemNumber: 0,
      img: "img/rich.jpg",
      type: "kfc",
    },
    {
      name: "Midori roll",
      id: 24,
      price: 179,
      itemNumber: 0,
      img: "img/NOA-Rol-midori.png",
      type: "noa",
    },
    {
      name: "Chiara's role",
      id: 25,
      price: 62,
      itemNumber: 0,
      img: "img/Noa-Rol-kiara.png",
      type: "noa",
    },
    {
      name: "Roll Nobu",
      id: 26,
      price: 119,
      itemNumber: 0,
      img: "img/NOA-Rol-nobu.png",
      type: "noa",
    },
    {
      name: "Roll Acaio",
      id: 27,
      price: 189,
      itemNumber: 0,
      img: "img/NOA-Rol-akajo.png",
      type: "noa",
    },
    {
      name: "Roll with tuna tartare",
      id: 28,
      price: 209,
      itemNumber: 0,
      img: "img/NOA_Rol-z-tartarom-z-tunczya.png",
      type: "noa",
    },
    {
      name: "Roll with salmon and shrimp",
      id: 29,
      price: 279,
      itemNumber: 0,
      img: "img/NOA-Roll-with-salmon-and-shrimp.png",
      type: "noa",
    },
    {
      name: "Hot Abby with shrimp and eel",
      id: 30,
      price: 249,
      itemNumber: 0,
      img: "img/NOA-Hot-Abby-with-shrimp-and-eel.png",
      type: "noa",
    },
    {
      name: "Akami roll with tuna",
      id: 31,
      price: 239,
      itemNumber: 0,
      img: "img/NOA-Akami-roll-with-tuna.png",
      type: "noa",
    },
    {
      name: "Coca-cola 0,5",
      id: 32,
      price: 25,
      itemNumber: 0,
      img: "img/coca-cola.jpg",
      type: "noa",
    },
    {
      name: "Fanta 0,5",
      id: 33,
      price: 25,
      itemNumber: 0,
      img: "img/fanta.jfif",
      type: "noa",
    },
    {
      name: "Juice 0,5",
      id: 34,
      price: 35,
      itemNumber: 0,
      img: "img/rich.jpg",
      type: "noa",
    },
    {
      name: "Formajipesto",
      id: 35,
      price: 219,
      itemNumber: 0,
      img: "img/La-Formajipesto.jpg",
      type: "piec",
    },
    {
      name: "Javelin",
      id: 36,
      price: 215,
      itemNumber: 0,
      img: "img/La-Javelin.jpg",
      type: "piec",
    },
    {
      name: "Pizza La Piec",
      id: 37,
      price: 230,
      itemNumber: 0,
      img: "img/La-Piec.jpg",
      type: "piec",
    },
    {
      name: "Caesario",
      id: 38,
      price: 257,
      itemNumber: 0,
      img: "img/La-Tsezario.jpg",
      type: "piec",
    },
    {
      name: "Quattro formage",
      id: 39,
      price: 241,
      itemNumber: 0,
      img: "img/La-Kvatro.jpg",
      type: "piec",
    },
    {
      name: "Capricciosa",
      id: 40,
      price: 208,
      itemNumber: 0,
      img: "img/La-Capricciosa.jpg",
      type: "piec",
    },
    {
      name: "Carbonara",
      id: 41,
      price: 202,
      itemNumber: 0,
      img: "img/La-Carbonara.jpg",
      type: "piec",
    },
    {
      name: "Diabola",
      id: 42,
      price: 209,
      itemNumber: 0,
      img: "img/La-Diabola.jpg",
      type: "piec",
    },
    {
      name: "Coca-cola 0,5",
      id: 43,
      price: 25,
      itemNumber: 0,
      img: "img/coca-cola.jpg",
      type: "piec",
    },
    {
      name: "Fanta 0,5",
      id: 44,
      price: 25,
      itemNumber: 0,
      img: "img/fanta.jfif",
      type: "piec",
    },
    {
      name: "Juice 0,5",
      id: 45,
      price: 35,
      itemNumber: 0,
      img: "img/rich.jpg",
      type: "piec",
    },
  ],
  renderProducts(shop) {
    const store = this.food.filter((item) => item.type === shop);
    products.innerHTML = "";
    store.map((product) => {
      const productCard = `
      <div class="item" data-product-id="${product.id}">
      <article class="productCard">
        <img src=${product.img} alt="">
        <h2 class="productName">${product.name}</h2>
          <div class="price_btn">
            <span class="price_product">${product.price.toFixed(2)}$</span>
            <button class="buy" id="buy" data-id="${
              product.id
            }">Add to cart</button>
          </div>
      </article>
      </div>
      `;
      products.innerHTML += productCard;
    });
  },
  changeStore(name, btn) {
    for (const item of shops) {
      item.classList.remove("active");
    }
    btn.classList.add("active");
    name && this.renderProducts(name);
  },
  cart: {
    items: [],
    orderHistory: [],
    setLocalItems() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    },
    setLocalHistory() {
      localStorage.setItem("history", JSON.stringify(this.orderHistory));
    },
    getLocal() {
      return JSON.parse(localStorage.getItem("cart"));
    },
    getLocalHistory() {
      return JSON.parse(localStorage.getItem("history"));
    },
    checkLocal() {
      const localHistory = this.getLocalHistory();
      if (localHistory !== null) this.orderHistory = [...localHistory];
      const local = this.getLocal();
      if (local !== null) {
        this.items = [...local];
        shops.forEach((item) => {
          if (item.dataset.shopName === local[0].type) {
            const nameShop = item.dataset.shopName;
            delivery.changeStore(nameShop, item);
            delivery.renderProducts(nameShop);
          }
        });
      }
    },
    renderCart() {
      const local = this.getLocal() || null;
      if (local == null) {
        carts.innerHTML = `<p class="cartEmty">The cart is empty</p>`;
      } else if (local !== null) {
        carts.innerHTML = "";
        local.map((product, index) => {
          const showCart = `
          <div class="itemCart" data-product-id="${product.id}">
      <article class="CardInCart">
        <img src=${product.img} alt="">
        <div class="info">
            <h2 class="productName">${product.name}</h2>
              <span class="price_cart price_product">${(
                product.price * product.quantity
              ).toFixed(2)}$</span>
              <div>
              <button id="minus" class="minus mathBtn" data-minus="${
                product.id
              }">-</button><span class="product_quantity" id="itemNumber">${
            product.quantity
          }</span><button id="plus" class="plus mathBtn" data-plus="${
            product.id
          }">+</button>
          </div>
            <button class="remove"data-del="${index}">X</button>
          </div>
      </article>
      </div>
        `;
          carts.innerHTML += showCart;
          this.totalPrice();
        });
      }
    },
    add(id) {
      for (const itemInCart of this.items) {
        if (itemInCart.id === id) {
          itemInCart.quantity += 1;
          this.setLocalItems();
          return;
        }
      }
      delivery.food.forEach((item) => {
        if (id === item.id) {
          const newProduct = {
            ...item,
            quantity: 1,
          };
          this.items.push(newProduct);
          this.setLocalItems();
        }
      });
    },
    increaseQuantity(id) {
      this.items.forEach((item) => {
        if (item.id === id) {
          item.quantity += 1;
          this.setLocalItems();
        }
      });
    },
    decreaseQuantity(id) {
      this.items.forEach((item, index) => {
        if (item.id === id && item.quantity > 1) {
          item.quantity -= 1;
          this.setLocalItems();
        } else if (item.id === id && item.quantity <= 1) {
          this.remove(index);
        }
      });
    },
    totalPrice() {
      const order = this.getLocal();
      if (carts) {
        if (order !== null) {
          const result =
            order
              .reduce((sum, item) => sum + item.quantity * item.price, 0)
              .toFixed(2) + "$";
          price.innerHTML = result;
          return result;
        } else {
          price.innerHTML = 0 + "$";
        }
      }
    },
    remove(i) {
      isFinite(i) ? this.items.splice(i, 1) : null;
      this.setLocalItems();
      if (this.getLocal().length === 0) {
        this.cleanCart();
      }
    },
    cleanCart() {
      this.items = [];
      localStorage.removeItem("cart");
      this.totalPrice();
    },
    cleanInput() {
      const userName = document.getElementById("userName");
      const userEmail = document.getElementById("userEmail");
      const userTel = document.getElementById("userTel");
      const userAddress = document.getElementById("userAddress");
      userName.value = "";
      userEmail.value = "";
      userTel.value = "";
      userAddress.value = "";
    },
    formSave() {
      const userName = new FormData(formUsers).get("userName");
      const userEmail = new FormData(formUsers).get("userEmail");
      const userTel = new FormData(formUsers).get("userTel");
      const userAddress = new FormData(formUsers).get("userAddress");
      if (
        userName == "" ||
        userEmail == "" ||
        userTel == "" ||
        userAddress == ""
      ) {
        alert("Fill in the order form");
        return;
      } else {
        const usersOrder = {
          name: userName,
          email: userEmail,
          tel: userTel,
          address: userAddress,
        };
        return usersOrder;
      }
    },
    newOrder() {
      const user = this.formSave();
      const order = this.getLocal();
      if (
        user &&
        order &&
        confirm(
          `Confirm the order, before payment ${delivery.cart.totalPrice()}`
        )
      ) {
        const newOrder = {
          ...user,
          order: order,
          date: new Date(),
          sum: delivery.cart.totalPrice(),
        };
        this.orderHistory.push(newOrder);
        this.cleanCart();
        this.renderCart();
        this.cleanInput();
        this.setLocalHistory();
        carts.innerHTML = `<p class="cartEmty">Thanks for the order, expect a courier. :)</p>`;
      }
    },
  },
  history: {
    infoForm() {
      const searchHistory = document.getElementById("searchHistory");
      const info = new FormData(searchHistory).get("search");
      info && this.renderHistory(info);
    },
    renderHistory(info) {
      const localHistory = delivery.cart.getLocalHistory();
      orderList.innerHTML = "";
      localHistory.filter((item) => {
        return item.email == info || item.tel == info;
      });
      localHistory.map((item, index) => {
        const product = item.order;
        console.log(product);
        console.log(item);
        const showHistory = `
        <div class="item" >

      <article class="productCard">
        <h2 class="orderHistory">Name: ${item.name}</h2>
        <p class="orderHistory">Phone Number: ${item.tel}</p>
        <p class="orderHistory">Address: ${item.address}</p>
        <p class="orderHistory">Total price: ${item.sum}</p>
        <p class="orderHistory">Total price: ${item.date.slice(0, 10)}</p>
      </article>
      </div>
        `;
        orderList.innerHTML += showHistory;
      });
    },
  },
};
// shop
delivery.cart.checkLocal();
let activeShop;
shop &&
  shop.addEventListener("click", (e) => {
    const name = e.target.dataset.shopName;
    const btnShop = e.target;
    if (delivery.cart.items.length === 0 || name == activeShop) {
      activeShop = name;
      delivery.changeStore(name, btnShop);
    } else {
      const us = confirm(
        "Sorry, delivery from one store is possible, do you want to clear the cart ??"
      );
      if (us) {
        delivery.cart.cleanCart();
        delivery.changeStore(name, btnShop);
        activeShop = name;
      }
    }
  });
products &&
  products.addEventListener("click", (e) => {
    const id = +e.target.dataset.id;
    delivery.cart.add(id);
  });

//cart
carts && delivery.cart.renderCart();

carts &&
  carts.addEventListener("click", (e) => {
    e.target.dataset.del && delivery.cart.remove(e.target.dataset.del);
    delivery.cart.increaseQuantity(+e.target.dataset.plus);
    delivery.cart.decreaseQuantity(+e.target.dataset.minus);
    delivery.cart.renderCart();
  });
carts &&
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    delivery.cart.newOrder();
  });
carts &&
  cleanCart.addEventListener("click", (e) => {
    e.preventDefault();
    const confirms = confirm("Are you sure you want to clear the cart?");
    if (confirms) {
      delivery.cart.cleanCart();
      delivery.cart.cleanInput();
      delivery.cart.renderCart();
    }
  });
search &&
  search.addEventListener("click", (e) => {
    e.preventDefault();
    delivery.history.infoForm();
  });
