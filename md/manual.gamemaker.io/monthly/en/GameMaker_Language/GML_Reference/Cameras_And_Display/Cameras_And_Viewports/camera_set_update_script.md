---
title: "camera_set_update_script"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/Cameras_And_Viewports/camera_set_update_script.htm"
converted: "2025-09-14T03:59:44.477Z"
---

# camera\_set\_update\_script

This function can be used to set a function that will be called every game frame that the camera is assigned to a visible and active view port.

You give the unique camera ID value (as returned by the different [camera\_create](camera_create.md) functions) and the function to be called. The script parameter can be anything that can be called for execution (i.e. anything for which [is\_callable](../../Variable_Functions/is_callable.md) returns true).

The order in which functions attached to cameras are called and the actual rendering of the camera views happens is as follows:

-   The cameras for all visible and active view ports have their **update function** called
-   Then for each view:
    -   The **begin function** for the camera for that view is called
    -   The draw events are executed for that view
    -   The **end function** for the camera is called
-   Move to the next active visible view and repeat...

NOTE Applying a custom update function to a camera overrides its default update behaviour. For example, if you set your camera to follow an object (say, obj\_player) when calling [camera\_create\_view](camera_create_view.md), or set it so in the [Room Properties](../../../../The_Asset_Editors/Room_Properties/Room_Properties.md), it will stop following that object once a custom update script is set.

#### Syntax:

camera\_set\_update\_script(camera\_id, script);

| Argument | Type | Description |
| --- | --- | --- |
| camera_id | Camera ID | The unique camera ID value returned when you created the camera |
| script | Script Function or Method | The function to run each game frame (or -1 for no update script) |

#### Returns:

N/A

#### Example:

camera\_set\_update\_script(view\_camera\[0\], updateCamera);

The above code sets the update function for the camera assigned to view port \[0\].