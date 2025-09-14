---
title: "sprite_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_info.htm"
converted: "2025-09-14T03:59:41.438Z"
---

# sprite\_get\_info

This function is used to retrieve information for the given sprite. You supply a sprite index (which can be an asset added through [The Asset Browser](../../../../../Introduction/The_Asset_Browser.md) or a sprite [added](../Sprite_Manipulation/sprite_add.md) at runtime)

The function returns a [struct](../../../../GML_Overview/Structs.md) with the following variables:

| Sprite Info Struct |
| --- |
| Variable | Type | Description |
| width | Real | The sprite's width (in pixels) |
| height | Real | The sprite's height (in pixels) |
| xoffset | Real | The sprite's X offset/origin (in pixels) |
| yoffset | Real | The sprite's Y offset/origin (in pixels) |
| transparent | Boolean | true if the sprite is marked as transparent, otherwise false(This can only be specified through sprite_add() or similar functions, and will be false for sprites created in the IDE) |
| smooth | Boolean | true if the sprite is marked as smooth, otherwise false(This can only be specified through sprite_add() or similar functions, and will be false for sprites created in the IDE) |
| type | Real | The type of the sprite:0 - Bitmap (Regular sprites)1 - SWF2 - Spine3 - SVG |
| bbox_left | Real | Position of the left edge of the bounding box (in pixels) |
| bbox_top | Real | Position of the top edge of the bounding box (in pixels) |
| bbox_right | Real | Position of the right edge of the bounding box (in pixels) |
| bbox_bottom | Real | Position of the bottom edge of the bounding box (in pixels) |
| name | String | The name of the sprite |
| num_subimages | Real | The number of sub-images (or frames) in the sprite |
| use_mask | boolean | true if this sprite uses a collision mask (either generated from a shape or the image itself), otherwise false (meaning it uses a bounding box) |
| num_masks | Real | The number of masks in this sprite (will be greater than 1 if the sprite uses per-frame masks) |
| rotated_bounds | boolean | Whether the mask is "Rectangle with rotation" or not |
| nineslice | Struct | The Nine Slice struct for this sprite, or undefined if it has no nine slice data |
| messages | Array | Array of broadcast messages for this sprite, where each broadcast message is a struct containing information on the message (more information under "General Sprite Data") |
| frame_info | Array | Array of frames for this sprite, where each frame is a struct containing information on its timing (more information under "General Sprite Data"). For sprites that do not contain any stretched frames, this will be undefined. |
| frame_speed | Real | The frame speed set for the sprite (see: The Sprite Editor) |
| frame_type | Sprite Speed Constant | The type of speed set for the sprite, either spritespeed_framespersecond or spritespeed_framespergameframe |

**This additional variable is available only for Bitmap (regular) sprites:**

| Sprite Info Struct |
| --- |
| Variable | Type | Description |
| frames | Array | Array of frames for this sprite, where each frame is a struct containing information on its texture (more information under "Bitmap Sprite Data") |

**These additional variables are available only for Spine sprites:**

| Sprite Info Struct |
| --- |
| Variable | Type | Description |
| num_atlas | Real | The number of atlas textures used |
| atlas_textures | Array | Array of texture IDs used for the atlas |
| premultiplied | Boolean | true if this sprite is marked as premultiplied, otherwise false |
| animation_names | Array | Array containing the names of each animation in this sprite |
| skin_names | Array | Array containing the names of each skin in this sprite |
| bones | Array | Array containing structs for each bone in this sprite (more information under "Spine Sprite Data") |
| slots | Array | Array containing structs for each slot in this sprite (more information under "Spine Sprite Data") |

The function will return undefined if the given sprite doesn't exist. Also note that information returned in this struct should be considered **read-only** as modifying any of these variables will not affect the sprite.

The sections below contain information on the arrays and structs included in the returned struct based on the sprite type:

