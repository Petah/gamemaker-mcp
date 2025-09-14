---
title: "font_add_enable_aa"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_add_enable_aa.htm"
converted: "2025-09-14T03:59:32.812Z"
---

# font\_add\_enable\_aa

This function can be used to enable or disable anti-aliasing (AA) for fonts added using [font\_add()](font_add.md). This function needs to be called _before_ you add any fonts and setting it to true will enable AA, and setting it to false will disable it. By default AA is enabled. Note that this will have no effect on fonts that have been added before the function was called, and the function only needs to be called once when the font is added, and not every draw/step that the font is being used.

#### Syntax:

font\_add\_enable\_aa(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Whether to enable (true) or disable (false) AA for added fonts. |

#### Returns:

N/A

#### Example:

if (!font\_add\_get\_enable\_aa())
{
    font\_add\_enable\_aa(true);
}

The above code checks the status of anti-aliasing for added fonts and if it not enabled, then we enable it.