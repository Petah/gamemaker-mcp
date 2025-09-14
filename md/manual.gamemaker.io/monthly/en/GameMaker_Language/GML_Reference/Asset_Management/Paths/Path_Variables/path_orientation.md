---
title: "path_orientation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Paths/Path_Variables/path_orientation.htm"
converted: "2025-09-14T03:59:34.943Z"
---

# path\_orientation

This built-in variable holds the current orientation of the path that was assigned to the instance when the function [path\_start](../path_start.md) was called.

When a path is created, its orientation is the default 0 degrees, but you can set this value to anything you wish using this. Remember that in GameMaker (unless you are using physics) the angles are calculated counter-clockwise, so setting the path orientation to 90° would rotate the path to the _left_.

![Path Orientation Example](../../../../../assets/Images/Scripting_Reference/GML/Reference/Paths/pathrotated.png)

#### Syntax:

path\_orientation

#### Returns:

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

my\_path = path\_duplicate(choose(path\_1, path\_2, path\_3, path\_4));
path\_start(my\_path, 4, path\_action\_reverse, 0);
path\_orientation = 90;

The above code duplicates a random, pre-made path asset into the variable my\_path. This new path is then started and rotated 90°.