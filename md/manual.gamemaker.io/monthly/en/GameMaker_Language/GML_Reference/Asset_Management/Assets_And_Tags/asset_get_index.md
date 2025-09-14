---
title: "asset_get_index"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Assets_And_Tags/asset_get_index.htm"
converted: "2025-09-14T03:59:30.124Z"
---

# asset\_get\_index

This function gets the handle for a game asset from its name.

If the asset is not found, the function will return a value of -1, otherwise it will return the handle for the asset being checked. This handle can then be used in other functions as you would any other handle, like [sprite\_index](../Sprites/Sprite_Instance_Variables/sprite_index.md) or [path\_index](../Paths/Path_Variables/path_index.md), for example.

### Usage Notes

-   Although this function can be used to reference assets from strings (see the first example below), you should always make sure that the asset exists before using it. Otherwise, you may get errors that will crash your game.
-   If the only reference to an asset in your code is through this function (as a string) then the asset will not be known to the compiler, which will remove it if **Automatically remove unused assets when compiling** is enabled in the [Game Options](../../../../Settings/Game_Options.md) (the default). Consequently, the asset will not be found at runtime and the function will return -1. To prevent this you can assign this asset a tag in [The Asset Browser](../../../../Introduction/The_Asset_Browser.md) and mark all assets with this tag as "used" using the "MarkTagAsUsed" [gml\_pragma](../../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md). See the second example.

#### Syntax:

asset\_get\_index(name);

| Argument | Type | Description |
| --- | --- | --- |
| name | String | The name of the game asset to get the handle of (a string). |

#### Returns:

[Asset](../../../../The_Asset_Editors/The_Asset_Editors.md) (any asset type)

#### Example 1: Basic Use

var \_obj = asset\_get\_index("obj\_enemy\_" + string(global.level));

if (object\_exists(\_obj))
{
    instance\_create\_layer(random(room\_width), random(room\_height), "Enemy\_Layer", \_obj);
}

The above code will get an object asset from a string, and if that asset exists, create an instance of the object in the game.

#### Example 2: "MarkTagAsUsed" pragma

Script Asset

gml\_pragma("MarkTagAsUsed", "include\_me");

Create Event

var \_index = irandom(7);
my\_sprite = asset\_get\_index($"spr\_npc\_{\_index}");

Draw Event

draw\_sprite(my\_sprite, 0, x, y);

The above code first marks all assets with an "include\_me" tag as "used" in a call to [gml\_pragma](../../../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md) in a script asset. In an object's Create event, a random number from 0 to 7 is chosen for the current instance with [irandom](../../../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/irandom.md) and asset\_get\_index is called to retrieve the NPC sprite with that suffix number. Finally, in the Draw event, the chosen sprite is drawn at the instance's position.
For this code to work correctly the project must contain 8 sprite assets named spr\_npc\_0, spr\_npc\_1, spr\_npc\_2, ..., spr\_npc\_7, each of them tagged "include\_me". In this case the [sprite\_exists](../Sprites/Sprite_Manipulation/sprite_exists.md) check isn't needed and can be left out.