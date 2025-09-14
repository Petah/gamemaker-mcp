---
title: "skeleton_skin_set"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skins/skeleton_skin_set.htm"
converted: "2025-09-14T03:59:41.103Z"
---

# skeleton\_skin\_set

This function sets the skin used to draw a skeletal animation sprite.

A skeletal animation sprite can be drawn with a variety of textures (called "skins"), permitting you to use one single animation for multiple different purposes. For example, you may have a generic walk animation and this can be used by your NPC characters, enemies, etc... in a game simply by changing the skin it is drawn with.

These skins need to have been previously created and named in your animation program, and this name is passed into the function (as a string) to set the sprite to use that skin when being drawn.

You can also add skins through code using [skeleton\_skin\_create](skeleton_skin_create.md).

IMPORTANT For skins added using [skeleton\_skin\_create](skeleton_skin_create.md) you must pass the struct returned by the function instead of the name.

#### Syntax:

skeleton\_skin\_set(skin);

| Argument | Type | Description |
| --- | --- | --- |
| skin | String or Skeleton Skin Struct | The name of the skin to use as a string (for skins defined in the animation program) or a struct (for skins added using skeleton_skin_create) |

#### Returns:

N/A

#### Example:

if (skeleton\_skin\_get() == "skin\_Enemy1")
{
    skeleton\_skin\_set(choose("skin\_Enemy1", "skin\_Enemy2", "skin\_Enemy3");
}

The above code would check the currently assigned skin for the animation and if it is "skin\_Enemy1", it chooses and sets a new skin from one of three options.