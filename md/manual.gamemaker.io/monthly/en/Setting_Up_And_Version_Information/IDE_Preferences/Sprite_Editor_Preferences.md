---
title: "Sprite Editor Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Sprite_Editor_Preferences.htm"
converted: "2025-09-14T04:00:13.886Z"
---

# Sprite Editor Preferences

![Sprite Editor Preferences](../../assets/Images/Setup_And_Version/Preferences/Sprite_Editor_Prefs.png)

The **Sprite Editor Preferences** are used to define how [The Sprite Editor](../../The_Asset_Editors/Sprites.md) looks and functions. The following options exist:

-   **Default sprite origin**: This option permits you to set the default origin position for any new sprite assets that you create. The default value is the Top Left.
-   **Default sprite collision mask kind**: This option permits you to set the default kind of collision mask to use for new sprites. Choices are _rectangle_, _rotated rectangle_, _ellipse_, _diamond_, or _precise_ / _precise per frame._ The default is _rectangle_.
-   **Default sprite animation mode**: This option permits you to set the default animation mode for sprites in the Sprite Editor. You can choose either "_Frames per second_" or "_Frames per game frame_", with the default setting being "_Frames per second_".
-   **Default sprite animation speed**: This option permits you to set the default animation speed value for when you create a new sprite asset. Note that this value is linked to the animation mode and - for example - 3 frames per second is not the same as 30 frames per game frame, so be sure to set this value correctly in reference to the preferred mode. Default value is 30.
-   **Default sprite animation speed when added to an asset layer**: Determines the default speed of a sprite when it's added to an [Asset Layer in a room](../../The_Asset_Editors/Room_Properties/Layer_Properties.md), which functions as a multiplier (1 will play at the same speed as defined in the Sprite's properties, 2 will play twice as fast, 0 will make it static, etc.)
-   **Default sprite width**: This option permits you to set the default width for all new sprites created. Default value is 64.
-   **Default sprite height**: This option permits you to set the default height for all new sprites. Default value is 64.
-   **Default vector sprite precision**: This option sets the default precision for the vector sprite precision slider. Default value is 50.
-   **Apply resize and scale to sprite origin**: When checked this option will change the origin of the sprite when the sprite is resized or scaled, with the new origin being moved/scaled to match the new values for the sprite. Note that this is only applicable for custom sprite origins that are not locked in the sprite editor. If the origin is locked or the sprite uses one of the default positions - e.g.: "Center" or "Top Left", etc. - then this option will be grayed out and unavailable for changing. Default is enabled.

The following sub-category also exists for the Sprite Editor:

[Confirm DialogsConfirm Dialogs](Sprite_Editor_Preferences.htm#)

![The Sprite Editor Confirm Dialog Preferences](../../assets/Images/Setup_And_Version/Preferences/Sprite_Editor_Confirm_Prefs.png)

The options available here control the messages that pop up when are required to confirm an action. You can change these setting to show the message always or dismiss it with a specific action (either Yes or No) :

-   **Automatic response to file import**: When you import a new image and one already exists, by default you will be prompted to continue importing and overwrite the existing image or cancel the operation. This option lets you suppress this message and always either cancel the import by selecting "No", or overwrite the current sprite by selecting "Yes". Default value is "Show Message".
-   **Automatic response to image load failure**: When you import a new image and and the import fails, by default you will be shown a warning message informing you that there has been a failure. This option lets you suppress this message by selecting "Okay". Default value is "Show Message".
-   **Load vector sprites as vectors**: This sets the default setting for the dialog that appears when an SVG file is imported. "Yes" keeps the image as a vector file but "No" converts it into a bitmap.