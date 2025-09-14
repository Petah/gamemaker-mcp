---
title: "Guide To Using Shaders"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Guide_To_Using_Shaders.htm"
converted: "2025-09-14T03:59:22.738Z"
---

# Guide To Using Shaders

Shaders are often used to create beautiful graphical effects in games. They are also among the most advanced features offered by GameMaker, so it is necessary that you have a basic understanding of programming and how GameMaker works before getting started with them.

So, what is a shader? Initially they were created to provide shading for lighting (hence the name), but they are now used to produce a huge variety of effects. Shader code is similar to regular code, but it is (almost always) executed by the GPU, not the CPU. This difference comes with its own set of rules and limitations, but we’ll cover those later.

Each shader is made up of two separate components: a **vertex shader** and a **fragment shader** (also referred to as **pixel shader**). Let’s start with the vertex shader. Each sprite is formed by a rectangle, but computers like to draw triangles, so those rectangles are split into two triangles (sometimes called a _quad_). This leaves us with six vertices (corners) per sprite, but two of those are the same one, so we should only worry about four. Now, imagine we have a for loop that goes over every vertex and executes the code inside the vertex shader for each. This allows us to change the vertex position and color before passing it over to the fragment shader since the vertex shader is executed earlier.

Here’s how that would look:

![Shader Vertices](../assets/Images/Scripting_Reference/Additional_Information/Shader_Vertices.gif)For the fragment shader, you can imagine the same loop as before, but this time it goes over every single pixel in your sprite, giving you information such as location and color of that pixel. In your fragment shader code, you perform operations and calculations to determine the color of that pixel to get the effect you want. For example, if you want a shader to make your sprite be black and white, then you’d calculate which shade of grey each pixel needs to be to create the effect.

It would look something like this:

![Shader Fragments](../assets/Images/Scripting_Reference/Additional_Information/Shader_Fragments.gif)The reason shader code is usually executed by the GPU is that it is more efficient at it. Modern CPUs typically have between two to eight cores. Each core can perform one task at a time, so by taking advantage of multiple cores, we can perform that many tasks simultaneously. In contrast, modern GPUs can perform thousands, and even tens of thousands, of tasks running at the same time. This is helpful for shaders because we can execute the shader code of thousands of pixels concurrently. The limitation is that we only have access to the initial state of the sprite, so we don’t know about any modifications done to other pixels since we can’t know for sure the code has run on them yet.

NOTE GameMaker allows users to write shaders in **GLSL** (OpenGL Shader Language), **HLSL** (High-level Shader Language, used when working with DirectX), and **GLSL ES** (a subset of GLSL which is common in mobile devices). Here we are using **GLSL ES** as the shader language since it’s the one that provides the best compatibility across target platforms. Generally this is the one you always want to use unless you have very specific needs and understand the limitation of the other shader languages. The math and techniques should be similar between all three languages however, save for a few syntax differences here and there.

The vertex shader is executed first, and as we explained above, it deals with **vertices**. It is used to calculate positions, normals, and texture coordinates. These shaders are not particularly useful in 2D, since every sprite is usually a square, but it can be used to do some skewing, scaling, etc... It becomes much more useful in 3D for lighting calculations and mesh deformations. Fragment shaders are much more interesting and are what will be covered mostly here, since the fragment shader is where we get information about our textures and can tweak the final color of each pixel in our image.

## Shader Variables

If you have created a shader in GameMaker, you might have noticed the following keywords in the default **pass-through** shader. These keywords help the shader understand the purpose and scope of each variable:

-   **Attribute**: These are variables passed in by OpenGL to the **vertex** shader. These can change per vertex and are read-only. These include information such as vertex position, texture coordinates, vertex color, and vertex normal.
-   **Varying**: These are variables used to pass data between the **vertex** and **fragment** shaders. These are available for writing in the vertex shader, but are read-only in the fragment shader.
-   **Uniform**: These are variables that change per object and are passed by the user to the shader. These can be used in both the vertex and fragment shaders, but are read-only.

