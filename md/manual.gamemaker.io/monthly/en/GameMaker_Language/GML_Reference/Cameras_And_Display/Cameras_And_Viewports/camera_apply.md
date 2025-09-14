---
title: "camera_apply"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_apply.htm"
converted: "2025-09-14T03:59:44.008Z"
---

# camera\_apply

This function will apply the given camera settings to the current camera view being rendered immediately. While you can set any view camera using the specific camera\_set\_\* functions, the new settings will not be used for rendering until the _next_ game frame, but with this function you can make those changes immediately. If you are using multiple views then the function should be used in the **Draw Event** and you can use the variable [view\_current](view_current.md) to selectively apply the given camera only to the camera view currently being rendered. Note that this does NOT change the camera ID value, only the settings for that camera, and that if you use this function on the default camera (ie: the internal camera GameMaker uses when no view cameras are active) the changes will be overwritten the very next game frame by the internal settings for drawing the room.

#### Syntax:

camera\_apply(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera. |

#### Returns:

N/A

#### Example:

if (view\_current == 0)
{
    camera\_apply(cutscene\_cam);
}

The above code (in a Draw Event) checks to see which camera view is currently being rendered and if it is camera view\[0\] then the settings for the camera referenced by the variable "cutscene\_cam" are applied to it.