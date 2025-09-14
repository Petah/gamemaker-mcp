---
title: "Local Asset Packages"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Local_Asset_Packages.htm"
converted: "2025-09-14T04:00:12.340Z"
---

# Local Asset Packages

A Local Asset Package is a group of resources saved using the \*.yymps file format that can be easily installed into existing projects.

What this means is that you can create your own library of packages for commonly used resources, like script libraries, splash screen intros, menu systems, etc., without having to use the GameMaker [Marketplace](../Introduction/The_Marketplace.md).

Under the [Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md) you have two options for creating and importing **Local Asset Packages**.

## Creating An Asset Package

To create an asset package, you must first have created the resources that you want to save out in a project, and then from the [Tools](../IDE_Navigation/Menus/The_Tools_Menu.md) menu select the option **Create Local Package**. This will open the following window:

![Create Local Asset Package Window](../assets/Images/IDE%20Tools/Local_Asset_Package_Create.png)In this window you can supply an optional **Publisher Name** and a required **Display Name** and **Package ID**. The Package ID will be used to generate the file name that the package will be saved with, and will be automatically appended with the \*.yymps file extension on creation. You can also set the Version Number of the package, and choose to sign it or not (this is off by default). Signing certificates can be managed from the [Certificate Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Marketplace_Preferences.md).

Once you have filled in the details of the package, you can then go ahead and select the assets that you want to include from the "**Project**" section on the right (using the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) or a combination of ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) along with the left mouse button). Selected resources can be moved to the "**Asset Package**" view, using the **Add** or **Add All** buttons and can be removed again using the **Remove** and **Remove All** buttons.

Once you are happy with the resource selection and have filled in the required details, clicking the **OK** button will open a file explorer where you can choose the location to save the package to. Once selected the package will be created and a confirmation window will be shown, with an option to open the package location in the OS file explorer.

## Importing An Asset Package

There are two ways to import a Local Asset Package:

-   the first is simply to drag the \*.yymps file from an explorer window onto the GameMaker IDE
-   the second is to select the "**Import Local Package**" option from the [Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md).

When using the Tools Menu, an explorer window will open and you can browse to the package location then select it for importing. Either way will then open the following window in GameMaker:

![Import Local Asset Package Window](../assets/Images/IDE%20Tools/Local_Asset_Package_Import.png)On the left are the contents of the package and on the right are the parts of it that you want to import. You can select one or more resources from the package (using the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) or a combination of ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) along with the left mouse button) and then use the **Add** button to add them for importing, or use the **Add All** button to add everything for importing.

When you have everything ready, you can then click the **Import** button to add the selected resources to your project. Note that you also have the option to **Import all** resources to a new project, which will create a new project for you (and prompt you to give a location to save it to) and then add the package resources to that.

Please note that asset packages created using a version older than GameMaker 2.3 will require conversion as the project file format changed with the 2.3 update. This means it may be preferable to import the entire project and convert everything then export it as a new package to a new location if the assets are imported frequently into other projects.