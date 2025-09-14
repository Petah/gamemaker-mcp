---
title: "is_handle"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/is_handle.htm"
converted: "2025-09-14T04:00:10.467Z"
---

# is\_handle

This function checks if the supplied value is a handle. It returns true if it is, otherwise it returns false.

Read about handles on the page for [Data Types](../../GML_Overview/Data_Types.md).

#### Syntax:

is\_handle(val);

| Argument | Type | Description |
| --- | --- | --- |
| val | Any | The value to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

var \_handle = sprite\_index;

var \_is\_handle = is\_handle(\_handle);
var \_is\_handle\_text = \_is\_handle ? "holds" : "doesn't hold";

show\_debug\_message($"The variable \_handle {\_is\_handle\_text} a handle!");

The above code checks a variable \_handle to see if it holds a handle and outputs the result in a debug message.