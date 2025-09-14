---
title: "highscore_name"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/General_Game_Control/highscore_name.htm"
converted: "2025-09-14T04:00:00.405Z"
---

# highscore\_name

With this function you can retrieve the name string that has been stored in the high score list at the given position. If no name has been entered, the string "Unknown" will be returned.

#### Syntax:

highscore\_name(place);

| Argument | Type | Description |
| --- | --- | --- |
| place | Real | The place on the table (1-10). |

#### Returns:

[String](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var i = 9;
repeat(10)
{
    name\[i\] = highscore\_name(i + 1);
    i -= 1;
}

The above code will loop through the high score list and store all the names in an array.