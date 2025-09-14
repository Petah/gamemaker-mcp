---
title: "Joints"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Joints/Joints.htm"
converted: "2025-09-14T04:00:05.396Z"
---

# Joints

In the GameMaker physics world, joints are used to constrain instances to the world or to each other. Typical examples in games include ragdolls, teeters, and pulleys, but joints can be combined in many different ways to create interesting motions or add realism to your game world.

**NOTE**: A joint does not need to be deleted when you destroy an instance joined to another instance, nor does it need to be deleted at the end of a room. Except in very specific cases (see the [gear joint](physics_joint_gear_create.md)) as this is dealt with automatically by GameMaker.

The following pages explain the available joints and how they can be created:

-   [physics\_joint\_distance\_create](physics_joint_distance_create.md)
-   [physics\_joint\_revolute\_create](physics_joint_revolute_create.md)
-   [physics\_joint\_prismatic\_create](physics_joint_prismatic_create.md)
-   [physics\_joint\_pulley\_create](physics_joint_pulley_create.md)
-   [physics\_joint\_gear\_create](physics_joint_gear_create.md)
-   [physics\_joint\_rope\_create](physics_joint_rope_create.md)
-   [physics\_joint\_wheel\_create](physics_joint_wheel_create.md)
-   [physics\_joint\_weld\_create](physics_joint_weld_create.md)
-   [physics\_joint\_friction\_create](physics_joint_friction_create.md)
-   [physics\_joint\_delete](physics_joint_delete.md)

Once a joint has been created, it can often be necessary to know its properties in order to change them at specific times in your game. The following functions (with their corresponding internal constants) are available to test and change joint values:

-   [physics\_joint\_enable\_motor](physics_joint_enable_motor.md)
-   [physics\_joint\_get\_value](physics_joint_get_value.md)
-   [physics\_joint\_set\_value](physics_joint_set_value.md)

Additionally, you can use a number of constants from within GameMaker functions to get (or set) different properties of certain joints. These constants can all be found in the following section:

-   [Physics Joint Constants](Physics_Joint_Constants.md)