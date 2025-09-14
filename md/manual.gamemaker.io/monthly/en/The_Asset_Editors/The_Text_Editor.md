---
title: "Code Editor 2 (Beta)"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/The_Text_Editor.htm"
converted: "2025-09-14T04:00:16.965Z"
---

# Code Editor 2 (Beta)

![](../assets/Images/The_IDE/Code%20Editor/CE_Main.png)Code Editor 2 is used to edit text files in your GameMaker projects.

You will mostly use this to edit [Object Events](Object_Properties/Object_Events.md) and [Scripts](Scripts.md), however it is also used for:

-   [Shaders](Shaders.md)
-   [Timelines](Timelines.md)
-   [Notes](Notes.md)
-   [Extension](Extensions.md) files
-   [Creation code](Room_Properties/Room_Properties.md) of a room, and the creation code of a [room instance](Room_Properties/Layer_Properties.md)

If your game contains any [Included Files](../Settings/Included_Files.md) or [Extension](Extension_Creation/Creating_An_Extension.md) files of the formats given below, they will be editable in Code Editor 2 through the right-click menu:

[Included Files Supported FormatsIncluded Files Supported Formats](The_Text_Editor.htm#)

-   **JSON** – .json
-   **YAML** – .yml
-   **INI** – .ini, .conf
-   **XML** – .xml, .xsd, .tld, .jsp, .pt, .cpt, .dtml, .rss, .opml
-   **CSV** – .csv
-   **Markdown** – .txt, .md
-   **C,** **C++** – .c, .cpp, .cxx, .cc, .c++, .h, .hh, .hpp, .hxx, .h++
-   **Objective-C,** **Objective-C++** – .m, .mm, .h, .hh
-   **Java** – .java, .bsh

Each file that the editor can open and edit is referred to as a "document", e.g. each event in an object is a separate document, the vertex and fragment shaders are two documents, a room's Creation Code is a document, and so on.

NOTE The Code Editor 2 is currently opt-in. Enable it in the [Code Editor 2 Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

While it is disabled, assets with text documents like [Objects](Objects.md), [Scripts](Scripts.md), [Notes](Notes.md) etc. will open their respective editors, which make use of the Legacy Code Editor.

Contents

1.  [Editor Frame](The_Text_Editor.htm#h)
    1.  [Workspace Tab Menu](The_Text_Editor.htm#workspace_tab_m)
2.  [Navigation Bar](The_Text_Editor.htm#h3)
3.  [Gutter](The_Text_Editor.htm#h1)
4.  [Vertical Scrollbar](The_Text_Editor.htm#h2)
5.  [Horizontal Scrollbar](The_Text_Editor.htm#h4)
6.  [Further Reading](The_Text_Editor.htm#further_reading)

## Editor Frame

Code Editor 2 always opens in a new workspace tab, containing the editor itself, with a frame around it:

![](../assets/Images/The_IDE/Code%20Editor/CE_Editor_Frame.png)

NOTE Closing an editor window will automatically save any unsaved changes in open documents.

This page covers all parts of the Editor Frame. For information on writing code inside the editor, see [Editing Code](Code_Editor_Properties/Editing_Code.md) and [Code Completion](Code_Editor_Properties/Feather_Features.md).

### Workspace Tab Menu

![](../assets/Images/Icons/Icon_RMB.png) Right-clicking the workspace tab for Code Editor 2 will display the following options:

![](../assets/Images/The_IDE/Code%20Editor/CE_Workspace_Tab_Option.png)These are the Code Editor 2\-specific options:

-   **Show in Asset Browser**: Selects the asset being edited in [The Asset Browser](../Introduction/The_Asset_Browser.md)
-   **Show in Inspector**: Shows the asset being edited in the [The Inspector](../IDE_Tools/The_Inspector.md)
-   **Open in Explorer**: Shows the asset being edited in your operating system's file browser
-   **Copy Full Path**: Copies the full path to the asset being edited to your clipboard

## Navigation Bar

This is the most important part of the Editor Frame.

Here you can change which asset you are working on, the document within that asset being edited, and focus on a particular variable or function definition in the active document.

![](../assets/Images/The_IDE/Code%20Editor/CE_NavBar.png)This bar contains the following parts:

-   **Asset Selection**: The first drop-down lets you change the asset being edited. This can be any of the assets listed at the top of the page. You can click the ![](../assets/Images/Icons/Icon_AddArgument.png) button to add a new asset from a list of supported assets.

    **ALT/OPT** **\+ 1** opens this dropdown, and ******ALT/OPT**** + SHIFT + 1** opens the "Create Asset" menu.
-   **Document Selection**: The second drop-down lets you change the document being edited. This is most useful in objects, as each event is a different document, you can change the event in focus. You can click the ![](../assets/Images/Icons/Icon_AddArgument.png) button to add a new document (which, in case of an object, adds a new event).

    For Shaders, this shows the Vertex and Fragment Shader files, and for Timelines it shows the moments.

    ****ALT/OPT**** **+ 2** opens this dropdown, and ******ALT/OPT**** + SHIFT + 2** opens the "Create Document" menu.
-   **Declaration Selection**: The third drop-down lets you jump to a declaration within the open document, for example, a variable or a function being declared. Declarations inside a constructor function will appear indented under the name of that constructor, for example here for a constructor function called vector3:
    ![](../assets/Images/The_IDE/Code%20Editor/Declarations_Constructor.png)****ALT/OPT**** **+ 3** opens this dropdown.

    Each declaration is shown with an icon indicating its type:
    -   ![](../assets/Images/Icons/CE2/icon_localvar.png): This indicates a local variable.
    -   ![](../assets/Images/Icons/CE2/icon_func.png): This indicates a function.
    -   ![](../assets/Images/Icons/CE2/icon_var.png): This indicates any other type of variable.
-   **Orientation**: The bar then contains a drop-down menu to detach the Navigation Bar into its own draggable window, or attach it to any of the four sides of the frame. Clicking this button will cycle through each option, or you can click on the arrow to select the option you need.
    ![](../assets/Images/The_IDE/Code%20Editor/CE_Orientation.png)
    -   Changing this will also update its corresponding [preference](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md), meaning any future Code Editor 2 windows will use this new orientation. Inversely, changing the preference will update the orientation used in editor windows.
-   **Splitter**: The final, rightmost button on this bar is the Splitter. Clicking and dragging this in either direction will let you split Code Editor 2 into a duplicate view, which will display the same document(s) open in the main editor. You can also right-click to split the view vertically.

NOTE Changing the active document when you have split views open will remove those split views and reset the editor to a single view.

## Gutter

The gutter is a vertical column that appears to the left of your code, where the line numbers are displayed:

![](../assets/Images/The_IDE/Code%20Editor/CE_Gutter.png)The gutter is further divided into different "rails", which are the columns from left to right:

-   **Togglables**: The left-most gutter is highlighted and contains [bookmarks](../IDE_Navigation/Bookmarks.md) and [breakpoints](../../../../IDE_Tools/The_Debugger.md). When editing a GML document, clicking on this rail next to a line of code will create a breakpoint.
-   **Contextual**: Moving right, the contextual rail will show the ![](../assets/Images/Icons/Icon_Feather.png) [Quick Fixes](Code_Editor_Properties/Feather_Features.htm#h1) button when the text cursor is placed over a [syntax error](../Additional_Information/Errors/Syntax_Errors.md).
-   **Line Numbers**: The rightmost rail within the gutter shows line numbers for the open document.
-   **Folding**: Folding buttons (![](../assets/Images/Icons/Icon_Fold.png)) appear on the edge of the gutter, allowing you to fold documents, {} bracket blocks and regions within a document.
    -   Additionally, [switch](../GameMaker_Language/GML_Overview/Language_Features/switch.md) cases and [multiline comments](../GameMaker_Language/GML_Overview/Commenting_Code.md) are also foldable.

## Vertical Scrollbar

The rightmost edge of the Editor Frame displays a vertical scrollbar, which has some additional functionality beyond just scrolling.

![](../assets/Images/The_IDE/Code%20Editor/Vertical_Scrollbar.png)By default, this contains a minimap next to the scrollbar (which can be disabled or resized in the [Code Editor 2 Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md)). This displays a preview of your code, to give you a general idea of the code structure, so you can jump between different parts of the document.

Hovering over a part of the minimap will temporarily display the code at that position, as seen on the left in the image above. The preview will continue to be displayed until your mouse cursor leaves the minimap area.

You can enable the "**Show diagnostics on scrollbar**" [preference](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) to display diagnostics (i.e. errors, warnings and suggestions) as small lines on the scrollbar:

![](../assets/Images/The_IDE/Code%20Editor/Vertical_Scrollbar_Diagnostics.png)The scrollbar also allows overscroll, allowing you to scroll past the end of the document (or the last document) to make editing more convenient. This can be enabled from the [preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

## Horizontal Scrollbar

![](../assets/Images/The_IDE/Code%20Editor/CE_HorBar.png)

The horizontal scrollbar appears at the bottom of the frame, to scroll left or right. This has the following parts:

-   The leftmost drop-down menu controls the zoom level of all Code Editor 2s in the current session. This does not persist across sessions, as such it is only meant for temporary use during the current IDE session. To change the size of your text permanently, modify the [Code Editor 2 Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md) or the DPI in the [General Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General_Preferences.md).
-   To the right of the scrollbar itself, you will see "**OVR**" if you pressed insert to enable Overwrite Mode. When in Insert Mode, nothing is shown here.
-   Then, the current line and column number of the text cursor are displayed ("**Ln Y, Col X**"). Clicking on this opens the "**Go To Line**" dialog (which can also be opened with CTRL/CMD + G).
-   Finally you have a drop-down to change the language of the document (where it says "**GML**" for a GML Code document). When switching between GML Code and GML Visual, only the focused event will be modified. The languages that appear in the list will depend on the type of document that is open.

## Further Reading

Read these pages to learn more about writing code in Code Editor 2:

-   [Editing Code](Code_Editor_Properties/Editing_Text.md)
-   [Feather Features](Code_Editor_Properties/Feather_Features.md)
-   [JSDoc Script Comments](Code_Editor_Properties/JSDoc_Script_Comments.md)
-   [Feather Data Types](Code_Editor_Properties/Feather_Data_Types.md)
-   [Feather Directives](Code_Editor_Properties/Feather_Directives.md)
-   [Code Snippets](Code_Editor_Properties/Code_Snippets.md)

Also see the preferences:

-   [Code Editor 2 Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md)