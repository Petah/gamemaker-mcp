---
title: "Guide To Primitives And Vertex Building"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Guide_To_Primitives_And_Vertex_Building.htm"
converted: "2025-09-14T03:59:22.376Z"
---

# Guide To Primitives And Vertex Building

This guide briefly covers how to build and use [primitives](../GameMaker_Language/GML_Reference/Drawing/Primitives/Primitives_And_Vertex_Formats.md) using custom **vertex formats** and **vertex buffers**.

In general when you start working with 3D, special effects, complex drawing processes or shaders you don't need to worry too much about the vertex format being used, since GameMaker will automatically set up and pass through the vertex data for you. However, sometimes it is necessary to create your own vertex data and format it to suit, especially when you need to boost speed, or wish to pass in extra information. For example the standard vertex format includes an x, y, z 3D position, colour (with alpha), and UV texture coordinates, which, if you were creating it yourself, would look something like this:

#### Passthrough Vertex Format:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
my\_format = vertex\_format\_end();

However, if you are only using (for example) a shader to manipulate the position of the vertex, then there would be no need to pass through colour or texture data. In this case you would create your own format as follows:

#### Custom Vertex Format:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
my\_format = vertex\_format\_end();

In total there are five different vertex attributes that you can use when defining a vertex format:

-   Colour
-   Normal
-   Position
-   3D Position
-   Texture coordinate

In general you must _always_ provide position or 3D position as part of the format, but all the others are optional.

You should note that once you have created your vertex format, the order in which you have defined the vertex attributes _must be honoured_ when building your **primitives**. So, if you have defined a vertex format as position, colour, and texture coordinate, then **you _must_ add these attributes to the primitive in the same order otherwise you will get an error**. Also note that like any other dynamic resource, a vertex format requires memory and therefore should be removed when not needed using the function [vertex\_format\_delete](../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_delete.md).

Any primitives that you build are held in a **vertex buffer**. This must be created beforehand and then referenced by the functions that are used to build your primitive. The vertex buffer can be reused as many times as necessary to create different primitives, or it can be "frozen" to maintain a specific primitive type for the duration of your game or level (which is the fastest approach, so if you know that a primitive you build will not change then you should always use this option).

An example of a single triangle primitive being built is shown in the following code:

Create Event

v\_buff = vertex\_create\_buffer();
vertex\_begin(v\_buff, global.my\_format);
vertex\_position(v\_buff, 10, 10);
vertex\_colour(v\_buff, c\_white, 1);
vertex\_texcoord(v\_buff, 0, 0);
vertex\_position(v\_buff, 110, 10);
vertex\_colour(v\_buff, c\_white, 1);
vertex\_texcoord(v\_buff, 1, 0);
vertex\_position(v\_buff, 110, 110);
vertex\_colour(v\_buff, c\_white, 1);
vertex\_texcoord(v\_buff, 1, 1);
vertex\_end(v\_buff);

Draw Event


var tex = sprite\_get\_texture(spr\_Background, 0);
shader\_set(shd\_shimmer);
vertex\_submit(v\_buff, pr\_trianglelist, tex);
shader\_reset();

Here we have first created our vertex buffer in the Create Event of the instance, then we begin the definition of the different vertices that make up our triangle primitive, giving the position, the colour, and the texture UV coordinate for each of the three points that we want to use. We then end the vertex definition, and we know that the vertex buffer with this vertex data is stored in the variable "v\_buff".

NOTE If the contents of the vertex buffer are going to be updated constantly, it would be created, given the vertex data, and then be destroyed again - after it's been drawn - all in the same step.

We then draw the contents of the vertex buffer in the Draw Event using a shader. This is a very simple example, and is basically how GameMaker works internally, i.e.: When you draw a sprite, GameMaker creates a vertex buffer with four vertices creating two triangles (which make a square, also called a "quad"), and textures these two triangles with the sprite image. When we draw this sprite, we are submitting the vertex buffer which draws its contents to the screen.

You'll notice when we submit the vertex buffer for drawing, we supply a primitive type. The type of primitive you use can be a point, a line list or strip, or a triangle list or strip, but you are _not_ permitted triangle fans since most mobile hardware will not accept that primitive type. Don't forget to format your vertex buffer correctly for the type of primitive that is going to be used to draw it. For example, drawing a two triangle primitive as a triangle list requires 6 points, but as a triangle strip it only requires 4 points. Which type you use is up to you and will depend on what you want to draw and the effect that you want to achieve.

