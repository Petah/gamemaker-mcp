---
title: "draw_flush"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/draw_flush.htm"
converted: "2025-09-14T03:59:55.595Z"
---

# draw\_flush

This function flushes the entire draw pipeline.

This is a **debug-only** function and in general _it should not be used_ unless indicated by a member of the GameMaker Support staff, as indiscriminate use will cause serious performance issues with your game.

**WARNING** This will not work on HTML5 when WebGL is disabled or not supported by the browser. WebGL can be allowed or set to be required in the [HTML5 Game Options](../../../Settings/Game_Options/HTML5.md) under **Graphics**.

#### Syntax:

draw\_flush();

#### Returns:

N/A

#### Example:

draw\_flush();

The above code flushes the draw pipeline.