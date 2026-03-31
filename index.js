let itemsContainerElement = document.querySelector('.items-container');

let item = {
    image: 'images/Images2/1.jpg',
    rating:{
        stars:4.5,
        count: 1400,
    },
    company_name:'Carlton London',
    item_name:'Rhodium-Plated CZ Floral Studs',
    current_price:606,
    original_price:1045,
    discount_percentage : 42
}
let bagItems ;
onLoad();

function onLoad (){
let  bagItemsStr = localStorage.getItem('bagItems');
bagItems = bagItemsStr ? JSON.parse(bagItemsStr):  [];
displayItemsOnHomePage();
displayBagIcon();
}

function  addToBag(itemId){
    console.log(itemId)
    bagItems.push(itemId);
    localStorage.setItem('bagItems', JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagitemsCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0){
    bagitemsCountElement.style.visibility =  'visible';    
    bagitemsCountElement.innerText = bagItems.length;
    }else{
        bagitemsCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){
let itemsCOntainerElement = document.querySelector('.items-container');
if (! itemsCOntainerElement){
    return;
}
let innerHTml =  '';
items.forEach(item => {
    // console.log(typeof item.id)
    innerHTml +=`                                    <div class="item-container">
    <img src="${item.image}" alt="item image" class="item-image">
    <div class="rating">
        ${item.rating.stars}⭐ | ${item.rating.count}
    </div>
    <div class="company-name">Carlton London</div>
        <div class="item-name">Rhodium-Plated CZ Floral Studs </div>
        <div class="price">
            <span class ="current-price">Rs.${item.current_price}</span>
            <span class="original-price">Rs.${item.original_price}</span>
            <span class="discount">${item.discount_percentage}% OFF</span>
        </div>
        <button class="add-to-cart" onclick="addToBag('${item.id}')">Add to Cart</button>
</div>`
});

itemsContainerElement.innerHTML = innerHTml;
}
