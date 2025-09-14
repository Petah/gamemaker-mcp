---
title: "asset_get_ids"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_ids.htm"
converted: "2025-09-14T03:59:30.099Z"
---

# asset\_get\_ids

This function gets an array of references to assets of the given asset type.

NOTE The returned array contains assets that you added through [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) as well as assets that you added [dynamically at runtime](../Asset_Management.htm#dynamically_adding_assets).

IMPORTANT When "**Automatically remove unused assets when compiling**" is enabled (which it is by default), the returned array will not contain any assets that are not directly referenced in your project or marked with a used tag with [gml\_pragma](../../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md)("MarkTagAsUsed", <tags>).

NOTE For the asset type asset\_script the function returns both script assets (the ones you add to [The Asset Browser](../../../../Introduction/The_Asset_Browser.md)) and the [script functions](../../../GML_Overview/Script_Functions.md) they contain.

#### Syntax:

asset\_get\_ids(asset\_type);

| Argument | Type | Description |
| --- | --- | --- |
| asset_type | Asset Type Constant | The type of asset to return in the array |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) of [Asset](../../../../The_Asset_Editors/The_Asset_Editors.md)

#### Example:

var \_arr\_ids = asset\_get\_ids(asset\_sprite);

The code above gets all sprites in the game at the time the function is called and stores them in a temporary variable \_arr\_ids. Sprites that you added before using the sprite\_add\_\* functions are also included.