---
title: "health"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/health.htm"
converted: "2025-09-14T03:59:29.615Z"
---

# health

This variable is **global** in scope and is used to hold a numeric value which is usually used for the player health. This variable is only designed to support legacy projects from previous versions of _GameMaker_ and should **_not be used in new projects_** as it may be deprecated in the future.

#### Syntax:

health;

#### Returns:

[Real](../../Data_Types.md) (single precision floating point value)

#### Example

if (health <= 0)
{
    global.state = "Game Over";
    instance\_destroy();
}

The above code checks the health variable and if it is less than or equal to 0, a global variable is set and the instance is destroyed.