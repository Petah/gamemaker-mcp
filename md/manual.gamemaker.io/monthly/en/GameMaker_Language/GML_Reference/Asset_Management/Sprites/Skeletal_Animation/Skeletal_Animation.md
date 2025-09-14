---
title: "Skeletal Animation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skeletal_Animation.htm"
converted: "2025-09-14T03:59:41.031Z"
---

# Skeletal Animation Sprites

The functions found in this section are _only_ for use with sprites that have been imported from a skeletal animation file (specifically, the JSON files that [**Spine**](https://es.esotericsoftware.com/) exports) and can be used to get information about an animation asset in your game, as well as for setting certain properties within an animation. These functions can to be used along with the regular sprite functions and variables, permitting you to (for example) mix two skeleton animations using these special functions while setting the image scale using the normal sprite instance variables (for more information on the sprite instance variables see [here](../Sprite_Instance_Variables/Sprite_Instance_Variables.md)).

IMPORTANT Most of the skeletal sprite functions **do not** take a sprite or instance handle, as they assume the skeletal sprite is assigned to the current instance (via the IDE or by setting the [sprite\_index](../Sprite_Instance_Variables/sprite_index.md)). This means that running such functions under a different context (e.g. a global script, or in a constructor) will result in an error, as the current [self](../../../../GML_Overview/Instance_Keywords.md) will not have a skeletal sprite in such cases.

NOTE For further information on importing skeletal animation sprites made with Spine, please see the section [Importing Non-Bitmap Sprites](../../../../../Settings/Texture_Information/Non-Bitmap_Sprites.md).

You can find out more about the functions for these kinds of sprites from the sections below:

-   [Animation](Animation/Animation.md)
-   [Skins](Skins/Skins.md)
-   [Attachments](Attachments/Attachments.md)
-   [Bones](Bones/Bones.md)
-   [Slots](Slots/Slots.md)
-   [Drawing and Miscellaneous](Drawing_And_Miscellaneous/Drawing_And_Miscellaneous.md)

## Tint Black Support

This feature allows the dark areas of Spine sprite slots to be tinted differently to the light areas (this is a Spine IDE feature, see the **Tint black** section [here](https://esotericsoftware.com/spine-attachments) more details). Currently, in order to make use of this feature in GameMaker, you are required to use a custom [shader](../../../../../The_Asset_Editors/Shaders.md) when drawing a Spine sprite that uses it. This shader contains a global uniform variable called "gm\_SpineTintBlackColour" which the runner fills with the current tint-black colour, retrieved from the Spine data automatically. The shader required is shown below:

The Vertex Shader (this is the same as the default passthrough vertex shader)

attribute vec3 in\_Position; // (x,y,z)
attribute vec4 in\_Colour; // (r,g,b,a)
attribute vec2 in\_TextureCoord; // (u,v)

varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

void main()
{
    vec4 object\_space\_pos = vec4( in\_Position.x, in\_Position.y, in\_Position.z, 1.0);
    gl\_Position = gm\_Matrices\[MATRIX\_WORLD\_VIEW\_PROJECTION\] \* object\_space\_pos;
    v\_vColour = in\_Colour;
    v\_vTexcoord = in\_TextureCoord;
}

The Fragment Shader:

varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

uniform vec4 gm\_SpineTintBlackColour; // This is the uniform containing the tint-black colour

void main()
{
    vec4 tb = gm\_SpineTintBlackColour;
    vec4 texcol = texture2D( gm\_BaseTexture, v\_vTexcoord );
    vec4 outcol;
    outcol.rgb = v\_vColour.rgb \* texcol.rgb;
    outcol.rgb += tb.rgb \* ((tb.a \* (texcol.a - 1.0)) + (1.0 - texcol.rgb)); // This line performs the tint-    black blending logic
    outcol.a = v\_vColour.a \* texcol.a;
    gl\_FragColor = outcol;
}

You would use this by first calling the shader, then drawing the sprite, then resetting the shader, something like this:

shader\_set(shd\_spine\_tint\_black);
draw\_self();
shader\_reset();