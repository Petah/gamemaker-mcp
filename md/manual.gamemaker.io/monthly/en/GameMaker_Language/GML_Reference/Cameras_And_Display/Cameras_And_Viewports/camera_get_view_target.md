---
title: "camera_get_view_target"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_view_target.htm"
converted: "2025-09-14T03:59:44.351Z"
---

# camera\_get\_view\_target

This function can be used to retrieve the follow target of the given camera, which can be set in the room properties (see [Cameras And Viewports](../../../../The_Asset_Editors/Room_Properties/Room_Properties.htm#h)) or with [camera\_set\_view\_target](camera_set_view_target.md). The return value can be an [Object Asset](../../../../The_Asset_Editors/Objects.md), an [Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or -1 if no follow target has been set.

#### Syntax:

camera\_get\_view\_target(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Object Asset](../../../../The_Asset_Editors/Objects.md), [Object Instance](../../Asset_Management/Instances/Instance_Variables/id.md) or -1

#### Example:

var target = camera\_get\_view\_target(view\_camera\[0\]);
if (target != obj\_Player)
{
    camera\_set\_view\_target(view\_camera\[0\], obj\_Player);
}

The above code retrieves the follow target of the camera assigned to view port\[0\] and then checks this to see if it matches the object index "obj\_Player". If it does not then the view camera is set to follow an instance of that object.