---
title: "screen_save"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/screen_save.htm"
converted: "2025-09-14T03:59:45.964Z"
---

# screen\_save

With this function you can save a screenshot of the game as it currently appears in the game window.

The file will be saved to the working directory of the game, which in windows is located at <drive>:/Users/YOURUSERNAME/AppData/Local/\[Game Name\]/ and on Mac it would be ~/Library/Application Support/\[Game Name\]/. The image captured will be the final render of the application surface of the game, or (if the app surface has been disabled) it will be an image of the whole display or window.

It is important to note that the function is designed to be called in the **Draw GUI End Event**, which should give consistent results across all platforms. Using it in any other event may not work as expected, and may give different results across different targets and even devices.

Should you need more control over what is being saved, you should use the function [screen\_save\_part()](screen_save_part.md).

**NOTE** This function does not work on the HTML5 target.

#### Syntax:

screen\_save(fname);

| Argument | Type | Description |
| --- | --- | --- |
| fname | String | The filename for the screenshot to save |

#### Returns:

N/A

#### Example:

if (keyboard\_check\_pressed(ord("S")))
{
    screen\_save(working\_directory + "Screens\\Screen\_" + string(num++) + ".png")
}

The above code takes a screenshot of the game when the user presses the "S" key. This screen shot is saved to a specific directory and numbered using a variable which is then incremented.