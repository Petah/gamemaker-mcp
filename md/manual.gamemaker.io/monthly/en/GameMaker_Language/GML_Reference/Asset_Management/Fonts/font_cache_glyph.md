---
title: "font_cache_glyph"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_cache_glyph.htm"
converted: "2025-09-14T03:59:32.876Z"
---

# font\_cache\_glyph

This function lets you pre-cache a character glyph from a font.

If you don't pre-cache a character using this function, it's automatically cached before it's drawn for the first time.

This function returns a struct with the x and y position of the glyph on the font's texture page, e.g. { x : 208, y : 62 }. To get a handle to the texture page that the cached glyph is on you can use [font\_get\_texture](font_get_texture.md).

#### Syntax:

font\_cache\_glyph(font, glyph\_index);

| Argument | Type | Description |
| --- | --- | --- |
| font | Font Asset | The font to cache a character or glyph from |
| glyph_index | Real | The index (or character code) of the glyph to cache (see ord/string_ord_at) |

#### Returns:

[Struct](../../../GML_Overview/Structs.md)

#### Example:

var \_glyph = font\_cache\_glyph(fnt\_gui, 65);

The above code caches the glyph with the index 65 from a font asset, and stores the returned struct in a local variable.