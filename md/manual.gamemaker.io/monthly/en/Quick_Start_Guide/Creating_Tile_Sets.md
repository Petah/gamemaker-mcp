---
title: "Creating Tile Sets"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Creating_Tile_Sets.htm"
converted: "2025-09-14T04:00:13.002Z"
---

# Creating Tile Sets

**Tile Sets** are created from sprites, but they are also classified as a separate asset type since the way that GameMaker handles them is a bit different to both sprites and objects. So, a tile set is a collection of tiles created together in one sprite, and a tile is simply a graphical resource that gets added to a GameMaker room as part of a **tile map**. These tile maps are then drawn to the screen with very little CPU/GPU processing, making them ideal for designing any static items in levels.

To make processing tiles so fast, they do have certain restrictions, with the most basic one being that they can **only be rectangular or square** (if you want anything other than this, then you'll need to create a regular sprite and use the _Asset Layer_ in the room editor, but we'll discuss that in the later section on [rooms](Rooms.md)). Other restrictions include the fact that they can only be rotated by 90°, or mirrored or flipped, and they can only be animated with frames that number a **power of 2** (ie: 2, 4, 8, 16, etc...).

Let's take a look at a simple example of a tile set - some square wall tiles for a top down game:

![Example Tile Set Sprite](../assets/Images/QS_Guide/QS_ExampleTileset.png)

To start with, we need to make this into a **sprite**, which would be done in the [Sprite Editor](../The_Asset_Editors/Sprites.md) - either drawn in the [Image Editor](../The_Asset_Editors/Image_Editor.md), or in an external image editor and then imported into the sprite. Our final sprite looks something like this:

![Tile Set Sprite](../assets/Images/QS_Guide/QS_Tileset_Sprite.png) **Notice that the very first tile is blank in that image**. The way that the tile map for the room is stored in GameMaker means that first tile will always need to be blank as it's essentially the "delete" tile or the "empty space" tile (this "blank" tile will have an **index** value of 0 - tiles are indexed with a value that starts at 0 and counts up from left to right, top to bottom). So, when creating your tile sets, the top left corner tile will always need to be empty in this way. Also note that while the image above shows a full wall tile set with 47 tiles, you may not need so many as you can rotate and flip tiles when placing them in the room editor later.

With the sprite created, we can go ahead and define the tile set itself, which means you have to first create a new tile set asset by right clicking ![Icon RMB](../assets/Images/Icons/Icon_RMB.png) in the Asset Browser and selecting **Create -> Tile Set**. This will open the [Tile Set Editor](../The_Asset_Editors/Tile_Sets.md), where you need to assign the sprite to use, and define the tile set's properties:

![Tile set Editor](../assets/Images/QS_Guide/QS_Tileset_Editor.png)

We have set the tile size to 64x64, and we have left the rest of the options at their default values, since we have no need for offsets or anything like that (the offset values are useful for any tile set sprite that has spaces around each of the tiles). You'll want to name the tile set asset using an appropriate prefix like "ts\_" so you can easily identify it later, and note that the same restrictions apply as for sprites, i.e.: the name cannot start with a number, and can only use the underscore "\_" symbol and alpha-numeric characters.

You can now close the tile set editor, as you can use the tile set "as is" to create [tile map layers](../The_Asset_Editors/Room_Properties/Layer_Properties.md) in the room editor, however if you want to know more about the advanced functions of the Tile Set Editor, then see the following section of the manual:

-   [Editors: The Tile Set Editor](../The_Asset_Editors/Tile_Sets.md)

Now to move on to talk about adding **sound effects** to your project...