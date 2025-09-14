---
title: "skeleton_skin_create"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Skeletal_Animation/Skins/skeleton_skin_create.htm"
converted: "2025-09-14T03:59:41.060Z"
---

# skeleton\_skin\_create

This function creates a new [runtime skin](https://esotericsoftware.com/spine-runtime-skins) for skeletal animation sprites through code.

The new skin is created with the name that you provide and takes a list of existing skins in the skeletal animation sprite. The attachments that are linked to these skins are included in the new skin. By combining existing skins in this way you can create custom characters (by [grouping attachments](https://esotericsoftware.com/spine-runtime-skins#Grouping-attachments)).

Creating a skin in this way corresponds visually to _pinning_ a combination of existing skins in the [Skins view](https://en.esotericsoftware.com/spine-skins-view#Pinned-skins) of the animation tool.

IMPORTANT For skins created using this function you have to pass the struct that it returns to [skeleton\_skin\_set](skeleton_skin_set.md) instead of the skin name.

#### Syntax:

skeleton\_skin\_create(name, skins);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the new skin |
| skins | Array | An array of names (as String) of existing skins in the skeletal animation sprite that will be used in the new skin. |

#### Returns:

[Skeleton Skin Struct](skeleton_skin_create.md)

#### Example:

var skin = skeleton\_skin\_create("new\_skin", \["hat/red", "shirt/green", "trousers/blue"\]);
skeleton\_skin\_set(skin);

The above code first calls skeleton\_skin\_create to add a new runtime skin called "new\_skin". The skin is created from three existing skins in the skeletal animation sprite: "hat/red", "shirt/green" and "trousers/blue". The result is stored in a temporary variable skin.

It then sets the skin of the skeletal animation sprite of the current instance to this new skin.