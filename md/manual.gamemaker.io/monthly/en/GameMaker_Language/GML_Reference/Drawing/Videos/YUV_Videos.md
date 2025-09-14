---
title: "YUV Videos"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Videos/YUV_Videos.htm"
converted: "2025-09-14T03:59:55.298Z"
---

# YUV Videos

Platforms that use the YUV colour format for videos require extra steps for drawing those videos. This involves using a shader to draw two surfaces on a primitive quad.

Read the [video\_draw()](video_draw.md) reference page first for information on what data that function returns for YUV videos, and then continue reading below for instructions on using that data to draw the video.

## YUV Shader

Create a shader asset in your project, and replace its Fragment Shader (.fsh) code with this:

//
// CUSTOM fragment shader for handling YUV content
//
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;
uniform sampler2D v\_chroma;
const float x = 1.164383;
const float y = 1.138393;
const float z = 1.138393;
const vec3 src\_bias = vec3(16.0 / 255.0, 128.0 / 255.0, 128.0 / 255.0);
const mat3 src\_xform = mat3(1.00000000 \* x,  0.00000000 \* y,  1.57480000 \* z,
                            1.00000000 \* x, -0.18732427 \* y, -0.46812427 \* z,
                            1.00000000 \* x,  1.85560000 \* y,  0.00000000 \* z);
void main()
{
    float yy = texture2D(gm\_BaseTexture, vec2(v\_vTexcoord.x, v\_vTexcoord.y)).r;
    vec2 cbcr = texture2D(v\_chroma, vec2(v\_vTexcoord.x, v\_vTexcoord.y)).rg;
    vec3 yuv = vec3(yy, cbcr);
    yuv -= src\_bias;
    yuv \*= src\_xform;
    gl\_FragColor = vec4(yuv, 1.0);
}

## Get Sampler

In the Create event of your object, get the sampler ID of the v\_chroma shader uniform, only if the video is YUV:

var \_format = video\_get\_format();
if (\_format == video\_format\_yuv)
{
    videochromasampler = shader\_get\_sampler\_index(shader\_YUV, "v\_chroma");
}

## Draw Video

In the Draw event of your object, call [video\_draw()](video_draw.md), and if its first array position is **0** (meaning the video is playing), draw the video.

In the code below, we're using a switch statement on the [video\_get\_format()](video_get_format.md) function. If the video is using the RGBA format, then it simply draws the surface in position \[1\] of the array.

If the video is using the YUV format, it uses the shader to draw the two surfaces (in positions \[1\] and \[2\]) onto a primitive quad.

var \_data = video\_draw();
if(\_data\[0\] == 0)
{
    switch(video\_get\_format())
    {
        case video\_format\_rgba:
            var \_surf = \_data\[1\];
            draw\_surface(\_surf,0,0);
        break;

        //  #### YUV PART HERE ####
        case video\_format\_yuv:
            var \_surf = \_data\[1\];
            var \_chromasurf = \_data\[2\];
            if(surface\_exists(\_surf) and surface\_exists(\_chromasurf))
            {
                shader\_set(shader\_YUV);

                var \_tex\_id = surface\_get\_texture(\_surf);
                var \_chroma\_tex\_id = surface\_get\_texture(\_chromasurf);
                texture\_set\_stage(videochromasampler, \_chroma\_tex\_id);
                gpu\_set\_texfilter(false);

                draw\_primitive\_begin\_texture(pr\_trianglestrip, \_tex\_id);
                draw\_vertex\_texture(0, 0, 0, 0);
                draw\_vertex\_texture(surface\_get\_width(\_chromasurf), 0, 1, 0);
                draw\_vertex\_texture(0, surface\_get\_height(\_chromasurf), 0, 1);
                draw\_vertex\_texture(surface\_get\_width(\_chromasurf), surface\_get\_height(\_chromasurf), 1, 1);
                draw\_primitive\_end();

                gpu\_set\_texfilter(true);
                shader\_reset();
            }
        break;
    }
}

The code under case video\_format\_yuv: does the following:

-   Gets the video surface (\_surf) and the chroma surface (\_chromasurf)
-   Makes sure that they exist, using [surface\_exist()](../Surfaces/surface_exists.md)
    -   Sets the shader to shader\_YUV (which is our newly created YUV shader)
    -   Gets the textures of both surfaces
    -   Assigns the texture of the chroma surface to the sampler we retrieved in the Create event
    -   Disables texture filtering
    -   Begins drawing a triangle strip primitive, with the video surface's texture assigned to it
    -   Draws a rectangle to cover the video surface, uses the width and height of the chroma surface for that rectangle
    -   Ends the primitive
    -   Re-enables texture filtering and resets the shader

Here the main video surface is being drawn by the primitive, and the chroma surface is being blended on to it by the shader. That is the reason why the texture of the chroma surface was passed into the shader via a sampler.