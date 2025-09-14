---
title: "skeleton_skin_get"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skins/skeleton_skin_get.htm"
converted: "2025-09-14T03:59:41.072Z"
---

# skeleton\_skin\_get

With skeletal animation sprites, you can assign separate textures (called "skins") to the animation, thereby using one animation for multiple different things. This function will return the name of the skin (as a string) that is currently assigned to the skeletal animation sprite your instance is using. The name returned is that which you set when you created the sprite in your animation program.

#### Syntax:

skeleton\_skin\_get();

#### Returns:

[String](../../../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

if skeleton\_skin\_get() == "skin\_Enemy1"
{
    skeleton\_skin\_set(choose("skin\_Enemy1", "skin\_Enemy2", "skin\_Enemy3");
}

The above code would check the currently assigned skin for the animation and if it is "skin\_Enemy1", it chooses and sets a new skin from one of three options.