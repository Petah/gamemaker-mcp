---
title: "draw_enable_svg_aa"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_enable_svg_aa.htm"
converted: "2025-09-14T03:59:53.603Z"
---

# draw\_enable\_svg\_aa

With this function you can enable or disable anti-aliasing (AA) for SVG format vector sprites. AA simply smooths the edges of vector images to give them a nicer look. The amount of AA used will depend on the value set using the function [draw\_set\_svg\_aa\_level](draw_set_svg_aa_level.md). By default this is disabled.

#### Syntax:

draw\_enable\_svg\_aa(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable (true) or disable (false) AA for all SVG sprites. |

#### Returns:

N/A

#### Example:

if (draw\_get\_svg\_aa\_level() == 0)
{
    draw\_enable\_svg\_aa(true);
    draw\_set\_svg\_aa\_level(0.5);
}

The above code will check the AA value for SVG format sprites, and if it is 0 it enables AA and sets the value to 0.5.