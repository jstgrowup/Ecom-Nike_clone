var data = JSON.parse(localStorage.getItem("maiduserdata"));
var usernamedisplay = document.querySelector(".allothers");
var naamwaladiv = document.querySelector("#signin");
var naam = data.name;

if (data !== null) {
  usernamedisplay.innerHTML = ` <div id="signin"><h5></h5></div>
                    <div id="login"><h3><a href="cart.html">Cart</a></h3></div>`;
  document.querySelector("#signin h5").innerHTML = naam;
}
var maindata = JSON.parse(localStorage.getItem("maindata"));
var mens = [];
for (var i = 0; i < maindata.length; i++) {
  if (maindata[i].category === "mens") {
    mens.push(maindata[i]);
  }
}
var sort = document.querySelector("#price");
display(mens);
function display(data) {
  document.querySelector("#random").innerHTML = "";
  data.forEach(function (el, i) {
    var cards = document.createElement("div");
    var img = document.createElement("img");
    var nichewaladiv = document.createElement("div");
    var daam = document.createElement("p");
    var huru = document.createElement("p");
    var model = document.createElement("h4");
    var pricetag = document.createElement("div");
    //var after=document.createElement("div");
    var btn = document.createElement("div");
    btn.innerText = "Add to cart";

    img.setAttribute("src", el.img);
    nichewaladiv.setAttribute("id", "below");
    daam.setAttribute("id", "daam");
    daam.innerHTML = `Rs.`;

    huru.setAttribute("class", "huru");
    huru.innerText = el.price;
    daam.append(huru);

    model.innerText = el.model;
    pricetag.setAttribute("class", "pricetag");

    btn.setAttribute("class", "sub");
    btn.addEventListener("click", function () {
      jutafun(el, data);
    });

    pricetag.append(daam, huru);
    nichewaladiv.append(model, pricetag, btn);
    cards.append(img, nichewaladiv);
    document.querySelector("#random").append(cards);
  });
}
var mensarr = JSON.parse(localStorage.getItem("cartitems")) || [];
function jutafun(el, data) {
  mensarr.push(el);
  localStorage.setItem("cartitems", JSON.stringify(mensarr));
  alert("item has been added");
  display(mens);
}
sort.addEventListener("change", sortdata);
function sortdata() {
  var kuru = sort.value;
  if (kuru === "1") {
    mens.sort(function (a, b) {
      if (a.price < b.price) {
        return -1;
      } else {
        return 1;
      }
      return 0;
    });
  } else if (kuru === "-1") {
    mens.sort(function (a, b) {
      if (a.price < b.price) {
        return 1;
      } else {
        return -1;
      }
      return 0;
    });
  } else {
    display(mens);
  }
  display(mens);
}
