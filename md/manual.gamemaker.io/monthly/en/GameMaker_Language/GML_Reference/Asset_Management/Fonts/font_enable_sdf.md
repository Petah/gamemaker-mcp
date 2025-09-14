---
title: "font_enable_sdf"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_enable_sdf.htm"
converted: "2025-09-14T03:59:32.980Z"
---

# font\_enable\_sdf

This function is used to enable or disable [SDF Rendering](Fonts.htm#h) for the given font. The font must have been added using [font\_add()](font_add.md) and loaded from a font file - you cannot use SDF with sprite fonts or fonts that were added through the IDE.

Once SDF is enabled for a font, you can apply various [effects](font_enable_effects.md) to it.

NOTE This function cannot be used on HTML5, as HTML5 does not support adding freetype fonts. However, SDF can still be used on HTML5 by enabling it for a font [through the IDE](../../../../The_Asset_Editors/Fonts.md).

#### Syntax:

font\_enable\_sdf(ind, enable);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The index of the font for which to enable/disable SDF rendering |
| enable | Boolean | Whether to enable SDF rendering for the font or not |

#### Returns:

N/A

#### Example:

/// Create Event
new\_font = font\_add("STENCIL.TTF", 32, false, false, 32, 128);
font\_enable\_sdf(new\_font, true);

/// Draw Event
draw\_set\_font(new\_font);
draw\_set\_halign(fa\_center);
draw\_set\_valign(fa\_middle);

var \_sinval = dsin(current\_time / 4);
var \_scale = 4 \* (1 + \_sinval \* 0.3);

draw\_text\_transformed(500, 400, "Hello World! (animated version)", \_scale, \_scale, 0);

The above code shows the code of an object's Create event and Draw event. In the Create event a custom font is added using [font\_add](font_add.md) and stored in an instance variable new\_font. SDF rendering is enabled for the font by calling font\_enable\_sdf.

In the Draw event, the font is set to new\_font and text alignment is set to centred (both horizontally and vertically). Next some values are calculated to animate the text scale. Finally some text is drawn scaled using [draw\_text\_transformed](../../Drawing/Text/draw_text_transformed.md).

Because the font is SDF-enabled, this text should remain sharp as it scales up and down.