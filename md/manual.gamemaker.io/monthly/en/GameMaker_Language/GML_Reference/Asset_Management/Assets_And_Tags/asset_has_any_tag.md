---
title: "asset_has_any_tag"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_has_any_tag.htm"
converted: "2025-09-14T03:59:30.200Z"
---

# asset\_has\_any\_tag

This function checks if one or more tag strings is assigned to any asset from [The Asset Browser](../../../../Introduction/The_Asset_Browser.md).

You supply either the asset name (as a string) or its asset handle, as well as either a single tag string or an array where each item is a single tag string.

If you supply an asset index number (legacy), then you will need to supply the optional asset type argument (a constant), as assets of different types can have the same index, even though they cannot have the same name. The available asset types are listed in the table below:

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

If the function succeeds and one or more of the tag(s) is present for the asset then it will return true otherwise it will return false. If you need to check for a precise match to any given tag or set of tags, then use the function [asset\_has\_tags()](asset_has_tags.md).

#### Syntax:

asset\_has\_any\_tag(name\_or\_index, tags, \[asset\_type\]);

| Argument | Type | Description |
| --- | --- | --- |
| name_or_index | String or Asset | The name of the asset (a string) or its handle. |
| tags | String or Array of Strings | A single asset tag string or an array with various asset tags. |
| [asset_type] | Asset Type Constant | OPTIONAL The type of asset to get the tags for, only used when supplying an index number for the first argument (legacy). Do not pass this argument if the first argument is an asset handle or a string. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

var \_a = array\_create(3);
\_a\[0\] = "boss";
\_a\[1\] = "main\_boss";
\_a\[2\] = "final\_boss";

if asset\_has\_any\_tag(object\_index, \_a, asset\_object)
{
    instance\_create\_layer(0, 0, "Overlay", obj\_Boss\_Text);
}

The above code will create an array of tags and then check to see if any of them are applied to the given object, and if they are it will create an instance of another object.