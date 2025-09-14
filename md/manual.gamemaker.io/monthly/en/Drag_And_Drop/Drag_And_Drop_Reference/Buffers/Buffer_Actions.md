---
title: "Buffer Actions"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Buffers/Buffer_Actions.htm"
converted: "2025-09-14T03:59:23.675Z"
---

# Buffers Action Library

![Buffers Action Library](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Buffers/Lib_Buffers.png)

A **buffer** is a region of physical memory used to temporarily hold data while it is being moved from one place to another or manipulated in some way, for example you can use a buffer to hold game state data. GameMaker has a number of specific actions related to creating, modifying and loading/saving buffers, but before using them please note the following points:

-   When a buffer is created, it is automatically cleared and filled to 0.
-   The "size" argument of the buffer functions always refers to the size _in bytes_ of the buffer.
-   GML Visual buffers are always _1 byte aligned_. The "alignment" refers to how data is stored within a buffer and is used when using the [GML buffer Functions](../../../GameMaker_Language/GML_Reference/Buffers/Buffers.md), but for GML Visual, it's not relevant.
-   Data in buffers is read and written in a _sequential_ manner (ie: you call the [Write Buffer](Write_Buffer.md) action three times, then it will write the first data, move forward, right the second data, move forward and then write the last data), with something called the "seek" value to tell you where in the buffer the next read/write will take place.
-   All data is written to the buffer and returned from the buffer as a **string** so if you have stored any real numbers you will have to use one of the [Data Type Actions](../Data_Types/Data_Type_Actions.md) to convert it from the string to the value.

The memory used for creating buffers is system memory so even when the game doesn't have focus, any data stored in a buffer should be safe, however if the app is closed or re-started then it will be lost. It is also worth noting that buffers can also be saved as files then loaded back into the game using the [file actions](../Files/File_Actions.md).

The following page explains in more detail how buffers work within the context of GameMaker and contain a couple of GML Code examples:

-   [Using Buffers](../../../Additional_Information/Guide_To_Using_Buffers.md)

The **Buffer** library has the following actions:

|  | Create Buffer |
| --- | --- |
|  | Copy Buffer |
|  | Delete Buffer |
|  | Read Buffer |
|  | Write Buffer |
|  | Seek Buffer |
|  | Get Buffer Size |
|  | Get Buffer Position |
|  | If Buffer Exists |
|  | If End Of Buffer |