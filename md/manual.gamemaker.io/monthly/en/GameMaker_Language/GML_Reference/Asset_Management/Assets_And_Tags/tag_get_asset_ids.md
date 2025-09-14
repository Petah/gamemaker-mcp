---
title: "tag_get_asset_ids"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/tag_get_asset_ids.htm"
converted: "2025-09-14T03:59:30.276Z"
---

# tag\_get\_asset\_ids

This function gets all the assets of a given type that have the given tags assigned to them.

You supply either a single tag (as a string) or an array, where each item in the array is a tag (as a string), as well as the type of asset to check. The type of asset should be one of the following constants:

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

The function will return an array, where each item in the array will be a single asset handle. If there are no assets of the type that have the given tag(s), an empty array will be returned.

IMPORTANT When "**Automatically remove unused assets when compiling**" is enabled (which it is by default), the returned array will not contain any assets that are not directly referenced in your project or marked with a used tag with [gml\_pragma](../../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)("MarkTagAsUsed", <tags>). The removed assets may be represented by an invalid reference with a value of \-1.

#### Syntax:

tag\_get\_asset\_ids(tags, asset\_type);

| Argument | Type | Description |
| --- | --- | --- |
| tags | String or Array of Strings | A single asset tag string or an array with various asset tags. |
| asset_type | Asset Type Constant | An asset type constant (listed above) |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

var \_paths = tag\_get\_asset\_ids("enemy", asset\_path);
var \_num = irandom(array\_length(\_paths) - 1);
path\_start(\_paths\[\_num\], 1, path\_action\_reverse, false);

The above code uses the tag "enemy" to find all the path assets with that tag, before choosing one at random and assigning it to the instance running the code.