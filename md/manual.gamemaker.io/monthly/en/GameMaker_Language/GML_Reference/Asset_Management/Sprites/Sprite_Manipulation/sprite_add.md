---
title: "sprite_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_add.htm"
converted: "2025-09-14T03:59:41.910Z"
---

# sprite\_add

This function adds an image as a sprite and returns the handle of the new sprite.

The image can be specified in two different ways in the fname parameter:

-   As a path to an external image file, which should have a format that is either one of \*.png, \*.gif, \*.jpg/jpeg, or \*.json (used for loading [skeleton animation sprites](../Skeletal_Animation/Skeletal_Animation.md) made with Spine). ASTC files can be imported on platforms that support the format including Android and iOS.
-   As a [data URL](https://developer.mozilla.org/en-US/docs/Web/URI/Schemes/data) in the format "data:<media-type>;base64,<base64\_encoded\_binary\_file\_data>", where the data of the image file is embedded in the string, encoded in [base64](https://en.wikipedia.org/wiki/Base64)

All images that are to be turned into animated sprites - except for \*.gif - should have a [strip](../../../../../The_Asset_Editors/Sprite_Properties/Sprite_Strips.md) format:

![Example Sprite Strip](https://manual.gamemaker.io/monthly/en/assets/Images/Asset_Editors/PlayerSprite_strip5.png)

An image in this format will be split into the number of sub-images specified in the imgnum argument, following the rule **sprite width = strip width / sub images**.

When removeback is enabled, the alpha channel of the source image is ignored and GameMaker picks the colour of the _bottom left_ pixel in the image to be the "background colour". All pixels matching that colour are made transparent and all other pixels remain opaque, even those that were previously transparent. In the vast majority of cases, you will not need to use this and can keep it at false.

If you do enable the removeback argument, you may also want GameMaker to smooth the edges of the sprite by setting the smooth argument to true. All this does is create a semi-transparent border around the edges of the sprite after it has had its background removed.

Finally you can also specify the x and y _origin_ for the sprite. This is the point where the sprite is "fixed" onto the instance that uses it, and is always calculated as relative to the (0, 0) top left corner of one sprite sub-image. So, for example, a sprite that is 32 x 32 pixels with these values set to (16, 16) will have its origin in the center.

If you are adding a \*.gif format image you only need to specify the filename and image number (which should be 1 for the first frame) and can leave all the other arguments as 0, noting that **only the first image of the GIF will be loaded**. For \*.json sprites, the image number should be 1, and the removeback and smooth settings will be ignored.

By default, all new sprites have their bounding boxes calculated automatically (the exact bounding box will depend on the size and transparency of the sprite). You may, however, wish to customise this, in which case you should also use the function [sprite\_collision\_mask](sprite_collision_mask.md).

It should be noted that the memory used when adding a sprite in this way will be larger than you may expect. This is because GameMaker will store the sprite as a texture page _and_ it will also be stored in GPU memory, so the total memory will be larger than would be expected for an image file of the same sprite.

NOTE Depending on the target platform that is chosen you are limited as to where you can save and load files from. See [The File System](../../../../../Additional_Information/The_File_System.md) for more information.

**NOTE** When you load a sprite into GameMaker you must remember to remove it again (with [sprite\_delete](sprite_delete.md)) when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.

### Platform-specific notes

-   If you use this function with **HTML5** or are getting an image from a URL, this function will also generate an [Image Loaded](../../../../../The_Asset_Editors/Object_Properties/Async_Events/Image_Loaded.md) asynchronous event.
-   On **HTML5**, if you are loading a sprite from a secure server you may need to set the cross-origin type and use a relative path instead of an absolute path. See [http\_set\_request\_crossorigin](../../../Asynchronous_Functions/HTTP/http_set_request_crossorigin.md) for more details.
-   On **iOS**, if you are loading an included file from a folder, i.e. with a path something like "Backgrounds/background1.png", you do **not** need to include the folder as part of the path and simply supplying the file name is sufficient. On all other platforms you must supply the folder(s) as part of the path to the file.

#### Syntax:

sprite\_add(fname, imgnumb, removeback, smooth, xorig, yorig);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The name (a file path) of the file to add or a data URL with the image data embedded in the string (encoded in base64) |
| imgnum | Real | The number of sub-images (1 for a single image or for a *.gif) |
| removeback | Boolean | Indicates whether to make all pixels with the background colour (bottom left pixel) transparent |
| smooth | Boolean | Indicates whether to smooth the edges if transparent |
| xorig | Real | Indicates the x position of the origin in the sprite |
| yorig | Real | Indicates the y position of the origin in the sprite |

#### Returns:

[Sprite Asset](../../../../../The_Asset_Editors/Sprites.md)

#### Example 1: Adding from an External Image File

sprite = sprite\_add("player\_5.png", 5, false, false, 0, 0);

The above code loads a sprite into the game and stores its handle in the variable sprite.

#### Example 2: Adding from a Data URL

Create Event

var \_sprite\_data = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAYAAADskT9PAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAJMSURBVEjHpZY9a9tQFIYfOVo8GApCptQUF5zFyHRpqKEfk6dCBk8JBA0dM2UNxbMxWTPlBxiBS4YMBk8tBNqAjJeGGC01tJQUI3Gh0KFDbdTBlrj6sOuPAwIj3fO+5/G950gK0fBZPZQ11q4k4jfLVYySmlg0HE0YiimGthM+r3c/pxWxNkAgsJZ5ELEiNgLIbGoeJ19X42r/JYCvAuGD4WgSTRbTiJAckthWAOoig6GYYhzszn6//4qh7USM5fXbAGTSqpLNAYyD3VBsOJokxJYByLmBsVFSw/UZQJkfiDDRcgcJA8sdRIQajg0LWnEdgOAfUBqOHUnUHucjlywUM98KQN4CxXIH9GyHi7OThMDF2Qk92wnE4+QbAyzsLfHDpWc7ALyplkORJaFY7sB/Zf9dCNC+vOaT+yUCIBfgN8tV2t497cvr0BiYFWI7CE/QLFdpOLbPf0bxqgDhFJsPBoajCe0/92i6FhX0BGa2sGwUzwCk3AiApCFvgRI3D1pEFpLNgzWxIjYGSJ0DRkmlVSkiPIHwBK1KcdkoTgCY2QLCE6nmQQtGRvH49bOZQP8mLADAzBYiTsFo1d5WZzek9ksAUOTd3XcAWpXiwrOiAsrx6bkPcJTfo5PTORx5CWOATk6nIsYcn57LZ8jfBiDxPq/VTbyfvwC47XcBePp8HwD90QM+XLXjhw/m3wFH+T3unjzk8LdHWnRyOpVvY3lQKakbGze67Xf9Wt1kSSgAljvway9MPhLmh1Grm+iANYNa2sI+6V82i+5vlf8PdPOSxUhSaQMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjUtMDItMTRUMTc6NTI6MTYrMDA6MDBakr7yAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDI1LTAyLTE0VDE3OjUyOjE2KzAwOjAwK88GTgAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyNS0wMi0xNFQxNzo1MjoxNiswMDowMHzaJ5EAAAAASUVORK5CYII=";
sprite\_index = sprite\_add(\_sprite\_data, 2, false, false, 0, 0);
image\_speed = 0.08;

The above code shows how to add an animated character sprite from a data URL and assign it as an instance's sprite.

In an object's Create event a data URL string is first assigned to a temporary variable \_sprite\_data. Then sprite\_add is called with this string passed as the fname argument. The number of sub-images in the sprite is set to 2, the removeback and smooth parameters are set to false and the sprite's origin is set to (0, 0). The new sprite is set as the instance's [sprite\_index](../Sprite_Instance_Variables/sprite_index.md) and its [image\_speed](../Sprite_Instance_Variables/image_speed.md) is adjusted.

TIP See the second code example on the [buffer\_base64\_encode](../../../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.md) page for an example on how to convert an image file to a data URL.