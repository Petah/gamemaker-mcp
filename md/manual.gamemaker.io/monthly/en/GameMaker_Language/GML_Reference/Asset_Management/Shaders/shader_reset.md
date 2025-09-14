---
title: "shader_reset"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_reset.htm"
converted: "2025-09-14T03:59:40.101Z"
---

# shader\_reset

This function resets the shader used for drawing and should be called when you no longer wish to use the current shader (set using [shader\_set()](shader_set.md)).

#### Syntax:

shader\_reset();

#### Returns:

N/A

#### Example:

shader\_set(shader\_Glass);
draw\_self();
shader\_reset();

The above code will set a shader to be used for drawing, then draw the current sprite used for the instance using it. Finally it will reset the shader to revert to GameMaker's default shader.