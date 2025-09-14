---
title: "font_get_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_name.htm"
converted: "2025-09-14T03:59:33.116Z"
---

# font\_get\_name

This function can be used to get the name (as a string) that was given to the font when it was added as an asset to the GameMaker Asset Browser. Please note that this is _only_ a string and cannot be used to reference the font directly - for that you would need the _font index_. You can, however, use this string to get the _font index_ using the returned string along with the function [asset\_get\_index()](../Assets_And_Tags/asset_get_index.md).

#### Syntax:

font\_get\_name(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

fnt\_Name = font\_get\_name(font0);

The above code will get the name of a font resource as it appears in the Asset Browser and store it as a string in the variable "fnt\_Name".