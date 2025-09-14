---
title: "code_is_compiled"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/code_is_compiled.htm"
converted: "2025-09-14T03:59:48.279Z"
---

# code\_is\_compiled

This function will return true if the platform compiles outside of the virtual machine, such as for the YYC and JS platforms.

#### Syntax:

code\_is\_compiled();

#### Returns:

[Boolean](../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### **Example:**

if (code\_is\_compiled())
{
    show\_debug\_message("Compiler okay!");
}

The above code checks to see if the game was compiled using the YoYo Compiler and shows a debug message if it was.