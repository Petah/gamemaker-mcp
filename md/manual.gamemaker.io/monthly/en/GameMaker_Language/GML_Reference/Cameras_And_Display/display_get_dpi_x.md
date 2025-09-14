---
title: "display_get_dpi_x"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/display_get_dpi_x.htm"
converted: "2025-09-14T03:59:45.596Z"
---

# display\_get\_dpi\_x

Dots per inch (DPI) is a measure of spatial printing or video dot density, in particular the number of individual dots that can be placed in a line within the span of 1 inch (2.54 cm). When working on mobile devices (in particular Android devices) this is an important factor to take into consideration as what may be appropriate for one display resolution, may not be appropriate for another. For example, you may have two displays with the same resolution of 400 x 800, but display 1 has a dpi of 60 and display 2 has a dpi of 30. In this case, any text or image displayed on display 2 will appear much larger, even though the actual resolution is the same.

This function will get the dpi of the device display along the x axis (this value is also dependent on the orientation of the device). Please note that Mac and iOS do not return specific dpi settings but appear to return the same values as the OS, which are not correct (but will have to do) as Apple do not give the correct values.

#### Syntax:

display\_get\_dpi\_x();

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

dpx = display\_get\_dpi\_x();

This would set the variable "dpx" to the dpi value of the x axis.