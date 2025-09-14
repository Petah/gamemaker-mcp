---
title: "clickable_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/clickable_delete.htm"
converted: "2025-09-14T04:00:11.568Z"
---

# clickable\_delete

This function must be used to remove a clickable icon previously created with [clickable\_add()](clickable_add.md) from the game window.

#### Syntax:

clickable\_delete(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Clickable ID | Index of the clickable icon to remove. |

#### Returns:

N/A

#### Example:

if (clickable\_exists(global.Help\_Icon))
{
    clickable\_delete(global.Help\_Icon);
}

The above code removes the clickable icon indexed in the global variable "Help\_Icon" from the game window, if it exists.