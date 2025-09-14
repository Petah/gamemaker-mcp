---
title: "struct_names_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/variable_struct_names_count.htm"
converted: "2025-09-14T04:00:11.309Z"
---

# struct\_names\_count

This function gets the total number number of variables defined in a struct.

You supply the struct ID to check, and the function will return an integer value for the number of variables encountered, or (if no struct of the given ID exists) -1.

#### Syntax:

struct\_names\_count(struct\_id);

| Argument | Type | Description |
| --- | --- | --- |
| struct_id | Struct | The struct to check (can be the global struct) |

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

var \_num = struct\_names\_count(mystruct);
show\_debug\_message("Struct Variables = " + string(\_num));

The above code will retrieve the number of variables in the given struct and show a debug message in the console output with this value.