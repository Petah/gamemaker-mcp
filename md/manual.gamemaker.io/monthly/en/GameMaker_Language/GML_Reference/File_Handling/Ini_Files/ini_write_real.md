---
title: "ini_write_real"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Ini_Files/ini_write_real.htm"
converted: "2025-09-14T03:59:56.676Z"
---

# ini\_write\_real

You can use this function to write a value (numeric) to an ini data file. Ini Files are split into **sections** and then each section is subsequently split into **key** - **value** pairs. So a typical ini file would look something like this:

![Ini file contents example](../../../../assets/Images/Scripting_Reference/GML/Reference/Files/IniExample.png)

#### **Syntax:**

ini\_write\_real(section, key, value);

| Argument | Type | Description |
| --- | --- | --- |
| section | String | The section of the .ini to write to. |
| key | String | The key within the relevant section of the .ini to write to. |
| value | Real | The real value to write to the relevant destination. |

#### Returns:

N/A

#### Example:

score = 1000;
ini\_open("savedata.ini");
ini\_write\_real("save1", "Score", score );
score2 = ini\_read\_real("save1", "Score", 0 );
ini\_close();

This will set score to 1000, then open "savedata.ini" and write this value to "save1" > "Score". Then, it will set score2 to the real value under "save1" > "score" in it, 1000, and close the .ini again. Had it not found this value, score2 would have ended up set as 0.