You'll also see the use of **vec** as a keyword. This is used to identify a vector variable in the shader and you'll soon see that vectors are very important when working with shaders. That is why they are implemented as a base type in GLSL. If you are unfamiliar with them, they are a mathematical term represented as a matrix with only one column. In programming, we usually represent them as an array where the number of components corresponds to the dimension. Two and three-dimensional vectors are often used for positions, texture coordinates, or colors without an alpha channel, while four-dimensional ones are used for colors with an alpha channel. We can also specify if they hold booleans, integers, or floating point values. The syntax to declare a vector is this:

vec2 firstVec;  // Two-dimensional vector of floats
vec3 secondVec; // Three-dimensional vector of floats
vec4 thirdVec;  // Four-dimensional vector of floats

bvec3 boolVec;  // Three-dimensional vector of booleans
ivec4 intVec;   // Four-dimensional vector of integers

To initialize them, we can use the constructor to create the vector. You need to provide the same number of values as the length of the vector, but you can mix and match scalars and smaller vectors to reach the target length. Here are some examples of this:

// Simple 2D vector with 2 scalar values
vec2 firstVec  = vec2(2.0, 1.0);
// A 4D vector using 2 scalars and a vec2 create the 4 values
vec4 secondVec = vec4(1.0, firstVec, 0.0);
// A 3D vector using 1 component of a vec4 plus a vec2 to create the 3 values
vec3 thirdVec  = vec3(secondVec.x, firstVec);

