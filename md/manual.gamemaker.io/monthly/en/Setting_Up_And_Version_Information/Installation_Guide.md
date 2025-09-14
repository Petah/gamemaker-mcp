---
title: "Installation Guide"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/Installation_Guide.htm"
converted: "2025-09-14T04:00:14.023Z"
---

# Installation Guide

GameMaker is designed for use on **macOS** and **Windows** desktop computers.

You can download the GameMaker installer on the [GameMaker Website](https://gamemaker.io/en/download) and install it. Once installed, the first time you run GameMaker you may be prompted to [update](Updating_Guide.md) if there is a newer version. You will then be shown the [Runtime Modules Dialog](Installation_Guide.htm#h) which allows you to select the runtime modules that you'd like to install.

After the runtimes and any updates have been installed, you will be able to use the IDE, and optionally [log in](Licencing_Information.md) (required for creating executables).

It is worth noting that - depending on the licence type that you have - you may be required to install additional components or follow additional steps to set up and use GameMaker for specific platforms. For full information on what each platform requires, please see this article on the GameMaker Helpdesk: [Required SDKs](https://help.gamemaker.io/hc/en-us/articles/227860547-GameMaker-Required-SDKs).

## Stable, Beta and LTS

The version you download from the [Download page](https://gamemaker.io/en/download) should be the current **Stable** version of GameMaker. The page also has a "**Beta**" version available which is used to showcase or test new functionality before it goes into a final stable build, as well as an "**LTS**" version that gets only bug fixes.

The full version details are as follows:

-   **Stable**: This version is the one you would be using for general development and is recommended for use with any commercial product. It may lack certain features available in the Beta versions, but this is because they haven't been fully tested or require additional work.
-   **Beta**: The Beta version of GameMaker is for those that wish to try out new features before they get added to the Stable build, or for those that require a coming fix for an issue. It is not recommended that you use the Beta build for final game production unless it contains an important fix for a bug that is holding up your project. You can get a Beta build of GameMaker from the [GameMaker Website](https://gamemaker.io/en/download), and it can be installed and run side-by-side with the Stable build. Please note that if you are running GameMaker through **Steam** then you will not have access to the Beta build of the product using Steam itself, although you can still download and use the desktop version.
-   **LTS**: Long-Term Support gives you a fixed version of GameMaker that only receives bug fixes and no feature updates. This is useful for long-term commercial projects that want to avoid the changes that come with major feature additions, and only require fixes to engine bugs.

## Runtime Modules Dialog

Every runtime in GameMaker consists of a set of modules. As you might not need all of them on your system you can select which ones to download and install, for those cases where you e.g. are working on a machine with a limited amount of disk space or have a slow internet connection.

NOTE This dialog will always be shown to you the first time you install any version of GameMaker starting with 2022.11. The default setting is to remember your choices and not show the dialog again in the future, but you can set the [Remember last selection of modules](IDE_Preferences/Runtime_Feed_Preferences.htm#h) option in the [Runtime Feeds Preferences](IDE_Preferences/Runtime_Feed_Preferences.md) to "Show Message" to make the dialog show again each time.

Before installing a new runtime you will then be shown this dialog:

![](../assets/Images/Setup_And_Version/Preferences/Runtime_Modules_Default_Windows.png)

Checking the "Remember Selection" checkbox in this dialog will ensure you don't see it again. The selection of modules you choose here will then also be used when installing new runtimes and the [Remember last selection of modules](IDE_Preferences/Runtime_Feed_Preferences.htm#h) option will be set to "OK".

The above is the default selection of modules on Windows. The _base_ module and the module _for the OS that you're currently developing on_ are _always_ included. They are the minimum _required_ modules for GameMaker to be able to build your game. All other modules are _optional_.

You can quickly change this by clicking the _Required only_ button:

![](../assets/Images/Setup_And_Version/Preferences/Runtime_Modules_Required_Only_Windows.png)If you want to download and install the full list of modules that is available then you can click "Select All" instead:

![](../assets/Images/Setup_And_Version/Preferences/Runtime_Modules_All_Windows.png)

Note that, depending on the selected modules, downloading and installing a runtime can take a few minutes, but you can see a progress bar for the download at the top right of the IDE:

![Installing a Runtime](../assets/Images/Setup_And_Version/Getting_Started_Installing_Runtimes.png)