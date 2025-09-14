---
title: "script_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Scripts/script_exists.htm"
converted: "2025-09-14T03:59:39.516Z"
---

# script\_exists

This function will return true or false depending on whether the script or [script function](../../../GML_Overview/Script_Functions.md) with the given index exists. Note, that this is _not_ a string, but rather the asset name which holds the handle for each script asset (as it would appear in the IDE) or the named script function, as defined within the script asset (note that this will not work for [method variables](../../../GML_Overview/Method_Variables.md)). For more information on scripts, see [The Script Editor](../../../../The_Asset_Editors/Scripts.md).

#### Syntax:

script\_exists(scr);

| Argument | Type | Description |
| --- | --- | --- |
| scr | Script Asset | The script index that you want to check. |

#### Returns:

[Boolean](../../../GML_Overview/Data_Types.md)

#### Example:

script\[0\] = -1;
script\[1\] = AI\_Left;
script\[2\] = AI\_Right;
var script\_num = choose(0, 1, 2);
if script\_exists(script\[script\_num\])
{
    script\_execute(script\[script\_num\]);
}

The above example adds two script functions and a value into an array, then proceeds to get a random number and use that to choose a script function to run, unless the -1 is chosen in which case nothing will happen.