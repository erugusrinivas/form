var url = 'https://dummyjson.com/products/';
const getData = async()=>{
    var data = await fetch(url);
    var mydata = await data.json();
    show_data(mydata); // 30
}
getData();

var show_data = (data) => {
    var temp = ``;
    data.products.forEach(e => {
        console.log(e);
        temp+= `<div class="col-md-4" onClick="navigateProducts(${e.id})"><div class="product-card" title="${e.description}">
        ${showbestSeller(e.rating) ? `<div class="best_seller">Best Seller</div>` :'' }
        <img src=${e.thumbnail} alt="Product Image" class="img-fluid img-responsive">
        <div class="product-info">
          <h4>${e.title}</h4>
          <p class="truncate">${e.description}</p>
          <p class="price">₹${e.price*82}</p>
          <button class="btn btn-primary">Add to cart</button>
        </div>
        <div class="product-actions">
          <button class="btn btn-secondary">View details</button>
          <button class="btn btn-secondary">Add to wishlist</button>
        </div>
      </div>
      </div>`;
    });
document.getElementById('card_list').innerHTML = temp;
}

showbestSeller = (e) =>{
    return e>4.5 ? true : false
}

navigateProducts = (e) => {
    window.location.href=`products.html?id=${e}`;
}
