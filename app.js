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

// getProductImagesSrc
images = document.querySelectorAll('.product-container img');
let imgSrc;
images.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
})

// createImageModal
let imgModal = (src) => {
    // 이미지 모달창 생성
    const modal = document.createElement('div');
    modal.setAttribute('class', 'modal');

    // 모달 닫기 창 생성
    const modalClose = document.createElement('i');
    modalClose.setAttribute('class', 'bi bi-x-circle modalClose')
    modalClose.onclick = () => {
        modal.remove();
    };

    // shop 섹션에 모달 추가
    document.querySelector('.shop').append(modal);
    const newImage = document.createElement('img');
    newImage.setAttribute('src', src);
    modal.append(newImage, modalClose);
}