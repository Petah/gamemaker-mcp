---
title: "os_get_language"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_language.htm"
converted: "2025-09-14T04:00:04.508Z"
---

# os\_get\_language

This function returns a string with the two letter Language Code for the OS that is running the game, as set by the [ISO639](https://en.wikipedia.org/wiki/ISO_639) standard. If the information is not available, it will hold simply an empty string "", or "en" for "English" language. Note that some languages also have a relevant Regional Code too, so to distinguish between different regions of the same country use the function [os\_get\_region()](os_get_region.md).

The following table shows example of some of the main two letter language codes as defined by ISO 639:

| Language | Code |
| --- | --- |
| Arabic | ar |
| Chinese | zh |
| Danish | da |
| English | en |
| French | fr |
| German | de |
| Greek | el |
| Italian | it |
| Japanese | ja |
| Norwegian | no |
| Polish | pl |
| Portuguese | pt |
| Russian | ru |
| Spanish | es |
| Swedish | sv |

**NOTE**: This is not the location country code that is returned, but the language code of the OS.

#### Syntax:

os\_get\_language()

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

switch (os\_get\_language())
{
    case "es": ini\_open("spanish.ini"); break;
    case "fr": ini\_open("french.ini"); break;
    case "it": ini\_open("italian.ini"); break;
    default: ini\_open("english.ini"); break;
}

The above code checks the OS language and opens a different \*.ini file depending on the returned value.