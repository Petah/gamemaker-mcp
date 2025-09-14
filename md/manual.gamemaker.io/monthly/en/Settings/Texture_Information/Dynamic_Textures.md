---
title: "Dynamic Textures"
source: "manual.gamemaker.io/monthly/en/Settings/Texture_Information/Dynamic_Textures.htm"
converted: "2025-09-14T04:00:14.728Z"
---

# Dynamic Textures

![](../../assets/Images/Settings/Texture_Groups_Dynamic_Option.png)In the [Texture Group](../Texture_Groups.md) settings, you can mark a group as "**Default**" or "**Dynamic**".

NOTE Dynamic texture groups are not supported on **HTML5**.

## How Textures Work

A Texture Group is loaded into RAM when the game starts, unless it's a [Dynamic Texture Group](Dynamic_Textures.md), which is loaded later.

While in RAM memory, the Texture Group stays compressed, as it was on disk.

When an image from a Texture Group is drawn or one of the [pre-fetch](../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_prefetch.md) functions is run, all texture pages of the Texture Group are loaded into VRAM. For most texture group formats the texture is first decompressed before being loaded into VRAM. If you're using a **Custom** texture group format, however, the texture is decompressed in real time on the GPU.

NOTE Texture decompression is asynchronous on all platforms except GX.games, which might cause stutters as textures are decompressed in-game. To avoid this, ensure your textures are prefetched during loading screens or other inactive parts of your game.

You can [flush](../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_flush.md) a Texture Group to remove it from VRAM (this doesn't remove them from RAM).

## "Default" Groups

A Default Texture Group is included in your final game's package (WAD file). Any such texture groups are loaded into RAM as soon as the game starts, and pre-fetched into VRAM when required or [asked](../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_prefetch.md).

## "Dynamic" Groups

A Dynamic Texture Group is not loaded when the game starts. It's either loaded when required (i.e. when an image from it is drawn) or when you load it manually.

You load a Dynamic Texture Group into RAM manually by calling [texturegroup\_load()](../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_load.md). By default, this function will also decompress the group and pre-fetch it into VRAM.

You can disable pre-fetching by setting the function's second argument to false. This will leave you to manually [pre-fetch](../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_prefetch.md) it later, or have it fetched automatically when an image is drawn from it (the latter is not recommended due to it being synchronous).

You can also unload a texture group using [texturegroup\_unload()](../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_unload.md), which will remove it from memory and place it back into disk in its original, compressed form.

NOTE Before a Dynamic Texture Group is loaded, you can't run operations that require reading its contained assets, such as [duplicating a sprite](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_duplicate.md) (this will trigger the texture group to load but the function will still fail as it can't load immediately). You can however read texture information such as [UVs](../../GameMaker_Language/GML_Reference/Drawing/Textures/texture_get_uvs.md) and [TPE](../../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_tpe.md).

## Dynamic Group Modes

Using [texturegroup\_set\_mode()](../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_set_mode.md) you can set the "mode" for Dynamic groups to either "**Implicit**" (default) or "**Explicit**". This changes whether Dynamic groups can be loaded automatically.

This setting is global and can't be applied per-group.

### Implicit

texturegroup\_set\_mode(false, ...)

This is the default setting. This enables automatic loading of Dynamic groups, so when an image from an unloaded Dynamic group is drawn, it will trigger the loading of that Texture Group.

This may cause a small freeze as the texture is loaded into VRAM and decompressed, so making use of implicit loading is **not recommended**.

When a Texture Group is triggered implicitly, only the required Texture Page is loaded. For example, if your unloaded Texture Group has 4 Texture Pages, and you attempt to draw something from Texture Page 2, only that page will be loaded, and Texture Pages 1, 3 and 4 will remain on disk.

### Explicit

texturegroup\_set\_mode(true, ...)

This setting disables automatic loading of Dynamic groups, meaning you have to [load them manually](../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_load.md). When you try drawing an image from a Texture Group that hasn't been loaded, the image will not draw, and an error will be printed to the output log.

You can set a "fallback" sprite in [texturegroup\_set\_mode()](../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_set_mode.md) which would be drawn in place of a texture that hasn't been loaded.

Textures being unloaded at runtime, showing the fallback sprite

When the fallback sprite is displayed, its whole texture page is drawn, so it's recommended to enable [Separate Texture Page](Texture_Pages.htm#h) for your fallback sprite, preventing unintended graphics from appearing. The texture page for the fallback sprite is automatically loaded even if it's set as a Dynamic page.

The [fallback sprite](../../assets/Images/Settings/Texture_Groups_Fallbacktexture.png) used in the example above was created as a gradient checkerboard, so you can tell which part of the fallback texture is being drawn at any moment, and what scale it's being drawn at, which may help diagnose texture-related issues.

![](../../assets/Images/Settings/Texture_Groups_Fallbacktexture.png)

## Paths and Modding

![](../../assets/Images/Settings/Texture_Groups_Path_Field.png)In the [Texture Groups](../Texture_Groups.md) settings, you can set the path where the Dynamic group will be placed within the final game directory. Without a set path, the textures will be placed at the root of the game's directory.

If you set the group format to "PNG", the exported texture files will become directly editable, allowing them to be modified by players.

## More Functions

Here are some more functions relating to Dynamic groups:

-   [texturegroup\_set\_mode()](../../../../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_set_mode.md): In addition to setting the mode, you can also enable debugging with this function, which will display information about all Texture Pages on-screen:
    ![](../../assets/Images/Settings/Texture_Groups_Debug_Info.png)
-   [texturegroup\_get\_status()](../../GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_get_status.md): This returns the status of a texture group, telling you whether it's loaded, unloaded, currently loading, or fetched into VRAM.