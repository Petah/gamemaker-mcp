---
title: "How to Disable Extensions?"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extension_Creation/Disabling_Extensions.htm"
converted: "2025-09-14T04:00:15.205Z"
---

# How to Disable Extensions?

GameMaker has extensions for some target platforms, e.g. [Steamworks](https://github.com/YoYoGames/GMEXT-Steamworks) and [GDK](https://github.com/YoYoGames/GDKExtension).

If you're using both of these extensions, you'll want to disable the GDK extension when building for Steam, and vice versa.

This problem is not limited to these two extensions, and applies to any extension that is meant for a specific target.

## Disabling extensions selectively

First, [set up a configuration](../../Settings/Configurations.md) for each one of your target platforms, if you haven't done so already.

This example only uses Steamworks and GDK.

![](../../assets/Images/Asset_Editors/Disabling_Extensions/DisExt_Configs.png)Select the configuration for one target platform. Let's assume you selected the **GDK** configuration.

Open an extension that should not be used for GDK. For this example, open the Steamworks extension.

![](../../assets/Images/Asset_Editors/Disabling_Extensions/DisExt_CopiesTo.png)Disable all of the targets under **Copies To**. This will ensure that the Steamworks extension is not executed when using the GDK configuration.

Now, switch over to your **Steamworks** configuration. Open the GDK extension, and disable all of its targets.

## Done!

Now, whenever you build for GDK, use the GDK configuration; when you build for Steam, use the Steamworks configuration, and so on.

Using configurations this way allows you to control which extensions are used for building which platforms.

If you have more extensions, give them the same treatment: disable their exports in configurations that don't need them.

If you have more target platforms, add configurations for them, and modify which extensions are used for them.