---
title: "shader_set_uniform_f_buffer"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set_uniform_f_buffer.htm"
converted: "2025-09-14T03:59:40.171Z"
---

# shader\_set\_uniform\_f\_buffer

With this function you can set the value of a shader uniform to a list of floating-point values that are stored in a buffer.

As floats are represented in a buffer using the [buffer\_f32](../../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) data type, this function expects the data in the range given by offset and count to be formatted as consecutive values of this type.

Note that the count parameter should correspond to the total number of values of the uniform that you're setting: the number of components of the data type times the array length (in case of an array uniform). For example, uniform vec2 u\_vUV; expects 2 buffer\_f32 values, uniform vec4 u\_vColours\[16\]; expects 4 \* 16 = 64 values, uniform float u\_fIntensity\[8\]; expects 1 \* 8 = 8 values and uniform mat4 u\_mMatrices\[4\]; expects (4x4) x 4 = 64 values.

NOTE All uniforms must be set _after_ calling the function [shader\_set](shader_set.md) and _before_ calling [shader\_reset](shader_reset.md).

#### Syntax:

shader\_set\_uniform\_f\_buffer(uniform, buffer, offset, count);

| Argument | Type | Description |
| --- | --- | --- |
| handle | Shader Uniform Handle | The handle to the shader uniform as returned by shader_get_uniform |
| buffer | Buffer | The buffer to read the values from |
| offset | Real | The offset (in bytes) in the buffer |
| count | Real | The number of values of type buffer_f32 to use (see Buffer Data Type Constant) |

#### Returns:

N/A

#### Example:

/// Create Event
var \_values = 4;
var \_size = buffer\_sizeof(buffer\_f32);
buffer = buffer\_create(\_values \* \_size, buffer\_fixed, 1);

buffer\_write(buffer, buffer\_f32, 1);
buffer\_write(buffer, buffer\_f32, 0.7);
buffer\_write(buffer, buffer\_f32, 0.9);
buffer\_write(buffer, buffer\_f32, 1);

uni\_blend\_colour = shader\_get\_uniform(shader\_Colorize, "u\_vBlendColour");


/// Draw Event
shader\_set(shader\_Colorize);
shader\_set\_uniform\_f\_buffer(uni\_blend\_colour, \_buffer, 0, 4);
vertex\_submit(global.vb\_character, pr\_trianglelist, -1);
shader\_reset();


/// Clean Up event
buffer\_delete(buffer);

The above code first creates a new buffer buffer of a fixed size that has room to store four values (\_values) of type buffer\_f32. This is done in an object's Create event. Four values between 0 and 1 are then [written](../../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md) to the buffer that represent, in order, the R, G, B and A component of a blend colour. After that a handle is retrieved to a uniform vec4 u\_vBlendColour; uniform defined in a [shader](Shaders.md) named "shader\_Colorize". Next in the Draw event this shader is set, the four values in the buffer are passed to the shader using shader\_set\_uniform\_f\_buffer, and the model in a [vertex buffer](../../Drawing/Primitives/vertex_create_buffer.md) named vb\_character is submitted (i.e. _drawn_). After that the shader is reset. Finally in the Clean Up event the buffer is deleted to avoid a memory leak.