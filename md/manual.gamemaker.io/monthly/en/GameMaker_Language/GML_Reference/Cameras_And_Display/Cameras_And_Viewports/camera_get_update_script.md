---
title: "camera_get_update_script"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_get_update_script.htm"
converted: "2025-09-14T03:59:44.162Z"
---

# camera\_get\_update\_script

This function can be used to retrieve the ID of the [script function](../../../GML_Overview/Script_Functions.md) assigned as the update script for the given camera. If no script is assigned then the function will return an invalid handle (-1).

#### Syntax:

camera\_get\_update\_script(camera\_id)

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |

#### Returns:

[Script Function](../../../GML_Overview/Script_Functions.md) or [Method](../../../GML_Overview/Method_Variables.md)

#### Example:

var \_scr = camera\_get\_update\_script(camera\_view\[0\]);
if (\_scr != scr\_cutscene)
{
    camera\_set\_update\_script(camera\_view\[0\], scr\_cutscene);
}

The above code checks the script function assigned as the update function for the camera assigned to view port\[0\] and if it is not cutscene it is set to that script.