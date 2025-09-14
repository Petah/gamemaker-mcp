---
title: "os_is_paused"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_is_paused.htm"
converted: "2025-09-14T04:00:04.555Z"
---

# os\_is\_paused

When developing for mobile devices, you need to have a way to check that the device is still focused on your game or not, especially as if your game is on an iOS, Android or Windows Phone device then it can be interrupted by phone calls and other apps. You can use this function to check if the device is paused or not.

It is worth noting that this function will run any code that is contained within the code block on devices but then GameMaker will be paused immediately after as the device caches the game as a background process. So if you have something like the example code provided below, the instance to be created will not actually appear or run any of its events _until after the game has been restarted from the cached state_. This means that you may prefer to have the os\_is\_paused function call an alarm and then in the alarm event (which will be set when the device is paused but not run until it is un-paused) create a pause menu, restart music etc...

If you are using this function on Windows, Ubuntu (Linux), MacOS or HTML5 platforms, then the function is only toggled for **one step** to true when the game loses focus, and then it will return false again until the game is returned to focus (and loses it again). This is because these platforms do not cache apps and games, and so these will continue to run in the background.

#### Syntax:

os\_is\_paused()

#### Returns:

[Boolean](../../GML_Overview/Data_Types.md)

#### Example:

if (os\_is\_paused())
{
    if (!instance\_exists(obj\_PauseMenu))
    {
        instance\_create\_layer(0, 0, "Controllers", obj\_PauseMenu);
    }
}

The above code checks to see if the game has been paused, and if it has then it creates an instance of the object "obj\_PauseMenu" if none exist already.