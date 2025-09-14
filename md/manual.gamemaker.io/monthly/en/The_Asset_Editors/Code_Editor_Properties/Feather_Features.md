---
title: "Code Completion"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Feather_Features.htm"
converted: "2025-09-14T04:00:15.077Z"
---

# Code Completion

The Code Editor 2 provides intelligent code completion and improved syntax checking in your documents, along with smart refactoring options.

This page lists the features provided in the GML Code editor for [scripts](../Scripts.md) and [object events](../Object_Properties/Object_Events.md). These features will only be available if Feather is [enabled](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#s1), and are currently only supported in GML documents.

See Also

1.  [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md)
2.  [JSDoc Comments](JSDoc_Script_Comments.md)
3.  [Feather Data Types](Feather_Data_Types.md)
4.  [Syntax Errors (Feather Messages)](../../Additional_Information/Errors/Syntax_Errors.md)
5.  [Feather Directives](Feather_Directives.md)

## Candidate Window

The editor will display an auto-complete window, also known as a Candidate Window, under the symbol you are currently writing, if it is identified as a candidate.

For example, writing a function name will display matching symbols in a list below the candidate, along with a detail tooltip when available:

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_CodeCompletionWindow.png)You can also enter the initials of the split parts of a symbol name, e.g. writing sdm will show show\_debug\_message in the Candidate Window, icl will show instance\_create\_layer, and so on.

Press UP/DOWN to navigate this list, ENTER to select a symbol to use and ESCAPE to close the Candidate Window.

Pressing enter may make changes beyond entering the selected symbol, e.g. selecting a function will also insert a pair of parentheses and move the text cursor inside them if the function accepts arguments.

## Contextual Tooltip

A tooltip containing information about a function will show when you are within that function's parentheses, so you can read about the arguments as you are entering them:

![](../../assets/Images/The_IDE/Code%20Editor/CodeCompletion_Tooltip.png)The Candidate Window that appears will also display the type of the symbol that is highlighted, so you can match it against the type required by the function argument.

You can close this by pressing escape (if the Candidate Window is open, it will close first, and on a second press of escape this tooltip will close).

Hovering over a function, sprite, colour, or any other special value will also show a tooltip. You can see some examples below.

![](../../assets/Images/Asset_Editors/Editor_Scripts_FeatherHoverFunction.png)

Hovering over a function displays its manual description and lists all arguments.

![](../../assets/Images/Asset_Editors/Editor_Scripts_FeatherHoverSprite.png)

Hovering over a sprite displays its first frame and other information.

![](../../assets/Images/Asset_Editors/Editor_Scripts_FeatherHoverColour.png)

Hovering over a colour displays its RGB and HSV values, along with a CSS hex code.

## Identifier Refactoring

If you rename an asset in your Asset Browser, Feather will automatically update all mentions of it in your project's code, so those references don't break. This can be enabled or disabled in the [Feather Settings](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md).

You can also rename any asset or identifier (e.g. variables, functions) through the Code Editor. Place your text cursor on the identifier, and press **CTRL/CMD + R** (or use the right-click menu).

NOTE The Legacy Code Editor uses CTRL/CMD + SHIFT + R.

![](../../assets/Images/Asset_Editors/Editor_Scripts_FeatherRename.png)

Enter a new name and hit "**Apply**". The asset or identifier itself, and all references to it in your project, will be renamed.

## Quick Fixes

When you get an error or a warning in your code, place your text cursor on the reported line and press **CTRL/CMD + Q** to bring up the Quick Fixes menu. Alternatively, you can click on the ![](../../assets/Images/Icons/Icon_Feather.png) Feather icon in the [Gutter](../The_Text_Editor.htm#h1).

This menu shows you a quick fix if possible, and allows you to disable the rule or change its [severity](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#s3).

![](../../assets/Images/Asset_Editors/Editor_Scripts_FeatherQuickFix.png)

The example above shows a quick fix used for fixing an event where the surface target was not reset after being changed.

If you place your text cursor on a function header, you can open the Quick Fixes menu to generate [JSDoc Comments](JSDoc_Script_Comments.md) for the function:

![](../../assets/Images/Asset_Editors/JSDoc_Feather_Generate.png)

## Go To Declaration

Right-click on a symbol and select "**Go To Declaration**", or press F1 with your text cursor on a symbol to go to its declaration.

For built-in functions and variables, this will open the manual page for that symbol. For your own variables and functions, you will be taken to the document and the exact line/column where it was declared. Assets will open their respective editor window.

For user-defined functions with a @url [JSDoc parameter](JSDoc_Script_Comments.md), doing this will open that URL in the system browser.

You can choose the "**Preview Declaration**" option or press ALT + F1 to preview the declaration within the document.

## Find Usages

Feather allows you to find all references to an identifier throughout your project.

Place your text cursor on a variable and hit SHIFT + F1 (or use the right-click menu). A list of its usages will appear in the Search Results window at the bottom of the IDE.

NOTE The Legacy Code Editor uses F3 and SHIFT + F3.

![](../../assets/Images/The_IDE/Code%20Editor/CodeCompletion_FindUsages.png)This search is smart, so instead of simply [searching for a text string](../../IDE_Navigation/Menus/The_Edit_Menu.md), it looks for references of the selected variable from its declared scope. This means that two variables that have the same name but exist separately in two different objects, will not match.

## Snippets

Snippets are covered on this page: [Code Snippets](Code_Snippets.md) (for this editor, see the   section).