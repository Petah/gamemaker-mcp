---
title: "Keyboard Shortcuts"
source: "manual.gamemaker.io/monthly/en/IDE_Navigation/Keyboard_Shortcuts.htm"
converted: "2025-09-14T04:00:12.040Z"
---

# Keyboard Shortcuts

There are a huge number of keyboard shortcuts available for GameMaker, and although most of them are marked in the IDE next to the menu items that they relate to, not all of them are or are obvious to the user at the start. Here you can find a complete list of all the keyboard shortcuts for an easy reference guide. Some of the shortcuts are accessed by typing a [hotkey chord](IDE_Input.htm#hotkey_chords "Hotkey Chords").

In general, shortcuts fall into the following three categories:

-   **Global** - Global shortcuts are those that work no matter where you are in the GameMaker IDE, unless your focus is on a specific window or gadget which overrides it.
-   **Window** - Window shortcuts are those that are specific to a single window or tab, unless a gadget shortcut overrides it.
-   **Gadget** - Gadget shortcuts are very specific and will only work when using a single gadget (the colour picker, for example).

NOTE You can change shortcuts in the [Redefine Keys Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Redefine_Keys_Preferences.md).

Below is the complete list of shortcuts, broken into sections based on editors. An empty table cell indicates that a shortcut is unassigned by default.

Contents

1.  [Global](Keyboard_Shortcuts.htm#global)
2.  [Path Editor](Keyboard_Shortcuts.htm#path_editor)
3.  [GML Visual](Keyboard_Shortcuts.htm#gml_visual)
4.  [Room Editor](Keyboard_Shortcuts.htm#room_editor)
5.  [Sequence Editor](Keyboard_Shortcuts.htm#sequence_editor)
6.  [Image Editor](Keyboard_Shortcuts.htm#image_editor)
7.  [Sprite Editor](Keyboard_Shortcuts.htm#sprite_editor)
8.  [Object Editor](Keyboard_Shortcuts.htm#object_editor)
9.  [Sound Editor](Keyboard_Shortcuts.htm#sound_editor)
10.  [Sound Mixer](Keyboard_Shortcuts.htm#sound_mixer)
11.  [Text Editor](Keyboard_Shortcuts.htm#text_editor)
12.  [Anim Curve Editor](Keyboard_Shortcuts.htm#anim_curve_edit)
13.  [Asset Browser](Keyboard_Shortcuts.htm#asset_browser)
14.  [Particle System Editor](Keyboard_Shortcuts.htm#particle_system)
15.  [Time Line Editor](Keyboard_Shortcuts.htm#time_line_edito)
16.  [Tile Set Editor](Keyboard_Shortcuts.htm#tile_set_editor)
17.  [Debugger](Keyboard_Shortcuts.htm#debugger)
18.  [Feather](Keyboard_Shortcuts.htm#feather)
19.  [Workspace](Keyboard_Shortcuts.htm#workspace)
20.  [Font Editor](Keyboard_Shortcuts.htm#font_editor)
21.  [Code Editor 2](Keyboard_Shortcuts.htm#code_editor_)

## Global

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + Equals | Command + Equals | Global | Zoom in |
| Control + Minus | Command + Minus | Global | Zoom out |
| Control + Enter | Command + Enter | Global | Reset zoom |
| Control + F | Command + F | Global | Zoom fit |
| Delete |  | Global | Delete |
| BackSpace |  | Global | Delete the selected items |
| G |  | Global | Toggle the grid |
| Control + G | Command + G | Global | Toggle grid snapping |
| F2 |  | Global | Rename the current item |
| Control + A | Command + A | Global | Select all |
| Insert |  | Global | Insert |
| Control + CControl + Insert | Command + C | Global | Copy |
| Control + VShift + Insert | Command + V | Global | Paste |
| Control + XShift + Delete | Command + X | Global | Cut |
| Escape |  | Global | Cancel |
| EnterKeypadEnter |  | Global | Commit tool changes |
| Control + F3 | Command + F3 | Global | Globally search the next occurrence of the text to search |
| Control + Shift + F3 | Command + Shift + F3 | Global | Globally search the previous occurrence of the text to search |
| Control + O | Command + O | Global | Open a GameMaker project |
| Control + S | Command + S | Global | Save the current project |
| Control + Shift + S | Shift + Command + S | Global | Save the current project under a different name |
| Control + N | Command + N | Global | Create a new GameMaker project |
| Control + E | Command + E | Global | Export the current project as a YYZ file |
| Alt + F4 | Command + Q | Global | Quit |
| Control + Z | Command + Z | Global | Undo |
| Control + YControl + Shift + Z | Command + YShift + Command + Z | Global | Redo |
| F5 |  | Global | Run the game |
| F6 |  | Global | Continue code execution in the debugger |
| Control + F7 | Command + F7 | Global | Clean the build |
| Control + F8 | Command + F8 | Global | Create an executable package using the current target settings |
| RightAlt + N |  | Global | Create a new note asset |
| RightAlt + C |  | Global | Create a new script asset |
| RightAlt + A |  | Global | Create a new shader asset |
| RightAlt + T |  | Global | Create a new timeline asset |
| RightAlt + E |  | Global | Create a new extension asset |
| RightAlt + F |  | Global | Create a new font asset |
| RightAlt + O |  | Global | Create a new object asset |
| RightAlt + P |  | Global | Create a new path asset |
| RightAlt + R |  | Global | Create a new room asset |
| RightAlt + G |  | Global | Create a new sequence asset |
| RightAlt + B |  | Global | Create a new tile set asset |
| RightAlt + J |  | Global | Create a new animation curve asset |
| RightAlt + K |  | Global | Create a new particle system asset |
| Alt + I |  | Global | Open the Included Files window |
| RightAlt + U |  | Global | Create a new sound asset |
| RightAlt + S |  | Global | Create a new sprite asset |
| Control + T | Command + T | Global | Open the goto menu |
| Control + Alt + M | Alt + Command + M | Global | Bring up the Feather Messages window |
| Control + Shift + F | Shift + Command + F | Global | Open project-wide Search and Replace |
| Control + Shift + P | Command + Comma | Global | Open the Preferences |
| Control + Shift + I | Shift + Command + I | Global | Open the Inspector |
| F1 |  | Global | Open the GameMaker Manual |
| Alt + F1 |  | Global | Preview definition |
| F12 |  | Global | Toggle whether docked windows are expanded or collapsed |
| Shift + F12 |  | Global | Force Dock Expansion |
| Control + W | Command + W | Global | Close the active IDE tab |
| Tab |  | Global | Move focus to the next IDE element |
| Shift + Tab |  | Global | Move focus to the next IDE element |
| Enter |  | Global | Accept focus |
| Space |  | Global | Pan |
| RightControl | RightCommand | Global | Hold while scrolling the mouse wheel |
| RightControl | LeftCommandRightCommand | Global | Select multiple |
| LeftShiftRightShift |  | Global | Select range |
| RightControl | LeftCommandRightCommand | Global | Add to current selection |
| RightAlt |  | Global | Remove from current selection |
| Control + Shift + Number1 | Shift + Command + Number1 | Global | Set bookmark 1 |
| Control + Shift + Number2 | Shift + Command + Number2 | Global | Set bookmark 2 |
| Control + Shift + Number3 | Shift + Command + Number3 | Global | Set bookmark 3 |
| Control + Shift + Number4 | Shift + Command + Number4 | Global | Set bookmark 4 |
| Control + Shift + Number5 | Shift + Command + Number5 | Global | Set bookmark 5 |
| Control + Shift + Number6 | Shift + Command + Number6 | Global | Set bookmark 6 |
| Control + Shift + Number7 | Shift + Command + Number7 | Global | Set bookmark 7 |
| Control + Shift + Number8 | Shift + Command + Number8 | Global | Set bookmark 8 |
| Control + Shift + Number9 | Shift + Command + Number9 | Global | Set bookmark 9 |
| Control + Number1 | Command + Number1 | Global | Go to bookmark 1 |
| Control + Number2 | Command + Number2 | Global | Go to bookmark 2 |
| Control + Number3 | Command + Number3 | Global | Go to bookmark 3 |
| Control + Number4 | Command + Number4 | Global | Go to bookmark 4 |
| Control + Number5 | Command + Number5 | Global | Go to bookmark 5 |
| Control + Number6 | Command + Number6 | Global | Go to bookmark 6 |
| Control + Number7 | Command + Number7 | Global | Go to bookmark 7 |
| Control + Number8 | Command + Number8 | Global | Go to bookmark 8 |
| Control + Number9 | Command + Number9 | Global | Go to bookmark 9 |
| Control + Shift + B | Shift + Command + B | Global | Open the Asset Browser |
| Control + A | Command + A | Global | Open the Create Asset window |

## Path Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + P | Command + P | Path Editor | Pan to the path |
| Control + R | Command + R | Path Editor | Reverse the path, i.e. make the path's last point the first and its first point the last |
| X |  | Path Editor | Mirror the path around its center position (horizontally) |
| Y |  | Path Editor | Flip the path around its center position (vertically) |
| LeftShiftRightShift |  | Path Editor | Shift the path |
| R |  | Path Editor | Rotate the path |
| T |  | Path Editor | Translate the path |
| S |  | Path Editor | Scale the path |
| Up |  | Path Editor | Shift up |
| Down |  | Path Editor | Shift down |
| Left |  | Path Editor | Shift left |
| Right |  | Path Editor | Shift right |

## GML Visual

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + P | Command + P | GML Visual | Pan to the path |
|  |  | GML Visual | Add a comment |
|  |  | GML Visual | Remove a comment |
| Control + K | Command + K | GML Visual | Disable the selected nodes |
| Control + Shift + K | Shift + Command + K | GML Visual | Enable the selected nodes |
| F9 |  | GML Visual | Toggle breakpoints |
| LeftShiftRightShift |  | GML Visual | Drag all |

## Room Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + R | Command + R | Room Editor | Reverse the path, i.e. make the path's last point the first and its first point the last |
| X |  | Room Editor | Mirror the path around its center position (horizontally) |
| Y |  | Room Editor | Flip the path around its center position (vertically) |
| LeftShiftRightShift |  | Room Editor | Shift the path |
| Control + D | Command + D | Room Editor | Duplicate |
| Control + Shift + I | Shift + Command + I | Room Editor | Invert the current selection |
| EqualsKeypadPlus |  | Room Editor | Increase the brush size |
| MinusKeypadMinus |  | Room Editor | Decrease the brush size |
| Up |  | Room Editor | Move the current selection up |
| Down |  | Room Editor | Move the current selection down |
| Left |  | Room Editor | Move the current selection left |
| Right |  | Room Editor | Move the current selection right |
| Control + Alt + I | Alt + Command + I | Room Editor | Open the instance creation order window |
| Control + Alt + L | Alt + Command + L | Room Editor | Open the layer view |
| Control + Shift + T | Shift + Command + T | Room Editor | Open the tile selection window |
| Shift + X |  | Room Editor | Mirror individual elements of selection horizontally |
| X |  | Room Editor | Mirror horizontally as group |
| Shift + Y |  | Room Editor | Flip individual elements of selection vertically |
| Y |  | Room Editor | Flip selection as group vertically |
| Control + Semicolon | Command + Semicolon | Room Editor | Toggle the smart guides and ruler |
| Control + Shift + Alt + Semicolon | Shift + Alt + Command + Semicolon | Room Editor | Toggle smart guide rulerlock |
| Control + Shift + Semicolon | Shift + Command + Semicolon | Room Editor | Toggle snapping to smart guides |
| Control + E | Command + E | Room Editor | Toggle macro editing mode |
| Control + Alt + G | Alt + Command + G | Room Editor | Generate tile map from image |
| Control + B | Command + B | Room Editor | Add a new background layer |
| Control + I | Command + I | Room Editor | Add a new instance layer |
| Control + Alt + T | Alt + Command + T | Room Editor | Add new tile layer |
| Control + P | Command + P | Room Editor | Add new path layer |
| RightControl + A | Command + A | Room Editor | Add new asset layer |
| Control + E | Command + E | Room Editor | Add a new effect layer |
| Control + F | Command + F | Room Editor | Add a new layer folder |
| RightAlt |  | Room Editor | Paint with the selected resource |
| RightControl + LeftRightControl + RightRightControl + UpRightControl + Down |  | Room Editor | Paint with the selected resource performing precise item placement |
| P |  | Room Editor | Select from any layer |

## Sequence Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Sequence Editor | Toggle between play and pause if the current editor has play controls |
| Control + Number8 | Command + Number8 | Sequence Editor | Add a broadcast message at the playhead position |
| Control + D | Command + D | Sequence Editor | Duplicate |
| Control + Semicolon | Command + Semicolon | Sequence Editor | Toggle the smart guides and ruler |
| Control + Shift + Alt + Semicolon | Shift + Alt + Command + Semicolon | Sequence Editor | Toggle smart guide rulerlock |
| Control + Shift + Semicolon | Shift + Command + Semicolon | Sequence Editor | Toggle snapping to smart guides |
| T |  | Sequence Editor | Select the Translate tool |
| S |  | Sequence Editor | Select the Scale tool |
| R |  | Sequence Editor | Select the Rotate tool |
| Y |  | Sequence Editor | Select the Origin tool |
| Control + R | Command + R | Sequence Editor | Toggle the canvas rulers |
| F7 |  | Sequence Editor | Split Keyframe |
| F8 |  | Sequence Editor | Remove the keyframes at the playhead position on the currently selected tracks |
| F9 |  | Sequence Editor | Add a keyframe at the playhead position for all selected items on the canvas |
| F10 |  | Sequence Editor | Toggle autokey |
| Q |  | Sequence Editor | Toggle multiselect origin |
| Control + Shift + Home | Shift + Command + Home | Sequence Editor | Center the selected items around their origins |
| Control + Home | Command + Home | Sequence Editor | Reset the position on the canvas of the currently selected items |
| Control + Alt + P | Alt + Command + P | Sequence Editor | Toggle translation paths on the canvas |
| Alt + Left |  | Sequence Editor | Move the playhead left by 1 frame |
| Shift + Alt + Left |  | Sequence Editor | Move the playhead left by 10 frames |
| Alt + Right |  | Sequence Editor | Move the playhead right by 1 frame |
| Shift + Alt + Right |  | Sequence Editor | Move the playhead right by 10 frames |
| Control + Left | Command + Left | Sequence Editor | Move the selected keys left by 1 frame |
| Control + Shift + Left | Shift + Command + Left | Sequence Editor | Move the selected keys left by 10 frames |
| Control + Right | Command + Right | Sequence Editor | Move the selected keys right by 1 frame |
| Control + Shift + Right | Shift + Command + Right | Sequence Editor | Move the selected keys right by 10 frames |
| Left |  | Sequence Editor | Move the selected items left on the canvas |
| Shift + Left |  | Sequence Editor | Move the selected items left on the canvas (10x) |
| Right |  | Sequence Editor | Move the selected items right on the canvas |
| Shift + Right |  | Sequence Editor | Move the selected items right on the canvas (10x) |
| Up |  | Sequence Editor | Move the selected items up on the canvas |
| Shift + Up |  | Sequence Editor | Move the selected items up on the canvas (10x) |
| Down |  | Sequence Editor | Move the selected items down on the canvas |
| Shift + Down |  | Sequence Editor | Move the selected items down on the canvas (10x) |
| LeftBracket |  | Sequence Editor | Trim selected keys left |
| RightBracket |  | Sequence Editor | Trim selected keys right |
| Control + Alt + D | Alt + Command + D | Sequence Editor | Split Key Two Tracks |
| Shift + RightBracket |  | Sequence Editor | Stretch the selected keys right |
| Shift + LeftBracket |  | Sequence Editor | Stretch the selected keys left |
| M |  | Sequence Editor | Move the playhead to the next keyframe in the selected parameter tracks |
| N |  | Sequence Editor | Move the playhead to the previous keyframe in the selected parameter tracks |
| Shift + M |  | Sequence Editor | Move the playhead to the next key |
| Shift + N |  | Sequence Editor | Move the playhead to the previous key |
| Home |  | Sequence Editor | Move the playhead to the start of the sequence |
| End |  | Sequence Editor | Move the playhead to the end of the sequence |
| Shift + Home |  | Sequence Editor | Move the playhead to the start of the selection |
| Shift + End |  | Sequence Editor | Move the playhead to the end of the selection |
| U |  | Sequence Editor | Toggle expand/collapse for the selected tracks in the Track Panel |
| Shift + U |  | Sequence Editor | Toggle expand/collapse for all tracks |
| Alt + Up |  | Sequence Editor | Select the track above the current track in the Track Panel |
| Alt + Down |  | Sequence Editor | Select the track below the current track in the Track Panel |
| Control + Alt + Up | Alt + Command + Up | Sequence Editor | Add the track above the current track to the selection in the Track Panel |
| Control + Alt + Down | Alt + Command + Down | Sequence Editor | Add the track below the current track to the selection in the Track Panel |
| Control + M | Command + M | Sequence Editor | Add a new clipping mask track |
| Alt + G |  | Sequence Editor | Create a new group track and add the selected tracks to it |
| Control + Number9 | Command + Number9 | Sequence Editor | Add a new moment at the playhead position |
| Shift + Number9 |  | Sequence Editor | Move the playhead to the next moment |
| Shift + Number8 |  | Sequence Editor | Move the playhead to the previous moment |
| LeftControlRightControl | LeftCommandRightCommand | Sequence Editor | Clone translation |
| LeftShiftRightShift |  | Sequence Editor | Restrict the translation axis to allow only horizontal or vertical movement |
| LeftControlRightControl | LeftCommandRightCommand | Sequence Editor | Snap to origin |
| RightAlt |  | Sequence Editor | Resize the key |
| RightAlt |  | Sequence Editor | Select child keys |

## Image Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Image Editor | Toggle between play and pause if the current editor has play controls |
| Shift + A |  | Image Editor | Add a new sprite frame |
| Control + D | Command + D | Image Editor | Duplicate |
| Control + Shift + I | Shift + Command + I | Image Editor | Invert the current selection |
| EqualsKeypadPlus |  | Image Editor | Increase the brush size |
| MinusKeypadMinus |  | Image Editor | Decrease the brush size |
| Alt + V |  | Image Editor | Toggle vertical split view |
| Alt + H |  | Image Editor | Toggle horizontal split view |
|  |  | Image Editor | Remove horizontal and vertical split |
| Alt + C |  | Image Editor | Show the image at its actual size |
| Alt + F |  | Image Editor | Fit the image to centre |
| Number2 |  | Image Editor | Select the next sprite frame |
| Number1 |  | Image Editor | Select the previous sprite frame |
| Control + B | Command + B | Image Editor | Make a brush from the current selection |
| Control + Shift + A | Shift + Command + A | Image Editor | Import a sprite frame from an image file |
| Control + I | Command + I | Image Editor | Import sprites from an image strip file |
|  |  | Image Editor | Export the current sprite as a PNG file |
| Up |  | Image Editor | Move the current selection up |
| Down |  | Image Editor | Move the current selection down |
| Left |  | Image Editor | Move the current selection left |
| Right |  | Image Editor | Move the current selection right |
| Period |  | Image Editor | Select the Pixel Brush tool |
| B |  | Image Editor | Toggle the brush |
| A |  | Image Editor | Select the Arc tool |
| O |  | Image Editor | Select the Colour Picker tool |
| H |  | Image Editor | Select the Colour Remove tool |
| V |  | Image Editor | Select the Colour Replace tool |
| C |  | Image Editor | Select the Ellipse tool and set it to draw an outlined ellipse |
| Shift + C |  | Image Editor | Select the Ellipse tool and set it to draw a filled ellipse |
| E |  | Image Editor | Select the Eraser tool |
| F |  | Image Editor | Select the Fill (or Paint Bucket) tool |
| Y |  | Image Editor | Select the Flip tool |
| U |  | Image Editor | Select the Rotate brush tool |
| L |  | Image Editor | Select the Line tool |
| W |  | Image Editor | Select the Magic Wand tool |
| X |  | Image Editor | Select the Mirror tool |
| D |  | Image Editor | Select the Paintbrush tool |
| M |  | Image Editor | Select the Pan tool |
| P |  | Image Editor | Select the Polygon tool, ready to draw an outlined polygon |
| Shift + P |  | Image Editor | Select the Polygon tool, ready to draw a filled polygon |
| R |  | Image Editor | Select Rectangle tool, ready to draw an outlined rectangle (Brush Builder Tools) |
| Shift + R |  | Image Editor | Select the Rectangle tool, ready to draw a filled rectangle |
| Z |  | Image Editor | Rotate the current brush clockwise by 90 degrees |
| S |  | Image Editor | Select the Rectangle tool |
| Q |  | Image Editor | Select the Paint Selection tool |
| T |  | Image Editor | Select the Text tool |
|  |  | Image Editor | Trim all the zero-alpha pixels from around the edges of a sprite |
| LeftShiftRightShift |  | Image Editor | Snap Tool Modifier |
| RightControl | LeftCommandRightCommand | Image Editor | Hold to bring up the colour picker when selecting a left (LMB) or right colour (RMB) instead |
| RightControl | LeftCommandRightCommand | Image Editor | Move the arc's first control point |
| RightAlt |  | Image Editor | Move the arc's second control point |
| RightAlt |  | Image Editor | Replace colour with alpha |
| LeftShiftRightShift |  | Image Editor | Draw a regular shape (a square instead of a rectangle, a circle instead of an ellipse, etc.) |
| RightAlt |  | Image Editor | Draw a centred shape |
| RightAlt |  | Image Editor | Fill tool tile with brush |
| RightControl | LeftCommandRightCommand | Image Editor | Use the colour picker subtool |
| Shift + Z |  | Image Editor | Use the brush scaler subtool |

## Sprite Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Sprite Editor | Toggle between play and pause if the current editor has play controls |
| PageDown |  | Sprite Editor | Jump to the end of an animation |
| PageUp |  | Sprite Editor | Jump to the start of an animation |
| Control + Number8 | Command + Number8 | Sprite Editor | Add a broadcast message at the playhead position |
| Shift + A |  | Sprite Editor | Add a new sprite frame |
| Control + Shift + E | Shift + Command + E | Sprite Editor | Open the Image Editor when having a sprite selected in the workspace |
| Control + I | Command + I | Sprite Editor | Import image |
| Control + R | Command + R | Sprite Editor | Open the Resize Properties window |

## Object Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Object Editor | Toggle between play and pause if the current editor has play controls |
| PageDown |  | Object Editor | Jump to the end of an animation |
| PageUp |  | Object Editor | Jump to the start of an animation |
| Control + D | Command + D | Object Editor | Duplicate |
| Control + Shift + E | Shift + Command + E | Object Editor | Open the Image Editor when having a sprite selected in the workspace |
| Control + Shift + N | Shift + Command + N | Object Editor | Create a new sprite asset for the active asset and open it in the Sprite Editor |
| Control + I | Command + I | Object Editor | Edit the image of the sprite assigned to the active asset |
| Control + K | Command + K | Object Editor | Edit the mask sprite |
| Control + L | Command + L | Object Editor | Add a child object to the current object |
| Control + A | Command + A | Object Editor | Add an event to the current object |
| Control + Alt + T | Alt + Command + T | Object Editor | Add a new variable to the current object's Variable Definitions |
| Control + Shift + O | Shift + Command + O | Object Editor | Edit the parent object |
| Control + B | Command + B | Object Editor | Modify the object's physics collision shape |
| Control + F | Command + F | Object Editor | Open the Events window |
| Control + G | Command + G | Object Editor | Open the object's Parent window |
| Control + H | Command + H | Object Editor | Open Physics window |
| Control + J | Command + J | Object Editor | Open the object's Variable Definitions window |
| Control + Shift + M | Shift + Command + M | Object Editor | Select a mask sprite for the object (opens the Select Mask window) |
| Control + P | Command + P | Object Editor | Select parent |

## Sound Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Sound Editor | Toggle between play and pause if the current editor has play controls |
| L |  | Sound Editor | Loop all |
| R |  | Sound Editor | Stop and rewind all |
| M |  | Sound Editor | Mute all (all mixer columns) |
| Control + Shift + M | Shift + Command + M | Sound Editor | Open the Sound Mixer |

## Sound Mixer

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Space |  | Sound Mixer | Toggle between play and pause if the current editor has play controls |
| L |  | Sound Mixer | Loop all |
| R |  | Sound Mixer | Stop and rewind all |
| M |  | Sound Mixer | Mute all (all mixer columns) |

## Text Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Text Editor | Duplicate |
| F9 |  | Text Editor | Toggle breakpoints |
| F3 |  | Text Editor | Search the next occurrence of the text to search |
| Shift + F3 |  | Text Editor | Search the previous occurrence of the text to search |
| Control + F | Command + F | Text Editor | Open a code or shader editor's Find and Replace in Find mode |
| Control + H | Shift + Command + H | Text Editor | Open a code or shader editor's Find and Replace in Replace mode |
| RightControl | LeftCommandRightCommand | Text Editor | Open the parent event |
| Home | HomeAlt + UpCommand + LeftControl + A | Text Editor | Jump to start of line or start of actual code |
| End | EndAlt + DownCommand + RightControl + E | Text Editor | Jump to end of line |
| Shift + Home | Shift + HomeShift + Alt + UpShift + Command + Left | Text Editor | Jump to start of line or start of actual code while selecting everything in between |
| Shift + End | Shift + EndShift + Alt + DownShift + Command + Right | Text Editor | Jump to end of line while selecting everything in between |
| Shift + Alt + Home |  | Text Editor | Jump to start and add to column select |
| Shift + Alt + End |  | Text Editor | Jump to end and add to column select |
| Control + Home | Control + HomeCommand + Up | Text Editor | Move the text cursor to the start of the document |
| Control + End | Control + EndCommand + Down | Text Editor | Move the text cursor to the end of the document |
| Control + Shift + Home | Control + Shift + HomeShift + Command + Up | Text Editor | Move the text cursor to the start of the document and select everything in between |
| Control + Shift + End | Control + Shift + EndShift + Command + Down | Text Editor | Move the text cursor to the end of the document and select everything in between |
| Tab |  | Text Editor | Indent the selected lines of code |
| Shift + Tab |  | Text Editor | Unindent the selected lines of code |
| F4 |  | Text Editor | Bring up the code snippets popup |
| Control + M |  | Text Editor | Fold all regions |
| Control + U |  | Text Editor | Unfold all regions |
| Control + Enter | Command + Enter | Text Editor | Expand/Collapse region |
| Control + Alt + Up | Alt + Command + Up | Text Editor | Move the cursor to the previous region |
| Control + Alt + Down | Alt + Command + Down | Text Editor | Move the cursor to the next region |
| Control + K | Command + K | Text Editor | Comment line or selection |
| Control + Shift + K | Shift + Command + K | Text Editor | Uncomment line or selection |
| Control + Space | Control + SpaceCommand + Space | Text Editor | Open the code completion window |
| Control + G | Command + G | Text Editor | Goto line number |
| Control + PageUp | Command + PageUp | Text Editor | Doc Window Next Tab |
| Control + PageDown | Command + PageDown | Text Editor | Doc Window Previous Tab |
| F7 |  | Text Editor | Decrement the text size |
| F8 |  | Text Editor | Increment the text size |
| Control + Q |  | Text Editor | Open Feather's Quick Fixes menu |
| Number1 |  | Text Editor | Insert a code block snippet at the cursor position |
| Number2 |  | Text Editor | Insert an if statement snippet at the cursor position |
| Number3 |  | Text Editor | Insert an if-else statement snippet at the cursor position |
| Number4 |  | Text Editor | Insert a for loop at the cursor position |
| Number5 |  | Text Editor | Insert a for loop with counter variable at the cursor position |
| Number6 |  | Text Editor | Insert a while loop snippet at the cursor position |
| Number7 |  | Text Editor | Insert a do-until loop snippet at the cursor position |
| Number8 |  | Text Editor | Insert a repeat statement snippet at the cursor position |
| Number9 |  | Text Editor | Insert a switch statement snippet at the cursor position |
| Number0 |  | Text Editor | Insert a with statement snippet at the cursor position |
| C |  | Text Editor | Insert a single line comment snippet at the cursor position |
| M |  | Text Editor | Insert a multi-line comment snippet at the cursor position |
| R |  | Text Editor | Insert a region snippet at the cursor position |
| Control + Shift + R | Shift + Command + R | Text Editor | Replace the next occurrence of the searched text |
| Shift + F1 |  | Text Editor | Find usages |
| Control + R | Command + R | Text Editor | Refactor the current identifier |

## Anim Curve Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Anim Curve Editor | Duplicate |
| Control + A | Command + A | Anim Curve Editor | Add a new curve |
| Control + R | Command + R | Anim Curve Editor | Set the range on the y axis |

## Asset Browser

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Asset Browser | Duplicate |
| Shift + O |  | Asset Browser | Open in Explorer |
| Control + RightBracket | Command + RightBracket | Asset Browser | Move items up |
| Control + LeftBracket | Command + LeftBracket | Asset Browser | Move items down |
| Control + Shift + RightBracket | Shift + Command + RightBracket | Asset Browser | Move items to the top |
| Control + Shift + LeftBracket | Shift + Command + LeftBracket | Asset Browser | Move items to the bottom |

## Particle System Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Particle System Editor | Duplicate |

## Time Line Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Time Line Editor | Duplicate |
| Control + Shift + E | Shift + Command + E | Time Line Editor | Change the selected timeline moment |
| Control + Shift + M | Shift + Command + M | Time Line Editor | Merge the selected timeline moments |
| Control + U | Command + U | Time Line Editor | Unselect timeline moments |
| Alt + Enter |  | Time Line Editor | Edit moment (jump to code editor) |

## Tile Set Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + Shift + I | Shift + Command + I | Tile Set Editor | Invert the current selection |
| Up |  | Tile Set Editor | Select the previous tile animation (in the Tile Animation window) |
| Down |  | Tile Set Editor | Select the next tile animation (in the Tile Animation window) |
| Left |  | Tile Set Editor | Select the previous tile animation frame (in the Tile Animation window) |
| Right |  | Tile Set Editor | Select the next tile animation frame (in the Tile Animation window) |
| Shift + Up |  | Tile Set Editor | Move the tile animation up (in the Tile Animation window) |
| Shift + Down |  | Tile Set Editor | Move the tile animation up (in the Tile Animation window) |
| Shift + Left |  | Tile Set Editor | Move the tile animation frame left (in the Tile Animation window) |
| Shift + Right |  | Tile Set Editor | Move the tile animation frame right (in the Tile Animation window) |
| EqualsKeypadPlus |  | Tile Set Editor | Increase the brush size |
| MinusKeypadMinus |  | Tile Set Editor | Decrease the brush size |
| Control + Shift + O | Shift + Command + O | Tile Set Editor | Open the tileset properties |
| Control + Shift + B | Shift + Command + B | Tile Set Editor | Open the Brush Builder window |
| Control + Shift + T | Shift + Command + T | Tile Set Editor | Open the Tile Animation window |
| Control + Shift + A | Shift + Command + A | Tile Set Editor | Open the Auto Tiling window |
| E |  | Tile Set Editor | Select the Eraser tool |
| F |  | Tile Set Editor | Select the Fill (or Paint Bucket) tool |
| Y |  | Tile Set Editor | Select the Flip tool |
| L |  | Tile Set Editor | Select the Line tool |
| X |  | Tile Set Editor | Select the Mirror tool |
| D |  | Tile Set Editor | Select the Paintbrush tool |
| Z |  | Tile Set Editor | Rotate the current brush clockwise by 90 degrees |
| A |  | Tile Set Editor | Select auto tile tool (in the Brush Builder Tools) |
| I |  | Tile Set Editor | Select the tile inheritance tool |
| R |  | Tile Set Editor | Select the tile rectangle tool |
| S |  | Tile Set Editor | Select the tile selection tool |
| Control + Shift + E | Shift + Command + E | Tile Set Editor | Open the Image Editor when having a sprite selected in the workspace |
| Control + Shift + N | Shift + Command + N | Tile Set Editor | Create a new sprite asset for the active asset and open it in the Sprite Editor |
| Control + I | Command + I | Tile Set Editor | Edit the image of the sprite assigned to the active asset |
| Control + F | Command + F | Tile Set Editor | Add a full auto tile set (Auto Tiling window) |
| Control + R | Command + R | Tile Set Editor | Add an auto tile transition set (Auto Tiling window) |
| G |  | Tile Set Editor | Toggle the auto tile guide |

## Debugger

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| F11 | Command + F11 | Debugger | Step into the current statement or function in the debugger |
| F10 |  | Debugger | Step over the current statement in the debugger |
| Shift + F11 |  | Debugger | Step out of the current statement or function in the debugger |

## Feather

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| F3 |  | Feather | Enumerate References |
| Shift + F3 |  | Feather | Find All References to the selected asset |
| Control + Shift + R | Shift + Command + R | Feather | Rename the identifier that the cursor is currently at in the Code Editor |
| Control + Alt + M |  | Feather | Show diagnostics |

## Workspace

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + Alt + Enter | Alt + Command + Enter | Workspace | Zoom and pan to selected |
| Control + Alt + Up | Alt + Command + Up | Workspace | Workspace Chain Move Up |
| Control + Alt + Down | Alt + Command + Down | Workspace | Workspace Chain Move Down |
| Control + Alt + Left | Alt + Command + Left | Workspace | Workspace Chain Move Left |
| Control + Alt + Right | Alt + Command + Right | Workspace | Workspace Chain Move Right |

## Font Editor

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + A | Command + A | Font Editor | Add a range of characters to the font |
| Control + Shift + O | Shift + Command + O | Font Editor | Open the Font Options |
| Control + R | Command + R | Font Editor | Regenerate the font texture |

## Code Editor 2

| Windows Key Binding | macOS Key Binding | Scope | Description |
| --- | --- | --- | --- |
| Control + D | Command + D | Code Editor 2 | Duplicate |
| Control + F |  | Code Editor 2 | Find in editor |
| Control + H |  | Code Editor 2 | Replace in editor |
| Control + Shift + F |  | Code Editor 2 | Open project-wide search |
| Control + Shift + R |  | Code Editor 2 | Replace the next occurrence |
| Control + Q |  | Code Editor 2 | Open Feather's Quick Fixes menu |
| Control + M, F |  | Code Editor 2 | Fold all code regions |
| Control + M, U |  | Code Editor 2 | Unfold all code regions |
| Control + M, M |  | Code Editor 2 | Toggle folding |
| Alt + M |  | Code Editor 2 | Fold the active document |
| Shift + Alt + M |  | Code Editor 2 | Fold all documents |
| Shift + Alt + U |  | Code Editor 2 | Unfold all documents |
| Control + K |  | Code Editor 2 | Comment the current line or selection |
| Control + Shift + K |  | Code Editor 2 | Uncomment the current line or selection |
| Control + J | Command + J | Code Editor 2 | Join code lines |
| Control + Shift + U | Shift + Command + U | Code Editor 2 | Convert the selection to UPPERCASE |
| Control + U | Command + U | Code Editor 2 | Convert the selection to lowercase |
| Alt + U |  | Code Editor 2 | Convert the selection to Proper Case |
| Control + Alt + U | Alt + Command + U | Code Editor 2 | Convert the selection to Sentence case |
| Any + BackSpace |  | Code Editor 2 | Backspace |
| Any + Delete |  | Code Editor 2 | Delete |
| Tab |  | Code Editor 2 | Indent |
| Shift + Tab |  | Code Editor 2 | Unindent |
| Control + BackSpace |  | Code Editor 2 | Delete the entire word left of the cursor |
| Control + Delete |  | Code Editor 2 | Delete the entire word right of the cursor |
| Any + Enter |  | Code Editor 2 | Insert a line break at the cursor position |
| Control + R |  | Code Editor 2 | Refactor the current identifier |
| Left |  | Code Editor 2 | Move the text cursor left |
| Right |  | Code Editor 2 | Move the text cursor right |
| Up |  | Code Editor 2 | Move the text cursor up |
| Down |  | Code Editor 2 | Move the text cursor down |
| Control + Home |  | Code Editor 2 | Move the text cursor to the start of the current document |
| Control + Alt + Home |  | Code Editor 2 | Move the text cursor to the start of the all documents |
| Any + Home |  | Code Editor 2 | Move the text cursor to the start of the current line or the start of the code on the current line |
| Control + End |  | Code Editor 2 | Move the text cursor to the end of the current document |
| Control + Alt + End |  | Code Editor 2 | Move the text cursor to the end of the all documents |
| Any + End |  | Code Editor 2 | Move the text cursor to the end of the current line |
| Any + PageUp |  | Code Editor 2 | Move the text cursor a page up |
| Any + PageDown |  | Code Editor 2 | Move the text cursor a page down |
| Control + Shift + Minus | Shift + Command + Minus | Code Editor 2 | Move to the next item in the history |
| Control + Minus | Command + Minus | Code Editor 2 | Move to the previous item in the history |
| Control + G |  | Code Editor 2 | Go to a specific line |
| Control + T |  | Code Editor 2 | Go to a specific type |
| Alt + Down |  | Code Editor 2 | Move to the next document |
| Alt + Up |  | Code Editor 2 | Move to the previous document |
| Shift + Alt + Down |  | Code Editor 2 | Move to the next code region |
| Shift + Alt + Up |  | Code Editor 2 | Move to the previous code region |
| Alt + F1 |  | Code Editor 2 | Previews the identifier's declaration |
| F1 |  | Code Editor 2 | Navigates to the identifier's declaration |
| Shift + F1 |  | Code Editor 2 | Finds all usages of the identifier and displays them in the Search Results window |
| Control + P | Command + P | Code Editor 2 | Format the document |
| Control + LeftBracket |  | Code Editor 2 | Go to the matching brace |
| Shift + Number9Comma |  | Code Editor 2 | Show code completion parameters |
| Escape |  | Code Editor 2 | Dismiss the code completion pop-up |
| Shift + Alt + M |  | Code Editor 2 | Collapse all documents |
| Shift + Alt + U |  | Code Editor 2 | Expand all documents |
| Alt + M |  | Code Editor 2 | Collapse the current document |
| Alt + U |  | Code Editor 2 | Expand the current document |
| Alt + Number1 |  | Code Editor 2 | Toggle asset navigation |
| Alt + Number2 |  | Code Editor 2 | Toggle document navigation |
| Alt + Number3 |  | Code Editor 2 | Toggle symbols navigation |
| Shift + Alt + Number1 |  | Code Editor 2 | Toggle create asset |
| Shift + Alt + Number2Shift + Alt + N |  | Code Editor 2 | Toggle create document |