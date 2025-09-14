---
title: "analytics_event"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/analytics_event.htm"
converted: "2025-09-14T04:00:11.369Z"
---

# analytics\_event OBSOLETE

This function will send the specified text to the analytics provider that you have set up through the [HTML5 Game Options](../../../Settings/Game_Options/HTML5.md). This function can be used to create a custom analytic to track something outside of the scope of the provider being used.

#### Syntax:

analytics\_event(string);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | A string to send to the provider |

#### Returns:

N/A

#### Example:

if (hs\_new)
{
    analytics\_event("New hiscore of " + string (score));
}

The above code will check a variable to see if it is true and if it is then a special analytics event will be triggered with the specified string.