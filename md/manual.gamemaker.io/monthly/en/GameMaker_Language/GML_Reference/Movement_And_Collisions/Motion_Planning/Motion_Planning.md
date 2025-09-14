---
title: "Motion Planning"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/Motion_Planning.htm"
converted: "2025-09-14T04:00:03.200Z"
---

# Motion Planning

In many games you want opponents, NPC's, enemies, etc. to interact with the player and show certain intelligence when moving around, i.e. you want them to avoid obstacles, plan routes and generally not bump into everything in their path! To aid in this GameMaker has a series of functions that deal with motion planning. Note that while these are designed for things like game enemies, they can be used for all sorts of things like creating a smooth way to introduce text, or to create transitions, etc. However, whatever you choose to use from the list below in your game, it should be noted that in many situations a single function set will not give you a perfect solution and that you will have to "mix and match" the functions, using one or the other depending on the situation within your game.

Motion planning in GameMaker is dealt with by the mp\_\* functions, which themselves are split into the following three groups:

## Linear Functions

This kind of function tries to compute a collision-free path for the instance. Once this path has been computed you can assign it to the instance to move towards the goal. The computation of the path will take some time but after that the execution of the path will be fast. Of course this is only valid if the situation has not changed in the meantime. For example, if obstacles change you possibly will need to recompute the path. Again notice that these functions might fail and that no path may be found for the instance.

-   [mp\_linear\_step](mp_linear_step.md)
-   [mp\_linear\_step\_object](mp_linear_step_object.md)
-   [mp\_linear\_path](mp_linear_path.md)
-   [mp\_linear\_path\_object](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_linear_path_object.md)

## Potential Functions

These are the basic avoidance functions and good for simple AI. They work by making an instance take a step towards a particular goal position while trying to go straight if possible but taking a different direction if required. These functions should be used in the **Step Event** of an instance.

-   [mp\_potential\_settings](mp_potential_settings.md)
-   [mp\_potential\_step](mp_potential_step.md)
-   [mp\_potential\_step\_object](mp_potential_step_object.md)
-   [mp\_potential\_path](mp_potential_path.md)
-   [mp\_potential\_path\_object](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_potential_path_object.md)

## Grid Functions

The final type of function use a much more complex mechanism based on a grid-based approach (sometimes called an A\* algorithm). It will be much more successful in finding paths (although it still might fail) and will find the shortest paths possible but it requires more work on your side to set it up.

The global idea is as follows - First of all we create a grid that covers the room (or the relevant part of it). You can choose to use a fine grid, which will be slower, or a coarse grid, but both of them should be based on the resolution of the room so that the path-finding is as accurate as possible. For example, if you have a room that is 400x200 pixels, you can have a grid resolution of 40, or 20, or 10... it all depends on how accurate you need the path to be and how much processing you want GameMaker to do to generate it.

Next, for all relevant objects that we want to avoid we need to determine the grid cells they overlap (based either on their bounding boxes or their precise sprite) and mark these cells as being forbidden. So a cell will be marked totally forbidden, even if an obstacle is only partially overlapping.

Finally we specify a start position and a goal position, both of which _must_ lie in free cells, and the function then computes the shortest path possible between these two positions. The path will run between the centers of all free cells, so if the cells are large enough so that the instance placed at its center will lie completely inside it this will be successful. This path is then assigned to the instance to follow using the [path\_\*](../../Asset_Management/Paths/Paths.md) functions. You should realise how important cell size is for this as the cells must be large enough so that the moving object placed with its origin on the center of a cell will lie _completely_ inside the cell. (Be careful about the position of the origin of the object. Also realize that you can shift the path if the origin of the object is not in its center!) On the other hand, the smaller the cells the more possible paths exist. If you make cells too large, openings between obstacles may get closed because all cells intersect an obstacle.

-   [mp\_grid\_create](mp_grid_create.md)
-   [mp\_grid\_destroy](mp_grid_destroy.md)
-   [mp\_grid\_path](mp_grid_path.md)
-   [mp\_grid\_add\_cell](mp_grid_add_cell.md)
-   [mp\_grid\_add\_instances](mp_grid_add_instances.md)
-   [mp\_grid\_add\_rectangle](mp_grid_add_rectangle.md)
-   [mp\_grid\_get\_cell](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_get_cell.md)
-   [mp\_grid\_clear\_all](mp_grid_clear_all.md)
-   [mp\_grid\_clear\_cell](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_clear_cell.md)
-   [mp\_grid\_clear\_rectangle](mp_grid_clear_rectangle.md)
-   [mp\_grid\_to\_ds\_grid](mp_grid_to_ds_grid.md) / [ds\_grid\_to\_mp\_grid](../../Data_Structures/DS_Grids/ds_grid_to_mp_grid.md)
-   [mp\_grid\_draw](../../../../../../../GameMaker_Language/GML_Reference/Movement_And_Collisions/Motion_Planning/mp_grid_draw.md)

The grid-based approach is very powerful (and is used in many professional games) but it requires that you do some careful thinking as you must determine which area and cell size are good enough for solving the game. Also, you must determine which objects must be avoided and whether precise checking is important. All these parameters strongly influence the efficiency of the approach. You must also decide whether it is actually necessary as maybe one of the less costly mp\_\* functions can do the job just as well.