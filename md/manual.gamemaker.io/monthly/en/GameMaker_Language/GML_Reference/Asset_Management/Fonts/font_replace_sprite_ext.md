---
title: "font_replace_sprite_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_replace_sprite_ext.htm"
converted: "2025-09-14T03:59:33.229Z"
---

# font\_replace\_sprite\_ext

This function will replace a sprite font that you created previously using the function [font\_add\_sprite\_ext()](font_add_sprite_ext.md). It uses a "sprite strip", where each sub-image is be an individual symbol or letter, and the images are mapped to letters based on the argument "string\_map" of the function. This argument is a string that you can use to tell GameMaker what order the sub-images of the sprite font are and it will map these automatically when writing text. So, for example, if you have a string-map of "AaBbCcDdEeFfGgHh", your sprite font _must_ have the sub-images ordered in this way.

You can also set the spacing for the font to be proportional (true) or not (false), where a proportional font is spaced based on the actual width of the letters (so the letter "i" takes less room than the letter "w", for example) while a non-proportional font will be spaced based on the sub-image width, like a monospaced font. Finally, you can define the space to leave between each letter when writing, and this can be any integer value, with 0 being no space (the letters will "touch" if proportional). The function returns an _index_ value that should be stored in a variable as this will be needed in all further codes that refer to this font.

If the function fails, then it will fail silently without replacing the given sprite font.

**NOTE** This function requires you to have previously added a sprite font using [font\_add\_sprite()](font_add_sprite.md), as it will replace that and cannot be used on fonts that are included as part of the game resources.

#### Syntax:

font\_replace\_sprite\_ext(font, spr, string\_map, prop, sep);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The font to replace. |
| spr | Sprite Asset | The sprite to add a font based on. |
| string_map | String | String from which sprite sub-image order is taken. |
| prop | Boolean | Set as proportional font or not. |
| sep | Real | The space to leave between each letter. |

#### Returns:

N/A

#### Example:

font\_replace\_sprite\_ext(global.Font, spr\_CalcFont, "0123456789+-\*/=", true, 2);

The above code will replace a sprite font asset that is indexed in the variable "global.Font" with sprite images indexed in the variable "spr\_CalcFont".