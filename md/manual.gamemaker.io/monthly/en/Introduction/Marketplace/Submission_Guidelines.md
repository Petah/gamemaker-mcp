---
title: "Submission Guidelines"
source: "manual.gamemaker.io/monthly/en/Introduction/Marketplace/Submission_Guidelines.htm"
converted: "2025-09-14T04:00:12.765Z"
---

# Submission Guidelines

It's our goal to allow anyone with a passion for creating game related content to share their creations with the GameMaker community. However we want both the publisher and the end user of the products to get the best experience possible from our [Marketplace](../The_Marketplace.md), which means that all assets being uploaded for publishing need to meet some minimum requirements, and not contain anything that may be restricted by Marketplace policy. Content that is not appropriate will be flagged as such by other users and the offending content removed from the store. To find out more information on flagging assets please see the following article:

-   [Rating And Flagging Assets](Rating_And_Flagging_Assets.md)

Therefore we have created this short list of guidelines for publishing that covers areas like content restrictions, quality control and best practice guidelines to ensure that your assets are successful:

-   **Quality Not Quantity**: To ensure the Marketplace is of value to both our publishers and our customers, there is a level of quality that we need to maintain throughout all our store offerings so you should ensure that anything you upload is of the highest quality possible and of genuine use to the customer. To that end, we value the overall quality of an asset, rather than the quantity of them, so, for example, a pack of 25 beautifully animated sprites would be preferred over a poor selection of 100 average sprites.
-   **Value To Developers**: This is one of the most important points to note about the Marketplace -  The ultimate goal is a satisfied customer, so only those assets which provide developers with something they would otherwise not have been able to create themselves, or would have cost them money or time to produce, will be accepted onto the Marketplace. So, before submitting an asset, ask yourself "Will people actually want what I have to offer?".
-   **Quality Product**: All assets on the store must represent quality. Only well produced sprites, animations, audio and code should be uploaded to the Marketplace (see the Asset Specific Information section below). Therefore code must be well commented, audio well balanced and extensions well documented. Assets that are flagged as not meeting our minimum standards of quality will be removed from the market.
-   **Value For money**: The Marketplace aims to offer great value for money, so simple assets such as single sprites, animations or sounds will not be permitted onto the Marketplace. All sprites, animations, sounds, scripts, etc. must be presented as a set or pack, and be versatile and of actual use to a developer.
-   **Easy To Use**: Making your assets accessible and easy to use is of paramount importance, which means that you should strive to make your assets well documented, commented and presented. This will mean developers are more likely to use them, which in turn ensures good ratings, and ultimately increased sales.
-   **Your Own Work**: All assets submitted to the store must be the work of the publisher and no one else. Do not submit assets downloaded or copied from other services, even if they are free. Publishers suspected of, or found to be, infringing copyrights, trademarks or any other type of intellectual property will be suspended and banned from the store if found to be in breach of the YoYo EULA. As a publisher on the Marketplace you are legally liable and can be sued by YoYo Games Ltd., the IP owner and by anyone who purchases and uses the asset.
-   **Stand Out From The Crowd**: Make sure your asset stands out with clear, well-made icons, screenshots and feature graphics. Those users that have already published games to the various app stores, or those of you that have published assets through other sites, will now know how important the final presentation of a product is and how it can influence sales. Assets with poor visual appeal are less likely to be purchased or downloaded, so take some time to design your icons and create screenshots and videos (if applicable) for the assets you wish to sell.
-   **Naming**: Ensure your asset name appropriately describes your asset allowing developers to quickly identify your asset as the solution they are looking for. Names must be unique and should not contain any non-standard characters or underscores. Names must not use trademarked brands, and we cannot accept names which include YoYo, YoYo Games, Marketplace, GameMaker or GameMaker Studio.
-   **Organisation**: How you organise the asset with the GMEZ project file is up to you but we strongly recommend that you create a folder structure that clearly shows your assets as separate so that when the user imports them into their game, they are clearly distinguishable from their own assets. For example, if your asset is called "TOP DOWN AI", then you would make a folder called "Top Down AI" for all the assets that the project has, and place everything within these, using further sub-folders as required. It is also a good idea to clearly label any resources that are not essential and supplied as part of a Demo or Tutorial so that the end user can simply delete these.
-   **Documentation**: All asset submissions must include documentation describing what your asset does, how to setup or install your asset and how to use your asset. The inclusion of an example scene or project which uses your asset is also beneficial, as are any videos or links to tutorials, etc. Try to make your documentation as extensive as possible, especially if you are creating extensions or projects.
-   **Maximum Asset Size**: Marketplace assets cannot be any larger than 50Mb. This is done so that users are able to add multiple Marketplace assets to their project without the size of their project increasing by too much and to ensure that all assets on the Marketplace remain small enough to be usable.

