---
title: "os_get_region"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_region.htm"
converted: "2025-09-14T04:00:04.520Z"
---

# os\_get\_region

This function returns a string with the two or three letter Regional Code for the OS that is running the game, as set by the [ISO3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard. If the information is not available, it will hold simply an empty string "".

NOTE This is not the location regional code that is returned, but the regional language code of the OS.

#### Syntax:

os\_get\_region()

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

switch (os\_get\_language())
{
    case "zh":
        var \_region = os\_get\_region();
        if (\_region == "HK" || \_region == "MO" || \_region == "TW")
        {
            ini\_open("chinese\_traditional.ini");
        }
        else
        {
            ini\_open("chinese\_simplified.ini");
        }
    break;

    case "fr":
        ini\_open("french.ini");
    break;

    case "it":
        ini\_open("italian.ini");
    break;

    default:
        ini\_open("english.ini");
    break;
}

The above code checks the OS language and if it is Chinese, it then checks the OS region, opening a different INI file depending on the returned values.