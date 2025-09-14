---
title: "font_get_first"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_get_first.htm"
converted: "2025-09-14T03:59:33.022Z"
---

# font\_get\_first DEPRECATED

When defining a font in GameMaker, you can define a range of characters to include. This is because the font itself is not actually included with your game (for legal reasons) but an _image_ of the font is included on a texture page and that is what your game will use (just like any other graphics asset). This means that you will want to keep the number of characters that you use to a minimum and specify only the range of characters that your game will need so as to keep texture memory as optimised as possible. This function can be used to find the starting character (as an ASCII value) that was used when your font asset was added to your game.

**NOTE** Due to changes in the way fonts are handled, this function will **always** return 32, as GameMaker enforces the space character (32) into the font and doesn't allow characters with codes lower than 32 either. New functions to do similar tasks will be added in a future update.

#### Syntax:

font\_get\_first(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | Index of the font to check. |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

num = font\_get\_first(fnt\_Main);

The above code will store the ASCII value of the first letter of the font range for the font indexed in "fnt\_Main".