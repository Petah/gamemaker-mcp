---
title: "score"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/score.htm"
converted: "2025-09-14T03:59:29.647Z"
---

# score

This variable is **global** in scope and is used to hold a numeric value which is usually used for the player score. This variable is only designed to support legacy projects from previous versions of _GameMaker_ and should **_not be used in new projects_** as it may be deprecated in the future.

#### Syntax:

score;

#### Returns:

[Real](../../Data_Types.md) (single precision floating point value)

#### Example

switch (object\_index)
{
    case obj\_Enemy\_Fighter:
        score += 10;
    break;

    case obj\_Enemy\_Mage:
        score += 25;
    break;

    case obj\_Enemy\_Boss:
        score += 100;
    break;
}
instance\_destroy();

The above code checks the object index of the instance running the code using a [switch](../../Language_Features/switch.md), and then adds different amounts to the score variable depending on what object it is.