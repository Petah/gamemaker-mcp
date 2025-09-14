---
title: "sprite_set_alpha_from_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Manipulation/sprite_set_alpha_from_sprite.htm"
converted: "2025-09-14T03:59:42.254Z"
---

# sprite\_set\_alpha\_from\_sprite

This function uses the value/saturation of one sprite and multiplies it with the alpha of the target sprite. Ideally the sprite being used to generate the new alpha map should be grey-scale, with the white areas having an equivalent alpha value of 1 (opaque), the black areas being equivalent to alpha 0 (transparent), and the grey areas being an alpha in between 0 and 1. The sprite that you are setting the alpha of _cannot be a permanent resource_, nor can the sprite you use to set the alpha, as this will give an error. This means that you must create two completely new sprites "on the fly" in some way for the function to work correctly. This can be achieved by using surfaces, or by creating a sprite from the screen (the code example below shows how the effect can be achieved with surfaces).

**NOTE** This function is only useful for **bitmap** sprites and will not work with vector or JSON (Spine) sprites.

Below is an image that illustrates how this function works:

![Sprite Set Alpha Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Sprites/spr_alpha.png)

#### Syntax:

sprite\_set\_alpha\_from\_sprite(ind, spr);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Sprite Asset | The index of the sprite to change the transparency map of. |
| spr | Sprite Asset | The index of the sprite to take the transparency map data from. |

#### Returns

N/A

#### Extended Example:

In this extended example we show how you can create a special effect sprite from two sprite resources. To start with we need to have a controller variable in the **Create Event** of the instance. This variable is to ensure that the sprite is only created once:

spr\_create = true;

Once that is done we need to then go to the **Draw Event** and add in this code:

if (spr\_create)
{
    spr\_create = false;
    var \_sw = sprite\_get\_width(spr\_Explosion\_Alpha);
    var \_sh = sprite\_get\_height(spr\_Explosion\_Alpha);
    var \_xo = sprite\_get\_xoffset(spr\_Gradient);
    var \_yo = sprite\_get\_yoffset(spr\_Gradient);
    var \_surf = surface\_create(\_sw, \_sh);
    surface\_set\_target(\_surf);
    draw\_clear\_alpha(c\_black, 0);
    draw\_sprite(spr\_Gradient, 0, 0, 0);
    sprite\_index = sprite\_create\_from\_surface(\_surf, 0, 0, \_sw, \_sh, false, false, \_xo, \_yo);
    draw\_clear\_alpha(c\_black, 0);
    draw\_sprite(spr\_Explosion\_Alpha, 0, \_xo, \_yo);
    var \_spr = sprite\_create\_from\_surface(\_surf, 0, 0, \_sw, \_sh, false, false, \_xo, \_yo);
    surface\_reset\_target();
    surface\_free(\_surf);
    sprite\_set\_alpha\_from\_sprite(sprite\_index, \_spr);
    sprite\_delete(\_spr);
}

draw\_sprite(sprite\_index, 0, x, y);

The above code first checks to see if the control variable is true or not, and if it is, it then runs the code to set the sprite alpha, setting the variable to false to prevent the code from running more than once. In this case, it creates a surface the size of the alpha mask that we wish to use, then draws the sprite that is to have its alpha changed onto the surface and creates a new sprite from it, assigning it as the sprite\_index of the object. The code then clears the surface and draws the alpha map sprite to it and creates another new sprite, storing its index in a local variable. Finally, the new sprite assigned to the object gets its alpha set from this temporary sprite, the surface is freed and the temporary sprite is removed.

There is one final thing to do here, and that is remove the sprite that has been created for the object from memory when not in use. This would either be done in the **Destroy Event** or the **Room End Event** like this:

sprite\_delete(sprite\_index);