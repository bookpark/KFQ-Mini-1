// showCart
document.querySelector('.toggle-cart').addEventListener(
    'click', () => {
        document.querySelector('.cart-overlay').classList.add('show');
    }
);

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

// setBodyOverflowHidden
document.querySelector('.toggle-cart').addEventListener(
    'click', () => {
        document.querySelector('body').classList.add('overflow-hidden');
    }
)

// rmBodyOverflowHidden
document.querySelector('.cart-close').addEventListener(
    'click', () => {
        document.querySelector('body').classList.remove('overflow-hidden');
    }
)