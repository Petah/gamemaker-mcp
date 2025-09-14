---
title: "asset_get_type"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_type.htm"
converted: "2025-09-14T03:59:30.177Z"
---

# asset\_get\_type

This function gets the type of asset being referenced from its name or handle.

One of the **constants** listed below will be returned.

#### Syntax:

asset\_get\_type(name\_or\_ref);

| Argument | Type | Description |
| --- | --- | --- |
| name_or_ref | Asset or String | The name of or a reference to the game asset to get the type of. |

#### Returns:

[Asset Type Constant](asset_get_type.md)

| Constant | Description |
| --- | --- |
| asset_object | The given name refers to an object. |
| asset_sprite | The given name refers to a sprite. |
| asset_sound | The given name refers to a sound. |
| asset_room | The given name refers to a room. |
| asset_tiles | The given name refers to a tile set. |
| asset_path | The given name refers to a path. |
| asset_script | The given name refers to a script. |
| asset_font | The given name refers to a font. |
| asset_timeline | The given name refers to a time line. |
| asset_shader | The given name refers to a shader. |
| asset_animationcurve | The given name refers to an Animation Curve. |
| asset_sequence | The given name refers to a Sequence. |
| asset_particlesystem | The given name refers to a Particle System. |
| asset_unknown | The given name refers to an asset that either does not exist, or is not one of the above listed. |

#### Example:

if asset\_get\_type("pth\_Path\_" + string(global.Game)) == asset\_unknown
{
    show\_debug\_message("Path doesn't exist!!!");
}
else
{
    path\_index = asset\_get\_index("pth\_Path\_" + string(global.Game));
}

The above code checks a dynamically created asset name to see if the asset is of the correct type. If it is not, then a debug message will be shown, otherwise the asset name is used to assign the asset to the instance.