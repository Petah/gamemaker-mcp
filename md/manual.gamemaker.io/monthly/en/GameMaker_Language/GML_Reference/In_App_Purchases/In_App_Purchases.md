---
title: "In-App Purchases"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/In_App_Purchases/In_App_Purchases.htm"
converted: "2025-09-14T04:00:00.431Z"
---

# In-App Purchases

You can add In-App Purchases to your games using the extensions available from the Marketplace and following the setup guides listed below (each extension comes with its own "mini-manual" that explains how to use it and lists all of the functions it contains):

-   [Android: Setting Up IAPs](https://github.com/YoYoGames/GMEXT-GooglePlayBilling/wiki/Using_The_Google_Play_IAP_Extension)
-   [iOS: Setting Up IAPs](https://github.com/YoYoGames/GMEXT-AppleIAP/wiki)
-   [macOS: Setting Up IAPs](https://github.com/YoYoGames/GMEXT-AppleIAP/wiki)

Previous versions of GameMaker had the In-App Purchase functions built into the runner, however these functions have now been deprecated and will no longer work:

-   iap\_data
-   iap\_activate
-   iap\_status
-   iap\_enumerate\_products
-   iap\_restore\_all
-   iap\_acquire
-   iap\_consume
-   iap\_product\_details
-   iap\_purchase\_details

The following function is provided for revalidating Mac App Store receipts:

-   [mac\_refresh\_receipt\_validation](../../../../../../GameMaker_Language/GML_Reference/In_App_Purchases/mac_refresh_receipt_validation.md)