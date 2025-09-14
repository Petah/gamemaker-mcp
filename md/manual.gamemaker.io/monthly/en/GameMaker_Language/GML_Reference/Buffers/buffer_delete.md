---
title: "buffer_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_delete.htm"
converted: "2025-09-14T03:59:43.445Z"
---

# buffer\_delete

This function deletes a buffer previously created using [buffer\_create](buffer_create.md) from memory, releasing the resources used to create it and removing any data that it may currently contain.

**NOTE** It's important to always remove any dynamically created resources from memory when you no longer need them to prevent memory leaks.

IMPORTANT When you create a buffer, a reference to the new buffer is returned. After the buffer is destroyed, we recommend that you set the variable that holds a buffer reference to \-1.

#### Syntax:

buffer\_delete(buffer)

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to delete |

#### Returns:

N/A

#### Example:

buffer\_delete(player\_buffer);
player\_buffer = -1;

The above code deletes the buffer stored in the variable player\_buffer and then sets the variable to \-1.