---
title: "Text"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Text/Text.htm"
converted: "2025-09-14T03:59:54.647Z"
---

# Text

There are a number of functions available to you for drawing text in various forms. It should be noted that some of these functions change the text colours and sizes in a dynamic way when being drawn, but when working with HTML5 or devices, these functions can slow down your game or look poor and so it may be better to have various sized font resources rather than use scaled drawing, or have large font resources and then draw them scaled _down_ rather than _up_. Also, if you need to colour large blocks of text it is better to use the [draw\_set\_colour()](../Colour_And_Alpha/draw_set_colour.md) and [draw\_set\_alpha()](../Colour_And_Alpha/draw_set_alpha.md) functions first along with the simple draw\_text function, rather than those extended functions that have a colour component.

For information on using fonts and using the SDF feature, see [Fonts](../../Asset_Management/Fonts/Fonts.md).

The following functions are for setting the font to be used when drawing, as well as the positioning of the text when drawn:

-   [draw\_set\_font](draw_set_font.md)
-   [draw\_set\_halign](draw_set_halign.md)
-   [draw\_set\_valign](draw_set_valign.md)
-   [draw\_get\_font](draw_get_font.md)
-   [draw\_get\_halign](draw_get_halign.md)
-   [draw\_get\_valign](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_get_valign.md)

These functions can be used to draw text to the screen, either simply or with transforms and colour:

-   [draw\_text](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text.md)
-   [draw\_text\_ext](draw_text_ext.md)
-   [draw\_text\_colour](draw_text_colour.md)
-   [draw\_text\_transformed](draw_text_transformed.md)
-   [draw\_text\_ext\_colour](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_colour.md)
-   [draw\_text\_ext\_transformed](draw_text_ext_transformed.md)
-   [draw\_text\_transformed\_colour](draw_text_transformed_colour.md)
-   [draw\_text\_ext\_transformed\_colour](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_text_ext_transformed_colour.md)

The following function also exists that is specific to drawing highscores created using the built-in highscore system:

-   [draw\_highscore](../../../../../../../GameMaker_Language/GML_Reference/Drawing/Text/draw_highscore.md)