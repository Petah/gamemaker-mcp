---
title: "Collision Compatibility Mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Collisions/Collision_Compatibility_Mode.htm"
converted: "2025-09-14T04:00:02.625Z"
---

# Collision Compatibility Mode

In the [General Game Options](../../../../Settings/Game_Options.md) for your project, you can enable "**Collision Compatibility Mode**" to switch to the legacy collision system. You would only need to do this if you noticed odd behaviour with collisions in your existing project(s) after upgrading to GameMaker 2022.1 or a newer version, which changed how collisions work.

![Collision Compatibility Mode option in Game Options](../../../../assets/Images/Scripting_Reference/GML/Reference/Movement_Collisions/collision_compatibility_mode.png)

## Changes in Collisions

In the legacy collision system, all bounding box coordinates were rounded to integers and were "exclusive", i.e. they would exclude the bottom-most and right-most edges of a collision mask. For example, the bounding box for a 16x16 collision mask would be generated from (0, 0) to (15, 15) (relative). This would work fine for instances that used only integer values for positioning and scaling, however using floating point values would cause unexpected behaviour and a slight disconnect between rendering and collision checking, as GameMaker would then always round the bounding box values for performing collision checks.

In the current collision system, bounding box values are not rounded and are used as-is, meaning collisions are more accurate and behave as one would expect. Bounding boxes are also "inclusive" now, i.e. they include the bottom-most and right-most edges. For example, the bounding box for a 16x16 collision mask is now generated from (0.0, 0.0) to (16.0, 16.0) (relative).

## Compatibility Mode

The collision changes explained above may cause some existing projects to break, which you can easily fix by enabling the **Collision Compatibility Mode** for such projects so the legacy collision system is used; however it is recommended to test and upgrade your collision code to work with the new system as it should allow your game to have more accurate and logical collisions.

For projects that are new or do not use existing collision code, there is no need to enable this option.