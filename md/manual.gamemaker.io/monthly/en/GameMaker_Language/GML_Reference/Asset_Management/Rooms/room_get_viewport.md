---
title: "room_get_viewport"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_get_viewport.htm"
converted: "2025-09-14T03:59:39.156Z"
---

# room\_get\_viewport

This function retrieves the details of a view port in a room other than the current one.

You give the room and the index of the view port to retrieve (from 0 to 7) and the function will return an [array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) of 5 indices, where:

-   \[0\] = visible (Boolean: true / false)
-   \[1\] = x position (real)
-   \[2\] = y position (real)
-   \[3\] = width (real)
-   \[4\] = height (real)

#### Syntax:

room\_get\_viewport(rm, vind);

| Argument | Type | Description |
| --- | --- | --- |
| rm | Room Asset | The room to get viewport data from |
| vind | Real | The index of the view port to get |

#### Returns:

[Array](../../../../../../../GameMaker_Language/GML_Overview/Arrays.md) (5 elements: visible, x, y, width, height)

#### Example:

var \_view\_values = room\_get\_viewport(rm\_Game, 0);
var \_visible\_text = \_view\_values\[0\] ? "visible" : "invisible";
show\_debug\_message($"Viewport 0 in rm\_Game is {\_visible\_text} and drawn at the position: {\_view\_values\[1\]}, {\_view\_values\[2\]}. Its dimensions are {\_view\_values\[3\]}x{\_view\_values\[4\]}.");

The above code retrieves the view port data for the given room then checks to see if the port is flagged as visible. If it is not, the view port data is set to make it visible.