---
title: "draw_enable_swf_aa"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_enable_swf_aa.htm"
converted: "2025-09-14T03:59:53.617Z"
---

# draw\_enable\_swf\_aa

With this function you can enable or disable anti-aliasing (AA) for SWF format vector sprites. AA simply smooths the edges of vector images to give them a nicer look. The amount of AA used will depend on the value set using the function [draw\_set\_swf\_aa\_level](draw_set_swf_aa_level.md). By default this is disabled.

#### Syntax:

draw\_enable\_swf\_aa(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable (true) or disable (false) AA for all SWF sprites. |

#### Returns:

N/A

#### Example:

if (draw\_get\_swf\_aa\_level() == 0)
{
    draw\_enable\_swf\_aa(true);
    draw\_set\_swf\_aa\_level(0.5);
}

The above code will check the AA value for SWF format sprites, and if it is 0 it enables AA and sets the value to 0.5.