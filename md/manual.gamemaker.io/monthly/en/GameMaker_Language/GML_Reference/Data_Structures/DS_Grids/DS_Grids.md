---
title: "DS Grids"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/DS_Grids.htm"
converted: "2025-09-14T03:59:46.002Z"
---

# DS Grids

A DS grid is a data structure that stores information across 2 dimensions. You define the grid by setting its integer width and height, which sets the total number of "cells" within the grid (the width and height multiplied). These cells are then used to hold different data values (real numbers or strings).

![DS Grid Example](../../../../assets/Images/Scripting_Reference/GML/Reference/Data_Structures/ds_grid_basic.png)This type of structure allows you to set and retrieve the value of cells in the grid by giving the x and y index of it (which starts with 0 for both the x and the y axis and goes up to the width - 1 and the height -1). But you can also set the value in specific grid regions, add single values, and retrieve the sum, maximum, minimum, and mean value over a given region, making this data structure the most versatile of all those available to you.

When accessing DS grid data structures, you should always try to use **integer values** for the cell position, and all non-integer indices will be floored by GameMaker if you do not. If that is not what you require, then you will need to do the rounding yourself previously before passing the index that you wish to check.

NOTE As with all dynamic resources, data structures take up memory and so should **always** be destroyed when no longer needed to prevent memory leaks which will slow down and eventually crash your game.

NOTE If you need to check if a data structure exists, you can use the [ds\_exists](../ds_exists.md) function.

Apart from the specific functions listed below you can all use an expression (called an _accessor_) to add or modify the contents of your DS grid. This accessor looks similar to a 2D array with the following syntax:

grid\_index\[# xpos, ypos\]

You can find more information, plus examples, from the GML Overview page on [Accessors](../../../../../../../GameMaker_Language/GML_Overview/Accessors.md).

## Function Reference

### General

-   [ds\_grid\_create](ds_grid_create.md)
-   [ds\_grid\_destroy](ds_grid_destroy.md)
-   [ds\_grid\_width](ds_grid_width.md)
-   [ds\_grid\_height](ds_grid_height.md)
-   [ds\_grid\_resize](ds_grid_resize.md)
-   [ds\_grid\_clear](ds_grid_clear.md)
-   [ds\_grid\_set](ds_grid_set.md)
-   [ds\_grid\_set\_disk](ds_grid_set_disk.md)
-   [ds\_grid\_set\_grid\_region](ds_grid_set_grid_region.md)
-   [ds\_grid\_set\_region](ds_grid_set_region.md)
-   [ds\_grid\_shuffle](ds_grid_shuffle.md)
-   [ds\_grid\_sort](ds_grid_sort.md)
-   [ds\_grid\_get](ds_grid_get.md)
-   [ds\_grid\_get\_max](ds_grid_get_max.md)
-   [ds\_grid\_get\_mean](ds_grid_get_mean.md)
-   [ds\_grid\_get\_min](ds_grid_get_min.md)
-   [ds\_grid\_get\_sum](ds_grid_get_sum.md)
-   [ds\_grid\_get\_disk\_max](ds_grid_get_disk_max.md)
-   [ds\_grid\_get\_disk\_mean](ds_grid_get_disk_mean.md)
-   [ds\_grid\_get\_disk\_min](ds_grid_get_disk_min.md)
-   [ds\_grid\_get\_disk\_sum](ds_grid_get_disk_sum.md)
-   [ds\_grid\_add](ds_grid_add.md)
-   [ds\_grid\_add\_region](ds_grid_add_region.md)
-   [ds\_grid\_add\_disk](ds_grid_add_disk.md)
-   [ds\_grid\_add\_grid\_region](ds_grid_add_grid_region.md)
-   [ds\_grid\_multiply](ds_grid_multiply.md)
-   [ds\_grid\_multiply\_disk](ds_grid_multiply_disk.md)
-   [ds\_grid\_multiply\_region](ds_grid_multiply_region.md)
-   [ds\_grid\_multiply\_grid\_region](ds_grid_multiply_grid_region.md)
-   [ds\_grid\_value\_exists](ds_grid_value_exists.md)
-   [ds\_grid\_value\_disk\_exists](ds_grid_value_disk_exists.md)
-   [ds\_grid\_value\_x](ds_grid_value_x.md)
-   [ds\_grid\_value\_y](ds_grid_value_y.md)
-   [ds\_grid\_value\_disk\_x](ds_grid_value_disk_x.md)
-   [ds\_grid\_value\_disk\_y](ds_grid_value_disk_y.md)
-   [ds\_grid\_copy](ds_grid_copy.md)

### Serialisation

-   [ds\_grid\_read](ds_grid_read.md)
-   [ds\_grid\_write](ds_grid_write.md)

### MP Grid

-   [ds\_grid\_to\_mp\_grid](ds_grid_to_mp_grid.md)
-   [mp\_grid\_to\_ds\_grid](../../Movement_And_Collisions/Motion_Planning/mp_grid_to_ds_grid.md)