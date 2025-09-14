---
title: "camera_set_begin_script"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_begin_script.htm"
converted: "2025-09-14T03:59:44.415Z"
---

# camera\_set\_begin\_script

This function can be used to set a function that will be called at the beginning of every game frame that the camera is assigned to a visible and active view port.

You give the unique camera ID value (as returned by the different [camera\_create](camera_create.md) functions) and the function to be called. The script parameter can be anything that can be called for execution (i.e. anything for which [is\_callable](../../Variable_Functions/is_callable.md) returns true).

The order in which functions attached to cameras are called and the actual rendering of the camera views happens is as follows:

-   The cameras for all visible and active view ports have their **update function** called
-   Then for each view:
    -   The **begin function** for the camera for that view is called
    -   The draw events are executed for that view
    -   The **end function** for the camera is called
-   Move to the next active visible view and repeat...

#### Syntax:

camera\_set\_begin\_script(camera\_id, script);

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |
| script | Script Function or Method | The function to run each game frame (or -1 for no begin script) |

#### Returns:

N/A

#### Example:

camera\_set\_begin\_script(view\_camera\[0\], beginCamera);

The above code sets the begin script function for the camera assigned to view port \[0\].