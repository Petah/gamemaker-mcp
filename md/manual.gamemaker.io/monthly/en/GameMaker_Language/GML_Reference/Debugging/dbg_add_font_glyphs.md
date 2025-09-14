---
title: "dbg_add_font_glyphs"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/dbg_add_font_glyphs.htm"
converted: "2025-09-14T03:59:48.298Z"
---

# dbg\_add\_font\_glyphs

This function adds a range of characters from a TTF font to be used for text rendering in [The Debug Overlay](The_Debug_Overlay.md). You supply a font name as a string, which must be present in the [Included Files](../../../../../../Settings/Included_Files.md).

IMPORTANT The glyphs that you want to add must be present in the given TTF font.

The following values can be used to specify the range:

| Range | Description |
| --- | --- |
| -1 | Default Latin range |
| 0 | Greek |
| 1 | Korean |
| 2 | Japanese |
| 3 | Chinese Full |
| 4 | Chinese Simplified Common |
| 5 | Cyrillic |
| 6 | Thai |
| 7 | Vietnamese |

#### Syntax:

dbg\_add\_font\_glyphs(filename, \[size\], \[font\_range\]);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The filename of the TTF file to use |
| size | Real | OPTIONAL The size of the font in pixels (default is 13) |
| font_range | Real | OPTIONAL The range of characters to add (default is -1 for the Latin range) |

#### Returns:

N/A

#### Example:

dbg\_add\_font\_glyphs("korean\_font.ttf", 24, 1);

The above code adds the glyphs of the Korean character range from the TTF font file "korean\_font.ttf". The used font size is 24.