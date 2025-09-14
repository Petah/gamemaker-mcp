---
title: "gamepad_test_mapping"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_test_mapping.htm"
converted: "2025-09-14T03:59:58.815Z"
---

# gamepad\_test\_mapping

This function can be used to set the gamepad mapping on those targets that permit it. You supply the "slot" index for the gamepad to set, and then the map string, which should have been created using the SDL format with the following fields:

<guid>,<description>,platform:<platform-name>,<bindings>

The details that should be included in each of these fields are:

-   guid - a string of digits and letters that uniquely identifies a device type (this can be retrieved using the [gamepad\_get\_guid()](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_get_guid.md) function)
-   description - an ASCII description of the device (this can be retrieved using the [gamepad\_get\_description()](gamepad_get_description.md) function)
-   platform-name - will be either "platform:android", "platform:windows", "linux", or "mac" (note that **this will be appended automatically onto the string when you call this function**, and so you do not need to supply it when constructing your own mapping strings)
-   bindings - a set of entries separated by a ',' to bind actual input to specific GML constants

The comma-separated list of entries follows a specific format for each entry:

<abstract-gp-name>:<value-binding>

Here <value-binding> (i.e.: the direct gamepad input) can be any one of the following:

-   a<N> - This represents an axis of the gamepad, where the <N> is one of the axes from 0 to [gamepad\_axis\_count()](gamepad_axis_count.md) -1
-   b<N> - This represents a button of the gamepad, where the <N> is one of the buttons from 0 to [gamepad\_button\_count()](gamepad_button_count.md) -1
-   h<N>.<mask> - This represents a hat of the gamepad, where the <N> represents a hat from 0 to [gamepad\_hat\_count()](../../../../../../../GameMaker_Language/GML_Reference/Game_Input/GamePad_Input/gamepad_hat_count.md) -1, and the <mask> will be either 1, 2, 4, or 8.

Each input value should be bound to an SDL name, which is expressed as <>abstract-gp-name>, which in turn is bound to a GML constant. The table below shows the equivalence between the SDL name and the GameMaker constant:

| SDL Name | GML Name |
| --- | --- |
| a | gp_face1 |
| b | gp_face2 |
| x | gp_face3 |
| y | gp_face4 |
| leftshoulder | gp_shoulderl |
| lefttrigger | gp_shoulderlb |
| rightshoulder | gp_shoulderr |
| righttrigger | gp_shoulderrb |
| guide | gp_select |
| start | gp_start |
| leftstick | gp_stickl |
| rightstick | gp_stickr |
| dpup | gp_padu |
| dpdown | gp_padl |
| dpleft | gp_padr |
| dpright | gp_padd |
| leftx | gp_axislh |
| lefty | gp_axislv |
| rightx | gp_axisrh |
| righty | gp_axisrv |


When you have constructed your mapping string it should look something like this:

"050000005e040000fd020000ffff3f00,Xbox Wireless Controller,a:b0,b:b1,start:b4,dpdown:h0.4,dpleft:h0.8,dpright:h0.2,dpup:h0.1,guide:b6,leftshoulder:b9,leftstick:b7,lefttrigger:a4,leftx:a0,lefty:a1,rightshoulder:b10,rightstick:b8,righttrigger:a5,rightx:a2,righty:a3,x:b2,y:b3,platform:android"

#### Syntax:

gamepad\_test\_mapping(index, mapping\_string);

| Argument | Type | Description |
| --- | --- | --- |
| index | Real | The gamepad index "slot" to set |
| mapping_string | String | The map string to use (see the description for more information) |

#### Returns:

N/A

#### Example:

var mapping = gamepad\_get\_guid(global.padIndex) + "," + gamepad\_get\_description(global.padIndex);
var len = array\_length(global.PadInstances);
for (i = 0; i < len; i += 2)
{
    var left = global.PadInstances\[i\];
    var right = global.PadInstances\[i+1\];
    mapping += "," + left.sdlLabel + ":" + right.binding;
}
gamepad\_test\_mapping(global.padIndex, mapping);

The above code will loop through a number of instances and use the values of different variables that they contain to create a mapping string, which is then set for use on the gamepad in the given slot index.