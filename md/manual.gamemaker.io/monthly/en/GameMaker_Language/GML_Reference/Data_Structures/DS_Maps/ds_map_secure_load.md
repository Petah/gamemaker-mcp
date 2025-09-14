---
title: "ds_map_secure_load"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_load.htm"
converted: "2025-09-14T03:59:47.385Z"
---

# ds\_map\_secure\_load

This function will load a previously saved DS map from the given file. This file must have been previously created using the [ds\_map\_secure\_save](../../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_secure_save.md) function, and, when loaded, the function will return the handle of the DS map that has been created from the loaded data. This DS map handle should be stored in a variable and used for all further function calls to this map. Note that if the DS map being loaded was saved with an array as one of the key values, this array will have been converted into a DS list on load.

IMPORTANT One of the features of a secure saved file is that it is locked to the device that it was created on, so you cannot load a file saved on one device into a project running on another device.

#### Syntax:

ds\_map\_secure\_load(filename);

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The name of the file to load the map data from. |

#### Returns:

[DS Map](ds_map_create.md)

#### Example:

p\_map = ds\_map\_secure\_load("p\_data.dat");

The above code will load a securely saved DS map and store its index value in a variable for future use.