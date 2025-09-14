---
title: "effect_create_depth"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/effect_create_depth.htm"
converted: "2025-09-14T03:59:52.769Z"
---

# effect\_create\_depth

This function creates a simple particle effect at the given depth.

You supply a depth value and a particle kind, along with its position, size and colour. The size takes three possible values: 0 (small), 1 (medium), or 2 (large).

NOTE The effect types ef\_rain and ef\_snow don't use the x/y position (although you must still provide them).

NOTE Depth values are approximate. If you try to draw things at depth values close to the maximum depth and minimum depth, they may not be drawn due to inaccuracies introduced by the calculations.

The available constants for the different particle kinds are:

| Constant | Example | Description |
| --- | --- | --- |
| ef_cloud |  | An effect that creates random cloud particles of varying sizes |
| ef_ellipse |  | An effect that creates expanding ellipses |
| ef_explosion |  | An effect that creates expanding fading explosions |
| ef_firework |  | An effect that creates multiple small particles to generate a firework explosion |
| ef_flare |  | An effect that generates a brilliant point that flares up and fades out |
| ef_rain |  | An effect that generates rain particles coming down from the top of the screen |
| ef_ring |  | An effect that generates expanding and fading circles |
| ef_smoke |  | An effect that generates little puffs of smoke |
| ef_smokeup |  | An effect that creates a smoke plume that rises up the screen |
| ef_snow |  | An effect that generates multiple snow particles falling down the screen |
| ef_spark |  | An effect that generates a small spark |
| ef_star |  | An effect that generates star particles |

#### Syntax:

effect\_create\_depth(depth, kind, x, y, size, colour);

| Argument | Type | Description |
| --- | --- | --- |
| depth | Real | The depth at which to create the effect |
| kind | Effect Type Constant | The kind of effect to create |
| x | Real | The x position to create the effect at (unused by ef_rain and ef_snow) |
| y | Real | The y position to create the effect at (unused by ef_rain and ef_snow) |
| size | Real | The size of the effect (0 = small, 1 = medium, 2 = large) |
| colour | Colour | The colour of the effect |

#### Returns:

N/A

#### Example:

effect\_create\_depth(depth, ef\_explosion, x, y, 2, c\_dkgray);

The code above creates a large, dark gray coloured explosion particle effect (ef\_explosion) at the [depth](../../../../../../../GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/depth.md) and x, y position of the calling [instance](../../../../Quick_Start_Guide/Objects_And_Instances.md).