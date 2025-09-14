---
title: "The Edit Menu"
source: "manual.gamemaker.io/monthly/en/IDE_Navigation/Menus/The_Edit_Menu.htm"
converted: "2025-09-14T04:00:12.082Z"
---

# The Edit Menu

![The Edit Menu](../../assets/Images/IDE_Input/Edit_Menu.png)

The edit menu is where you can use the general edition tools of the GameMaker interface. The available options are:

-   **Undo**: Undo an action.
-   **Redo**: Redo a previous action.
-   **Search and replace**: This will open a search window which permits you to search through your entire code (including room creation code, scripts, and events) for a given input - see below for further information.

## Code Editor 2 Options

![](../../assets/Images/IDE_Input/Edit_Menu_CE.png)

NOTE The Code Editor 2 is currently opt-in. Enable it in the [Code Editor 2 Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

While it is disabled, assets with text documents like [Objects](../../The_Asset_Editors/Objects.md), [Scripts](../../The_Asset_Editors/Scripts.md), [Notes](../../The_Asset_Editors/Notes.md) etc. will open their respective editors, which make use of the Legacy Code Editor.

When [Code Editor 2 (Beta)](../../The_Asset_Editors/The_Text_Editor.md) is open, the Edit menu will contain the following extra options:

-   **Navigate**: This contains the following options for navigating the Code Editor 2:
    -   **Backward**: Move the text cursor back one entry in the [Text Cursor Location History](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h4), where each location is stored when you navigate to a symbol's declaration (through the context menu or the shortcuts F1/MMB). This is shared among editors, including editors that have been closed. Closed editors will be restored when needed. Multicursor locations are ignored.
    -   **Forward**: Move the text cursor forward one entry in the **Text Cursor Location History**.
    -   **Go To Line**: Opens the Go To Line dialog for the active document
    -   **Go To Type**: Opens the Go To Type dialog for switching to a different asset, option or preference
    -   **Next Document**: Move the text cursor to the next document
    -   **Previous Document**: Move the text cursor to the previous document
    -   **Next Region**: Move the text cursor to the next region
    -   **Previous Region**: Move the text cursor to the previous region
-   **Find & Replace**: This contains the following options:
    -   **Find In Editor**: Opens the Find window in the editor so you can search through the open documents.
    -   **Replace In Editor**: Opens the same Find window in Replace mode. See: [Find & Replace](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h2)
    -   **Find In Project**: Opens the global Search & Replace window, which is otherwise always present in the Edit menu.
-   **Reanalyze Project**: Reanalyze the project so [Code Completion](../../The_Asset_Editors/Code_Editor_Properties/Feather_Features.md) is up-to-date with information on assets.
-   **Regions**: Contains the following options:
    -   **Fold/Unfold region**: Fold/unfold the region at the text cursor
    -   **Fold All Regions**: Fold all the regions in the document
    -   **Unfold All Regions**: Unfold all regions in the document
    -   **Fold Active Document**: Folds the currently active document (e.g. if you are in the Step event, it will be folded)
    -   **Fold All Documents**: Folds all documents open in the editor (e.g. all Events in an Object)
    -   **Unfold All Documents**: Unfolds all documents open in the editor

## Search & Replace

When you select Search & Replace from the Edit menu, it will open the following window:

![Search In Assets Window](../../assets/Images/IDE_Input/Search_Menu.png)You can use this to search through all the scripted assets in your game, including room code, event code, scripts and shaders. When searching, you can type in a new search term in the box at the top, or you can click the arrow icon to the right to open a list of previously searched for terms. You also have the option to give a replacement term that will be used to replace the initial search term, and this too has an option to use a previously used replace string from the arrow button on the right.

Searches can be general or you can refine them using the options below the search term inputs:

-   You can choose to make the search **case sensitive**, in which case it will only include words that exactly match the search string case, ie: searching for "My\_Var" without this option and you will get results with "my\_var", "mY\_VAR", or "My\_Var", but with this option checked only "My\_Var" will be included in the search results.
-   You can choose to only include search results that include the **whole word only**, in which case any results that include the search term but aren't an exact match will be ignored, ie: a search for "game" without this checked will show up things like the function "game\_end()" or variables like "game\_state", while checking this and doing the search will only show results that are "game" itself.
-   You can choose to have the search **ignore comments**. When this is checked, any comments in your code that contain the search term will simply be ignored and not shown in the output results.
-   You can apply a **filter** on the search results based on the different asset types in the asset browser. By default this is set to "Everything", but clicking on this will open the following menu where you can check or uncheck assets to be included in the search:

![Search Filter Options](../../assets/Images/IDE_Input/Search_Menu_Filter.png)Once you have given a search (and optionally a replace) term and set up the search options, you can use the different buttons at the bottom to choose how to perform the search and any actions to take. These buttons are:

-   **Find All**: Find all the search terms and show them in the output window.
-   **Find Previous**: Find the previous instance of the search term. This will open the asset containing the reference in the workspace (if it's not already open) and pan to it.
-   **Find Next**: Find the next instance of the search term. This will open the asset containing the reference in the workspace (if it's not already open) and pan to it.
-   **Replace All**: This will perform a search for the given term with the options set and also replace it in the assets with the new replace term you have specified.
-   **Replace**: This will replace the currently selected term in the current editor where it's highlighted with the selected replace term.
-   **Stop Search**: Stop the current search if one is in progress.

Pressing the **Escape** key while this window is open will clear the selected field, however if that field is already empty, then it will close the window.

All results from using the Search & Replace window will be shown in the [Search Output Window](../../Introduction/The_Output_Window.md) at the bottom of the IDE. Each result can be ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) double-clicked to open the asset with the term in the current workspace and pan to it, ready for editing.