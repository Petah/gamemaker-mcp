---
title: "xprevious"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Instances/Instance_Variables/xprevious.htm"
converted: "2025-09-14T03:59:33.667Z"
---

# xprevious

This built-in variable returns the _previous_ x position for the instance. This variable will be set just before the start of the **begin step event** but it can also be set through code at any time, meaning you can give it your own custom value should that be necessary.

#### Syntax:

xprevious;

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md) (single precision floating point value)

#### Example:

if x != xprevious || y != yprevious
{
    moved = true;
}

The above code checks to see if there is any difference between the xprevious and yprevious values and the current x and y values. If there is it sets a variable to true.