---
title: "The Extension Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extensions.htm"
converted: "2025-09-14T04:00:15.351Z"
---

# The Extension Editor

An **extension package** can be used to add a number of additional functions and constants to the GameMaker Language (GML) and easily transfer them between projects. Extension functions can also be linked to external SDKs or source code written in other languages (like Java for Android, Objective-C for iOS, etc.), which can be used to expand your game's functionality (usually used for implementing third-party APIs, such as for ads, in-app purchases, and more).

![Extensions Properties](../assets/Images/Asset_Editors/Editor_Extensions.png)

Extensions can be used for creating a library of functions that you use frequently across all your projects, so instead of having to import the same scripts into every project, you can simply add one extension asset that holds a collection of your favourite functions and constants. Such functions can also be specific to a certain platform, and you can easily choose which platforms an extension can be used on.

For a step-by-step example on creating an extension, see: [Creating An Extension](Extension_Creation/Creating_An_Extension.md)

To disable extensions based on target platform, see: [How to Disable Extensions?](Extension_Creation/Disabling_Extensions.md)

## Importing Extensions

Normally 3rd party extensions will be from the [GameMaker Marketplace](https://marketplace.gamemaker.io), and those you have subscribed to will then be listed in the [Marketplace Library](../Introduction/The_Marketplace.md) window which can be installed from there. If you did not get your extension package from the Marketplace, you can still add it to a project by right-clicking ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) anywhere in [The Asset Browser](../Introduction/The_Asset_Browser.md) and selecting _Add Existing_, then browsing to the location of the extension to select it.

NOTE If you have a .yymps/.yymp/.gmez package, you can drag it into the IDE to import it, or go under the "Tools" menu and select "Import Local Package".

## Target Platforms

Once you have added an extension to the Asset Browser, you should give it a name and a version number and also set which platforms you want to export it to. By unchecking selected platforms, you can tell GameMaker to not export the extension as part of the executable for those platforms. You should also ensure that the extension properties match up with the selected target platform(s), and select compatible export targets for the extension files based on the following:

-   **All targets**: GML extensions. These are extensions made using the GameMaker Language (GML) and are compatible with all target platforms. (_Note that this is the only extension type that the GX.games target currently supports._)
-   **Windows and Xbox**: You can use Windows DLL files (Dynamic Link Libraries). Please note that if you have checked the "Use x64 Windows Runtime" in the [Windows Game Options](../Settings/Game_Options/Windows.md), then all DLLs for the project **must be 64-bit compatible**. 32-bit DLLs will not work with a 64-bit executable.
-   **macOS**: The macOS target can use the standard DyLib files for extensions.
-   **Ubuntu (Linux)**: For the Ubuntu target you need to make sure that your extension uses .so files.
-   **HTML5**: These platforms can use JavaScript extensions.
-   **Android**: This platform requires an extension to be written in Java or an Android Framework SDK.
-   **iOS** /  **tvOS**: Extensions for this platform are written in Objective C and require an \*.mm and an \*.h file, or if using any frameworks, a pre-compiled native \*.a file.
-   **PlayStation**: For PlayStation your extensions should be PRX files, with each target requiring a different PRX to conform to specifications of the target (PS3, PS4 or PS5). If working on a PSVita, the extension should be SUPRX instead.

NOTE Some extensions are required to follow specific naming conventions for GameMaker to correctly identify the platform and CPU architecture they are designed for. Please see [Naming Conventions](Extension_Creation/Creating_An_Extension.htm#h) for more information.

Since an extension can have various associated files, it's possible to create a single extension for multiple platforms, in which case you want to specify _all_ the compatible platforms in the main extension editor (i.e.: tick the checkbox beside them) and then in the individual file properties for each part of the extension, set the platform that those files should be exported to.

To change the target platform for a specific extension file or placeholder you must first open the extension properties (double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) the extension in [The Asset Browser](../Introduction/The_Asset_Browser.md)), and then once in the extension properties select the resource file from the right that you want to edit. In the window that opens, you can select the platforms to which that specific file is exported:

![Extension Target Platforms](../assets/Images/Asset_Editors/Editor_Extensions_Targets.png)

## Extension Options

An extension you're using may have options, which will be displayed at the bottom of the Extension Editor window:

![](../assets/Images/Asset_Editors/Editor_Extensions_Options_UserFacing.png)These will be different depending on the extension, and not all of them may have options. Look at the documentation of the extension you're using for information on its options.

To set up options for your own extension, see: [Creating Extension Options](Extension_Creation/Creating_An_Extension.htm#h1)

## Uncompress on Build

The "Uncompress on build" option can be used for compressed archive files that are intended for a specific target platform. If this option is enabled, the contents of that archive will be extracted into the Included Files directory of the built package, but only after being copied over to the target platform.

For example, if you enable this for a .zip file in your extension and then start a **macOS** build from Windows, that .zip archive will be copied over as-is from Windows to macOS and will then be uncompressed during compilation on the target platform (which, in this context, is macOS).

## Calling Extension Functions

Once you have set up your extension, you can use the functions and constants for it just as you would the built-in functions and constants used in the GameMaker Language. If your game is cross-platform (for example, it is designed to run on Windows and Android targets), then you should use the [OS constants and functions](../GameMaker_Language/GML_Reference/OS_And_Compiler/OS_And_Compiler.md) to check the current platform before calling extension specific functions to prevent issues, for example:

switch (os\_type)
{
    case os\_android:
        call\_android\_extension\_function(x, y, z);
    break;

    case os\_windows:
        call\_windows\_extension\_function(x, y, z);
    break;
}

Note that for different platforms your extensions can share function names, so if you have an extension with distinct files to (for example) pop up a message on Windows and for Android, both extension files can share the same function names as long as they are both set to export only to their respective platforms.

If you want to create your own extensions, then you can find the basic required information from the following pages:

-   [Creating An Extension](Extension_Creation/Creating_An_Extension.md)
-   [Android Extensions](Extension_Creation/Android_Extensions.md)
-   [iOS / tvOS Extensions](Extension_Creation/iOS_Extensions.md)
-   [HTML5 Code Injection](Extension_Creation/HTML5_Extensions.md)
-   [Source Examples](Extension_Creation/Extended_Examples.md)

# Official 3rd Party Extensions

Legacy versions of GameMaker had a lot of 3rd party functionality built in, but this was inefficient and difficult to maintain, since if any specific functionality was changed by the third party, then the whole GameMaker IDE and Runtime would have to be updated. So, current versions have adopted the use of extensions packages to add third-party support to your games. This means that you can add only those extra functions that you require and that you can even adapt and edit them to suit your specific needs.

Most of these extensions will be downloaded and installed for you when you select a specific [Game Options](../Settings/Game_Options.md) (like Facebook or Google Mobile Ads, for example), but you can find further information on them from the appropriate section for each platform on the GameMaker Knowledge Base:

-   [GameMaker Platforms And Setup](https://help.gamemaker.io/hc/en-us/categories/204246668-GameMaker)

You can find the extensions themselves from the following Marketplace page:

-   [Official Marketplace Assets](https://marketplace.gamemaker.io/publishers/23/yoyo-games)

Note that these extensions come with a demo and a help file (in \*.pdf format) that explain how to use them, and as such their functions are not covered in this manual.