[General Sprite DataGeneral Sprite Data](sprite_get_info.htm#)

This section contains information on variables included in the struct for all kinds of sprites.

The messages variable is an array that contains information on the broadcast messages that exist in the given sprite. Each broadcast message in this array is a struct containing the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| frame | Real | The timing of this broadcast message from the start of the animation (in frames) |
| message | String | The broadcast message string |

The frame\_info variable is an array that contains information on the timings of the sprite's frames. Each frame in this array is a struct containing the following variables:

NOTE For sprites that do not contain any stretched frames, frame\_info will be undefined, meaning no array is provided.

| Variable Name | Data Type | Description |
| --- | --- | --- |
| frame | Real | The timing for the start of this frame (in frames) |
| duration | Real | The duration of this frame (in frames) |
| image_index | Real | The image index of this frame |

[Bitmap Sprite DataBitmap Sprite Data](sprite_get_info.htm#)

This section contains information on variables included in the struct for Bitmap sprites (sprites that are not Spine or vector type sprites).

The frames variable is an array that contains information on the textures of the sprite's frames. Each frame in this array is a struct containing the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| x | Real | The X position of this frame on its texture page (in pixels) |
| y | Real | The Y position of this frame on its texture page (in pixels) |
| w | Real | The logical width of the frame (in pixels) used internally |
| h | Real | The logical height of the frame (in pixels) used internally |
| texture | Real | The texture page ID for this frame |
| original_width | Real | The original width of the frame (in pixels) |
| original_height | Real | The original height of the frame (in pixels) |
| crop_width | Real | The actual width of the frame on the texture page after cropping and scaling (since GameMaker automatically trims the empty space around an image, and also scales it down if it doesn't fit) |
| crop_height | Real | The actual height of the frame on the texture page after cropping and scaling |
| x_offset | Real | The X offset from the left edge of the original image to the left edge of the cropped section |
| y_offset | Real | The Y offset from the top edge of the original image to the top edge of the cropped section |

[Spine Sprite DataSpine Sprite Data](sprite_get_info.htm#)

This section contains information on variables included in the struct for Spine sprites.

The bones variable is an array that contains information on all bones in the given Spine sprite. Each bone in this array is a struct containing the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| parent | String | The name of the parent bone, or undefined if this bone doesn't have a parent |
| name | String | The name of this bone |
| index | Real | The index of this bone |
| length | Real | The length of this bone |
| x | Real | The X position of this bone |
| y | Real | The Y position of this bone |
| rotation | Real | The rotation of this bone |
| scale_x | Real | (Internal to Spine) Scale value on X |
| scale_y | Real | (Internal to Spine) Scale value on Y |
| shear_x | Real | (Internal to Spine) Shear value on X |
| shear_y | Real | (Internal to Spine) Shear value on Y |
| transform_mode | Real | (Internal to Spine) The transform mode |

NOTE Please consult the [Spine documentation](https://en.esotericsoftware.com/spine-documentation "Spine Documentation") for more information regarding Spine's internal variables.

The slots variable is an array that contains information on all slots in the given Spine sprite. Each slot in this array is a struct containing the following variables:

| Variable Name | Data Type | Description |
| --- | --- | --- |
| name | String | The name of the slot |
| index | Real | The index of the slot |
| bone | String | The name of the slot's bone, or "(none)" if there is no bone for this slot |
| attachment | String | Attachment name |
| red | Real | Red component of the slot's colour (0-1) |
| green | Real | Green component of the slot's colour (0-1) |
| blue | Real | Blue component of the slot's colour (0-1) |
| alpha | Real | Alpha component of the slot's colour (0-1) |
| blend_mode | Real | (Internal to Spine) Blend mode for the slot |
| dark_red* | Real | Red component of the slot's dark colour (0-1) |
| dark_green* | Real | Green component of the slot's dark colour (0-1) |
| dark_blue* | Real | Blue component of the slot's dark colour (0-1) |
| dark_alpha* | String | Alpha component of the slot's dark colour (0-1) |
| attachments | Array of String | An array containing the names of all available attachments for this slot. |

\* NOTE The dark colour variables are only available if the slot has [Tint Black](https://en.esotericsoftware.com/spine-slots#Tint-black "Tint Black") enabled.

#### Syntax:

sprite\_get\_info(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite to get the information for. |

#### Returns

[Sprite Info Struct](sprite_get_info.md) (or [undefined](../../../../GML_Overview/Data_Types.md))

#### Example:

var \_info = sprite\_get\_info(sprite\_index);

if (\_info != undefined && \_info.type == 0)
{
    var \_messages = \_info.messages;
    var \_messageCount = array\_length(\_messages);

    for (var i = 0; i < \_messageCount; i ++)
    {
        var \_message = \_messages\[i\];
        show\_debug\_message("Message at frame " + string(\_message.frame) + ": " + \_message.message);
    }
}

The above code gets the info struct for the instance's sprite, and then checks if it's not [undefined](../../../../GML_Overview/Data_Types.md) and that its type is 0 (meaning that it's a bitmap sprite). In that case, it gets the broadcast message array for that sprite and then runs a for loop to print each broadcast message (along with its frame) to the output log.