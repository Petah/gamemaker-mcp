---
title: "asset_get_tags"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_tags.htm"
converted: "2025-09-14T03:59:30.145Z"
---

# asset\_get\_tags

This function retrieves all tags assigned to an asset from [The Asset Browser](../../../../Introduction/The_Asset_Browser.md).

You supply either the asset name (as a string) or its asset handle, and the function will return an [array](../../../GML_Overview/Arrays.md) of tags for that asset. If no tags are found or there is an error (i.e.: the name string given doesn't exist) then the returned array will be empty.

If you supply an asset index number (legacy), then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name or handle. The available asset types are listed in the table below:

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

asset\_get\_tags(name\_or\_index, \[asset\_type\]);

| Argument | Type | Description |
| --- | --- | --- |
| name_or_index | String or Asset | The name of the asset (a string) or its handle. |
| [asset_type] | Asset Type Constant | OPTIONAL The type of asset to get the tags for, only used when supplying an index number for the first argument (legacy). Do not pass this argument if the first argument is an asset handle or a string. |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

my\_tags = asset\_get\_tags(object\_get\_name(object\_index));

The above code will retrieve all the tags assigned to the object that the instance running the code has been created from.