---
title: "Code Editor 2 Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.htm"
converted: "2025-09-14T04:00:13.929Z"
---

# Code Editor 2 Preferences

![](../../assets/Images/Setup_And_Version/Preferences/CE_Prefs_Main.png)This page describes all the preferences for [Code Editor 2 (Beta)](../../The_Asset_Editors/The_Text_Editor.md), which contains the following sections:

Contents

1.  [Main](Text_Editor_2_Preferences.htm#main)
    1.  [Editor View](Text_Editor_2_Preferences.htm#editor_view)
    2.  [Gutter](Text_Editor_2_Preferences.htm#gutter)
    3.  [Scrollbars](Text_Editor_2_Preferences.htm#scrollbars)
    4.  [Editor](Text_Editor_2_Preferences.htm#editor)
    5.  [Editing](Text_Editor_2_Preferences.htm#editing)
2.  [Theme](Text_Editor_2_Preferences.htm#h)

1.  [Theme Selector](Text_Editor_2_Preferences.htm#theme_selector)
2.  [General](Text_Editor_2_Preferences.htm#general)
3.  [Gutter](Text_Editor_2_Preferences.htm#gutter1)
4.  [Scopes](Text_Editor_2_Preferences.htm#scopes)

## Main

The main section contains the following options:

-   **Enabled**: Enable or disable the Code Editor 2, disabling will make it fall back to the Legacy Code Editor. Changing this option will require you to restart the IDE. (Default: Disabled)
-   **Open Asset in Inspector when Editor is opened**: When you open an asset in the Code Editor 2, and this option is enabled, [The Inspector](../../IDE_Tools/The_Inspector.md) will switch its focus to the newly opened asset so you can modify its properties. (Default: Enabled)
-   **Lock Documents when Debugger is active**: When enabled, all documents in the project will become read-only while the Debugger is active. When disabled, you can edit those documents during Debugging.
-   **Default Delete Document Choice**: This controls what happens when you choose to delete a document. You can choose to show the dialog message, or automatically delete (**Yes**) or not delete (**No**) the document.

### Editor View

-   **Navigation Orientation**: This controls where the Navigation Bar is shown in the [Editor Frame](../../The_Asset_Editors/The_Text_Editor.htm#h). The Navigation Bar is where you choose which asset and document is open for editing. (Default: Top)
-   **Show all documents in single view**: When enabled, all documents for an asset are shown one after another in the same editor (e.g. all events for an object, all shader files for a shader asset). When disabled, only one document is shown at a time, which can be changed from the Navigation Bar. (Default: Enabled)
-   **Padding lines preceding Document**: How many lines worth of padding is added above a document, useful when showing all documents in a single view. (Default: 1)
-   **Padding lines following Document**: How many lines worth of padding is added below a document. (Default: 4)

### Gutter

-   **Show line numbers**: Whether line numbers are displayed in the [Gutter](../../The_Asset_Editors/The_Text_Editor.htm#h1). (Default: Enabled)

### Scrollbars

-   **Scrollbar Mode**: The [Vertical Scrollbar](../../The_Asset_Editors/The_Text_Editor.htm#h2) mode to use. You can choose from the following:
    -   **Bar**: A simple vertical scrollbar is shown.
    -   **Small Map** / **Medium Map** / **Large Map**: A map is shown of the selected size. (Default: Medium Map)
-   **Show code preview when mouse hovers over scrollbar**: If enabled, hovering over the scroll map (if enabled) for a second will display a preview of the code at the position where the mouse is placed. (Default: Enabled)
-   **Allow overscroll**: When enabled, allows you to scroll beyond the end of the last document up until its last line leaving the top boundary of the editor view. (Default: Disabled)
-   **Show diagnostics on scrollbar**: Whether diagnostics (such as syntax errors) should be displayed on the scrollbar. (Default: Disabled)
-   **Show sticky headers for documents**: Whether document headers should stick to the top of the document view. (Default: Enabled)
-   **Show sticky headers for statements**: Whether foldable statements (such as if conditions, regions etc.) should stick to the top of the document view when the view has scrolled beyond it. (Default: Disabled)

### Editor

-   **Tab size**: The size of a tab. (Default: 4)
-   **Tab type**: The type of each tab inserted. You can choose from the following options:
    -   **Space**: Choosing this will insert "**Tab size**" number of spaces when you press tab. (Default)
    -   **Tab**: Choosing this will insert a single tab character when you press tab, which will be rendered as "**Tab size**" number of spaces.
-   **Detect tab type**: Enable this to use whichever tab type the currently open document is using, overriding the tab type set in the previous option. This is useful for ensuring consistency within a document, regardless of overall project-level consistency. (Default: Enabled)
-   **Show Indent Guide**: Display vertical indentation lines. See: [Guides](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h3). (Default: Enabled)
-   **Show whitespace**: Display whitespace guides (dots). See: [Guides](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h3). (Default: Disabled)
-   **Show Rainbow Brackets**: Enable [Rainbow Brackets](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h). Colours can be modified in the Theme section. (Default: Enabled)
-   **Highlight the line that the caret is on**: Whether the line where the text cursor is placed should be highlighted. (Default: Enabled)
-   **Highlight selection matches**: Whether occurrences of the selected text within the same document should be highlighted.
-   **Highlight symbol pairs**: Whether or not to highlight symbol pairs. (Default: Enabled)

### Editing

-   **Autofill JSDoc header comments**: Controls whether JSDoc is auto-generated for functions. See: [Auto-Generating JSDoc](../../The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.htm#h) (Default: Disabled)
-   **Auto-extend multiline comments on new line**: When writing multiline comments (/\* \*/, ///) if you press enter and this option is enabled, it will extend the comment to the new line as well. (Default: Enabled)
-   **Auto-insert braces**: Whether an ending brace should be auto-inserted when you write the beginning brace (e.g. {}, ()).
-   **Allow Overwrite Mode**: When enabled, pressing insert will toggle between insertion mode and overwrite mode. When disabled, nothing will happen, and the editor will stay on insertion mode. (Default: Enabled)
-   **Auto Indent Mode**: See [Auto-Indent](../../The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm#h1).
-   **Auto Indent clipboard contents**: Whether automatic indentation should be applied to pasted code. WARNING This feature is currently disabled and will not have any effect.
-   **Allow selected text to be dragged and dropped**: This controls whether you are able to drag and drop selected text in an editor from one place in the document to another.
-   **Trim leading whitespace on backspace**: When deleting whitespace at the start of a line using backspace, this controls whether the newline character before the whitespace is deleted as well, joining both lines together.
-   **Insert separating whitespace when joining lines**: This controls whether whitespace is inserted when pressing Backspace at the start of a line to join it with the line before.
-   **Prefer strict commenting of selected text over commenting selected lines**: When enabled, commenting selected text with CTRL+K will comment from the start of the selection to the end of the selection. When disabled, all selected lines will completely be commented out regardless of where the text selection begins or ends within the lines. (Default: Enabled)
-   **Undo/Redo stack limit**: Size of the undo/redo stack limit which controls how many undo commands you can perform. Any value below 0 is considered "unlimited". (Default: 200)

## Theme

The Theme section allows you to modify how documents are rendered in the editor.

![](../../assets/Images/Setup_And_Version/Preferences/CE_Prefs_Theme.png)The first option is the font used by the Code Editor 2. Fonts that are fixed-width (which are recommended for coding over non-fixed-width fonts) are **bolded** in the drop-down list.

You can also choose the size of the font, and whether to enable ligatures for fonts that use them.

### Theme Selector

This contains a drop-drop menu for theme selection, with the default being "**GameMaker Dark - Default**". You can edit any properties of the default theme.

You have the option to make a new, custom theme by clicking on "**New...**", which will give you the following options:

-   **from File**: Allows you to load a [TextMate](https://macromates.com/manual/en/themes) file.
-   **from Copy of Selected**: Creates a copy of the selected theme that you can edit.

Once you have created a custom theme, you can delete it from the same drop-down menu.

Clicking on "**Restore Default Colours**" will do the following:

-   Reset the "**GameMaker Dark - Default**" theme to its default properties, removing all your changes to it.
-   Reset all themes loaded from files to the values at the time of load.
-   Reset all copied themes to the defaults of their original themes.

### General

In this section you can define the colours used in the document view, such as the Background, Foreground, Caret, Line Highlight and Selection.

### Gutter

This contains colours for the [Gutter](../../The_Asset_Editors/The_Text_Editor.htm#h1) elements, like its background and foreground colours, colour of the divider between the document view and the gutter, colour of the togglable rail and the colour of the document header text.

### Scopes

![](../../assets/Images/Setup_And_Version/Preferences/CE_Prefs_Theme_Scopes.png)This allows you to edit the colour for each scope that can be detected in a document. You can change the foreground and background colours, and whether to use bold, italic and/or underline formatting.

Each scope is written using the formatting settings chosen for it, functioning as a preview. Double-clicking on a scope allows you to edit its name and scope identifier(s).

You can add a new scope by selecting "**Add Scope**" at the bottom. If a language contains a scope that is not in the list, you can add it from here and define its formatting.

![](../../assets/Images/Setup_And_Version/Preferences/CE_Prefs_Theme_Scope_Add.png)The "**Name**" field is the display name of the scope shown in this list, and the "**Scopes**" field is a list of scopes to cover under this name, separated by commas.

You can use this to add colours for deeper levels of brackets, as the default list goes from punctuation.rainbow.1 to punctuation.rainbow.4.