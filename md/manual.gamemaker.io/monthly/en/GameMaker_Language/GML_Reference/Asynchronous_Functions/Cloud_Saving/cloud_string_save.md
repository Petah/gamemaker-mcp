---
title: "cloud_string_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asynchronous_Functions/Cloud_Saving/cloud_string_save.htm"
converted: "2025-09-14T03:59:42.748Z"
---

# cloud\_string\_save [OBSOLETE](Cloud_Saving.md)

This function will commit a string to the chosen cloud service for storage. The function will return a unique **id** value that should then be used in the appropriate asynchronous event to identify the DS map that is returned as a "call back" from the cloud service. The string should contain _all_ the information that you need to save for your game as you can only store one single "data blob" to the cloud, and running this function again will overwrite any previously stored values (as will using the [cloud\_file\_save()](cloud_file_save.md) function). The description should be a short string of information that describes the save, eg: "Level2, Stage2".

For further information on the returned asynchronous data, please see the function [cloud\_synchronise()](cloud_synchronise.md).

#### Syntax:

cloud\_string\_save(string, description);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The data string to be uploaded. |
| description | String | A brief description of the data being stored. |

#### Returns:

[Async Request ID](../Asynchronous_Functions.md)

#### Example:

var t\_str = "";
for (var i = 0; i < 10; i++;)
{
    t\_str += string(global.Highscore\[i\]) + "|"
}
save\_check = cloud\_string\_save(t\_str, "Current Highscores");
var file = file\_text\_open\_write("Highscores.txt");
file\_text\_write\_string(file, t\_str);
file\_text\_close(file);

The above code creates a string from the values stored in the global array "Highscores" and then writes this string to the cloud service for storage, as well as writing it to a file for local storage.