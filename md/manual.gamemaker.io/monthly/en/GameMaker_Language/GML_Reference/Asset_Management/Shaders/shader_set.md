---
title: "shader_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set.htm"
converted: "2025-09-14T03:59:40.114Z"
---

# shader\_set

With this function you can set the drawing target to the given shader and all further drawing will be done using that. You can end shader use with the function [shader\_reset()](shader_reset.md).

#### Syntax:

shader\_set(shader);

| Argument | Type | Description |
| --- | --- | --- |
| shader | Shader Asset | The handle of the shader to use. |

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
draw\_self();
shader\_reset();

The above code will set a shader to be used for drawing, then draw the current sprite used for the instance using it.