---
title: "surface_create_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Surfaces/surface_create_ext.htm"
converted: "2025-09-14T03:59:54.279Z"
---

# surface\_create\_ext

This function allows you to attach a surface to a canvas element that already exists in your web page, meaning that you can effectively split up portions of your game to be drawn at various different places within the page.

To that end, you _must_ have defined the canvas element correctly within the \*.html page of your game using the correct sizes and names that correspond to the surfaces you wish to create. So, you would have your "main" canvas, and then your secondary surface canvas elements, which will be assigned using this function to the correct surfaces. The following image is an example of how a page with three canvas elements would be set up:

![Multi canvas layour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/surface_ext_1.png)The page layout can be tricky, especially if you wish all the elements to line up correctly, but once the hard task of creating the layout has been completed, you can then add this html file as the default page file for the game using the [HTML5 Tab](../../../../../../../Settings/Game_Options/HTML5.md) of the [Game Options](../../../../../../../Settings/Game_Options.md). The next thing you should do is set up your room and views, as each surface will need to be associated with a specific view to "capture" the game images (see the view variable [view\_surface\_id\[0...7\]](../../Cameras_And_Display/Cameras_And_Viewports/view_surface_id.md)). The image below shows how the game room for the above canvas example would be set out:

![Multi canvas layour example](../../../../assets/Images/Scripting_Reference/GML/Reference/Drawing/surface_ext_2.png)Finally you would then use this function to create the surfaces, with the name being the same as that used for the canvas elements and the size corresponding to the size of that same canvas. The function will return a reference to the surface which should be stored in a variable for future function calls. When the surface is first created, it may contain "noise" as basically it is just an area of memory that is put aside for the purpose (and that memory may still contain information), so you may want to clear the surface before use with a function like [draw\_clear\_alpha](../Colour_And_Alpha/draw_clear_alpha.htm#h).

This function will always create a surface with the [surface\_rgba8unorm](surface_create.md) format.

**NOTE** This function is only available for use with the HTML5 module.

#### Syntax:

surface\_create\_ext(name, w, h);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the canvas element to link the surface to. |
| w | Real | The width of the surface to be created. |
| h | Real | The height of the surface to be created. |

#### Returns:

[Surface](surface_create.md) (or an invalid handle -1 if anything went wrong)

#### Example:

s1 = surface\_create\_ext("surface1", 192, 550);
s2 = surface\_create\_ext("surface2", 608, 186);
view\_surface\_id\[1\] = s1;
view\_surface\_id\[2\] = s2;

The above code creates two surfaces of different sizes, assigning each one to a different canvas element, and assigns those surfaces to two views so that the correct part of the room is captured.