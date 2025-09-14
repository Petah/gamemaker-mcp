---
title: "Creating Sprites"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Creating_Sprites.htm"
converted: "2025-09-14T04:00:12.987Z"
---

# Creating Sprites

Now that you [know what a program is](What_Is_Programming_.md), it's time to look at some of the different **assets** that can be used in GameMaker to make your game. To start with, we'll look at **sprites**, which are generally one of the first things you'll need when making any project.

As explained in the section on [The Asset Browser](../Introduction/The_Asset_Browser.md), a sprite is an image that can be animated (although it doesn't have to be) and then drawn to the screen. In general a sprite will be associated with an object, but you can draw sprites on their own, either [from code](../GameMaker_Language/GML_Reference/Drawing/Sprites_And_Tiles/draw_sprite.md) or in the room editor **Asset Layer** (we'll talk about this in more detail later, in the section on [rooms](Rooms.md)). You can also create a sprite to be used as a tile sets, but we'll explore that option in a later section too.

When you create a new project from the [Start Page](../Introduction/The_Start_Page.md), the asset browser will only contain empty folders for the resources you may need, so you need to right-click ![Icon RMB](../assets/Images/Icons/Icon_RMB.png) on the "Sprites" asset folder (or any folder really) and then select the option **Create -> Sprite** (if you don't have a sprite asset folder you can make one from the right-click menu and then create the sprite, or you can simply right-click anywhere in the asset browser and create it). This will create a new sprite asset and open [The Sprite Editor](../The_Asset_Editors/Sprites.md) for you (if the sprite editor does not open, simply double-click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the new asset):

![The Sprite Editor](../assets/Images/QS_Guide/QS_Sprites_SpriteEditor.png)As you can see, the top left of the window has a field for the **Name** of the sprite. All sprites (and all other assets) must have a name given to them so that you (and GameMaker) can identify them easily, although you should note that this name is really just a **variable** which holds an ID value that "points" to the resource, in this case a sprite. It's best to give each sprite a descriptive name so that you can identify at a glance whether a particular asset is a sprite or an object or something else, and many people do this by prefixing or suffixing the resource with the letters "spr" - for example, "spr\_Ball". Note that resource names are limited to using only letters, digits and the underscore symbol "\_", and the name of all assets must start with a letter, not a number.

## Drawing A Sprite

The other features of the sprite editor we'll discuss at the end of this section, but first we need to explain how to draw a sprite. This is done in [The Image Editor](../The_Asset_Editors/Image_Editor.md). The image editor is a very powerful tool for creating the graphics in your game and is opened by clicking the _Edit Image_ button.

![The Image Editor](../assets/Images/QS_Guide/QS_Sprites_ImageEditor.png)

We won't go into too much depth about the tools available here - for that we have the [Image Editor](../The_Asset_Editors/Image_Editor.md) section of the manual - but briefly you have a frame view at the top, your canvas at the centre, and a panel on the right housing your brushes, color swatches, tools and layers.

Draw something into the image editor and take some time to play with the options, then when you are ready close the image editor workspace (which will save the image) to take you back to the main workspace with the sprite editor in it. We'll discuss a few other features of the sprite editor that are important to know when just getting started...

## Sprite Origin

The first thing you need know is how to set the **origin** for the sprite. The origin is simply the point that will be used to "anchor" our sprite within the room, and for most in-game objects, you will want to set it to the centre.

So we click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the from down menu for setting the origin and select "Middle Centre":

![Example Showing The Sprite Origin](../assets/Images/QS_Guide/QS_Sprites_SpriteOrigin.png)

You'll see the ![](../assets/Images/Icons/Sprite_Origin_Pointer.png) origin pointer in the preview image move to the centre of the sprite. Note that you can place the origin anywhere you wish by clicking and dragging the ![](../assets/Images/Icons/Sprite_Origin_Pointer.png) origin pointer, and you can also manually input the origin position by adding values into the x/y fields at the top.

## Collision Mask

Another important thing to know is how to set the **collision mask** for the sprite. The collision mask is the area that GameMaker will check to see if there has been a collision with any other instance of an object in the game, and by default this is set to rectangle (which is also the fastest to resolve). Note that you can set the detection mode for the **bounding box** to be either automatic (the default value) or manual. If you choose manual, you will be able to set the bounding box values for its left, right, top and bottom edges.

![Example Showing The Sprite Mask](../assets/Images/QS_Guide/QS_Sprites_SpriteMask.png)

Any type of collision mask other than rectangle will be slower to resolve, but when making a small, simple game it's not usually an issue.

## Importing

You can also import sprites made in other software by clicking the **Import** button in the sprite editor, and you can also drag image files from your File Explorer onto the GameMaker IDE to add them as sprites to the Asset Browser. You can also drag sprites from the Asset Browser to add them to things directly, in which case the IDE will highlight the places you can add the sprite to:

![Where To Drop A Sprite On An Object](../assets/Images/QS_Guide/QS_DropSprite.png)If you'd like more detailed information on the Sprite Editor and the Image Editor, please see the following sections of the manual:

-   [Editors: The Sprite Editor](../The_Asset_Editors/Sprites.md)
-   [Editors: The Image Editor](../The_Asset_Editors/Image_Editor.md)

You can close the sprite editor now as we are going to move on to discuss **Tile Sets**.