---
title: "Built-In Shader Constants"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/Shader_Constants.htm"
converted: "2025-09-14T03:59:39.951Z"
---

# Built-In Shader Constants

Apart from the shader functions and constants defined in the OpenGL ES Shading Language (GLSL ES) [Reference Pages](https://registry.khronos.org/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf), there are also a number of built-in shader constants available to you that are unique to GameMaker.

The names listed in the tables below refer to either:

-   #defines, which are similar to [Macros](../../../GML_Overview/Variables/Constants.htm#h) in GML Code and are written in UPPERCASE
-   Uniforms, which start with the gm\_ prefix

## Constants

The following constants (i.e. _defines_) can be used as array indices when using the shader array uniform gm\_Matrices:

| Constant | Description |
| --- | --- |
| MATRIX_VIEW | This array index constant holds the index to the current view matrix. The index returned would be used as an array value when accessing the built-in gm_Matrices uniform within the shader code. |
| MATRIX_PROJECTION | This array index constant holds the index to the current projection matrix. The index returned would be used as an array value when accessing the built-in gm_Matrices uniform within the shader code. |
| MATRIX_WORLD | This array index constant holds the index to the current world matrix. This can be used for things like lighting if you have light information in world space. The index returned would be used as an array value when accessing the built-in gm_Matrices uniform within the shader code. |
| MATRIX_WORLD_VIEW | This array index constant holds the index to the result of the world and view matrices multiplied together. This is often used for things like fog. The index returned would be used as an array value when accessing the built-in gm_Matrices uniform within the shader code. |
| MATRIX_WORLD_VIEW_PROJECTION | This array index constant holds the index to the result of the world, view and projection matrices multiplied together. This is the normal transformation matrix used for vertex positions. The index returned would be used as an index into the gm_Matrices uniform within the shader code. |

The following constants are also available:

| Constant | Description |
| --- | --- |
| MATRICES_MAX | The size of the matrix array (gm_Matrices) in the vertex shader. |
| MAX_VS_LIGHTS | The maximum number of point and directional lights available in the vertex shader. |

## Uniforms

| Uniform | Shader | Description |
| --- | --- | --- |
| Common |
| gm_Matrices[matrix] | Vertex Shader | This array uniform of mat4s stores the various transform matrices used by GameMaker and is one of the available predefined uniforms that GameMaker creates for you to use within the shader code editor. The array index is chosen from one of the matrix index constants listed above, e.g. gm_Matrices[MATRIX_WORLD_VIEW_PROJECTION]. Its number of elements is MATRICES_MAX. |
| gm_BaseTexture | Fragment Shader | This is a 2D sampler uniform that holds the texture of that which GameMaker is currently drawing. So it would be the (full) texture page the current sprite is on, the texture of the surface being drawn or the texture passed as the texture to vertex_submit in case you're submitting a custom vertex buffer. |
| Lighting |
| gm_LightingEnabled | Vertex Shader | This boolean uniform holds whether lighting is enabled, i.e. the value set with draw_light_enable and returned by draw_get_lighting. |
| gm_Lights_Direction[] | Vertex Shader | This is an array uniform of vec4s, where each vec4 contains a light's normalised direction vector (X, Y, Z) negated and a fourth dimension (W) which is 1 when the light is enabled, and 0 when disabled. Light properties can be set using draw_light_define_direction. |
| gm_Lights_PosRange[] | Vertex Shader | This is an array uniform of vec4s, where each vec4 contains a light's position (X, Y, Z) and a fourth dimension (W) which is the light's range, which is 0 when that light is disabled. Light properties can be set using draw_light_define_point. |
| gm_Lights_Colour[] | Vertex Shader | This is an array uniform of vec4s, where each vec4 contains a light's colour (R, G, B), with the alpha channel (A) always being 1. |
| gm_AmbientColour | Vertex Shader | This is a vec4 uniform containing the colour of the ambient light as set with draw_light_define_ambient. |
| Fog |
| gm_FogStart | Vertex Shader | This is the distance where polygons start to be blended with the fog colour. |
| gm_RcpFogRange | Vertex Shader | This is the distance at which fog is maximal and nothing can be seen anymore. |
| gm_PS_FogEnabled | Fragment Shader | This will hold true or false, depending on whether the GPU has pixel fog enabled or not. |
| gm_FogColour | Fragment Shader | This can be used to get the fog colour used by GameMaker. |
| gm_VS_FogEnabled | Vertex Shader | This will hold true or false, depending on whether the GPU has vertex fog enabled or not. |
| Alpha Testing |
| gm_AlphaTestEnabled | Fragment Shader | This boolean uniform holds whether alpha testing is enabled. See gpu_set_alphatestenable for more information on alpha testing. |
| gm_AlphaRefValue | Fragment Shader | This float uniform holds the current alpha testing reference value. See gpu_set_alphatestref for more information on the alpha test reference. |