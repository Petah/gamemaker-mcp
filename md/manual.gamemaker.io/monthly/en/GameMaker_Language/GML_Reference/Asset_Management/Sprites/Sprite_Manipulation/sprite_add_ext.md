---
title: "sprite_add_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add_ext.htm"
converted: "2025-09-14T03:59:41.937Z"
---

# sprite\_add\_ext

This function loads an image from an external file or URL _asynchronously_ and adds it as a new sprite.

This is the asynchronous version of [sprite\_add](sprite_add.md); instead of blocking execution of code and thereby freezing the game, it continues execution of the game's code after the function is called and triggers an asynchronous [Image Loaded](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.md) event once the sprite is fully loaded.

The supported image file formats are PNG, JPEG, GIF, QOIF and Spine JSON files (the Spine JSON files require that their associated atlas and image files are placed next to them).

NOTE Spine JSON files are only supported for locally stored files, not for files requested via HTTP (the same as for [sprite\_add](sprite_add.md)).

The [async\_load](../../../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) [DS Map](../../../Data_Structures/DS_Maps/DS_Maps.md) will contain the following fields in the async [Image Loaded](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.md) event:

-   **"filename"** - the path to the file that was originally passed to the function
-   **"id"** - the sprite ID, as returned by the function
-   **"http\_status"** - contains the status value of the HTTP request if one was made, or 200 ("OK") if the image was loaded from a file
-   **"status"** - contains a value of 0 or greater to indicate the load was successful, or one of the following (negative) error codes in case something went wrong:

| Sprite Add Error Constant |
| --- |
| Constant | Description | Value |
| sprite_add_ext_error_unknown | This is a generic error code when none of the others apply (the HTML5 runner only returns this constant in case of failure). | -1 |
| sprite_add_ext_error_cancelled | This constant indicates that the request was cancelled while it was in progress. | -2 |
| sprite_add_ext_error_spritenotfound | This constant indicates that a sprite was removed somehow partway through the loading process. | -3 |
| sprite_add_ext_error_loadfailed | This constant indicates that a file loading operation failed. | -4 |
| sprite_add_ext_error_decompressfailed | This constant indicates that image decompression failed (which could be due to e.g. a corrupted file or unsupported image format). | -5 |
| sprite_add_ext_error_setupfailed | Indicates that, even though all data was loaded and decompressed, sprite resource creation itself failed. | -6 |

#### Syntax:

sprite\_add\_ext(fname, imgnum, xorig, yorig, prefetch);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The path to the image file to add as a sprite (either a local file path or a web address) |
| imgnum | Real | The number of subimages in the file (1 for a single image, GIF or Spine sprite) |
| xorig | Real | The x position of the new sprite's origin |
| yorig | Real | The y position of the new sprite's origin |
| prefetch | Boolean | Whether to immediately load the sprite into GPU memory |

#### Returns:

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example:

Create Event

sprite\_index = -1;
new\_sprite = sprite\_add\_ext("my\_new\_sprite\_index.png", 1, 0, 0, true);

Async Image Loaded Event

var \_sprite\_id = async\_load\[?"id"\];
if (\_sprite\_id == new\_sprite)
{
    sprite\_index = \_sprite\_id;
}

Draw Event

if (sprite\_index != -1)
{
    draw\_self();
}

The above example defines code in three [Object Events](../../../../../The_Asset_Editors/Object_Properties/Object_Events.md). In the **Create** event the instance's [sprite\_index](../Sprite_Instance_Variables/sprite_index.md) is first set to \-1 and the function sprite\_add\_ext is called with fname set to "my\_new\_sprite\_index.png" (i.e. an image file in the root of the datafiles directory). The sprite ID returned by the function is stored in an instance variable new\_sprite.

In the async [Image Loaded](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.md) event the value stored in async\_load\[?"id"\] is compared to the value in new\_sprite. If the two are equal, it means this Image Loaded event was triggered for the call to sprite\_add\_ext made earlier in the Create event (there may be _many_ other calls to sprite\_add\_ext). The ID of the newly loaded sprite is then assigned as this instance's sprite\_index.

In the [Draw Event](../../../../../The_Asset_Editors/Object_Properties/Draw_Events.md) instances of the object call [draw\_self](../../../Drawing/Sprites_And_Tiles/draw_self.md) if their sprite\_index is not set to \-1 (or, rather, _no longer_ set to \-1).