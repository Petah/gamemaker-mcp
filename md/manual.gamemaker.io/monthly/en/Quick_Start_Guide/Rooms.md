---
title: "Rooms"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Rooms.htm"
converted: "2025-09-14T04:00:13.166Z"
---

# Rooms

All games that you make in GameMaker need at least one room to run (but can have many, many more), and a room is just a space where you place instances of the objects that make up your game as well as tiles and any other graphical resources. When you first create a room in the [Asset Browser](../Introduction/The_Asset_Browser.md) you will be presented with a new [**Room Editor**](../The_Asset_Editors/Rooms.md) workspace with which to edit its properties, something like this:

![The Room Editor](../assets/Images/QS_Guide/QS_RoomEditor.png)

By default the room tools will be placed on the left, with two main sections:

-   **Layer Editor**: Everything in a room is placed on _layers_, and there are different layer types that you can choose from (more on this later). Layers are ordered by _depth_ and this depth is what defines the order in which the layer contents will be rendered to the screen when the game runs. Depth ordering is from highest to lowest, so that the lower the depth the nearer the "camera" and the higher the depth the further away. For example, a layer with a depth of -300 will render over a layer with a depth of -100, and a layer with a depth of 1000 will render under everything with a depth less than this. Note that by default, GameMaker will order layer depths for you according to the position in the Layer Editor, and you can drag around layers using the mouse to re-order them and GameMaker will re-order the depths to match.
    -   When an Instance Layer, Asset Layer or UI Folder is selected, the [Element List](../The_Asset_Editors/Rooms.htm#p) will appear showing you a list of the instances or elements placed in the layer (or the list of layers in case of a UI Folder). In the beginning, as shown in the image above, it will be empty.
-   [**Inspector**](../IDE_Tools/The_Inspector.md): When you open a room its properties such as room size and camera view ports are shown here. You can set them here as well.
    When you click a layer in the Layer Editor, its properties, that depend on the layer type, are shown and can be changed here. This window permits you to change those properties and edit how the layer will be rendered.

We've mentioned that there are different layer types, so let's just go over what they are and how they can be used when building your games:

|  | Background Layer | The background layer is a layer that can be filled with a single colour or a single image. It can be moved and positioned within the room, and you can have multiple background layers. Generally this is used, as the name suggests, to generate a constant background for all the other layers in the room. By Default a new room will always contain a background layer, but you can remove it if you don't need it. |
| --- | --- | --- |
|  | Instance Layer | The instance layer is where you place all the instances of the objects that you require for the game. To add an instance to a layer, simply click  on the object in the asset browser and then drag it into the room editor workspace. When you release the mouse button, an instance of that object will have been added to the room. By Default a new room will always contain an instance layer, but you can remove it if you don't need it. |
|  | Tile Map Layer | After having created a tile sets, you need to add the tiles to your room, which is done by creating a tile map layer. A tile map layer is a layer that permits you to add tiles from any of the tile set assets that you have created and will be set up automatically to use a grid the size of the tile set cells. You can only add a single tile to each grid cell, so if you require multiple tiles to occupy the same space, then you should be using multiple tile map layers. |
|  | Path Layer | The path layer is the only one that does not actually get rendered when you run your game. This layer is more of a "convenience" layer for helping you to create or edit Path assets, since it permits you to add or edit paths within the actual room space. |
|  | Asset Layer | Sometimes you want a nice graphical effect but don't want the overhead of using an instance or don't need it to do anything other than draw itself. You could use a tile map, but given that tile maps are restricted to using a grid and only a single image per grid cell, they can be a bit restrictive. This is when you would use the asset layer. The asset layer simply takes a sprite asset and draws it using the parameters that you set when you add it into the room. Sprites and sequences can be added to this layer the same way that instances of objects are added to the instance layer, ie: you click  on the sprite/sequence in the asset browser and then drag it into the room editor workspace. You can also drag in font assets to create text, and particle system assets for showing particle effects at runtime. |
|  | Filter/Effect Layer | This layer applies a filter or effect to all the layers below it. Note that a single-layer effect can be applied to any layer via The Inspector. |
|  | UI Layer | This creates a global UI layer that is shared among rooms. |

We won't go into much more details about the room editor here (for that we have [this section](../The_Asset_Editors/Rooms.md) of the manual), but we will briefly explain how to add instances to an Instance Layer, as you'll need to know that for the next section of the Quick Start Guide.

To add an instance to the room editor, you must first select an Instance Layer from the Layer Editor on the left (or create one if none exist). You can then go to the Asset Browser and simply click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag an object that you want from there and drop it into the room at the position you want, which will add a single instance of that object to your game:

![Adding Instances To A room Animation](../assets/Images/QS_Guide/QS_AddingInstances.gif)

If you want to place multiple instances in the room, then you can select an object from the resource tree and then press and hold ![ALT Icon](../assets/Images/Icons/Icon_Alt.png) to preview the resource, and if you additionally click the left mouse button ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) you can then "paint" it into the room layer.

![Painting Instances In A Room Animation](../assets/Images/QS_Guide/QS_PaintingInstances.gif)

Note that assets are given a position when they are added into the room editor based on their X and Y axis positions relative to the room **origin**. The room origin is the (0, 0) position, which in GameMaker is the top left corner, and to the right is +X and down is +Y, e.g.:

![Room Editor Axis Alignment](../assets/Images/QS_Guide/QS_RoomEditorAxis.png)In the above example the instance is placed in the middle of the room at position (X:512, Y:384). It's also possible to go outside of the room bounds and have positions that are greater than the room axis lengths, or even less than than the room origin - in which case the X/Y coordinates will be negative values.

For more detailed information on the Room Editor, you can see the following section of the manual:

-   [Editors: The Room Editor](../The_Asset_Editors/Rooms.md)

That wraps it up for the Room Editor in this Quick Start Guide, and you should now know enough to actually get started creating sprites and objects and designing rooms for them. The next sections of this guide are going to cover some of the programming fundamentals to help you on your way, starting with actually **Drawing** things to the screen.