
    (function() {
      var preconnectOrigins = ["https://cdn.shopify.com"];
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.sFtv9J1J.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.DDBt87Md.js","/cdn/shopifycloud/checkout-web/assets/c1/esnext-vendor-legacy.DmQGhd8p.js","/cdn/shopifycloud/checkout-web/assets/c1/context-browser-legacy.Dz-Wz5gG.js","/cdn/shopifycloud/checkout-web/assets/c1/addresses-is-address-empty-legacy.CW3ub1wc.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-buyer-consent-legacy.CdVubELn.js","/cdn/shopifycloud/checkout-web/assets/c1/proposal-delegated-payment-instrument-legacy.BkEFtZbg.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-shop-theme-legacy.DA7a7QpH.js","/cdn/shopifycloud/checkout-web/assets/c1/consent-manager-shared-legacy.iFiEE_k2.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-mapper-load-recovery-legacy.CobEf69x.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-receipt-eager-mappers-legacy.BGRc4f-N.js","/cdn/shopifycloud/checkout-web/assets/c1/shared-report-graphql-error-legacy.C6E0NGpS.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-normalizeBuyerDetails-legacy.BPvQKWsK.js","/cdn/shopifycloud/checkout-web/assets/c1/helpers-derivations-legacy.CkEPqLJA.js","/cdn/shopifycloud/checkout-web/assets/c1/redemption-promotions-legacy.CpTBkh0D.js","/cdn/shopifycloud/checkout-web/assets/c1/cvv-cvvBridge-legacy.D1_XNxwM.js","/cdn/shopifycloud/checkout-web/assets/c1/graphql-PaymentSessionMutation-legacy.DtRHIhdU.js","/cdn/shopifycloud/checkout-web/assets/c1/hydrate-legacy.k_Q6RqIz.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayExternalAppContext-legacy.7MGmmmCy.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useReplaceShopPayInHistory-legacy.CayBkvoT.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-en-legacy.B9xBTioY.js","/cdn/shopifycloud/checkout-web/assets/c1/OnePage-legacy.Ca2ML4xR.js","/cdn/shopifycloud/checkout-web/assets/c1/components-VatNumberValidationField-legacy.D5CZRuX1.js","/cdn/shopifycloud/checkout-web/assets/c1/localization-index-legacy.B5FQXE0m.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.DVGh2OoP.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShowShopPayOptin-legacy.Bf6rf3fa.js","/cdn/shopifycloud/checkout-web/assets/c1/AddressPresenter-legacy.BB0Q6e-q.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShouldRevealCustomization-legacy.CG8sp6aE.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useForceShopPayUrl-legacy.Dr2XFc8-.js","/cdn/shopifycloud/checkout-web/assets/c1/ChangeCompanyLocationLink-legacy.DVJPmbJq.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressForm-legacy.R_2zINDL.js","/cdn/shopifycloud/checkout-web/assets/c1/components-RedirectionNotice.module-legacy.B_U-itWT.js","/cdn/shopifycloud/checkout-web/assets/c1/amazon-pay-useAmazonPayPaymentLine-legacy.HHBLHTwX.js","/cdn/shopifycloud/checkout-web/assets/c1/PhoneField-legacy.D9szoO8F.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useSuppressShopPayModalOnLoad-legacy.CtAIBIIK.js","/cdn/shopifycloud/checkout-web/assets/c1/Popover-legacy.EORqox2i.js","/cdn/shopifycloud/checkout-web/assets/c1/Choice-legacy.CWAE0Dgj.js","/cdn/shopifycloud/checkout-web/assets/c1/Checkbox-legacy.DYB4u7qq.js","/cdn/shopifycloud/checkout-web/assets/c1/shop-pay-installments-monorail-legacy.DtPB8RCt.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayLogo-legacy.Bj81wwcF.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useWalletsTimeout-legacy.xry9M6uj.js","/cdn/shopifycloud/checkout-web/assets/c1/stopwatch-legacy.ChQ9AwHq.js","/cdn/shopifycloud/checkout-web/assets/c1/cross-border-hooks-legacy.xsGXbod2.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButton-helpers-legacy.DlpPbyGe.js","/cdn/shopifycloud/checkout-web/assets/c1/MarketsProDisclaimer-legacy.CsOpysY4.js","/cdn/shopifycloud/checkout-web/assets/c1/IncentiveBadge-legacy.6_tagAtS.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-SectionStyleOverride-legacy.orTERUiP.js","/cdn/shopifycloud/checkout-web/assets/c1/TransitionHeight-legacy.oy0x8_C8.js","/cdn/shopifycloud/checkout-web/assets/c1/AutocompleteField-hooks-legacy.CC-sKibe.js","/cdn/shopifycloud/checkout-web/assets/c1/PendingShipping-legacy.Dw_EIo67.js","/cdn/shopifycloud/checkout-web/assets/c1/StickyPayButton-StickyPayButton.module-legacy.CY0edxWN.js","/cdn/shopifycloud/checkout-web/assets/c1/Switch-legacy.BYbN-4Se.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-payment-button-legacy.C8tppt9b.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressMutationsWithNegotiation-legacy.Cf2hCIWO.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentIcon-legacy.CgFWecFC.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentLine-legacy.ByKel9YK.js","/cdn/shopifycloud/checkout-web/assets/c1/Theme-ThemeOverride-legacy.kDjMp8wN.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useUpdateCheckoutAddress-legacy.CreLZSRr.js","/cdn/shopifycloud/checkout-web/assets/c1/payment-usePaymentExemptionReason-legacy.CyXPA7Qm.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayProgressIntercepts-legacy.DoQzB4Zc.js","/cdn/shopifycloud/checkout-web/assets/c1/Section-legacy.CJmFkgTo.js","/cdn/shopifycloud/checkout-web/assets/c1/negotiated-findSelectedDeliveryMethod-legacy.C2q0orYH.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentErrorBanner-legacy.DkoV-xdM.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useGeneralPaymentErrorMessage-legacy.DdYN8jz8.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-usePreselectSpi-legacy.v5kTKJye.js","/cdn/shopifycloud/checkout-web/assets/c1/checkout-as-guest-amazon-pay-legacy.DzfzFfAQ.js","/cdn/shopifycloud/checkout-web/assets/c1/Middot-legacy.DN9sQAIX.js","/cdn/shopifycloud/checkout-web/assets/c1/EstimatedDeliveryContent-legacy.Ljcu3a8x.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodRateLabel-legacy.msUSysDY.js","/cdn/shopifycloud/checkout-web/assets/c1/shipping-methods-consolidated-included-legacy.DYoXrvUo.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingLines-legacy.DHpE0Vv7.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.C9aUEOlu.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BOOFMz7A.js","/cdn/shopifycloud/checkout-web/assets/c1/ShippingMethodSelector-legacy.D95eb_xX.js","/cdn/shopifycloud/checkout-web/assets/c1/TextArea-legacy.DW55ToMP.js","/cdn/shopifycloud/checkout-web/assets/c1/SubscriptionPriceBreakdown-legacy.CFTQOCi7.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblems-StockProblemsLineItemList-legacy.hwkbhLX2.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useShopPayNewSignupLoginExperiment-legacy.CjlwxXCI.js","/cdn/shopifycloud/checkout-web/assets/c1/page-BelowTheFoldContent-legacy.Bb-hXUSl.js","/cdn/shopifycloud/checkout-web/assets/c1/Captcha-legacy.qSnObgGC.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayCaptcha-legacy.DCwQHdVP.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeSection-legacy.BfzHeyxO.js","/cdn/shopifycloud/checkout-web/assets/c1/components-PaymentMethodProgressionHost-legacy.D37eJjZu.js","/cdn/shopifycloud/checkout-web/assets/c1/component-MobileOrderSummary-legacy.dgboYUez.js","/cdn/shopifycloud/checkout-web/assets/c1/styles-floating-layer.module-legacy.B571Z9d2.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BcUs6f7b.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.DDnUCPEg.js","/cdn/shopifycloud/checkout-web/assets/c1/utils-useViolationsHandler-legacy.CTgz63un.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentOptionSelector-legacy.DFlnBMSX.js","/cdn/shopifycloud/checkout-web/assets/c1/BillingAddressSelector-legacy.Ct1s_Nd9.js","/cdn/shopifycloud/checkout-web/assets/c1/hooks-useStableHostMethodsReferences-legacy._QAfO9Db.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = preconnectOrigins.concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  