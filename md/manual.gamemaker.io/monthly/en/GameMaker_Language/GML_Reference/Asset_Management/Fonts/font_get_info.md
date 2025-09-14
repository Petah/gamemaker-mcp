---
title: "font_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_info.htm"
converted: "2025-09-14T03:59:33.077Z"
---

# font\_get\_info

This function is used to retrieve information for the given font. You supply a font index, which can be an asset added through [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) or a font [added](font_add.md) at runtime.

The function returns a [struct](../../../GML_Overview/Structs.md) with the following variables:

| Font Info Struct |
| --- |
| Variable Name | Data Type | Description |
| ascender | Real | The height of the font's ascender (in pixels) |
| ascenderOffset | Real | The maximum offset from the baseline to the top of the font (in pixels) |
| size | Real | The approximate size of the font (in pixels) |
| spriteIndex | Sprite Asset | The sprite index for the font if it was created from a sprite, otherwise an invalid sprite handle (-1) |
| texture | Real | -1 if the font was created from a sprite, otherwise the texture ID of the font |
| name | String | The name of the font |
| bold | Boolean | true if the font is bold, otherwise false (see NOTE below) |
| italic | Boolean | true if the font is italic, otherwise false (see NOTE below) |
| glyphs | Font Glyph Struct | A struct containing information for each glyph in the font (more information is given below) |
| sdfEnabled | Boolean | Whether SDF is enabled or disabled for this font |
| sdfSpread | Real | The SDF spread value set for this font |
| effectsEnabled | Boolean | Whether effects are enabled for this font |
| effectParams | Struct | The effects struct for this font, which can be changed with font_enable_effects |

NOTE The **bold** and italic variables only reflect the user's settings for the font, so they may not be accurate for fonts that appear bold or italic by default.

If the supplied font doesn't exist, the function will return undefined.

Also note that changing the values of any of these variables, or any variables contained within the glyphs struct, will not change how the font is rendered, so this information should be considered **read-only**.

## Glyphs Struct

The glyphs variable in the returned struct will be a struct on its own, containing information for each glyph included in the font. Each variable in this struct will be a glyph's character name, which will hold a struct containing information for that glyph. You can imagine these nested structs in the following format (starting from the main struct):

{
    glyphs:
    {
        A: {},
        B: {},
        C: {},
        // ...other glyphs
    },
    // ...other font info
}

You can use a glyph's character name to retrieve its information from the struct, such as in the following code:

var \_font\_info = font\_get\_info(Font1);

var \_info\_A = \_font\_info.glyphs\[$ "A"\]; // $ is a struct accessor

show\_debug\_message(\_info\_A);

The code above gets the glyph struct for the "A" character and prints it to the output log. You can also replace the string ("A") with a variable that holds a string, which will allow you to get information for any glyph through that variable at runtime.

The struct returned for a glyph will contain the following variables:

NOTE On HTML5, the glyphs struct will be empty for any loaded file fonts (such as \*.ttf or \*.otf) as the runtime will not have information on those glyphs.

| Font Glyph Struct |
| --- |
| Variable Name | Data Type | Description |
| char | Real | If the font was created from a sprite, this will be the image index of the glyph from that sprite, otherwise it will be its Unicode character numberNote: All variables below this will not be present in the struct if the font was created from a sprite |
| x | Real | The X position of the glyph on the texture page (in texels) |
| y | Real | The Y position of the glyph on the texture page (in texels) |
| w | Real | The width of the glyph on the texture page (in texels) |
| h | Real | The height of the glyph on the texture page (in texels) |
| shift | Real | The number of pixels to shift right when advancing to the next character (can be negative for shifting left) |
| offset | Real | The number of pixels to horizontally offset the rendering of this glyph without affecting the shift position (can be positive or negative) |
| kerning | Array | An array of integers containing kerning information in pairs (or groups of 2). The first integer in a pair is the Unicode value for a character, and the second integer is the amount to add to that character's shift value (can be positive or negative) if it is preceded by this glyph's character. |

NOTE For file fonts loaded at runtime, the x and y values for a glyph may be -1 if it hasn't been rendered yet, as it will have no position on the texture page used for caching.

#### Syntax:

font\_get\_info(font);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The font for which information should be retrieved. |

#### Returns:

[Font Info Struct](font_get_info.md) (or undefined)

#### Example:

var \_info = font\_get\_info(my\_font);

if (\_info != undefined && \_info.bold)
{
    image\_xscale \*= 2;
    image\_yscale \*= 2;
}

This code retrieves information for the font stored in the my\_font variable. If the returned value is **not** undefined and the given font is bold, the instance's scale is doubled.