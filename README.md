#PayPal Express Theme Integration for Mozu Core6#

This branch of the PayPalExpress-Theme repository is provided for backwards-compatibility with legacy Mozu themes. This branch contains the full source files for the Mozu [Core6](https://github.com/Mozu/core-theme/tree/core6) theme, with the required changes to enable PayPal Express on your Mozu storefront. These theme changes support the PayPal Express Application by Mozu. Go to the [Mozu App Marketplace](https://www.mozu.com/marketplace) to learn more about the app and to request installation on your tenant.


**Note:** This code is NOT using the latest version of the Mozu Core theme. If you want to update your Mozu theme to include the latest functionality, clone from the master branch of this repo.

##File Additions and Changes##

**Note:** Use GitHub’s [Compare Changes](https://help.github.com/articles/comparing-commits-across-time/) functionality to see full diffs of the following files.

The PayPal Express Integration adds the following files:
* `scripts/modules/xpressPaypal.js`

And edits the following files:
* `scripts/modules/models-checkout.js`
* `scripts/pages/checkout.js`
* `stylesheets/modules/common/form-step.less`
* `templates/back-office/packing-slip.hypr`
* `templates/email/order-confirmation.hypr`
* `templates/email/order-refund-issued.hypr`
* `templates/modules/cart/cart-table.hypr.live`
* `templates/modules/checkout/checkout-payment.hypr.live`
* `templates/modules/checkout/step-payment-info.hypr.live`
* `templates/modules/checkout/step-shipping-address.hypr.live`
* `templates/modules/common/email-address-summary.hypr.live`
* `templates/modules/web-fonts-loader.hypr`
* `theme.json`

##Additional Resources
* [PayPal Express Application by Mozu Configuration Guide](https://www.mozu.com/docs/guides/mozu-apps/paypal-express-app-by-mozu.htm)*
* [Introduction to Mozu Themes](https://www.mozu.com/docs/developer/themes/introduction.htm)
* [Comparing commits across time](https://help.github.com/articles/comparing-commits-across-time/) (GitHub Help) 


**Note:** You must log in with your Mozu Developer Account credentials to access content at [https://www.mozu.com/docs/guides](https://www.mozu.com/docs/guides/guides.htm)
