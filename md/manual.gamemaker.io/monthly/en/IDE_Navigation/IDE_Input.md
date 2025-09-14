---
title: "IDE Input And Navigation"
source: "manual.gamemaker.io/monthly/en/IDE_Navigation/IDE_Input.htm"
converted: "2025-09-14T04:00:11.758Z"
---

# IDE Input And Navigation

The GameMaker IDE accepts mouse and keyboard input, and many operations can be carried out using one or the other or both.

NOTE You can change the preferences in [Input Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Input.md).

Contents

1.  [Mouse Input](IDE_Input.htm#mouse_input)
2.  [Keyboard Input](IDE_Input.htm#keyboard_input)

1.  [Hotkey Chords](IDE_Input.htm#hotkey_chords)

4.  [Other](IDE_Input.htm#other)

1.  [Laptop Mode](IDE_Input.htm#laptop_mode)
2.  [Touch Screen Support](IDE_Input.htm#touch_screen_support)

6.  [Related Topics](IDE_Input.htm#related_topics)

## Mouse Input

You can click the left mouse button ![Lmb](../assets/Images/Icons/Icon_LMB.png) to select anything, use Ctrl + ![Lmb](../assets/Images/Icons/Icon_LMB.png)  / Command + ![Lmb](../assets/Images/Icons/Icon_LMB.png)  to select multiple items, hold ![Lmb](../assets/Images/Icons/Icon_LMB.png) to drag items into different docks or onto the [Workspaces](../Introduction/Workspaces.md), and also the ![Rmb](../assets/Images/Icons/Icon_RMB.png) to open context-specific menus.

NOTE If you are running GameMaker on a macOS system and are using a single button mouse, please use Ctrl + ![Lmb](../assets/Images/Icons/Icon_LMB.png)  to get a right mouse click ![Rmb](../assets/Images/Icons/Icon_RMB.png).

When navigating around the various different workspaces and windows, you can use the right-mouse button ![Rmb](../assets/Images/Icons/Icon_RMB.png) on any text field to open a context menu which will have the following fields by default:

![Default RMB Menu](../assets/Images/Introduction/QS_RMBContextMenu.png)

In some situations, these options may be expanded on, depending on the editor or window that is in focus.

When using a laptop trackpad, you can use the panning gesture, i.e. dragging with two fingers, to pan around workspaces, and use the pinch in/out gestures to zoom out and in.

## Keyboard Input

There are a great number of keyboard shortcuts that can be used to navigate around the different workspace elements and [asset editors](../The_Asset_Editors/The_Asset_Editors.md). This section lists the most important ones.

NOTE You can find the complete list on the [Keyboard Shortcuts](Keyboard_Shortcuts.md) page.

-   ctrl + z / cmd + z: This will undo the previous action and works in most of the editors. You have multiple levels of undo too, so you can press this multiple times to "roll back" changes.
-   ctrl + y / cmd + y: This will redo a previous action that was undone and works in most of the editors. Like undo, you have multiple levels of redo too.
-   ctrl + s / cmd + s: This will force GameMaker to save your project.
-   ctrl + t / cmd + t: This will open the **Goto Window** which enables you to quickly search for and go to any asset in your game, as well as search the [IDE Preferences](../Setting_Up_And_Version_Information/IDE_Preferences.md) and [Game Options](../Settings/Game_Options.md). You are presented with a list of everything and as you type the search term, this list will be culled to suit, so if all your rooms are prefixed with rm\_ for example, typing that will cull the list to show only those assets that begin with that name.

![Resource Search](../assets/Images/Introduction/QS_Goto.png)

-   ctrl + tab: This will open the **Workspace Overview** window which can be used to navigate quickly between items that are open in the different [Workspaces](../Introduction/Workspaces.md). The window will remain open as long as ctrl is held, and pressing tab once will move you to the next item in the window. Releasing the shortcut will then navigate to the item that was selected. You can also navigate around the overview using Ctrl + Left and Ctrl + Right on Windows or Ctrl + Comma and Ctrl + Period on macOS.

    NOTE If you remap the binding for this window to either use more than one modifier (such as ctrl + alt + b) or a single key (such as B only), then the window will remain open after pressing the shortcut regardless of whether you still have it held or not, until you manually close it or choose an item from the window.

![Workspace Overview Window](../assets/Images/IDE_Input/Getting_Started_Overview.png)

-   ctrl + enter/ cmd + enter: This will reset the zoom level in workspaces and various editors.
-   f1: This will open the manual. Note that when using GML Visual or GML Code you can also select an action or a function (or keyword or whatever) and then press f1 or click the middle mouse button ![Mmb](../assets/Images/Icons/Icon_MMB.png) to open the manual on the relevant page.
-   f12: This can be used to collapse or expand all the different docked windows in the IDE.

Other ways to navigate the workspace include using the keyboard shortcut  Ctrl / Command + Alt + **<Arrow Keys>** to move between any open windows in the direction pressed, and by pressing and holding the middle mouse button ![Mmb](../assets/Images/Icons/Icon_MMB.png) then dragging the mouse you can pan around the workspace too.

### Hotkey Chords

A hotkey chord is an extension of regular hotkeys where multiple alphanumeric keys can be pressed as long as the modifier keys are held and unchanged (e.g. ctrl + a => ctrl + d, Ctrl + Shift + C => Ctrl + Shift + R).

To execute a hotkey chord you first press and hold the modifier keys. While holding the modifier keys you then press the hotkey chord's alphanumeric keys _in order_. When you press the last key in the chord the hotkey executes.

For example, instead of using the default F5 key you could assign a hotkey chord Ctrl + R => Ctrl + U => Ctrl + N to the **Run** shortcut and then run your game as follows:

Hotkey chords are configured the same way as regular shortcuts in the [Redefine Keys Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Redefine_Keys_Preferences.md).

NOTE Hotkey chords using SHIFT as the **only** modifier cannot be defined, as SHIFT is used to invert the case of letters being typed, which cannot be differentiated from a chord being executed. It can still be used along with other modifiers to create hotkey chords, such as CTRL + SHIFT + KEY.

NOTE Hotkey chords are not supported in the Legacy Code Editor.

## Other

Other than those methods of input, there is also a special mode for those people working on projects using a laptop as well as limited support for pen devices.

### Laptop Mode

If you are using GameMaker on a laptop, then you will have a further option at the top of the IDE for Laptop Mode:

![](../assets/Images/IDE_Input/Getting_Started_LaptopMode.png)This will be on by default but can be switched off if you prefer by toggling this button. Laptop mode combines with some tools in the IDE to make it a much better experience when using a touchpad, simplifying the 3 main mouse interactions: **pan**, **zoom** and **scroll**. It uses two modifier keys to do this: Left Ctrl / Cmd and Left Alt. When laptop mode is on, _Left_ Ctrl / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) and _Left_ Alt are "reserved" for mouse interactions like panning the Room Editor, where left Ctrl / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) is zoom, left Alt is scroll and pan. Scrolling in laptop mode behaves just like panning, so it should be intuitive and precise enough so that you don't need to use the scrollbar.

NOTE When holding these buttons, you simply have to move the mouse - not click nor drag, just move - and that if there is a general shortcut that normally requires the use of the Ctrl / Cmd or Alt keys, you would use the _Right_ keys of the keyboard instead.

### Touch Screen Support

One final thing we'll mention here is that the IDE for GameMaker also has minimal support for touch screens. On all operating systems you can use the touch screen to click and drag items in the main workspace, and we support 2 simultaneous pointers, where a second tap will perform a right-click.

NOTE On Windows 8 and above, the GameMaker IDE supports pen devices too.

## Related Topics

The following pages contain more detailed and specific information on navigating the IDE, as well as information on some navigation tools available to you:

See Also

1.  [Bookmarks](Bookmarks.md)
2.  [Recent Windows](Recent_Windows.md)
3.  [The Inspector](../IDE_Tools/The_Inspector.md)
4.  [Menus](Menus.md)
5.  [Keyboard Shortcuts](Keyboard_Shortcuts.md)