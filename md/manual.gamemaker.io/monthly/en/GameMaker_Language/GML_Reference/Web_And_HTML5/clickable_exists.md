---
title: "clickable_exists"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/clickable_exists.htm"
converted: "2025-09-14T04:00:11.583Z"
---

# clickable\_exists

This function returns whether a clickable DOM icon has been created with the specified index exists or not. Please note, that the value used for checking _must have been initialised previously_ or else you will get an error causing GameMaker to close.

#### Syntax:

clickable\_exists(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Clickable ID | The index of the clickable to check. |

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (!clickable\_exists(home\_but))
{
    home\_but = clickable\_add(32, 32, sprite\_get\_tpe(spr\_MS\_Home, 0), "http://macsweeney\_games.com", "\_blank", "width=700, height=500, menubar=0, toolbar=0, scrollbars=0");
}

The above code checks the variable "home\_but" to see if it already exists, and if it does not it creates a clickable DOM icon at the position (32, 32) of the page that the game canvas is running on. The icon uses the sprite referenced from the texture page as "spr\_MS\_Home" and when clicked the icon will open a new window for the specified URL and with the defined properties for that window.