---
title: "shader_current"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_current.htm"
converted: "2025-09-14T03:59:39.997Z"
---

# shader\_current

This function returns the handle of the shader currently being used for rendering, or an invalid handle (\-1) if no shader is being used.

#### Syntax:

shader\_current()

#### Returns:

[Shader Asset](../../../../The_Asset_Editors/Shaders.md)

#### Example:

if (shader\_current() == -1)
{
    shader\_set(sh\_warp);
}

The above code will check to see what the current shader is. If it is an invalid handle (i.e., holding \-1, indicating no shader being used) then a shader is set.