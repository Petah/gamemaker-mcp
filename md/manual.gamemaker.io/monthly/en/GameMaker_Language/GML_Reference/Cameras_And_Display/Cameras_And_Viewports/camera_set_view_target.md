---
title: "camera_set_view_target"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_view_target.htm"
converted: "2025-09-14T03:59:44.587Z"
---

# camera\_set\_view\_target

You can use this function to set the follow target of the camera within the room. See: [Cameras And Viewports](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#h)

You give the unique camera ID value (as returned by the different [camera\_create()](camera_create.md) functions) and then give the [Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or [Object Asset](../../../../The_Asset_Editors/Objects.md) that you wish to set the camera view to follow.

Note that if you supply an object and there is more than one instance of that object in the room, there is no way for GameMaker to know which instance you wish to follow and so it could be any of them.

#### Syntax:

camera\_set\_view\_target(camera\_id, id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |
| id | Object Asset or Object Instance | Instance or object to have the camera target for following |

#### Returns:

N/A

#### Example:

camera\_set\_view\_target(view\_camera\[0\], id);

The above code will set the view camera target for the camera assigned to view port\[0\] to that of the instance running the code.