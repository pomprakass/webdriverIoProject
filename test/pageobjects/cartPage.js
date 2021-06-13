import Page from './page';

const SELECTROS={
  tShirtMenu: '.sf-menu>li>a[title="T-shirts"]',
  productImageBlock: '.product_list .product-image-container',
  priceBlock: '.product_list .right-block',
  productPrice: '.right-block .product-price',
  addToCartButton: '.right-block .ajax_add_to_cart_button',
  cartConfirmText: '#layer_cart .ajax_cart_product_txt',
  cartProceedCheckout: 'a[title="Proceed to checkout"]',
  proceedCheckout: '.cart_navigation a[title="Proceed to checkout"]',
  deliveryAddress: '.order_delivery',
  cartUnitPrice: '.cart_unit .price>span',
  processAddress: '[name="processAddress"]',
  TCCheckBox: '.order_carrier_content input[type="checkbox"]',
  processShipping: '[name="processCarrier"]',
  paymentList: '#HOOK_PAYMENT',
  deleteIcon: '.icon-trash',
  warningMessage: '.alert-warning',
  shoppingCart: '.shopping_cart a'
};

class CartPage extends Page {
  constructor(baseSelector='', selectors=SELECTROS) {
    super(baseSelector, selectors);
  }

  clearCart() {
    this.shoppingCart.waitForDisplayed();
    this.shoppingCart.click();
    browser.waitUntil(()=>{
      if (!this.warningMessage.isDisplayed()) {
        this.deliveryAddress.waitForDisplayed();
      }
      if (this.deleteIcon.isDisplayed()) {
        this.deleteIcon.click();
      }
      return this.warningMessage.isDisplayed();
    }, 90000, 'Clear cart should done', 10000);
  }
}

export default new CartPage();
