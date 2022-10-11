// showCart
document.querySelector('.toggle-cart').addEventListener(
    'click', () => {
        document.querySelector('.cart-overlay').classList.add('show');
    }
);

// setBodyOverflowHiddenonClickToggleCart
document.querySelector('.toggle-cart').addEventListener(
    'click', () => {
        document.querySelector('body').classList.add('overflow-hidden');
    }
)

// showCartOnClickProductCartBtn
var cartBtn = document.getElementsByClassName('product-cart-btn')
showCart = function () {
    document.querySelector('.cart-overlay').classList.add('show');
}
for (i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener('click', showCart)
}

//setBodyOverflowHiddenonClickProductCartBtn
var cartBtn = document.getElementsByClassName('product-cart-btn')
setOverflowHidden = function () {
    document.querySelector('body').classList.add('overflow-hidden');
}
for (i = 0; i < cartBtn.length; i++) {
    cartBtn[i].addEventListener('click', setOverflowHidden)
}

// closeCart
document.querySelector('.cart-close').addEventListener(
    'click', () => {
        document.querySelector('.cart-overlay').classList.remove('show');
    }
)

// showSide
document.querySelector('.toggle-nav').addEventListener(
    'click', () => {
        document.querySelector('.sidebar-overlay').classList.add('show');
    }
)

// closeSideBarClickedProducts
document.querySelector('.product-link').addEventListener(
    'click', () => {
        document.querySelector('.sidebar-overlay').classList.remove('show');
    }
)

// rmBodyOverflowHidden
document.querySelector('.cart-close').addEventListener(
    'click', () => {
        document.querySelector('body').classList.remove('overflow-hidden');
    }
)