---
title: "browser_height"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Web_And_HTML5/browser_height.htm"
converted: "2025-09-14T04:00:11.399Z"
---

# browser\_height

This variable holds the height (in pixels) of the browser the game is being run in. If no browser is present then the window size is returned.

See: [The Game Window](../../../../../../GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/The_Game_Window.md)

#### Syntax:

browser\_height

#### Returns:

[Real](../../GML_Overview/Data_Types.md)

#### Example:

if (browser\_height > window\_get\_height()) || (browser\_width > window\_get\_width())
{
    var xx, yy;
    if (browser\_width > window\_get\_width())
    {
        xx = (browser\_width - window\_get\_width()) / 2;
    }
    else
    {
        xx = 0;
    }
    if (browser\_height > window\_get\_height())
    {
        yy = (browser\_height - window\_get\_height()) / 2;
    }
    else
    {
        yy = 0;
    }
    window\_set\_position(xx, yy);
}

The above code checks the width and height of the browser to see if either is larger than the current window width and height. If either of them are, it then calculates a new position for the game window within the browser.