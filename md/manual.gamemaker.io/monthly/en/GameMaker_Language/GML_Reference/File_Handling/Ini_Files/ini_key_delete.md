---
title: "ini_key_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_key_delete.htm"
converted: "2025-09-14T03:59:56.550Z"
---

# ini\_key\_delete

With this function you can remove the selected key (and its corresponding value) from an ini file.

#### Syntax:

ini\_key\_delete(section, key);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section to delete a key from. |
| key | String | The key to delete. |

#### Returns:

N/A

#### Example:

ini\_open("savedata.ini");
ini\_write\_real("save1","Score",score);
ini\_key\_delete("save1","Score");
ini\_close();

This example will open "savedata.ini" and write a value to "save1" > "Score". It will then delete the "Score" key and close the .ini file.