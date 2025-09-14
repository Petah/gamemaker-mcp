---
title: "font_get_last"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_last.htm"
converted: "2025-09-14T03:59:33.105Z"
---

# font\_get\_last

When defining a font in GameMaker, you can define a range of characters to include. This is because the font itself is not actually included with your game (for legal reasons) but an _image_ of the font is included on a texture page and that is what your game will use (just like any other graphics asset). This means that you will want to keep the number of characters that you use to a minimum and specify only the range of characters that your game will need so as to keep texture memory as optimised as possible. This function can be used to find the last character (as an UTF8 value) that was used when your font asset was added to your game.

#### Syntax:

font\_get\_last(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

num = font\_get\_last(fnt\_Main);

The above code will store the ASCII value of the last letter of the font range for the font indexed in "fnt\_Main".