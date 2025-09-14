---
title: "external_free"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/external_free.htm"
converted: "2025-09-14T04:00:04.305Z"
---

# external\_free

This function frees the memory associated with the dll or dylib with the given name. This should be done whenever the file in question is no longer needed in the game, normally (for example) in a Game End event.

#### Syntax:

external\_free(id);

| Argument | Type | Description |
| --- | --- | --- |
| id | External Function | The name of the dll or dylib that you want to free |

#### Returns:

N/A

#### Example:

external\_free("MyDLL.dll");

The above example code will free the memory associated with the given dll.