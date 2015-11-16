﻿#PayPal Express Theme Integration for Mozu Core6#

This repository is a branch of the PayPalExpress-Theme repository, provided for backwards-compatibility. This repository contains the full source files for the Mozu Core6 theme, with the required changes to enable PayPal Express on your Mozu storefront.
For your convenience, the full readme for Mozu Core Theme Version 6 is included at the bottom of this file.

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

Refer to the *Upgrading to Mozu Core Theme Version 6* section below for instructions/best practices for a theme upgrade.

##Additional Resources
* [Mozu PayPal Express Integration Using Arc.js](https://github.com/Mozu/PayPal-Express) (Application Repo)
* [PayPal Express Configuration Guide](http://mozu.github.io/IntegrationDocuments/PayPalExpress/Mozu-PayPalExpress-App.htm) (App Documentation)
* [Mozu Theme Development Quickstart] (http://developer.mozu.com/content/learn/themedev/quickstart/create-your-first-theme.htm) (Mozu Documentation)
* [Comparing commits across time](https://help.github.com/articles/comparing-commits-across-time/) (GitHub Help) 

----------------------------------------------------
*Content below this line is from Mozu Core theme readme*

# Upgraded Mozu Core Theme

This release includes an upgraded Core theme called **Core6**.

## What's New

* Dropzones now available in live templates
* Enhanced `theme-ui.json` to include a new library of theme controls
* Fixed a number of issues with theme settings in `theme-ui.json`
* Visual refresh of pagination controls
* New dropzones in several pages
* Other enhancements listed in [Mozu Release Notes](http://info.mozu.com/rs/volusion/images/Mozu-ReleaseNotes-q42014.pdf).

## Upgrading to Mozu Core Theme Version 6

You must manually upgrade themes that extend Core4 and Core5 to use Core6 instead. We recommend user acceptance, automated unit, and end-to-end testing of your site to ensure Core6 works for your site.

1.   If you are using the [Mozu Base Blank Theme](https://github.com/mozu/base-blank-theme), then just run `grunt updatereferences` from the command line and skip to step 5.
2.   Download [Core6](releases) from GitHub.
3.   If you aren't using source control that allows you to rewind changes, make a backup copy of your theme before proceeding. If you are using source control, we suggest making a branch of your theme.
4.  Unzip your download and copy it to your theme's `references` directory alongside Core4 and Core5.

    You should have three directories now in `references`: `references/core4`, `references/core5`, and `references/core6`. Because the themes sit side by side with each other, you can easily diff the two themes and reference previous work you've done in Core4 and Core5.
5.  Change the `extends` property in your `theme.json` to this:
   ```
   "extends": "Core6",
   ```

6.  Merge the Core6 version of `stylesheets/storefront.less` with your site's version.

7.  Install your new Core6-based theme on a development sandbox and activate it.

8.  Activate Debug Mode in the storefront by adding the query parameter `debugMode=true` to any storefront URL.

10. Visually examine your theme for problems. 

11. Test your site for issues: view a category, search for products, configure a product, manipulate the cart, check out and place an order, make changes to your account page, etc.

12. Make any necessary corrections based on visual errors or console errors.

13. Repeat steps 11 and 12 until your theme is free from errors and regressions.


