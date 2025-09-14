---
title: "analytics_event_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/analytics_event_ext.htm"
converted: "2025-09-14T04:00:11.382Z"
---

# analytics\_event\_ext OBSOLETE

This function will send the specified text to the analytics provider that you have set up through the [HTML5 Game Options](../../../Settings/Game_Options/HTML5.md). This function can be used to create a custom analytic to track something outside of the scope of the provider being used, and will also accept custom parameter/value pairs, where the parameter is a string and the value a real number. For Google Analytics, you can only add in one extra pair while Flurry will accept up to 7.

#### Syntax:

analytics\_event\_ext(string, string\_param, value);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | A string to send to the provider. |
| string_param[0 -9] | String | The parameter to send (a string). |
| value[0 - 9] | Real | The value of the parameter (a real number). |

#### Returns:

N/A

#### Example:

var num, time;
ini\_open("Options.ini");
num = ini\_read\_real("Data", "Plays", 0);
num += 1;
time = current\_time;
analytics\_event\_ext(GAME\_NAME, "Plays", num, "Time", time);
ini\_write\_real("Data", "Plays", num);
ini\_close();

The above code will get play information from an ini file as well as the current time and then send those details to the analytics provider.