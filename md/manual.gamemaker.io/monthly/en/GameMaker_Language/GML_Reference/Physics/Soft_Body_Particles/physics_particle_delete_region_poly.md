---
title: "physics_particle_delete_region_poly"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Physics/Soft_Body_Particles/physics_particle_delete_region_poly.htm"
converted: "2025-09-14T04:00:06.352Z"
---

# physics\_particle\_delete\_region\_poly

With this function you can delete (remove) all the particles that fall within the bounds of the defined polygonal area from the physics simulation in the current room. The function takes a (previously created) [ds\_list()](../../Data_Structures/DS_Lists/DS_Lists.md) containing the x/y position of each point of the polygon, with the even numbered positions in the list being the x coordinates, and odd numbered positions the y coordinates, ie: for a triangle, your list would have six entries, with entry 0, 2, and 4 being the x coordinates and 1, 3, and 5 being the y coordinates. The polygon will then be used to delete all the particles that fall within the defined area.

Note that the polygon defined must have _at least_ three points, and _at most_ 8.

#### Syntax:

physics\_particle\_delete\_region\_poly(pointList)

| Argument | Type | Description |
| --- | --- | --- |
| pointList | DS List | A ds_list of points to use to create the polygon. |

#### Returns:

N/A

#### Example:

var list = ds\_list\_create(p\_list);
for (var i = 0; i < 5; i ++;)
{
    ds\_list\_add(p\_list, mx\[i\]);
    ds\_list\_add(p\_list, my\[i\]);
}
physics\_particle\_delete\_region\_poly(p\_list);
ds\_list\_destroy(p\_list);

The above code will delete all particles found in the polygonal area defined by the points added to the DS List.