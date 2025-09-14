---
title: "lives"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/lives.htm"
converted: "2025-09-14T03:59:29.634Z"
---

# lives

This variable is **global** in scope and is used to hold a numeric value which is usually used for the player lives. This variable is only designed to support legacy projects from previous versions of _GameMaker_ and should **_not be used in new projects_** as it may be deprecated in the future.

#### Syntax:

lives;

#### Returns:

[Real](../../Data_Types.md) (single precision floating point value)

#### Example

if (lives < 5)
{
    lives += 1;
}

The above code checks the lives variable and if it is less than 5, 1 is added to it.