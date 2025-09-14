---
title: "camera_create_view"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_create_view.htm"
converted: "2025-09-14T03:59:44.061Z"
---

# camera\_create\_view

This function will create a new camera and then set its view into the room, before return the unique ID value to identify the camera in future function calls. The camera will be created using the values that you set in this function for position, size and other details which correlate to the values you set in the Room Editor (see [here](../../../../The_Asset_Editors/Rooms.md)). Note that this function can take a _variable number of arguments_ with only the x/y position and width/height arguments being obligatory. Any arguments not supplied will use their default arguments.

Note that cameras are like all dynamic resources and will occupy memory when created. This means that you need to take care not to create cameras unnecessarily and to destroy those that you don't need by calling the function [camera\_destroy()](camera_destroy.md). This also means that cameras will persist from room to room if assigned to a global variable (they will persist when assigned to instance or local variables too, but you can't access them after changing room, hence the memory leak), so that you can - for example - create a new camera, assign it to a global variable, and then at the start of each room use the camera\_set\_\* functions to set the properties before assigning it to a view port.

#### Syntax:

camera\_create\_view(room\_x, room\_y, width, height, \[angle, object, x\_speed, y\_speed, x\_border, y\_border\])

| Argument | Type | Description |
| --- | --- | --- |
| room_x | Real | The x position (within the room) of the left side of the area the camera view captures. |
| room_y | Real | The y position (within the room) of the top of the area the camera view captures. |
| width | Real | The width of the area the view captures. |
| height | Real | The height of the area the view captures. |
| angle | Real | OPTIONAL The angle to set the for the camera view(from 0° - 360°, default is 0). |
| object | Object Asset or Object Instance | OPTIONAL The object ID (or instance ID) for the camera view to follow (default is -1, no object). |
| x_speed | Real | OPTIONAL The maximum horizontal speed the view can move at (set to -1 for "instant" following, default is -1). |
| y_speed | Real | OPTIONAL The maximum vertical speed the view can move at (set to -1 for "instant" following, default is -1). |
| x_border | Real | OPTIONAL The minimum horizontal space between the edge of the view area and the instance it is set to follow (before the view begins moving and if it is set to follow an instance, default is 0). |
| y_border | Real | OPTIONAL The minimum vertical space between the edge of the view area and the instance it is set to follow (before the view begins moving and if it is set to follow an instance, default is 0). |

#### Returns:

[Camera ID](camera_create.md)

#### Example:

camera\_destroy(view\_camera\[0\]);
view\_camera\[0\] = camera\_create\_view(0, 0, 640, 480, 0, obj\_Player, 5, 5, -1, -1);

The above code removes the current camera assigned to viewport\[0\] and then creates a new camera, defines its view properties and then assigns that to viewport\[0\].