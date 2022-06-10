var data = JSON.parse(localStorage.getItem("maiduserdata"));
var usernamedisplay = document.querySelector(".allothers");
var naamwaladiv = document.querySelector("#signin");
var naam = data.name;

if (data !== null){
  usernamedisplay.innerHTML = `<div id="signin"><h5></h5></div>
                  <div id="login"><h3><a href="cart.html">Cart</a></h3></div>`;
  document.querySelector("#signin h5").innerHTML = naam;
}
var maindata = [
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/88d0be0c-a32e-4c17-8817-2b06346c82d7/air-zoom-superrep-3-hiit-class-shoes-dSzQgH.png",
    price: 10295,
    model: "Nike Air Zoom",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5b3e35e9-d32e-4a1e-9e62-2ff61783b023/dri-fit-swoosh-training-t-shirt-3BpcXz.png",
    price: 1795,
    model: "Nike Dri-Fit",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0007fa77-5d55-46c5-bb72-a5595f40ba0b/jordan-why-not-zer0-5-older-basketball-shoes-6x0vk2.png",
    price: 7495,
    model: "Jordan Zer0.5",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/44ec1402-c1c7-4aee-b9cf-91b8b2d34f7f/jordan-one-take-3-pf-basketball-shoe-pKG2Lv.png",
    price: 8295,
    model: "Jordan One Take 3",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d1d832d8-6e09-4d3a-af74-4754dafeb072/jordan-zion-top-8D8nPd.png",
    price: 6495,
    model: "Jordan x Zion",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/11101919-c913-4be0-b0ac-c3261185b945/kyrie-irving-nets-statement-edition-2020-jordan-nba-swingman-jersey-f8Qf6h.png",
    price: 3997,
    model: "Nets STatement Edition",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/4607ffdd-c807-4b35-8308-271c0a710119/dri-fit-swoosh-icon-clash-support-non-padded-graphic-sports-bra-0MfLTF.png",
    price: 3675,
    model: "Nike Icon Clash",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/77ae7f83-8449-4838-bac4-36ecef7aa299/sportswear-icon-clash-boxy-t-shirt-tBVMDn.png",
    price: 8000,
    model: "Nike yellow clash",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f4fd6097-982a-49ee-bd3b-d3b4738fee1d/dri-fit-indy-icon-clash-light-support-padded-strappy-graphic-sports-bra-MTF3bt.png",
    price: 3000,
    model: "Nike Indy Icon Clash",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/b839e675-cbec-415d-bc12-6e9d564e0370/dri-fit-icon-clash-running-midlayer-rDgQD1.png",
    price: 4500,
    model: "Nike pink Dri-Fit",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a8bceb63-d57c-4856-a086-ff45acac1133/swoosh-icon-clash-support-padded-strappy-sports-bra-6WQT97.png",
    price: 5000,
    model: "Nike Swoosh Icon CLash",
    category: "women",
    quantity:1,
  },

  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/94397042-f86b-4fdc-8ec0-99c6e70e3096/toddler-dunk-low-obsidian-graffiti-dm1048-400-release-date.jpg",
    price: 2000,
    model: "Airmax 2000",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/719bd271-0f29-40bd-850d-fb4fd67b890a/air-jordan-1-bleached-coral-555088-108-release-date.jpg",
    price: 3000,
    model: "Airmax 2",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ba529477-85a2-4c6f-9daf-53ed5b9e7e8a/air-kukini-se-summit-white-and-aviator-grey-dv1894-100-release-date.jpg",
    price: 1500,
    model: "Nike Ultimate 2",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0fb77cdd-d0f2-4e45-8059-c4d227732b50/dri-fit-acg-uv-snowgrass-all-over-print-top-5tfwS7.png",
    price: 5000,
    model: "Nike leather T-shirt",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e6af4a93-5f8c-431b-a1de-04b11744e6ee/sportswear-essentials-t-shirt-K9vnhV.png",
    price: 7000,
    model: "Nike half T-shirt",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9b513306-b1c6-47e5-b2d9-03f6432bd72f/liverpool-fc-2022-23-stadium-home-dri-fit-football-shirt-XhnBrv.png",
    price: 2000,
    model: "Livepool jursey",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/3509fbbd-d5d4-4a95-af96-3ab317a62edd/jordan-dri-fit-sport-t-shirt-n3lwwm.png",
    price: 5000,
    model: "Nike Football T-shirt",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0133e4a9-74f9-4ac4-8f0c-c27ae6bbe458/dri-fit-swoosh-icon-clash-support-padded-strappy-printed-sports-bra-fW4Dd0.png",
    price: 2000,
    model: "Sports Bra",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d410b93-b483-452f-a03d-3578f03f6599/sportswear-icon-clash-hooded-romper-b78z2V.png",
    price: 5000,
    model: "Women half Jacket",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/aca3831f-7bff-4bdb-936b-3df3da4a33ac/sportswear-icon-clash-woven-boyfriend-jacket-gmkBRv.png",
    price: 6000,
    model: "Nike sport jacket",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7f3d27f6-f9f2-4967-92f3-653b18e8aa82/sportswear-icon-clash-oversized-fleece-crew-w50226.png",
    price: 5000,
    model: "Nike black half jacket",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1fb5f835-9c37-43d8-942c-86b342b21de5/dri-fit-indy-icon-clash-light-support-padded-t-back-sports-bra-zjL6g2.png",
    price: 9000,
    model: "Light support padded sports bra",
    category: "women",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1e24f20d-6d87-46db-89b7-faff3e73258a/city-rep-tr-training-shoe-k6VCMk.png",
    price: 4000,
    model: "Nike blue stripe X",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/55465c6f-7837-4293-8304-921719827f26/escape-run-flyknit-road-running-shoes-ffDrKV.png",
    price: 2000,
    model: "Nike white sneakers",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/1e1ac86b-300b-4539-8e39-6853f7e87120/acg-air-mowabb-twine-dc9554-700-release-date.jpg",
    price: 5000,
    model: "Nike superX",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/ceb636af-e618-4a99-8266-483cc2573ac1/overbreak-hot-curry-dc8240-800-release-date.jpg",
    price: 7000,
    model: "Antartic whiteY",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/82d9fe71-d7d7-4299-b6bf-e3ffe281b19d/zion-1-x-naruto-alpha-orange-release-date.jpg",
    price: 6000,
    model: "Naruto alpha orange",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/80e25f9b-da46-4676-979a-b9ef199221be/ajko-1-rush-orange-do5047-801-release-date.jpg",
    price: 2000,
    model: "Ajko rush-orange",
    category: "sneakers",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/0aea9f44-56e8-4ba4-99a5-2d0b04cddace/dri-fit-woven-training-shorts-5f0FNk.png",
    price: 1000,
    model: "DrY fit for mens",
    category: "mens",
    quantity:1,
  },
  {
    img: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/74acaae4-8c2b-4055-9875-a9da548814f8/sport-clash-training-top-gdPmSf.png",
    price: 5000,
    model: "Sport clash top",
    category: "mens",
    quantity:1,
  },
];
localStorage.setItem("maindata", JSON.stringify(maindata));
display(maindata);
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
    //    var after=document.createElement("div")
    var btn = document.createElement("button");

    img.setAttribute("src", el.img);
    nichewaladiv.setAttribute("id", "below");
    daam.setAttribute("id", "daam");
    daam.innerHTML = `Rs.`;

    huru.setAttribute("class", "huru");
    huru.innerText = el.price;
    daam.append(huru);

    model.innerText = el.model;
    pricetag.setAttribute("class", "pricetag");

    btn.setAttribute("class", "submit");

    pricetag.append(daam, huru);
    nichewaladiv.append(model, pricetag, btn);
    cards.append(img, nichewaladiv);
    document.querySelector("#random").append(cards);
  });
}