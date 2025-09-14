---
title: "layer_script_end"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Rooms/General_Layer_Functions/layer_script_end.htm"
converted: "2025-09-14T03:59:36.418Z"
---

# layer\_script\_end

With this function you can assign a function to a layer and it will be called after the layer is rendered.

When adding a function to a layer in this way, it will be run at the end of _each of the different draw events_ so you may want to check in the function assigned which event is currently finished rendering and adapt the code to suit. This can be done by checking the [event\_type](../../Objects/Object_Events/event_type.md) and/or the [event\_number](../../Objects/Object_Events/event_number.md) (see the extended example below).

The script parameter can be anything that can be called for execution (i.e. anything for which [is\_callable](../../../Variable_Functions/is_callable.md) returns true).

NOTE This function is _not_ meant to be called in any Draw events or Step events, but rather only needs to be called at the start of the room in the **Room Creation Code** or in the **Create Event** / **Room Start Event** of an instance.

#### Syntax:

layer\_script\_end(layer\_id, script);

| Argument | Type | Description |
| --- | --- | --- |
| layer_id | String or Layer | The layer to target (or the layer name as a string) |
| script | Script Function or Method | The script function to assign to the layer |

#### Returns:

N/A

#### Extended Example:

In this extended example, we will first show you how a simple script function is structured to set some shader uniform data so that when the given layer is drawn, this function will be run and the shader will work correctly. In the example, it is worth noting how we check which event is being called so that the rest of the function is only run on the specific event that we require it to work on - in this case, only on the main draw event:

/// @function layer\_shader\_start();
function layer\_shader\_start()
{
    if (event\_type == ev\_draw)
    {
        if (event\_number == ev\_draw\_normal)
        {
            colour\_to\_find = shader\_get\_uniform(sShaderDemo5, "f\_Colour1");
            colour\_to\_set = shader\_get\_uniform(sShaderDemo5, "f\_Colour2");
            shader\_set(s\_ColourChanger);
            shader\_set\_uniform\_f(colour\_to\_find, 1, 1, 1);
            shader\_set\_uniform\_f(colour\_to\_set, 1, 0, 0);
        }
    }
}

We would then have a companion function to reset the shader after all the drawing is done:

/// @function layer\_shader\_end();
function layer\_shader\_end()
{
    if (event\_type == ev\_draw)
    {
        if (event\_number == ev\_draw\_normal)
        {
            shader\_reset();
        }
    }
}

Now that we have defined our script functions for setting the shader, we then have to assign them to a specific layer so that the layer knows to call them. This would be done in the room creation code, or in the create event or room start event of some controller object (they do not need to be set every step, but rather once at the start of the room, or when the layer is initially created):

var lay\_id = layer\_get\_id("Instances");
layer\_script\_begin(lay\_id, layer\_shader\_start);
layer\_script\_end(lay\_id, layer\_shader\_end);

This final code block assigns the scripts to the layer.