These are general guidelines for _all_ assets that you upload to the Marketplace, but below are some additional guidelines based on the type of asset that you upload.

[Graphic AssetsGraphic Assets](Submission_Guidelines.htm#)

All graphics assets (sprites, backgrounds and animations) must be of the highest possible quality and be of real use to the end user. All bitmap graphics such as tiles and textures must use a lossless compression format such as PSD, PNG or TIFF, and lossy images such as JPEG should not be used, and other users may flag such products for removal.

If the graphic assets being uploaded are **fonts**, then these must be your own work and of the highest quality. They should cover at least the minimum standard [ASCII](https://en.wikipedia.org/wiki/ASCII) range of characters, and be of use to people who are making games. We do not permit re-packaging of free fonts or any other font resource that is licensed from another entity.

[Coded AssetsCoded Assets](Submission_Guidelines.htm#)

All scripts and coded assets must be well documented. You should use comments throughout the code to explain and identify areas to the user as well as have error handling and debug functions built in. Your code should also be formatted as closely as possible to that stipulated below:

-   **All Code Should Be Commented** - A well placed comment can greatly help users to understand your code and get the best use from it, so add these where necessary. It is better to give too much information than too little.
-   **Consistent Indentation** - There are a great variety of indentation techniques for code blocks, and we do not require that one be used over any other. However, we do require that your code be consistent, so if you take a new line for an open bracket once, you should do so for all, ie: keep the style consistent.
-   **Code Grouping** - try to avoid "walls" of code, and add line breaks between relevant sections. For example, if you have a lot of variable declarations and then a for loop, add an empty line between them to "group" the code into obvious sections. this improves readability.
-   **Consistent Naming** - keep your variable and script naming consistent. Please do not use, for example, camelCase for some things then under\_bar for others as, again, this affects readability.
-   **Consistent Local Var Names** - Normally, the variables should be descriptive and contain one or more words. But, this doesn't necessarily apply to local (temporary) variables. They can be as short as a single character, and it is a good practice to use consistent names for your local variables that have the same kind of role.

If you are uploading a **shader** asset to the Marketplace, think carefully about how you present it and ensure that it works as stated. You can upload individual shaders, or "packs" containing more than one, but whatever the case the shader should be clearly documented and the actual code should be commented to provide easy access to all users.

[Extension AssetsExtension Assets](Submission_Guidelines.htm#)

Extension assets must come with complete documentation that outlines how to use them as well as any caveats or known issues. Your extensions should be as easy to use as possible, and if they have any UI components, these should be intuitive and clear. If you are basing the extension on any third party SDKs or files, then you should have the correct licencing and provide links to the source documentation.

[Audio AssetsAudio Assets](Submission_Guidelines.htm#)

Before uploading any audio assets, ensure that they are of the highest quality possible and that they are _normalized_ such that all sounds maintain the same base min/max range in dB, and make sure that the balance (bass, stereo field, etc...) is correct. Test all sounds in GameMaker before uploading to ensure that the encoding format is compatible and that they can be heard. Sound effects should be in WAV format and can be mono or stereo, and music should be either OGG or MP3 and stereo.

You can find details on how to create a Marketplace listing for your assets, as well as on how to upload them to the store, from the following pages:

-   [Listing An Asset](Listing_An_Asset.md)

And there is also a guide to how to style your asset and services pages on the following page:

-   [Marketplace Style Guide](Marketplace_Style_Guide.md)