One final important point to note when using your own vertex buffers in this way is how it affects the vertex batches that are sent to the GPU. When you create a vertex buffer you are creating the lowest level of graphics data, so when you draw all that happens is that GameMaker sends your buffer directly to the graphics card. Because of this, if you want better batching, you must work it out yourself and store the things you want to batch inside the same buffer.

As we have already mentioned above, vertex formats are built up by using together the following 5 attribute types (added via the appropriate vertex\_format\_add\_\* function):

-   Colour
-   Normal
-   Position
-   3D Position
-   Texture coordinate

Within the GLSL ES shader, these kinds are recognised using the following 4 attributes:

-   Colour
-   Normal
-   Position
-   Texture coordinate

Now, this might look odd as it seems that we can specify more attribute kinds in our vertex format than we can in the vertex shader. However, in the shader _Position_ and _3D Position_ are treated as the _same_ attribute, except that _Position_ is expected to have only "x" and "y" coordinates whereas _3D Position_ has “x”, “y” and “z” coordinates. So how do you map what's in your vertex format to how you define attributes in your shader? Let's start by looking at a typical set of attributes from the default shader:

attribute vec3 in\_Position;        // (x,y,z)
//attribute vec3 in\_Normal;        // (x,y,z) unused in this shader.
attribute vec4 in\_Colour;          // (r,g,b,a)
attribute vec2 in\_TextureCoord;    // (u,v)

And here's a chunk of code which sets up a vertex format compatible with this shader:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
my\_format = vertex\_format\_end();

Now, how does the shader attribute get matched to the vertex format type? It's just based on the naming convention:

-   "in\_Position" maps to [vertex\_format\_add\_position](../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_position.md)/[\_3d()](../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_position_3d.md)
-   "in\_Colour" maps to [vertex\_format\_add\_colour()](../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_colour.md)
-   "in\_TextureCoord" maps to [vertex\_format\_add\_texcoord()](../GameMaker_Language/GML_Reference/Drawing/Primitives/vertex_format_add_texcoord.md)

Now, things get trickier when you have multiple attributes of the same kind, but things are still based on the same naming convention. We'll look at supplying additional **colour** and **texture coordinates** now, as there can only be **one** Position and **one** Normal attribute in the shader or vertex format, but there _can_ be multiple colour or texture attributes.

When adding additional colour attributes to your shader, a number needs to be added to the end of the shader attribute to indicate which particular entry in the vertex format the attribute maps to. Here's an example - first the vertex format:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_colour();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
my\_format = vertex\_format\_end();

And now the associated shader attributes:

attribute vec3 in\_Position;      // (x,y,z)
attribute vec4 in\_Colour0;       // (r,g,b,a)
attribute vec4 in\_Colour1;       // (r,g,b,a)
attribute vec2 in\_TextureCoord;  // (u,v)

In this case in\_Colour0 maps to the first vertex\_format\_add\_colour() and in\_Colour1 maps to the second.

Texture coordinates are handled slightly differently to colour. Basically, anything which isn't called in\_Position, in\_Normal or one of the in\_Colour\[0 ... \] attributes is treated as a texture coordinate. The order they are defined in, in the list of attributes in the shader, is what denotes which attribute in the vertex format they map to. See the following GML Code example:

vertex\_format\_begin();
vertex\_format\_add\_position\_3d();
vertex\_format\_add\_colour();
vertex\_format\_add\_texcoord();
vertex\_format\_add\_texcoord();
vertex\_format\_add\_texcoord();
my\_format = vertex\_format\_end();

And the shader code would look something like this:

attribute vec3 in\_Position;      // (x,y,z)
attribute vec4 in\_Colour;        // (r,g,b,a)
attribute vec2 in\_myTexcoord;    // (u,v)
attribute vec2 in\_TextureCoord;  // (u,v)
attribute vec2 in\_Something;     // (u,v)

In this example, in\_myTexcoord, in\_TextureCoord and in\_Something map to the three successive texture coordinate attributes defined in the vertex format.

You can find a full list of all the functions required to create vertex formats, vertex buffers and primitives from the following page:

-   [Primitives And Vertex Formats](../GameMaker_Language/GML_Reference/Drawing/Primitives/Primitives_And_Vertex_Formats.md)