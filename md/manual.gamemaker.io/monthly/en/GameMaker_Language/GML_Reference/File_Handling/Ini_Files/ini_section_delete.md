---
title: "ini_section_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_section_delete.htm"
converted: "2025-09-14T03:59:56.642Z"
---

# ini\_section\_delete

With this function you can delete a whole section of an ini file, which will also remove all key-value pairs that are associated with it.

#### Syntax:

ini\_section\_delete(section);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section to delete. |

#### Returns:

N/A

#### Example:

ini\_open("savedata.ini");
ini\_write\_real("save1", "Score", score );
ini\_section\_delete("save1");
ini\_close();

This example will open "savedata.ini" and write a value to "save1" > "Score". It will then delete the "save1" section and close the .ini file.