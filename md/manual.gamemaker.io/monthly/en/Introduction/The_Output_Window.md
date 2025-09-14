---
title: "The Output Window"
source: "manual.gamemaker.io/monthly/en/Introduction/The_Output_Window.htm"
converted: "2025-09-14T04:00:12.900Z"
---

# The Output Window

![The Output Dock](../assets/Images/Introduction/Output_General.png)

When you open a project in GameMaker for the first time, you will be presented with the Output Window docked at the bottom of the screen. This docked window contains various tabs that show the different output information for your project, depending on certain circumstances. The dock can be minimised by clicking the wide button at the bottom of the IDE, and you can click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) and drag any tab in the docked window to another dock to change its position, or you can click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) on the dock contents bar and drag it into the workspace to create a stand-alone window:

![Docking / Undocking The Output Window](../assets/Images/Introduction/Output_Window.gif)You can also click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) and drag a docked output into another one to create a split view output window, as shown in the example below where the two error outputs have been placed within the same tab (you can slow click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) on a tab to change its name too):

![Split Output Window](../assets/Images/Introduction/Output_SplitWindow.gif)You can recover the default state of the IDE at any time by selecting _Reset Layout_ from [The Layouts Menu](../IDE_Navigation/Menus/The_Layouts_Menu.md) and you can re-open any closed tab from [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md). You can also change the way the contents of each of the output window are displayed by editing the [Output Window Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Output_Windows.md).

The default docked tabs are explained below:

[OutputOutput](The_Output_Window.htm#)

![The Output Window](../assets/Images/Introduction/Output_Output.png)The general **Output** window is where all compiler output is shown, as well as any messages that you may have added to your game using the [show\_debug\_message](../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) function. Most of the initial information shown is simply debug information on how the game is being built and as such can generally be ignored. However, if you have an issue building your project for a target platform it can prove helpful in finding the cause as well as provide information for Support should you contact them.

NOTE You can change the quantity of information shown here from the [Compiling](../Setting_Up_And_Version_Information/IDE_Preferences/General_Preferences.md) section of the [Preferences](../Setting_Up_And_Version_Information/IDE_Preferences.md).

NOTE The **Log** window of [The Debug Overlay](../GameMaker_Language/GML_Reference/Debugging/The_Debug_Overlay.md) also shows this output.

[Search ResultsSearch Results](The_Output_Window.htm#)

![Search Results](../assets/Images/Introduction/Output_Search.png)You can open the **Search And Replace Window** using the keyboard shortcut  ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) +  ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) + " **F**", or go to the [Edit Menu](../IDE_Navigation/Menus/The_Edit_Menu.md). Once you have entered your search terms, the results will be shown in this window with the format:

\[object\] - \[event\] - \[Line Number\]: \[search string\]

If the search term is found in a script then it will simply be:

\[script\] - \[Line Number\]: \[search string\]

You can then double-click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) on any of the returned entries to open the given asset at the correct position for editing.

This window will also show results for Feather's ["Quick Fixes"](../The_Asset_Editors/Code_Editor_Properties/Feather_Features.htm#h1) functionality.

[Source ControlSource Control](The_Output_Window.htm#)

![Source Control Output](../assets/Images/Introduction/Output_SourceControl.png)This window will show all the output for your SCM plugin. See the [Source Control](../IDE_Tools/Source_Control.md) page to find out more about setting up.

[BreakpointsBreakpoints](The_Output_Window.htm#)

![Breakpoints Output](../assets/Images/Introduction/Output_Breakpoints.png)Breakpoints are places in your game code or GML Visual where you have instructed GameMaker to pause the running of the project while in [Debug Mode](Debugging.md). You can add a breakpoint anywhere in the game loop using the key " **F9**", and when you do it will appear in this output tab. You can enable and disable them (without removing them) by clicking on the checkbox to the left and if you use the right mouse button ![Icon RMB](../assets/Images/Icons/Icon_RMB.png) on one then you get a small menu that permits you to remove the breakpoint or open the GML Code/GML Visual window where the breakpoint is located.

[Syntax ErrorsSyntax Errors](The_Output_Window.htm#)

![Syntax Errors Output](../assets/Images/Introduction/Output_SyntaxErrors.png)Syntax errors are those errors in your code that the GameMaker syntax checker has picked up. There are many reasons why you might get a syntax error - like having a ";" in your code when a ":" is expected - and these should be fixed before trying to test or compile your game. Each syntax error entry in the output window can be double-clicked using the left mouse button ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) to open a window at the position flagged so it can be resolved.

Syntax errors will update as you write your code (there will be a short pause between typing something and any errors appearing in this window to prevent errors being reported for unfinished code), and will follow the format:

\[object\] - \[event\] - \[Line Number\] - \[Position In Line\]: \[error string\]

Or if the error is in a script, it will be:

\[script\] - \[Line Number\] - \[Position in line\]: \[error string\]

Note that syntax errors will usually prevent the game from being compiled, however there are errors that will be flagged that won't prevent compiling, but that should, nonetheless, be resolved. The errors in question are:

-   for declared variables that aren't used anywhere
-   for variables used somewhere that haven't been declared yet

In general either of these would suggest a typo in a variable name, or some other kind of easy-to-make error - and so they are flagged for you to revise - but it can also be intentional, as you may have declared the variable for future use, but not got around to actually using it yet. This is why these errors will still permit your game to compile. For a full list of possible syntax error messages, please see [here](../Additional_Information/Errors/Syntax_Errors.md).

[Compile ErrorsCompile Errors](The_Output_Window.htm#)

![Compile Error Output](../assets/Images/Introduction/Output_CompileErrors.png)A Compiler Error happens when your game encounters some type of error that the syntax checker may not have been able to detect, or when an error is related to how you have set up the compile options. When this happens, your game will give you a compiler error and stop running. Any compiler errors will be shown in the General Output window too, but they will also be listed here separately (since they can get "lost" in the rest of the general output).

The compiler error messages will all follow the same format:

\[object\] - \[event\] - \[Line Number\]: \[error string\]

If the error is found in a script then it will simply be:

\[script\] - \[Line Number\]: \[error string\]

You can then double-click ![Icon LMB](../assets/Images/Icons/Icon_LMB.png) on any of the compiler error entries to open the given asset at the position flagged as giving the error. For a full list of possible error messages, please see [here](../Additional_Information/Errors/Compiler_Errors.md).

[Feather MessagesFeather Messages](The_Output_Window.htm#)

![](../assets/Images/Scripting_Reference/Additional_Information/Output_Feather_Searchable_Sortable.png)

The Feather Messages window shows you all errors, warnings and suggestions reported by [Feather](../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md). You can double-click any item in the list to navigate to its corresponding code window.

See [Feather Messages (Feather enabled)](../Additional_Information/Errors/Syntax_Errors.htm#h) for more info.