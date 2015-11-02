define(['modules/jquery-mozu',
        "modules/api",
        'modules/models-cart', 
        'hyprlivecontext',
        'underscore'],
function($, Api, CartModels, hyprlivecontext, _) {

    window.paypalCheckoutReady = function() {
     
      var siteContext = hyprlivecontext.locals.siteContext,
          externalPayment = _.findWhere(siteContext.checkoutSettings.externalPaymentWorkflowSettings, {"name" : "PayPalExpress2"}),
          merchantAccountId = _.findWhere(externalPayment.credentials, {"apiName" : "merchantAccountId"}),
          environment = _.findWhere(externalPayment.credentials, {"apiName" : "environment"}),
          id = CartModels.Cart.fromCurrent().id,
          isCart = window.location.href.indexOf("cart") > 0;
      
        paypal.checkout.setup(merchantAccountId.value, {
            environment: environment.value,
            click: function(event) {
                event.preventDefault();

                paypal.checkout.initXO();
                $.ajax({                                          
                    url: "../paypal/token?id=" + id + "&isCart="+ isCart + (!document.URL.split('?')[1] ? "": "&" + document.URL.split('?')[1].replace("id="+id,"").replace("&&", "&")),
                    type: "GET",   
                    async: true,

                    //Load the minibrowser with the redirection url in the success handler
                    success: function (token) {
                        var url = paypal.checkout.urlPrefix + token.token;
                        //Loading Mini browser with redirect url, true for async AJAX calls
                        paypal.checkout.startFlow(url);
                    },
                    error: function (responseData, textStatus, errorThrown) {
                        console.log("Error in ajax post " + responseData.statusText);
                        //Gracefully Close the minibrowser in case of AJAX errors
                        paypal.checkout.closeFlow();
                    }
                });
            },
            button: ['btn_xpressPaypal']
        });
    };
    
    $.getScript("//www.paypalobjects.com/api/checkout.js").done(function(scrit, textStatus){
      //console.log(textStatus);
    }).fail(function(jqxhr, settings, exception) {
      console.log(jqxhr);
    });

});