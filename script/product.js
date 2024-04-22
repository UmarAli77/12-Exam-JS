const selectContainer = document.querySelector('#select_product');

function getProduct() {
    const selectproducts = localStorage.getItem('product');
    const parseProduct = JSON.parse(selectproducts);
    
    const imgproduct = document.createElement('div');
    const text_product_item = document.createElement('div');
    const img = document.createElement('img');
    const h2El = document.createElement('h2');
    const pEl1 = document.createElement('p');
    const pEl2 = document.createElement('p');
    const spanEl = document.createElement('span');
    const strongEl = document.createElement('strong');
    const delEl = document.createElement('del');
    const aDiv = document.createElement('div');
    const aEl = document.createElement('a');

    imgproduct.classList.add('img_product')
    text_product_item.classList.add('text_product_item');
    aDiv.classList.add('a_select');

    img.setAttribute('src', `../img/${parseProduct.logoImg}`)
    h2El.innerHTML = parseProduct.details;
    pEl1.innerHTML = 'Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы.'
    pEl2.innerHTML = 'Подходит для установки на деревянную/межкомнатную дверь.'
    spanEl.innerHTML = 'Цена';
    strongEl.innerHTML = parseProduct.newprice;
    delEl.innerHTML = parseProduct.oldprice;
    aEl.innerHTML = 'Корзинка';

    imgproduct.appendChild(img);
    text_product_item.appendChild(h2El)
    text_product_item.appendChild(pEl1)
    text_product_item.appendChild(pEl2)
    text_product_item.appendChild(spanEl)
    text_product_item.appendChild(strongEl)
    text_product_item.appendChild(delEl)
    aDiv.appendChild(aEl);
    text_product_item.appendChild(aDiv);

    selectContainer.appendChild(imgproduct);
    selectContainer.appendChild(text_product_item);
}

getProduct()

