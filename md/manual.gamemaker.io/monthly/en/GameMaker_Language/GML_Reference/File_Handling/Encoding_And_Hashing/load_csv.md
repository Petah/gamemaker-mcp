---
title: "load_csv"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/load_csv.htm"
converted: "2025-09-14T03:59:55.888Z"
---

# load\_csv

This function will load a CSV format file and convert it into a DS grid, returning the unique ID value for the grid created.

Your CSV file should follow the [CSV specification](https://super-csv.github.io/super-csv/csv_specification.html "CSV specification"). If your CSV syntax is not correct, you will get unexpected results on loading the file.

This will load each cell as a [string](../../../GML_Overview/Data_Types.md), even if it only contains numbers. Use the function [real](../../Variable_Functions/real.md) to convert a string into number.

#### Syntax:

load\_csv(filename)

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The name of the file to open (as a string) |

#### Returns:

[DS Grid](../../Data_Structures/DS_Grids/ds_grid_create.md)

#### Example:

file\_grid = load\_csv("spreadsheet.csv");
var ww = ds\_grid\_width(file\_grid);
var hh = ds\_grid\_height(file\_grid);
var xx = 32;
var yy = 32;
for (var i = 0; i < ww; i++;)
{
    for (var j = 0; j < hh; j++;)
    {
        draw\_text(xx, yy, file\_grid\[# i, j\]);
        yy += 32;
    }
    yy = 32;
    xx += 32;
}

The above code will open the given CSV file and store the returned DS grid in the variable "file\_grid". This grid is then parsed in a couple of for loops and the contents drawn to the screen.