We can also assign them another vector of the same length (or _swizzle_ the vector until it has the proper length, but we'll explain that in a moment):

vec4 firstVec = vec4(0.0, 1.0, 2.0, 3.0);
vec4 secondVec = firstVec;
vec3 thirdVec  = secondVec.xyz;
vec2 fourthVec = thirdVec.zx;

When accessing vector components in GLSL, we have a few options. The most basic one is to treat the vector as an array and access the components using square brackets, like this:

vec4 myVec;
myVec\[0\] = 0.0;
myVec\[1\] = 1.0;
myVec\[2\] = 2.0;
myVec\[3\] = 3.0;

However, there is another way to access the components with the following syntax:

vec4 myVec;
myVec.x = 0.0;
myVec.y = 1.0;

This uses the component names inside the vector to access them. You can use x, y, z, or w, to get the first, second, third, or fourth components, respectively. We refer to this method as **swizzling** because the following syntax is also valid:

vec4 firstVec;
vec3 secondVec = firstVec.xyz;
vec2 thirdVec  = secondVec.zy;
vec4 fourthVec = thirdVec.yxxy;

As you can see, we can use any combination of up to four letters to create a vector of that length. We cannot attempt to access a component that would be out of bounds (for example, trying to access w in secondVec or thirdVec, since they don’t have a fourth component). Also, we can repeat letters and use them in any order, as long as the vector variable it’s being assigned to is the same size as the number of letters used.

For obvious reasons, when using swizzle to set component values, you can’t use the same component twice. For example, the below is not valid as you are trying to set the same component to two different values:

myVec.xx = vec2(2.0, 3.0);

Last, we have been using xyzw as our swizzle mask, which is usually the case when dealing with positions. There are two more sets of masks you can use: rgba (used for colors), or stpq (used for texture coordinates). Internally, there is no difference between these masks, and we only use them to make the code clearer as to what the vector represents in that instance. Also, we can’t combine swizzle masks in the same operation, so this is invalid:

myVec = otherVec.ybp;

Those were a lot of definitions and information, but knowing these things is necessary to understand shaders themselves.

## Creating A Shader

When you create a shader in GameMaker, it will open two files for you: a vertex shader (.vsh) and a fragment shader (.fsh). This is the most basic shader you can make, which takes a sprite, reads the texture, and colors each pixel with that color. If you specify vertex colors when drawing, those colors will blend with the texture.

Let’s go through the code for a newly created shader asset and analyze it, starting with the vertex shader.

// Passthrough Vertex Shader
attribute vec3 in\_Position;                  // (x,y,z)
//attribute vec3 in\_Normal;                  // (x,y,z)     unused in this shader.
attribute vec4 in\_Colour;                    // (r,g,b,a)
attribute vec2 in\_TextureCoord;              // (u,v)

varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

void main()
{
    vec4 object\_space\_pos = vec4( in\_Position.x, in\_Position.y, in\_Position.z, 1.0);
    gl\_Position = gm\_Matrices\[MATRIX\_WORLD\_VIEW\_PROJECTION\] \* object\_space\_pos;

    v\_vColour = in\_Colour;
    v\_vTexcoord = in\_TextureCoord;
}

Outside of the main function, we see some variable declarations and their qualifiers. The attributes are given to us by GameMaker. The varying ones are created by the user to pass that information over to the fragment shader. Inside the main function, we have the calculations to find the screen position of the vertex:

-   First, we create a vec4 and initialize it with the components of the position, adding one as the fourth component. In linear algebra, the convention is that we add a one to the fourth component if the vector is representing a point, or a zero if it represents an actual vector.
-   Next, we need to add this fourth component to multiply it with the MATRIX\_WORLD\_VIEW\_PROJECTION matrix, which is a 4x4 matrix. This multiplication will project the world position of the vertex into screen coordinates.
-   Finally we pass the vertex color and texture coordinate to the fragment shader through our varying variables.

This shader should be left alone if you are not planning to play with vertex positions and it will not be used in any of the examples given below because all the effects shown will be created using the fragment shader.

Let’s take a quick look at the fragment shader now:

// Passthrough Fragment Shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

void main()
{
    gl\_FragColor = v\_vColour \* texture2D( gm\_BaseTexture, v\_vTexcoord );
}

As explained before, the idea behind a fragment shader is to return the color of the current pixel. This is done by assigning the variable gl\_FragColor the final color value. The texture2D function takes a texture and a vec2 with the UV coordinates you want to check in that texture, which returns a vec4 with the color. In the pass through shader, all we are doing is grabbing the color of the texture in the coordinate of this pixel and multiplying it by the color of the vertex associated with this pixel.

Now that we have our first shader, all we have to do to test it is create an object and assign it a sprite, then in the **Draw Event** of the object you set the shader like this:

// Draw Event
shader\_set(shdrColorOverlay);
draw\_self();
shader\_reset();

Every draw call we make between [shader\_set()](../GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_set.md) and [shader\_reset()](../GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_reset.md) will have the shader applied to it. Here, we are drawing the object sprite with our passthrough shader:

![Drawing Sprite Using Passthough Shader](../assets/Images/Scripting_Reference/Additional_Information/Shader_PassThrough.gif)As you might have guessed, this does not visually changing anything, as this is a simple pass-through shader. However the sections below outline some simple steps you can take to modify this and change the way the sprite will be drawn. Each of the section shows a different shader that you can create and use in your projects, explaining the steps required to create them and why we are doing things the way we are.

[Colour Overlay ShaderColour Overlay Shader](Guide_To_Using_Shaders.htm#)

We can edit the base shader now to do something different. We'll not be touching the vertex shader part, and only editing the fragment shader, and to start with we'll do a very simple operation, which is to make the shader draw the sprite using the colour red. We'll do this by simply changing the gl\_FragColor to be red., like this:

// Color Overlay Fragment Shader
void main()
{
    gl\_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}

This will give us the following result:

![Initial Colour Overlay Block](../assets/Images/Scripting_Reference/Additional_Information/Shader_ColourOverlay_Block.gif)Not exactly what we expected! What we need to remember is that every sprite is ultimately a rectangle, so unless we consider transparency - which we haven't - this is the result we’ll get.

NOTE In the image above, the rectangle changes size because the base sprite has had the "empty" space around it cropped automatically when it was placed on the texture page by GameMaker, so each animation frame the triangles that make it up are different sizes to fit the cropped size of the frame. If you disable this option, then you'd simply have a motionless red square on the screen.

Above we mentioned the texture2D function, and we'll use that to grab the color at the pixel we are working on and get the transparency from it. The return value of is texture2D is a vec4, where the components are the red, green, blue, and alpha, in that order. We can access the alpha channel either by putting a period followed by an a or a w after the variable name. This corresponds to RGBA and XYZW, respectively.

Here’s the updated code:

// Color Overlay Fragment Shader
varying vec2 v\_vTexcoord;

void main()
{
    vec4 texColor = texture2D(gm\_BaseTexture, v\_vTexcoord);
    gl\_FragColor = vec4(1.0, 0.0, 0.0, texColor.a);
}

We are now assigning a new vec4 to gl\_FragColor, where the red channel is maxed, the green, and blue channels are zero, and the alpha channel is the same as the original texture. The output looks like this:

![Overlay Shader Making Sprite Red](../assets/Images/Scripting_Reference/Additional_Information/Shader_ColourOverlay.gif)Now that’s what we were after! We have replaced the color of every pixel with red, but have kept the alpha channel intact.

Having to change the shader each time we want to use a different color isn’t a good idea, especially since we’d need to have a separate shader for each color we want. Instead, we will pass the color information to the shader using a **uniform**. To do this, we first need to get a **pointer** to the uniform. We will do this in the **Create Event** of our object that has the sprite by adding:

// Create Event
\_uniColor = shader\_get\_uniform(shdrColorOverlay, "u\_colour");
\_color    = \[1.0, 1.0, 0.0, 1.0\];

All we need to do is call [shader\_get\_uniform()](../GameMaker_Language/GML_Reference/Asset_Management/Shaders/shader_get_uniform.md) to get a pointer to the uniform. The parameters we need to pass are the shader asset name (without quotation because we want to pass the ID that GameMaker generates for us) and the name of the uniform variable inside of the shader, this time as a string. This name needs to match exactly the one inside the shader code for it to work. We have also added a colour variable so we can change it at runtime and have it remember our changes.

Now the code in our draw event will change slightly to pass the uniform variable.

// Draw Event
shader\_set(shdrColorOverlay);
shader\_set\_uniform\_f\_array(\_uniColor, \_color);
draw\_self();
shader\_reset();

It’s the same code as before, but before we draw anything, we need to pass all the uniform values to the shader. In this case, we are passing the color as an array of floats. As for the shader, we will change it to include the uniform and use it, so it becomes:

// Color Overlay Fragment Shader
varying vec2 v\_vTexcoord;
uniform vec4 u\_colour;
void main()
{
    vec4 texColor = texture2D(gm\_BaseTexture, v\_vTexcoord);
    gl\_FragColor = vec4(u\_colour.rgb, texColor.a);
}

We declare a variable with the same name as in the create shader (u\_colour) and we pass it as the first three components of the gl\_FragColor vector, taking advantage of swizzling. If we compile again, we should see this:

![Overlay Shader Making Sprite Yellow](../assets/Images/Scripting_Reference/Additional_Information/Shader_ColourOverlay_Yellow.gif)Now the shader is much more useful and reusable. It’s up to you to add more functionality if you need it to set the color (using the variable \_color) during runtime.

[Black And White ShaderBlack And White Shader](Guide_To_Using_Shaders.htm#)

Making a black and white shader is a great way to learn more about how shaders work, and a lot of beginners start by trying to do this, since conceptually it's quite simple: get every pixel and assign it a shade of gray. But is it simple? Not quite...

When using RGB colour, if all three components are the same value, then we get a gray tone. The naïve approach to creating a shader to use this idea would be to add all three color channels (red, green, and blue) and then divide it by three. After that you'd assigned the value to all three channels, thus creating a gray tone. Here’s what that fragment shader looks like:

// Black and white fragment shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

void main()
{
    vec4 texColor = texture2D(gm\_BaseTexture, v\_vTexcoord);
    float gray = (texColor.r + texColor.g + texColor.b) / 3.0;
    gl\_FragColor = v\_vColour \* vec4(gray, gray, gray, texColor.a);
}

One thing you might have noticed is that in the gl\_FragColor code, we're multiplying the vec4 with something called v\_vColour. This is a variable passed by the vertex shader which tells us the color of the vertex associated with this pixel. It’s always a good idea to multiply your final calculated color with the vertex color. In most cases, it won’t do anything, but if you changed the vertex color in GML, this will reflect that (by using functions such as [draw\_sprite\_ext()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_ext.md) or [draw\_sprite\_general()](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite_general.md) to change the [image\_blend](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_blend.md)).

As for the draw event, it’s quite simple since we don’t have a uniform to pass in:

// Draw Event
shader\_set(shdrBlackAndWhite);
draw\_self();
shader\_reset();

Let’s compile and see what we got.

![Black And White Shader](../assets/Images/Scripting_Reference/Additional_Information/Shader_BlackAndWhite.gif)This looks great already, right? Well, yes and no... there is a solution that is more “correct”, since instead of adding the components and dividing by three, we multiply each component by the standard NTSC values for black and white. Here’s the modified fragment shader code:

// Black and white fragment shader
varying vec2 v\_vTexcoord;

void main()
{
    vec4 texColor = texture2D(gm\_BaseTexture, v\_vTexcoord);
    float gray = dot(texColor.rgb, vec3(0.299, 0.587, 0.114));
    gl\_FragColor = vec4(gray, gray, gray, texColor.a);
}

We use the dot product as a shorthand for multiplying each component of texColor with the correct weights and then add them together. If you are unfamiliar with the dot product, this is essentially what’s happening:

float gray = (texColor.r \* 0.299) + (texColor.g \* 0.587) + (texColor.b \* 0.114);

In the end, it looks very similar, but it’s technically more correct.

![Corrected Black And White Shader](../assets/Images/Scripting_Reference/Additional_Information/Shader_BlackAndWhite_Improved.gif)

[Rainbow ShaderRainbow Shader](Guide_To_Using_Shaders.htm#)

Our final shader example is a fun one and can be used to add life to text and buttons and other things. We'll start simple and add functionality gradually since this shader is highly customizable. There's quite a lot to cover for this one, so if you feel a bit lost or confused, please go back and re-read some of the sections above.

The first thing we want to do is color pixels with every hue, depending on the pixel’s horizontal position. The way to do this is to set the x position to be the hue and then convert from HSV (hue, saturation, brightness) format to RGB (red, green, and blue) format. For this, we will need to write a helper function in our fragment shader that takes HSV values and returns an RGB vector. We will use a single function which does this without the need for any if statements, as using conditionals in shader code makes shaders _very_ slow, and should be avoided.

Here’s what the shader looks like at this stage:

// Fragment Shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) \* 6.0 - K.www);
    return c.z \* mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main()
{
    vec3 col = vec3(v\_vTexcoord.x, 1.0, 1.0);
    float alpha = texture2D(gm\_BaseTexture, v\_vTexcoord).a;
    gl\_FragColor = v\_vColour \* vec4(hsv2rgb(col), alpha);
}

There's a bit more going on here than in the previous examples, but most of it should be fairly obvious to you now. First, there’s our hsv2rgb function, which takes a vec3 with our HSV colour and returns another vec3 with our RGB conversion. In the main function, we start by creating our HSV colour, where the hue is our x position, and we’ll leave the saturation and brightness as 1.0 for now. Then, we get the alpha from the texture so it only colors our sprite character and not the entire sprite rectangle (as we did in the colour overlay example, above). Lastly, we set our Fragment color to be our HSV color converted to RGB with the alpha, multiplied by the vertex color (good practice to do this always).

As for our draw code, it is trivial at the moment:

// Draw Event
shader\_set(shdrRainbow);
draw\_self();
shader\_reset();

Let’s check out what we got:

![Initial Rainbow Shader](../assets/Images/Scripting_Reference/Additional_Information/Shader_Rainbow_Overlay.gif)We are close to what we want, but there’s an issue: we are not seeing all the colors at once in every frame of the animation, and the colors seem to change randomly. The reason is that we assumed that v\_vTexcoord gave us the coordinates of the sprite, starting at the top-left corner (0,0) and ending in the bottom right corner (1,1), which is standard in shaders. However, for optimization, GameMaker stuffs as many textures together as it can fit in what is called a [texture page,](../Settings/Texture_Information/Texture_Pages.md) and because of that, this is how our texture actually looks:

![](../assets/Images/Scripting_Reference/Additional_Information/Shader_Texture.png)As explained above, v\_vTexcoord gives us the absolute coordinates of the sprite within this entire texture page, but what we want is a value from 0.0 to 1.0 that only covers our current sprite. This process is called **normalizing** (getting a value and translating it to a 0 to 1 range). To normalize our horizontal values, we need to know the values of x0 and x1 in the picture above. Luckily, GameMaker has a function that gives us the location of every corner in our sprite within the texture page. First, we need to go to the Create Event and create a uniform to pass this data over to the shader:

// Create Event
\_uniUV = shader\_get\_uniform(shdrRainbow, "u\_uv");

And we modify the draw event to get the values and then pass them to the shader:

// Draw Event
shader\_set(shdrRainbow);
var uv = sprite\_get\_uvs(sprite\_index, image\_index);
shader\_set\_uniform\_f(\_uniUV, uv\[0\], uv\[2\]);
draw\_self();
shader\_reset();

The function [sprite\_get\_uvs()](../GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_uvs.md) takes a sprite and an index, and it returns an array with tons of information, such as the coordinates for each corner, how many pixels were cropped to optimize it, etc. We are interested in two of those values: the left and right coordinates of the sprite, which are stored in uv\[0\] and uv\[2\] respectively. In the fragment shader, we will use those values now to calculate the normalized horizontal position like this:

// Fragment Shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

uniform vec2 u\_uv;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) \* 6.0 - K.www);
    return c.z \* mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main()
{
    float pos = (v\_vTexcoord.x - u\_uv\[0\]) / (u\_uv\[1\] - u\_uv\[0\]);
    vec3 col = vec3(pos, 1.0, 1.0);
    float alpha = texture2D(gm\_BaseTexture, v\_vTexcoord).a;
    gl\_FragColor = v\_vColour \* vec4(hsv2rgb(col), alpha);
}

Here we add the uniform variable at the top of the file with the same name we used in the Create Event. Next, we calculate the normalized horizontal position by translating our current x coordinate to the origin ( v\_vTexcoord.x - u\_uv\[0\]) and then we divide it by the width of the sprite to make the range from 0 to 1 (u\_uv\[1\] - u\_uv\[0\]).

The result is:

![Rainbow Overlay Shader Improved](../assets/Images/Scripting_Reference/Additional_Information/Shader_Rainbow_Overlay_Improved.gif)There we go! This is exactly what we wanted. We can see every color of the spectrum inside our sprite.

You might be happy with that, but we can have some more fun with this shader. What if we added an offset to the colors based around time to produce movement? To do this, we will need two extra variables for **speed** and **time**. We will also need two more uniforms, one for each of the new variables, so the Create Event becomes:

// Create Event
\_uniUV    = shader\_get\_uniform(shdrRainbow, "u\_uv");
\_uniTime  = shader\_get\_uniform(shdrRainbow, "u\_time");
\_uniSpeed = shader\_get\_uniform(shdrRainbow, "u\_speed");
\_time  = 0;
\_speed = 1.0;

We also need to increase the time every frame, so in the Step Event we add:

// Step Event
\_time += 1 / game\_get\_speed(gamespeed\_fps);

Let’s go to the draw event now to send these uniforms to the shader:

// Draw Event
shader\_set(shdrRainbow);
var uv = sprite\_get\_uvs(sprite\_index, image\_index);
shader\_set\_uniform\_f(\_uniUV, uv\[0\], uv\[2\]);
shader\_set\_uniform\_f(\_uniSpeed, \_speed);
shader\_set\_uniform\_f(\_uniTime, \_time);
draw\_self();
shader\_reset();

Finally, we'll go back to our shader to actually use these variables now. What we will do is multiply the speed with the time and add it to the position, like so:

// Fragment Shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

uniform vec2 u\_uv;
uniform float u\_speed;
uniform float u\_time;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
  vec3 p = abs(fract(c.xxx + K.xyz) \* 6.0 - K.www);
    return c.z \* mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main()
{
    float pos = (v\_vTexcoord.x - u\_uv\[0\]) / (u\_uv\[1\] - u\_uv\[0\]);
    vec3 col = vec3((u\_time \* u\_speed) + pos, 1.0, 1.0);
    float alpha = texture2D(gm\_BaseTexture, v\_vTexcoord).a;
    gl\_FragColor = v\_vColour \* vec4(hsv2rgb(col), alpha);
}

If you did everything correctly, you should be seeing something like this:

![Rainbow Shader Overlay Moving With Time](../assets/Images/Scripting_Reference/Additional_Information/Shader_Rainbow_Overlay_Final.gif)To finish this shader, we will add a few more uniforms to customize it even further. The first two are to control the saturation and brightness. The next one we'll call "section" and its function is to allow the user to pass a number between zero and one to determine what percentage of the entire spectrum we see at a time. Last, we will add a variable called "mix", which will specify how much we want to mix our shader color with the original texture color (1.0 is all rainbow, 0.0 is all texture). As always, let’s start by adding the variables to the Create Event:

// Create Event
\_uniUV         = shader\_get\_uniform(shdrRainbow, "u\_uv");
\_uniTime       = shader\_get\_uniform(shdrRainbow, "u\_time");
\_uniSpeed      = shader\_get\_uniform(shdrRainbow, "u\_speed");
\_uniSection    = shader\_get\_uniform(shdrRainbow, "u\_section");
\_uniSaturation = shader\_get\_uniform(shdrRainbow, "u\_saturation");
\_uniBrightness = shader\_get\_uniform(shdrRainbow, "u\_brightness");
\_uniMix        = shader\_get\_uniform(shdrRainbow, "u\_mix");

\_time  = 0;
\_speed = 1.0;
\_section = 0.5;
\_saturation = 0.7;
\_brightness = 0.8;
\_mix = 0.5;

Our draw event changes to include these uniforms like this:

// Draw Event
shader\_set(shdrRainbow);
var uv = sprite\_get\_uvs(sprite\_index, image\_index);
shader\_set\_uniform\_f(\_uniUV, uv\[0\], uv\[2\]);
shader\_set\_uniform\_f(\_uniSpeed, \_speed);
shader\_set\_uniform\_f(\_uniTime, \_time);
shader\_set\_uniform\_f(\_uniSaturation, \_saturation);
shader\_set\_uniform\_f(\_uniBrightness, \_brightness);
shader\_set\_uniform\_f(\_uniSection, \_section);
shader\_set\_uniform\_f(\_uniMix, \_mix);
draw\_self();
shader\_reset();

As for the shader, we need to pass the saturation and brightness to the color, which will affect the color generated by our helper function. The section needs to be multiplied by our position to reduce the range. We will also grab the entire texture color, so we can calculate our final color by mixing the texture color with the RGB conversion of our color. The last parameter of the mix function determines how much of the second color we want to add. This is our final shader code:

// Fragment Shader
varying vec2 v\_vTexcoord;
varying vec4 v\_vColour;

uniform vec2 u\_uv;
uniform float u\_speed;
uniform float u\_time;
uniform float u\_saturation;
uniform float u\_brightness;
uniform float u\_section;
Uniform float u\_mix;

vec3 hsv2rgb(vec3 c)
{
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) \* 6.0 - K.www);
    return c.z \* mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

void main()
{
    float pos = (v\_vTexcoord.x - u\_uv\[0\]) / (u\_uv\[1\] - u\_uv\[0\]);
    vec4 texColor = texture2D(gm\_BaseTexture, v\_vTexcoord);

    vec3 col = vec3(u\_section \* ((u\_time \* u\_speed) + pos), u\_saturation, u\_brightness);
  vec4 finalCol = mix(texColor, vec4(hsv2rgb(col), texColor.a), u\_mix);

    gl\_FragColor = v\_vColour \* finalCol;
}

And our final result is this!

![Rainbow Shader Final](../assets/Images/Scripting_Reference/Additional_Information/Shader_Rainbow_Final.gif)

That's the end of this short guide and you should now have a better understanding of how shaders work and some of the uses they can be put to. You should take your time to play with the shaders you've created following this guide, and try to experiment with them do other things - how about creating a blur shader, or a shader that makes a gameboy-style monochrome screen? - since shaders are an incredibly powerful tool for adding visual complexity and style to your games.

We would like to thank [Alejandro Hitti](https://twitter.com/AleHitti) and **Amazon** for permitting us to reproduce this guide. You can find the original version on the [Amazon Developer Blog](https://developer.amazon.com/es/blogs/appstore/post/acefafad-29ba-4f31-8dae-00805fda3f58/intro-to-shaders-and-surfaces-with-gamemaker-studio-2).