---
title: "font_get_sdf_spread"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_sdf_spread.htm"
converted: "2025-09-14T03:59:33.144Z"
---

# font\_get\_sdf\_spread

This function returns the [spread value](font_sdf_spread.md) used for the given font. The font must be [SDF-enabled](font_enable_sdf.md).

If the font doesn't exist, the function will return -1.

#### Syntax:

font\_get\_sdf\_spread(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The index of the font for which to get the spread value |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_spread = font\_get\_sdf\_spread(my\_font);
shader\_set\_uniform\_f(uni\_spread, \_spread);

The above code gets the spread value for a font, and passes it into a shader uniform.