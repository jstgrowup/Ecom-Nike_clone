var data = JSON.parse(localStorage.getItem("maiduserdata"));
var usernamedisplay = document.querySelector(".allothers");
var naamwaladiv = document.querySelector("#signin");
var naam = data.name;

if (data !== null) {
  usernamedisplay.innerHTML = ` <div id="signin"><h5></h5></div>
                  <div id="login"><h3><a href="payment.html">Buy</a></h3></div>`;
  document.querySelector("#signin h5").innerHTML = naam;
}

var cartdata = JSON.parse(localStorage.getItem("cartitems")) || [];
display(cartdata);
function display(data) {
  document.querySelector("#random").innerHTML = "";
  data.forEach(function (el, i) {
    var main = document.createElement("div");

    var cards = document.createElement("div");
    var img = document.createElement("img");
    var nichewaladiv = document.createElement("div");
    var daam = document.createElement("p");
    var huru = document.createElement("p");
    var model = document.createElement("h4");
    var pricetag = document.createElement("div");
    //var after=document.createElement("div")
    var btn = document.createElement("div");
    btn.innerText = "remove";
    btn.setAttribute("class", "sub");
    btn.addEventListener("click", function () {
      delfun(el, i);
    });

    var qty = document.createElement("select");
    qty.setAttribute("class", "quantity");
    qty.innerHTML = `<option value="none">How many:</option>
    <option value="1">one</option>
    <option value="2">two</option>
    <option value="3">three</option>
    <option value="4">four</option>
    <option value="5">five</option>
    <option value="6">six</option>
    <option value="7">seven</option>
    <option value="8">eight</option>
    <option value="9">nine</option>
    <option value="10">ten</option>
    <option value="11">eleven</option>
    <option value="12">twelve<span>Max quantity</span></option>`;
    qty.addEventListener("change", function () {
      pricechange(el, qty);
    });
    main.setAttribute("class", "maindiv");
    img.setAttribute("src", el.img);
    nichewaladiv.setAttribute("id", "below");
    daam.setAttribute("id", "daam");
    daam.innerHTML = `Rs.`;

    huru.setAttribute("class", "huru");

    huru.innerText = (el.price * el.quantity).toFixed(2);
    daam.append(huru);

    model.innerText = el.model;
    pricetag.setAttribute("class", "pricetag");

    pricetag.append(daam, huru);
    nichewaladiv.append(model, pricetag, btn, qty);
    cards.append(img, nichewaladiv);
    document.querySelector("#random").append(cards);
  });
}

function delfun(el, i) {
  cartdata.splice(i, 1);
  localStorage.setItem("cartitems", JSON.stringify(cartdata));
  alert("Do you wanna delete it?");
  display(cartdata);
}
function pricechange(el, qty) {
  el.quantity = qty.value;
  localStorage.setItem("cartitems", JSON.stringify(cartdata));
  cartdata = JSON.parse(localStorage.getItem("cartitems")) || [];
  display(cartdata);
  // window.location.reload()
}