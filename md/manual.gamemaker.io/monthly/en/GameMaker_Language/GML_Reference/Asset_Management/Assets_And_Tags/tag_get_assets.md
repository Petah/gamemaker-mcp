---
title: "tag_get_assets"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/tag_get_assets.htm"
converted: "2025-09-14T03:59:30.290Z"
---

# tag\_get\_assets

This function retrieves the names of all assets that have been assigned the given tag or tags.

You supply either a single tag string or an [Array](../../../GML_Overview/Arrays.md), where each item in the array is a tag string. The function will return an array where each entry is the name (as a string) of the asset with the given tag. If you need the handle for the asset, then you can use the function [asset\_get\_index](asset_get_index.md) along with the returned name. If there are no assets with the given tag(s), or if there is an error (e.g.: the given tags don't exist), then an empty array will be returned.

IMPORTANT When "**Automatically remove unused assets when compiling**" is enabled (which it is by default), the returned array will not contain any assets that are not directly referenced in your project or marked with a used tag with [gml\_pragma](../../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)("MarkTagAsUsed", <tags>).

#### Syntax:

tag\_get\_assets(tags);

| Argument | Type | Description |
| --- | --- | --- |
| tags | String or Array of Strings | A single asset tag string or an array with various asset tags. |

#### Returns:

[Array](../../../GML_Overview/Arrays.md)

#### Example:

backgrounds = ds\_list\_create();
var \_assets = tag\_get\_assets("background");
for (var i = 0; i< array\_length(\_assets); ++i;)
{
    if asset\_get\_type(\_assets\[i\]) == asset\_sprite
    {
        ds\_list\_add(backgrounds, asset\_get\_index(\_assets\[i\]));
    }
}

The above code creates a list, then retrieves the names of all the assets with the tag "background". It loops through the array of names returned, checking to see if any of them are sprite assets, and if they are then the unique handle for the asset is added to the list for future use.