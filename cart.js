import products from "./products.js";
const cart = () => {
    let listCartHTML = document.querySelector('.listCart');
    let iconCart = document.querySelector('.icon-cart');
    let iconCartSpan = iconCart.querySelector('span');
    let body = document.querySelector('body');
    let closeCart = document.querySelector('.close');
    let cart = [];

    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });
    closeCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    });

    const setProductInCart = (idProduct, value) => {
        let positionThisProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        if(value <= 0){
            cart.splice(positionThisProductInCart, 1);
        }else if(positionThisProductInCart < 0){
            cart.push({
                product_id: idProduct,
                quantity: 1
            });
        }else{
            cart[positionThisProductInCart].quantity = value;
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        addCartToHTML();
    };

    const addCartToHTML = () => {
        listCartHTML.innerHTML = '';
        let totalQuantity = 0;
        let totalPrice = 0;

        if (cart.length > 0) {
            cart.forEach(item => {
                totalQuantity = totalQuantity + item.quantity;
                let newItem = document.createElement('div');
                newItem.classList.add('item');
                newItem.dataset.id = item.product_id;

                let positionProduct = products.findIndex((value) => value.id == item.product_id);
                let info = products[positionProduct];
                listCartHTML.appendChild(newItem);

                let itemTotalPrice = info.price * item.quantity;

                newItem.innerHTML = `
                    <div class="image">
                        <img src="${info.image}">
                    </div>
                    <div class="name">
                        ${info.name}
                    </div>
                    <div class="totalPrice">${itemTotalPrice} đ</div>  <!-- **New** - Display product's total price -->
                    <div class="quantity">
                        <span class="minus" data-id="${info.id}"><</span>
                        <span>${item.quantity}</span>
                        <span class="plus" data-id="${info.id}">></span>
                    </div>
                `;

                totalPrice += itemTotalPrice;
            });

            iconCartSpan.innerText = totalQuantity;

            let totalPriceElement = document.querySelector('.totalPriceElement');
            if (!totalPriceElement) {
                totalPriceElement = document.createElement('div');
                totalPriceElement.classList.add('totalPriceElement');
                listCartHTML.appendChild(totalPriceElement);
            }
            totalPriceElement.innerHTML = `<strong>Tổng giá trị: ${totalPrice} đ</strong>`;
        } else {
            iconCartSpan.innerText = 0;
        }
    };

    // Event cho cart
    document.addEventListener('click', (event) => {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let quantity = null;
        let positionProductInCart = cart.findIndex((value) => value.product_id == idProduct);
        switch (true) {
            case (buttonClick.classList.contains('addCart')):
                quantity = (positionProductInCart < 0) ? 1 : cart[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('minus')):
                quantity = cart[positionProductInCart].quantity - 1;
                setProductInCart(idProduct, quantity);
                break;
            case (buttonClick.classList.contains('plus')):
                quantity = cart[positionProductInCart].quantity + 1;
                setProductInCart(idProduct, quantity);
                break;
            default:
                break;
        }
    });

    // Event thanh toan
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('checkOut')) {
            alert('Đã thanh toán thành công');
            cart = [];
            localStorage.removeItem('cart');
            addCartToHTML();
        }
    });

    // Event dong gio hang
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('close')) {
            closeCart.addEventListener('click', () => {
                body.classList.toggle('activeTabCart');
            });
        }
    });

    // Tao LocalStorage
    const initApp = () => {
        if(localStorage.getItem('cart')){
            cart = JSON.parse(localStorage.getItem('cart'));
            addCartToHTML();
        }
    };
    initApp();
};

export default cart;
