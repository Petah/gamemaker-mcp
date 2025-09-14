---
title: "layer_set_visible"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_set_visible.htm"
converted: "2025-09-14T03:59:36.454Z"
---

# layer\_set\_visible

With this function you can toggle the visibility of a layer. You supply the layer handle (which you get when you create the layer using [layer\_create()](layer_create.md)) or the layer name (as a string - this will have a performance impact) as well as the toggle value for the layer where visible is true and invisible is false.

When a layer is invisible, nothing that is assigned to the layer will be drawn, and if any instances are assigned to the layer then they will not even run their draw event (much the same as if you set the instance variable visible to false). Note that any instances that are already flagged as invisible will _not_ be flagged as visible if the layer they are on is set to visible, as these are two independent settings, although their behaviour is the same.

When disabling the visibility of a [UI layer](../../../../../The_Asset_Editors/Room_Properties/UI_Layers.md), all Object Instances contained within it will be deactivated, i.e. they will not run any of their events until the layer is made visible again.

#### Syntax:

layer\_set\_visible(layer\_id, visible)

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The handle of the layer to target (or the layer name as a string) |
| visible | Boolean | Whether the layer should be visible (true) or not (false) |

#### Returns:

N/A

#### Example:

var lay\_id = layer\_get\_id("Instances");
if (layer\_get\_visible(lay\_id))
{
    layer\_set\_visible(lay\_id, false);
}
else
{
    layer\_set\_visible(lay\_id, true);
}

The above code gets the handle for the layer named "Instances" in the room editor, then uses the ID to check if the layer is visible or not, toggling the layer visibility depending on the returned value.