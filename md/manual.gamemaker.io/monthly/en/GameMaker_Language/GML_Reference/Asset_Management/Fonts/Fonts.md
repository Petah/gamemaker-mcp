---
title: "Fonts"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/Fonts.htm"
converted: "2025-09-14T03:59:32.776Z"
---

# Fonts

GameMaker has a number of functions to get information from font assets added using [The Font Editor](../../../../The_Asset_Editors/Fonts.md) and functions that can be used to change, add or remove fonts from your game at Runtime.

The function [font\_add](font_add.md) can be used to add fonts at runtime, including non-standard fonts such as Asian glyph fonts, from a \*.ttf or \*.otf file.

NOTE The Unicode character 9647 (▯) is used to substitute any missing glyphs that you may have in your designated font when rendering it in the draw event. So if your font doesn't have, for example, the ° symbol, then writing 90° will actually produce 90▯.

## Fonts and Text Rendering

Text in GameMaker is drawn using the font set with [draw\_set\_font](../../Drawing/Text/draw_set_font.md). Text drawn using a font will be drawn in a different way depending on whether SDF is enabled or not.

### Regular

This is the normal way of drawing text in GameMaker. The font's glyphs for the chosen font size ([font\_get\_size](font_get_size.md)) are placed on a texture page ([font\_get\_texture](font_get_texture.md)) and each character is rendered as it is from the texture page.

A disadvantage of this is that scaling up text using regular fonts makes them look pixelated. To fix this, GameMaker provides an SDF rendering option for fonts added at runtime.

### SDF Rendering

This is _disabled by default_ for newly added fonts and enabled _per font_ through [The Font Editor](../../../../The_Asset_Editors/Fonts.md), or by calling [font\_enable\_sdf](font_enable_sdf.md):

new\_font = font\_add("STENCIL.TTF", 32, false, false, 32, 128);
font\_enable\_sdf(new\_font, true);

When SDF rendering is enabled, all characters in the given font's range are stored differently on the texture page. Instead of an actual render of the different characters at the font's set size, an SDF (_Signed Distance Field)_ is stored.

In this case, every texel stores the _signed distance_ to the closest point on the character. All texels on this texture combined make up a _field_ of signed distances.

With this feature enabled for a font, text can be scaled up without the characters becoming pixelated.

You can also apply [effects](font_enable_effects.md) to SDF-enabled fonts:

![](../../../../assets/Images/Scripting_Reference/GML/Reference/Fonts/font_effects.png)

### Visual Comparison

The following table shows a visual comparison between text drawn using a regular font, and drawn using a font that has SDF enabled:

| Scale | Text Rendering (Regular) | Text Rendering (SDF Enabled) |
| --- | --- | --- |
| 1x |  |  |
| 4x |  |  |

## Function Reference

### Asset Info

-   [font\_exists](font_exists.md)
-   [font\_get\_name](font_get_name.md)
-   [font\_get\_fontname](font_get_fontname.md)
-   [font\_get\_first](font_get_first.md)
-   [font\_get\_last](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_last.md)
-   [font\_get\_italic](font_get_italic.md)
-   [font\_get\_bold](font_get_bold.md)
-   [font\_get\_size](font_get_size.md)
-   [font\_get\_info](font_get_info.md)

### Texture

-   [font\_get\_texture](font_get_texture.md)
-   [font\_get\_uvs](font_get_uvs.md)
-   [font\_cache\_glyph](font_cache_glyph.md)

### Adding/Removing Fonts

-   [font\_add](font_add.md)
-   [font\_add\_sprite](font_add_sprite.md)
-   [font\_add\_sprite\_ext](font_add_sprite_ext.md)
-   [font\_replace\_sprite](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_replace_sprite.md)
-   [font\_replace\_sprite\_ext](font_replace_sprite_ext.md)
-   [font\_delete](font_delete.md)

### Configuration

-   [font\_texture\_page\_size](font_texture_page_size.md)
-   [font\_set\_cache\_size](font_set_cache_size.md)
-   [font\_add\_enable\_aa](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_add_enable_aa.md)
-   [font\_add\_get\_enable\_aa](font_add_get_enable_aa.md)

### SDF

-   [font\_enable\_sdf](font_enable_sdf.md)
-   [font\_get\_sdf\_enabled](font_get_sdf_enabled.md)
-   [font\_sdf\_spread](font_sdf_spread.md)
-   [font\_get\_sdf\_spread](font_get_sdf_spread.md)
-   [font\_enable\_effects](font_enable_effects.md)

### Drawing

-   [draw\_set\_font](../../Drawing/Text/draw_set_font.md)
-   [draw\_get\_font](../../Drawing/Text/draw_get_font.md)