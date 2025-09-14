---
title: "The Shader Editor"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Shaders.htm"
converted: "2025-09-14T04:00:16.813Z"
---

# The Shader Editor

![Shader Editor](../assets/Images/Asset_Editors/Editor_Shaders.png)Shaders are a very powerful tool that can be used to manipulate the graphics that your game renders to the screen, permitting incredibly fast effects that can range from, for example, adding a subtle colour hue to a sprite, right up to full screen distortion effects. But what is a shader?

A shader is basically a two-part program that runs directly on the graphics card itself, making it very fast since the GPU is doing all the work and freeing up CPU cycles for your game code. The full shader is comprised of a vertex shader program, and a fragment shader program (also known as a pixel shader). Both of these tiny programs work together in order to manipulate what the graphics card renders to the screen. This then permits you to manipulate in real time, the position, colour and alpha values that are actually rendered onto the display buffer.

[Vertex ShaderVertex Shader](Shaders.htm#)

The Vertex Shader is the programmable shader stage in the rendering pipeline that handles the processing of individual vertices (the points of the triangles used to render any image), and when you are rendering a geometry - like a sprite or a surface - GameMaker creates a stream of vertices - called a **Vertex Buffer** \- that defines the geometry of these triangles. A sprite for example would have a geometry of two triangles (normally called _polygons_) rendered together to form a "quad". This vertex stream from the Vertex Buffer is fed as an input to the Vertex Shader, which can process the vertices data in a programmable way. The Vertex Shader output is used by the GPU to assemble triangles, which are then properly clipped and culled to the view port and view camera, and then sent on to the rasterizer block of the GPU which generates a new output stream, constituted by something called **Fragments**. These are tiny data structures, each of which is relative to a single pixel that appears on the screen.

[Fragment ShaderFragment Shader](Shaders.htm#)

The Fragment Shader is the programmable shader stage in the rendering pipeline that deals with "fragments" - the interpolated pixels used to texture any given polygon - and they are responsible for outputting the final pixel colour of each rendered triangle pixel. Basically it works like this: the Fragment Shader receives as its input all those fragments (the individual pixels of the triangle being rendered) that have been passed along the pipeline by the Vertex Shader. It can then process these fragments to change the colour and alpha of the final destination pixel that will be drawn to the screen.

A complete overview of how shaders really work and what place they have in the graphics pipeline is outside the scope of this, but you can find a brief guide here:

-   [Guide To Using Shaders](../Additional_Information/Guide_To_Using_Shaders.md)

## Language Support

GameMaker supports the following shader languages:

| Shader Language | Target Platform |
| --- | --- |
| GLSL ES 1.0 | All target platforms |
| GLSL | Mac and Ubuntu (Linux) |
| HLSL 11 | Windows and Xbox |
| PSSL | PlayStation 4 & 5 |

When writing GLSL ES shaders, it is recommended to follow the [official language specification](https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf "GLSL ES 1.0 Specification") as closely as possible to avoid errors as some target platforms can be stricter than others.

NOTE The HTML5 and GX.games targets use WebGL, which follows the GLSL ES 1.0 spec but doesn't support any of its non-mandatory functionality. See the WebGL spec on [Supported GLSL Constructs](https://registry.khronos.org/webgl/specs/latest/1.0/#4.3).

## Creating a Shader

To create a shader asset, simply right-click ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) inside [The Asset Browser](../Introduction/The_Asset_Browser.md) and select _Create -> Shader_. Once you have created the base shader, you can then use the right mouse ![RMB Icon](../assets/Images/Icons/Icon_RMB.png) menu on the new asset to select the shader type before continuing to edit the code:

![Shader Editor RMB Menu](../assets/Images/Asset_Editors/Editor_Shader_RMBMenu.png)The code editor itself is split into two "programs" - Vertex and Fragment - when you create a new shader, with each one being available from tabs at the top of the editor. Both are created at once because you _cannot create a shader without both parts_. Even if you wish to only use the fragment shader you will have to have created a "pass through" vertex shader first, which is why by default any new shader being created will have a vertex and fragment pass through shader already coded for you (in the screen shot at the top of the page, you can see that we have used the code editor pane view to show the two side by side... useful when working on both the shader programs together).

It is worth noting that you can use GLSL ES shaders on _all_ target platforms, but for them to work on the **HTML5** target platform you must have enabled WebGL in the [HTML5 Game Options](../Settings/Game_Options/HTML5.md), otherwise they will not work.

For further details relating to shader functions and how they can be used in GameMaker please see the following pages:

-   [Shader Functions](../GameMaker_Language/GML_Reference/Asset_Management/Shaders/Shaders.md) - The GML reference section for shaders.
-   [Built-In Shader Constants](../GameMaker_Language/GML_Reference/Asset_Management/Shaders/Shader_Constants.md) - The constants built in to GameMaker that can be used when writing shaders.
-   [GLSL ES 1.0 Specification](https://www.khronos.org/registry/OpenGL/specs/es/2.0/GLSL_ES_Specification_1.00.pdf) - PDF file for the OpenGL ES 1.0 Shader Language that GameMaker uses.
    -   [WebGL limitations](https://registry.khronos.org/webgl/specs/latest/1.0/#4.3 "Supported GLSL Constructs") - The limitations that apply to this spec when using WebGL.
-   [HLSL Language Reference](https://docs.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl-reference) - The Microsoft reference pages for using HLSL.
-   [PSSL Language Presentation](https://twvideo01.ubm-us.net/o1/vault/gdceurope2013/Presentations/825424RichardStenson.pdf) - Overview of the PSSL language in presentation format.

## [Code Editor 2 (Beta)](The_Text_Editor.md)

The new Code Editor 2 can be enabled from the [preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) and is used to edit shader files when enabled. Both the vertex and fragment shaders will appear in the same editor one after another (unless the "**Show all documents in single view**" [preference](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) is disabled, in which case you can switch the opened shader file from the [Navigation Bar](The_Text_Editor.htm#h3)).