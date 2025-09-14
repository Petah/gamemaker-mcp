---
title: "font_add"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_add.htm"
converted: "2025-09-14T03:59:32.795Z"
---

# font\_add

This function can be used to add a font to your game from a font file present in the [Included Files](../../../../Settings/Included_Files.htm#h). You can define the size of the font (in points), as well as whether the font should be **bold** or _italic_, and you can also define the range of characters to include. The function returns a handle that should be stored in a variable as this will be needed in all further code that refers to this font. An invalid handle (-1) will be returned by the function if it fails for any reason.

Note that the font file must be either a \*.ttf or \*.otf file, which can also be useful for adding non-standard fonts like Asian or Arabic fonts.

**WARNING** If you include such a font in the Included Files, it **must be licensed** for distribution with the game.

On Windows, this function can also load fonts installed on the system, e.g. "Arial". However it is not recommended to rely on system fonts, as another machine running your game may not have the same fonts installed.

On HTML5, this function can only be used to add **Web Fonts**, and will only work if WebGL is **not** enabled - if WebGL is enabled then you must use a general font asset (i.e.: using [draw\_set\_font](../../Drawing/Text/draw_set_font.md) along with a font from [The Asset Browser](../../../../Introduction/The_Asset_Browser.md)) or bitmap fonts (see [font\_add\_sprite](font_add_sprite.md)).

WARNING When targeting HTML5, italics and bold text is only supported if the font asset or web font itself has these characters included. They will not be synthesised from the base font.

When loading a font from a file the _size_ of the font is in **pixels** and the _first_ and _last_ values are ignored, meaning all glyphs in the font will be added. Fonts added in this way are assigned to their own texture page, so care should be taken when using this function as it will increment the number of texture swaps when drawing. It is also worth noting that fonts may appear slightly larger when drawn, since glyphs may have parts that are drawn outside of the bounding box defined for the font. You should be aware too that there is a limitation of around 200 glyphs that can be rendered in a single frame for a particular font.

By default, added fonts will have anti-aliasing enabled. However you can check the state of AA at any time using the function [font\_add\_get\_enable\_aa](font_add_get_enable_aa.md) and you can enable/disable AA using the function [font\_add\_enable\_aa](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_add_enable_aa.md).

NOTE When you load a font into GameMaker you must remember to remove it again (with [font\_delete](font_delete.md)) when no longer needed, otherwise there is risk of a memory leak which will slow down and eventually crash your game.

#### Syntax:

font\_add(name, size, bold, italic, first, last);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The path of the font file in the Included Files (*.ttf or *.otf). |
| size | Real | The size of the font - points for Web Fonts, pixels for file fonts. |
| bold | Boolean | Whether the font is bold (true) or not (false). |
| italic | Boolean | Whether the font is italic (true) or not (false). |
| first | Real | The first character to include (if you're unsure, go for 32). |
| last | Real | The last character to include (if you're unsure, go for 128). |

#### Returns:

[Font Asset](../../../../The_Asset_Editors/Fonts.md)

#### Example:

new\_font = font\_add("gamefont.ttf", 24, true, true, 32, 128);

This will load the gamefont.ttf file present in the game's Included Files with a 24pt size. The font will be bold and italic, and the font range will include capital and lower case letters, numbers and all common punctuation. After the font is loaded, its ID will be stored in the new\_font variable.