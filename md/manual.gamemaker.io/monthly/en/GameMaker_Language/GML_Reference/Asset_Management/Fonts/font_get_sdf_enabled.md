---
title: "font_get_sdf_enabled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_sdf_enabled.htm"
converted: "2025-09-14T03:59:33.131Z"
---

# font\_get\_sdf\_enabled

This function returns whether [SDF Rendering](Fonts.htm#h) is enabled for the given font or not.

#### Syntax:

font\_get\_sdf\_enabled(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The index of the font to check |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_sdf\_enabled = font\_get\_sdf\_enabled(fnt\_title);
show\_debug\_message("SDF rendering is {0} enabled for fnt\_title", \_sdf\_enabled ? "" : "not");

The above code checks if SDF rendering is enabled for the font fnt\_title and stores the value in a variable \_sdf\_enabled. It then shows a readable debug message showing the result.