#PayPal Express Theme Integration for Mozu Core7#

This repository is a branch of the PayPalExpress-Theme repository, provided for backwards-compatibility. This repo contains the full source files for the Mozu Core7 theme, with the required changes to enable PayPal Express on your Mozu storefront. 

**Note:** This repo is NOT using the latest version of the Mozu Core theme. If you want to update your Mozu theme to match the latest Core, go to the master PayPalExpress-Theme repository.  

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
* [Mozu PayPal Express Integration Using Arc.js](https://github.com/Mozu/PayPal-Express) (Application Repo)
* [PayPal Express Configuration Guide](http://mozu.github.io/IntegrationDocuments/PayPalExpress/Mozu-PayPalExpress-App.htm) (App Documentation)
* [Mozu Theme Development Quickstart] (http://developer.mozu.com/content/learn/themedev/quickstart/create-your-first-theme.htm) (Mozu Documentation)
* [Comparing commits across time](https://help.github.com/articles/comparing-commits-across-time/) (GitHub Help) 

