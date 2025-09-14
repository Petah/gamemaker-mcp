---
title: "struct_foreach"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/struct_foreach.htm"
converted: "2025-09-14T04:00:10.946Z"
---

# struct\_foreach

This function calls the provided callback function on each member of the struct.

NOTE The member name and value are available in the callback function, but cannot be modified through it.

[Callback FunctionCallback Function](struct_foreach.htm#)

The callback function to pass into this function should take the following arguments:

#### Syntax:

function(member\_name, value);

| Variable Name | Data Type | Description |
| --- | --- | --- |
| member_name | String | The name of the struct member |
| value | Any | The value assigned to the struct member |

This callback function should not return a value. It simply executes the function on all elements in the given range.

#### Syntax:

struct\_foreach(struct, func);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct to use |
| func | Function or Method | The function to execute on each member of the struct |

#### Returns:

N/A

#### Example:

var \_inventory = {apples: 17, bananas: 261, oranges: 2, lemons: 5};
struct\_foreach(\_inventory, function(\_name, \_value)
{
    show\_debug\_message($"{\_name}: {\_value}");
});

The above code first creates a temporary variable \_inventory that contains a mapping of an inventory item to the number of that item held in the inventory. struct\_foreach is then called to display all the amounts using a debug message.