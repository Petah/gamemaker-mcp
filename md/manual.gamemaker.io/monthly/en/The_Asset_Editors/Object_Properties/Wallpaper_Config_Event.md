---
title: "Wallpaper Events"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Wallpaper_Config_Event.htm"
converted: "2025-09-14T04:00:15.977Z"
---

# Wallpaper Events

There are two events used for making [Live Wallpapers](../../GameMaker_Language/GML_Reference/Live_Wallpapers/Live_Wallpapers.md).

![](../../assets/Images/Asset_Editors/Editor_Objects_WallpaperConfigEvent.png)

## Wallpaper Config

This event runs whenever a [setting](../../GameMaker_Language/GML_Reference/Live_Wallpapers/wallpaper_set_config.md) for the wallpaper is changed in the companion app.

You get the updated wallpaper settings in the wallpaper\_config variable.

### wallpaper\_config

This variable is a [struct](../../GameMaker_Language/GML_Overview/Structs.htm#struct) containing your sections. Each section is a struct containing the options and sections within that section.

To access an option from this struct, you would use this syntax:

wallpaper\_config.section\_name.option\_name

Or, when using nested sections:

wallpaper\_config.section1\_name.section2\_name.option\_name

Here is an example using the same settings defined on the [wallpaper\_set\_config](../../GameMaker_Language/GML_Reference/Live_Wallpapers/wallpaper_set_config.md) page:

var \_new\_colour = wallpaper\_config.colours.blendColor;
obj\_clock.colour = \_new\_colour;

## Wallpaper Subscription Data

This event is triggered when information is received on a metric that you are [subscribed](../../GameMaker_Language/GML_Reference/Live_Wallpapers/wallpaper_set_subscriptions.md) to. For details on what is included in this event, see [Receiving Metrics](../../GameMaker_Language/GML_Reference/Live_Wallpapers/wallpaper_set_subscriptions.htm#h).