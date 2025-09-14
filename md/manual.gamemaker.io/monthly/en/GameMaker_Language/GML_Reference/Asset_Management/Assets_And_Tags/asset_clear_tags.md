---
title: "asset_clear_tags"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_clear_tags.htm"
converted: "2025-09-14T03:59:30.083Z"
---

# asset\_clear\_tags

This function clears all tags present on the given asset from [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) and returns whether any tags were removed.

If the function succeeds in clearing the tags it will return true otherwise it will return false.

You supply either the asset name (as a string) or its asset handle. If you supply an asset index number (legacy), then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available asset types are listed in the table below:

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

#### Syntax:

asset\_clear\_tags(name,\[asset\_type\]);

| Argument | Type | Description |
| --- | --- | --- |
| name_or_index | String or Asset | The name of the asset (a string) or its handle. |
| [asset_type] | Asset Type Constant | OPTIONAL The type of asset to get the tags for, only used when supplying an index number for the first argument (legacy). Do not pass this argument if the first argument is an asset handle or a string. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md) (whether any tags were removed)

#### Example:

asset\_clear\_tags(obj\_Enemy\_Parent, asset\_object);

The above code will clear all tags from the given object asset.