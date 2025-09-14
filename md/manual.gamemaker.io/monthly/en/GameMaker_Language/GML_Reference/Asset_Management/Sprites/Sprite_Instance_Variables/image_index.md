---
title: "image_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_index.htm"
converted: "2025-09-14T03:59:41.727Z"
---

# image\_index

A sprite is made up of one or more _sub-images_ which can make the sprite appear animated as they switch from one to the other, or can they can be switched between in code to give different "states", much like a button has in windows. If the sprite is animated, then you can get the current frame of the animation by checking the image\_index variable, or if you want to change the state of a static sprite, you can select a new sub-image by setting this variable to the desired sub-image of the sprite.

### Usage Notes

-   For changes in this variable to be visible, the instance should have either _no_ Draw event (and so GameMaker will default draw the sprite) or be drawn using one of the drawing functions like [draw\_self](../../../Drawing/Sprites_And_Tiles/draw_self.md) or [draw\_sprite\_ext](../../../Drawing/Sprites_And_Tiles/draw_sprite_ext.md) (by supplying the image\_index into the appropriate argument).
-   Setting this variable directly to a frame will _not_ trigger any Broadcast Messages that may be present on that frame.
-   While using skeletal animation sprites, you can still get and set the image\_index values - see the function [skeleton\_animation\_get\_duration](../Skeletal_Animation/Animation/skeleton_animation_get_duration.md) for examples of how to do this.
-   A stretched frame will be returned as a fraction of one number. For example, if in [The Sprite Editor](../../../../../The_Asset_Editors/Sprites.md) you stretch **frame 1** to last 4 frames, instead of those 4 frames returning the values 1, 2, 3, 4, they will instead return 1.0, 1.25, 1.5, and 1.75.
    -   This means that if you add 1 to image\_index, it will skip frames the same way regardless of their stretched length.

#### Syntax:

image\_index

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if (image\_speed > 0)
{
    if (image\_index >= image\_number - 1)
    {
        instance\_destroy();
    }
}

The above code checks to see if the sprite is animating, and if it is then it checks to see if the current image\_index is at the last frame and in that case destroys the instance.