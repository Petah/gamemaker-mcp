---
title: "Forces"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Forces/Forces.htm"
converted: "2025-09-14T04:00:05.280Z"
---

# Forces

In the GameMaker physics world, instances aren't only affected by gravity and collisions, they are also affected by the forces that you choose to apply to them, and knowing the right force to apply is very important when you want to control an instance correctly within the physics simulation. There are two forces which can be used and applied to your fixtures:

-   **Impulses**: An impulse will set the direction and velocity _immediately_ after it is applied, making it ideal for things like springs, or shooting bullets, etc.
-   **Forces**: A force will act on the existing velocity and direction and change it over time, making it ideal for things like wind, or a magnet, etc...
-   **Torque**: Torque governs the likelihood for an instance to keep rotating around its axis after a force has been applied, and the speed at which it will stop rotating. Adding torque is a gradual process, much like using a force to add movement.
-   **Angular Impulse**: An angular impulse can be used to set a fixture spinning instantly, much like a regular impulse can be used to set a fixture instantly in movement.

The following functions exist to apply different types of forces to physics enabled instances, and each function gives a fuller explanation of how the force will be applied than the outlines given above:

-   [physics\_apply\_force](physics_apply_force.md)
-   [physics\_apply\_impulse](physics_apply_impulse.md)
-   [physics\_apply\_local\_force](physics_apply_local_force.md)
-   [physics\_apply\_local\_impulse](physics_apply_local_impulse.md)
-   [physics\_apply\_torque](physics_apply_torque.md)
-   [physics\_apply\_angular\_impulse](physics_apply_angular_impulse.md)