---
title: "Configurations"
source: "manual.gamemaker.io/monthly/en/Settings/Configurations.htm"
converted: "2025-09-14T04:00:14.333Z"
---

# Configurations

Due to the demands of cross-platform development and the need for one product to be available and customised for different clients or devices or platforms, GameMaker includes **configurations** to make things simpler. Using this system, you can quickly switch between different splash screens, icons and included files and test or export only those that are relevant to the target platform or client at any time, all from the same base code.

To be able to deal with the different demands from clients and platforms you can use the **Configuration Editor** which is accessible from the **Extras** menu on [The Asset Browser](../Introduction/The_Asset_Browser.md):

![Open The Configuration Editor](../assets/Images/Settings/Configs_Open_Editor.png)All games made in GameMaker start with a "Default" configuration, which is listed in the editor when you first open it:

![The Configuration Editor](../assets/Images/Settings/Configs.png)To set up your configurations it is recommended that you first prepare this "Default" config by incorporating all the configurable assets for the project into it. To do this, simply go through the following list of options and set them to what is required by default:

-   [Extension Options](../The_Asset_Editors/Extensions.md): Set the various "Copy to..." fields to the required platforms for the configuration. Any "Proxy" files created here will have their "Target" platform linked to the configuration too.
-   [Sprite Editor](../The_Asset_Editors/Sprites.md): Set the texture group that you want the sprites to be added to.
-   [Tileset Editor](../The_Asset_Editors/Tile_Sets.md): Set the texture group that you want the tilesets to be added to.
-   [Font Editor](../The_Asset_Editors/Fonts.md): Set the texture group that you want the fonts to be added to.
-   [Texture Group Manager](Texture_Groups.md): Here you can set any of the properties on a per-configuration basis, including the parent group that a texture group belongs to.
-   [Audio Group Manager](Audio_Groups.md): The sounds that are assigned to the different audio groups is configurable here..
-   [Included Files](Included_Files.md): Set the "Copy to..." field to the required platforms for the configuration.

Once you have set up the default configuration, you can then add a new one to the Configuration Editor by right clicking ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) on the configurations folder and selecting **Add Config**, or by clicking the "_Create_" button at the bottom of the window. The new configuration will be shown as a "child" of the default config - all user defined configurations are children of the default - and you can give it an appropriate name.

To edit the config, you must either double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on it or use the right mouse button ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu option "_Set Config_", which will select the configuration in the editor and once that has been done, you can go ahead and customise it. This is done by simply going through the options listed above and changing them to the desired settings for the newly created configuration. GameMaker will store these values automatically for the config, and you can change between configs at any time by simply using the RMB ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu option or double clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png).

Further configurations can be added as either children of the default configuration, or children of the user defined configurations that you've created, depending on which configuration has been highlighted in the editor when you created it. In the example image below, you can see we have three custom configs defined, two of which are children of the default config, and another that is the child of a user defined config:

![Child Configurations In The Configuration Editor](../assets/Images/Settings/Configs_Children.png)A child configuration will inherit values for [Macros](../GameMaker_Language/GML_Overview/Variables/Constants.htm#h) that are set for its parent configuration (whichever closest parent has a macro override assigned). See: [Configuration Override](../GameMaker_Language/GML_Overview/Variables/Constants.htm#h1)

You can use any given configuration with any given target platform when compiling or testing your projects. This is done by selecting the config you require from within the **Config** section of the **Target Manager**:

![Configurations In The Target Manager](../assets/Images/Settings/Configs_TargetManager.png)You can also open the Configuration Editor at any time from the Target Manager by clicking the menu button at the top right (as highlighted in the image above).

Once you have set a configuration to be used in this way, any time you compile to a target, either for testing or to create a final asset package, the chosen configuration will be used. For more information on the Targets Window, please see the section on [Compiling](../Introduction/Compiling.md).