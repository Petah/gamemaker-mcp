---
title: "effect_create_below"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Particles/effect_create_below.htm"
converted: "2025-09-14T03:59:52.737Z"
---

# effect\_create\_below DEPRECATED

This function creates a simple effect below all instances of your room (it is actually created at a depth of 50).

NOTE This function is deprecated. To create a particle effect at any depth or layer, you can use [effect\_create\_depth](effect_create_depth.md) or [effect\_create\_layer](effect_create_layer.md) instead.

The effect types ef\_rain and ef\_snow don't use the x/y position (although you must provide them). The size can be a value of 0, 1, or 2, where 0 is small, 1 is medium and 2 is large.

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

effect\_create\_below(kind, x, y, size, colour);

| Argument | Type | Description |
| --- | --- | --- |
| kind | Effect Type Constant | The kind of effect (use one of the constants listed above). |
| x | Real | The x positioning of the effect if relevant. |
| y | Real | The y positioning of the effect if relevant. |
| size | Real | The size of the effect. |
| colour | Colour | The colour of the effect. |

#### Returns:

N/A

#### Example:

if (speed > 0)
{
    effect\_create\_below(ef\_smoke, x, y, 0, c\_gray);
}

The above code will create a small puff of gray smoke every step that the instance speed is greater than 0 at the instance x,y coordinates.