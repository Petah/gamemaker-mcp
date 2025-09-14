---
title: "shader_enable_corner_id"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_enable_corner_id.htm"
converted: "2025-09-14T03:59:40.018Z"
---

# shader\_enable\_corner\_id

This function enables the use of corner IDs in shaders.

It sets a global state for all shaders being used where, when enabled, the shader "steals" 2 bits from the input colour values; one from the lowest bit of the red colour value, and one from the lowest bit of the blue colour value. These values can then be recovered in the shader to work out which vertex you are dealing with (i.e. which corner).

NOTE This will not work when using [vertex buffers and primitives](../../Drawing/Primitives/Primitives_And_Vertex_Formats.md) as the colour data for each vertex is handled by the user.

The lowest bit of the _blue_ component stores the _most significant bit_, the lowest bit of the _red_ component stores the _least significant bit_. You can calculate the corner ID in a vertex shader by doing this:

```
vec2 rem = mod(in_Colour.rb * 255., 2.);
int corner_id = int(dot(vec2(1., 2.), rem));
```

The following table lists the possible values and their corresponding corner position:

| Red Lowest Bit | Blue Lowest Bit | Corner ID | Position |
| --- | --- | --- | --- |
| 0 | 0 | 0 | Top-left |
| 1 | 0 | 1 | Top-right |
| 0 | 1 | 2 | Bottom-right |
| 1 | 1 | 3 | Bottom-left |

NOTE The corner IDs are numbered consecutively going clockwise, starting at 0 for the top-left corner.

#### Syntax:

shader\_enable\_corner\_id(enable);

| Argument | Type | Description |
| --- | --- | --- |
| enable | Boolean | Enable (true) or disable (false) this function. |

#### Returns:

N/A

#### Example:

shader\_enable\_corner\_id(true);

The above code will enable the use of colour bits for the corner ID for all shaders.