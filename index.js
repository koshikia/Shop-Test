import products from '/products.js';
import cart from './cart.js';

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent.innerHTML;
        temporaryContent.innerHTML = null;
        cart();
        initApp();
    });
}
loadTemplate();

const initApp = () => {
    // Tạo thanh tìm kiếm
    let searchContainer = document.createElement('div');
    searchContainer.innerHTML = `
        <input 
            type="text" 
            id="searchBar" 
            placeholder="Tìm kiếm sản phẩm..."
            style="width: 30%; padding: 10px; margin-bottom: 20px;"
        >
    `;
    let listProductHTML = document.querySelector('.listProduct');
    listProductHTML.parentNode.insertBefore(searchContainer, listProductHTML);

    // Tải ds sản phẩm
    const loadProducts = (keyword = '') => {
        listProductHTML.innerHTML = null;
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(keyword.toLowerCase())
        );
        
        filteredProducts.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('item');
            newProduct.innerHTML = 
            `<a href="/detail.html?id=${product.id}">
                <img src="${product.image}">
            </a>
            <h2>${product.name}</h2>
            <div class="price">${product.price} đ</div>
            <button 
                class="addCart" 
                data-id='${product.id}'>
                    Thêm vào giỏ hàng
            </button>`;
            listProductHTML.appendChild(newProduct);
        });
    };

    loadProducts(); // Tải sản phẩm ban đầu

    // Tạo event khi search
    let searchBar = document.getElementById('searchBar');
    searchBar.addEventListener('input', () => {
        loadProducts(searchBar.value);
    });
}
