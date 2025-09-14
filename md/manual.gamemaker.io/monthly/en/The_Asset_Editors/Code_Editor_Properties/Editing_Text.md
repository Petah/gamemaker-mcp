---
title: "Editing Code"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Editing_Text.htm"
converted: "2025-09-14T04:00:14.983Z"
---

# Editing Code

The Code Editor 2 will open when you create an asset that requires it (e.g. Objects, Scripts, Shaders, etc.).

As described on [Code Editor 2 (Beta)](../The_Text_Editor.md), some asset types contain **documents** within them. For example, Objects have **events**, Timelines have **moments**, and Shaders have **fragment** and **vertex** shaders, which are separate **documents** within an asset.

For Objects and Timelines, since they won't have any documents to begin with, you will see this:

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_CTA.png)You can click on the "**Add \[Document\]**" button to create your first document (in this example, clicking on "**Add Event**" would open the **Events** menu as it is an object).

Contents

1.  [Editing GML](Editing_Text.htm#editing_gml)
2.  [Documents & Headers](Editing_Text.htm#documents_&_hea)

1.  [Context Menu](Editing_Text.htm#context_menu)
2.  [Parent View](Editing_Text.htm#parent_view)
3.  [Navigation Between Documents](Editing_Text.htm#navigation_betw)

4.  [Writing Code](Editing_Text.htm#writing_code)

1.  [Document Manipulation](Editing_Text.htm#document_manipu)
2.  [Text Cursor Navigation](Editing_Text.htm#text_cursor_nav)
3.  [Text Cursor Location History](Editing_Text.htm#h4)
4.  [Context Menu](Editing_Text.htm#context_menu1)
5.  [Code Folding](Editing_Text.htm#code_folding)

6.  [Multicursor](Editing_Text.htm#multicursor)
7.  [Code Selection](Editing_Text.htm#code_selection)
8.  [Find & Replace](Editing_Text.htm#h2)
9.  [Indentation Modes](Editing_Text.htm#indentation_mod)

1.  [Auto-Indent](Editing_Text.htm#h1)

11.  [Rendering](Editing_Text.htm#rendering)

1.  [Highlighting](Editing_Text.htm#highlighting)
2.  [Text Highlighting](Editing_Text.htm#text_highlighti)
3.  [Guides](Editing_Text.htm#h3)
4.  [Rainbow Brackets](Editing_Text.htm#h)
5.  [Tooltips](Editing_Text.htm#tooltips)
6.  [International Support (RTL)](Editing_Text.htm#international_s)

13.  [Further Reading](Editing_Text.htm#further_reading)

## Editing GML

For GML documents, the Code Editor 2 will display either [GML](../../GameMaker_Language.md) Code or GML Visual depending on the type of the document.

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_CodeNVis.png)The rightmost button in the [Horizontal Scrollbar](../The_Text_Editor.htm#h4) allows you to switch between GML Code and GML Visual.

The rest of this page will cover editing text-based documents, i.e. anything that is not GML Visual.

For GML code completion features, see: [Code Completion](Feather_Features.md)

## Documents & Headers

By default, the editor will display all documents for the current asset at the same time, one after another. This can be disabled in the [Code Editor 2 Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

For example, all events for an [Object](../Objects.md) or both [Shader](../Shaders.md) files are displayed within the same editor:

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_DocumentView.png)Each document begins with a "header", e.g. where it says "**Create**" before the contents of the Create event above, or "**Vertex Shader**" in the Shader asset. You can press  ![](../../assets/Images/Icons/Icon_Fold.png)  next to it in the [Gutter](../The_Text_Editor.htm#h1) (on the left-hand side) to collapse that document.

When scrolling down into a document, its header will stick to the top so you can see the name of the document. This can be disabled from the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

You can also enable sticky Statement Headers, so the initial lines for foldable regions stick to the top while they're visible.

### Context Menu

You can right-click on a Document Header for options that are specific to the opened asset. For Object Events, the options shown are the same as those for an event's context menu, which are documented on [Object Events](../Object_Properties/Object_Events.md).

### Parent View

For Objects, parent events will be displayed in child objects but will be greyed out unless they are overridden/inherited.

The document header for such events will display a menu, where you can choose to open the original event for editing, inherit the event or override it:

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_EventParents.png)

For more information, see [Parent Objects](../Object_Properties/Parent_Objects.md).

### Navigation Between Documents

When all documents are displayed in the same editor, you can easily navigate between them by scrolling or using the [Vertical Scrollbar](../The_Text_Editor.htm#h2).

You can have your text cursor at the last line of your event, and press the **down arrow key** to move to the first line of the next event document.

There are some handy shortcuts for document navigation:

-   **ALT/OPT + UP/DOWN**: Go to the previous (up) or next (down) document. The text cursor position is preserved from when you last left a document.
-   **ALT/OPT + SHIFT + M**: Fold all documents. Useful for navigating between events if you have a lot of them.
-   **ALT/OPT + SHIFT + U**: Unfold all documents.
-   **ALT/OPT + M**: Fold the currently active document (the one where your text cursor is present).
-   CTRL/CMD + HOME/END: Go to the first or last line of the active document.
-   CTRL/CMD + ALT/OPT + HOME/END: Go to the first or last line among all the open documents.

## Writing Code

While writing code you will get syntax highlighting and auto-complete for the language you are currently editing.

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_CodeCompletionWindow.png)This [Candidate Window](Feather_Features.htm#h3) will pop up while you are writing your code (normally after a slight pause, but this can be set in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md)) and give you a selection of "best-fit" answers in alphabetical order, followed by close suggestions.

Initials of symbol names are also accepted (like mgc above showing mp\_grid\_c... functions). For other features when editing GML Code, see [Code Completion](Feather_Features.md).

Documents can also have JSDoc comments that define the properties of the functions they contain, so when you use the functions in your code they show up in auto-complete along with their arguments and other details. See [JSDoc Comments](JSDoc_Script_Comments.md) for more information.

### Document Manipulation

Here are some basic inputs for manipulating a document:

NOTE Shortcuts can be modified through the [Redefine Keys Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Redefine_Keys_Preferences.md).

-   backspace: Deletes a single character at the text cursor's position. If at the start of a line, the newline is deleted and the text cursor is moved to the end of the previous line. If the "Auto insert braces" feature is enabled and the erased character is an initiating brace and the next character is a terminating brace, then both braces are deleted.
-   ctrl/OPT + backspace: Erases a word at the text cursor's position. All other BACKSPACE rules are inherited.
-   delete: Deletes the next character ahead of the text cursor. When at the end of a line, the next newline character is deleted, and the contents of the next line are joined into the current line.
-   ctrl/OPT + delete: Erases a word ahead of the text cursor. All other delete rules are inherited.
-   enter: Inserts a newline at the text cursor's position. If enabled by preference, and the text cursor is inside of a multiline comment (`///` or `/*`), then the comment is extended to match the comment style on the next line.
-   tab: Inserts a tab at the text cursor. When text is selected, all selected lines are tabbed.
-   shift + tab: Untabs the current line or the selected lines.
-   ctrl/CMD + d: Duplicates the current line or the selected lines.
-   ctrl/CMD + j: Joins the current line with the next line, deleting the newline character at the end of the current line.
-   CTRL/CMD + K: Comments the current line or selection.
-   CTRL/CMD + SHIFT + K: Uncomments the current line or selection.
-   ctrl/CMD + x or shift + delete: If text is selected then the selected text is deleted and copied to the OS clipboard. If no text is selected and the line is not empty, then the whole line is deleted and copied to the OS clipboard. If no text is selected and the line is only whitespace or empty then the line is still deleted but nothing is copied to the clipboard.
-   ctrl/CMD + c or ctrl + insert: If text is selected then the selected text is copied to the OS clipboard. If no text is selected and the line is not empty, then the whole line is copied. If no text is selected and the line is only whitespace or empty then nothing is copied to the OS clipboard.
-   ctrl/CMD + v or shift + insert: Inserts text from the OS clipboard at the text cursor's position (if text is in the OS clipboard).
-   ctrl/CMD + z: Undoes a single change to the active document.
-   ctrl/CMD + y or ctrl/CMD + shift + z: Redoes a single change to the active document.
-   insert: Toggles between Overwrite and Insert modes, if the preference is enabled. Otherwise nothing happens.
-   { ( \[ " or begin: If enabled via preference, then the associated terminating brace is auto-inserted.
-   } ) \] or ": If an associated initiating brace is found then the text cursor overwrites/skips past this symbol.

### Text Cursor Navigation

This section covers navigating with the text cursor.

The text cursor's actions are limited to the current document, even when multiple documents are visible at once, so something like selecting text via keyboard navigation will not continue the selection into the next/previous document.

The following inputs can be used for navigating with the text cursor:

-   LMB: Move the text cursor to the mouse position
-   Arrow keys: Move the text cursor left/right/up/down
-   CTRL/CMD + LEFT/RIGHT: Move left/right by one word boundary (a word is defined as alphanumeric\_.)
-   CTRL/CMD + UP/DOWN: Scroll the view up/down by 1 line
-   ALT/OPT + UP/DOWN: Move the text cursor to the previous/next document
-   CTRL/CMD + ALT + UP/DOWN: Move the text cursor to the previous/next region within the active document
-   HOME: Move the text cursor to the start of the first non-whitespace character on the line, when pressed again it moves the text cursor to the true start of the line. Continuous pressing toggles between these two positions.
-   END: Move the text cursor to the end of the line.
-   CTRL/CMD + HOME/END: Move the text cursor to the start or end of the active document
-   PAGE UP/PAGE DOWN: Move the text cursor up or down a full page (i.e. the number of lines visible in the editor), limited to the active document
-   CTRL/CMD + {: Move the Text Cursor to the matching brace under the text cursor, toggling between opening and closing brace. If the text cursor is not currently under a brace, but is inside of a braced region, the text cursor is moved to the opening brace; otherwise nothing happens.

### Text Cursor Location History

The text cursor's location is logged in the history when you modify text on a new line, or use **Go To Declaration**. You can navigate this history to restore the text cursor's location using the following shortcuts:

-   CTRL/CMD + MINUS: Move the text cursor back one entry in the **Text Cursor Location History**, which is shared among editors, including editors that have been closed. Closed editors will be restored when needed. Multicursor locations are ignored.
-   CTRL/CMD + SHIFT + MINUS: Move the text cursor forward one entry in the **Text Cursor Location History**.

### Context Menu

Right-clicking anywhere within the Editor will show you the following options:

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_RMBMenu.png)These options are explained below:

-   **Go To Declaration** (F1): Navigates to the identifier's declaration (or manual entry, in case of a built-in GML identifier)
-   **Preview Declaration** (ALT + F1): Previews the identifier's declaration (or manual entry, in case of a built-in GML identifier)
-   **Find Usages** (Shift + F1): Finds all usages of the identifier and displays them in the Search Results window
-   **Refactor Identifier** (CTRL/CMD + R): Rename the identifier
-   **Cut** (CTRL/CMD + X): Cut the selected text, or the whole line when no text is selected
-   **Copy** (CTRL/CMD + C): Copy the selected text, or the whole line when no text is selected
-   **Paste** (CTRL/CMD + V): Paste text, replacing any selected text
-   **Select All** (CTRL/CMD + A): Select all text in the document
-   **Insert...**:
    -   **UUID:** A random [UUIDv4](https://en.wikipedia.org/wiki/Universally_unique_identifier) in 00000000-0000-0000-0000-000000000000 format, replacing any selected text
    -   The options below appear only when text is selected:
        -   **MD5:** Hashes and replaces selected text with the MD5 algorithm
        -   **SHA1:** Hashes and replaces selected text with the SHA1 algorithm
        -   **SHA256:** Hashes and replaces selected text with the SHA256 algorithm
        -   **To Base 64:** Converts selected text to base64 encoded text
        -   **From Base 64:** Converts selected text from base64 encoded text. If the selected text is not a valid base64 string then nothing happens.
-   **Edit**:
    -   **Tab In** (TAB): Tab the current line
    -   **Tab Out** (SHIFT + TAB): Untab the current line
    -   **Comment** (CTRL/CMD + K): Comment line
    -   **Uncomment** (CTRL/CMD + SHIFT + K): Uncomment line
    -   **Duplicate** (CTRL/CMD + D): Duplicate the current line
    -   **Join Lines** (CTRL/CMD + J): Joins current line and next line
    -   **Sort lines alphanumerically:** Sorts the selected lines alphanumerically, only shows when there is a valid selection
-   **Regions**:
    -   **Fold All Regions** (CTRL/CMD + M): Fold all the regions in the document
    -   **Unfold All Regions** (CTRL/CMD + U): Unfold all regions in the document
    -   **Fold/Unfold region** (CTRL/CMD + ENTER): Fold/unfold the region at the text cursor
-   **Convert case to...** (_when text is selected_)
    -   **UPPERCASE** (CTRL/CMD + SHIFT + U): Converts selected text to UPPERCASE
    -   **lowercase** (CTRL/CMD + U)**:** Converts selected text to lowercase
    -   **Proper Case** (ALT/OPT + U): Converts selected text to Proper Case
    -   **Sentence case** (CTRL/CMD + ALT + U): Converts selected text to Sentence case
    -   **iNVERTED:** Converts selected text to iNVERTED cASE where uppercase characters are converted to lowercase and vice versa
    -   **rAndOM cAse:** Converts selected text to random casing

Also see: Contextual options in [The Edit Menu](../../IDE_Navigation/Menus/The_Edit_Menu.md).

### Code Folding

For GML documents, the following parts are foldable:

-   [Function](../../GameMaker_Language/GML_Overview/Script_Functions.md) declarations
-   if, else, for, while, repeat, do, with, switch, case, default
    -   Folding for these is only provided if the body is surrounded in {} brackets (multi-line)
    -   The exception to this are switch statements and their cases, which do not require brackets for folding
-   Any {} brackets, begin ... end
-   Multi-line comments (///, /\* ... \*/)
-   Regions (#region ... #endregion)

## Multicursor

The Code Editor 2 supports multiple text cursors at once, in a single document, allowing you to insert text in multiple places.

The following inputs make use of this functionality:

-   CTRL/CMD + ALT/OPT + LEFT/RIGHT: When text is selected, it searches the document for all substrings of the selected text, and places multicursors at the beginning/end of all occurrences
-   ALT/OPT + SHIFT + UP/DOWN: Insert a multicursor on the previous/next line if none exist, extending the box selection
-   ALT/OPT + SHIFT + LEFT/RIGHT: Extend box selection left/right
-   ALT/OPT + LMB: Move the cursor to the line/column under the mouse in box selection mode
-   ESCAPE: Clear multicursors if any are set

As multicursors are inserted, the last one becomes the active text cursor. When a navigation input clears the multicursor selection, this is the place where the single, active text cursor will be placed.

## Code Selection

You can select parts of your text using the following inputs:

-   **LMB - Click and drag**: Select a row (or rows) of code
-   **LMB - Double-click**: Select the word underneath the mouse cursor. Continues selecting on word boundaries if held and dragged.
-   **LMB - Triple-click**: Select the line underneath the mouse cursor. Continues selecting on line boundaries if held and dragged.
-   **LMB - Click on Gutter line number**: Select the whole line
-   **Alt/Opt + LMB - Click and drag**: Select a rectangular part of your code (column selection, as opposed to row selection). Each row selected will get a text cursor, allowing you to edit multiple lines at once.
-   **Shift + lmb**: Select text from the text cursor to the mouse cursor. Continues selecting if held and dragged.
-   **Ctrl/CMD + A**: Select all text in the active document (other visible documents are **not** selected).
-   **Escape**: Deselect all text in the active document (if no tooltips or other dialogs are open).

Anything selected can be copied, cut or pasted using the standard keyboard shortcuts of **CTRL/CMD + C,** **CTRL/CMD + X** and **CTRL/CMD + V**.

While a selection is active, you can:

-   **Drag an asset from the Asset Browser into the Code Editor 2**: This will replace the selected text with the name of the asset
-   **Click and drag with LMB**: Move the selected text to a new position. This can be disabled from the [preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).
-   **Indent** the line(s) with **Tab** and **reverse-indent** with **Shift + Tab**
-   Press CTRL/CMD + R to rename the selected identifier
-   Comment the selected lines or text with CTRL/CMD + K. If the selection starts or ends in the middle of a line, a multicomment /\* \*/ will be inserted so only the selected text is commented. Uncomment with CTRL/CMD + SHIFT + K.

## Find & Replace

The Find & Replace window lets you search for text within all open documents in an Editor window, and optionally replace occurrences with a new string of text.

Press CTRL/CMD + F to open this window in Find mode, and CTRL/CMD + H to open it in Replace mode.

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_FNR.png)The text field allows you to enter a string of text to search for in the document(s), and contains a drop-down menu that display your past searches (limited to the current session of the IDE, however shared by all editor windows).

This window contains the following buttons:

-   ![](../../assets/Images/Icons/Icon_ExactWord.png): When enabled, the search will only highlight those strings that match the whole input string. For example, with it turned off, a search for "_random_" will show all words that contain this string - like irandom(), or randomise() - while enabling it would only show the function random().
-   ![](../../assets/Images/Icons/Icon_CaseSensitive.png): This filters the search so only occurrences that match the exact case of the input string are shown. For example, if you have a sprite called "spr\_Dog" and do a search for "dog" with this toggle _off_, then the sprite string will be highlighted, however if the toggle is _on_ then it won't since "Dog" is no longer considered the same as "dog".
-   ![](../../assets/Images/Icons/Icon_RegexSearch.png): Enabling this will allow you to enter a [Regular Expression](https://en.wikipedia.org/wiki/Regular_expression) into the search field, giving you more flexibility in searching for text.
-   ![](../../assets/Images/Icons/Icon_PreviousTerm.png): This will highlight the previous search occurrence.
-   ![](../../assets/Images/Icons/Icon_NextTerm.png): This will highlight the next search occurrence.
-   ![](../../assets/Images/Icons/Icon_ReplaceToggle.png): This toggles Replace Mode.

In Replace mode, a second text field allows you to enter a string of text to replace search results with. This mode contains the following buttons:

-   ![](../../assets/Images/Icons/Icon_ReplaceNext.png): Clicking this will replace the next search string found in the document with the given replace string. Note that the "next" term is considered the next one after the current cursor position.
-   ![](../../assets/Images/Icons/Icon_ReplaceAll.png): Clicking this will replace _all_ examples of the search string within the document using the given replace string.

Note that if you want to do a **global search** (i.e.: search the whole project rather than the currently open documents), then you can press CTRL/CMD + SHIFT + F.

## Indentation Modes

From the [Code Editor 2 Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md), you can choose to use spaces or tabs for indentation (i.e. what is inserted when you press tab in a document).

The "**Tab Size**" preference determines how long your indentation tabs are. When using spaces for indentation, pressing TAB will insert this number of spaces. When using tabs, it will insert one tab character which appears as long as the number of spaces set in "**Tab Size**".

Upon pasting code into the editor which contains leading whitespace, that whitespace will be converted into your selected indentation mode, e.g. you insert a line starting with 6 spaces, and you are using tab characters with a "**Tab Size**" of 4, then the first 4 spaces in the pasted line will become a tab character and the rest 2 will remain spaces (as there are not enough to be converted into a tab character).

The "**Detect Tab Type**" preference, enabled by default, makes the editor use whichever indentation mode the currently open document is using, overriding the mode set in preferences. This is useful for ensuring consistency within a document, regardless of overall project-level consistency.

### Auto-Indent

Inserting a new line will auto-indent the next line where appropriate (e.g. after starting an if statement).

Auto-indentation is also supported for code pasted from the clipboard, which can be enabled from the [preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md), with one of the following indent modes:

-   **None**: No indentation is inserted by the editor
-   **Keep**: The current line's indentation is copied to new lines
-   **Braces**: In addition to the previous behaviour, blocks beginning with {, (, \[ or begin are indented.
-   **Full**: In addition to the previous behaviour, rules from the document's language are also applied (e.g. for GML, switch cases will be intended, etc.)

## Rendering

This section covers how the Code Editor 2 renders parts of your code.

Part of this is covered under [Code Completion](Feather_Features.md).

### Highlighting

By default, the line your text cursor is on is highlighted. You can change this in the [Code Editor 2 Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_Highlight_Squiggles.png)Code will also be highlighted by "diagnostic squiggles", lines appearing under the offending part of code. There are three types of squiggles:

-   **Error**: These appear in a red colour
-   **Warning**: These appear in a yellow colour
-   **Suggestion**: These appear in a blue colour

You can change these colours in the [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) settings. Read more about errors on [Syntax Errors (Feather Messages)](../../Additional_Information/Errors/Syntax_Errors.md).

### Text Highlighting

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_Highlighting.png)The Code Editor 2 will highlight parts of your text:

-   All supported [JSDoc identifiers](JSDoc_Script_Comments.md) (e.g. @desc, @param, @url, etc.)
-   Hyperlinks in comments and strings
-   Comments started with BUG, TODO or HACK
-   Escape codes in strings (e.g. \\n, \\")

It will also highlight matching occurrences when you have your text cursor on a symbol. For example:

-   Other occurrences of the word beneath your text cursor will be highlighted
-   If you have text selected, other occurrences of the selected string are highlighted
-   The other end of a bracket pair (\[\], {}, (), or begin...end) is highlighted
-   If the text cursor is on a break or a continue, the parent loop or statement (for, while or case) is highlighted

### Guides

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_Guides.png)Indentation guides are enabled by default, and appear as vertical lines, which can be disabled from the [preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md).

Whitespace guides can also be enabled, which will render spaces as dots and tab characters as horizontal lines.

### Rainbow Brackets

Rainbow Brackets are [enabled by default](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md). This colours each pair of brackets at a level ({}, (), \[\], \[? \], \[| \], begin, end, etc.) with the same colour, making it easier to identify where a block begins and ends.

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_RainbowBrackets.png)You can change these colours in a [Theme](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.htm#h) and also define colours for deeper levels.

### Tooltips

Tooltips appear when hovering over part of your code that is either highlighted by diagnostics, or is a keyword that has documentation (for custom functions, [JSDoc](JSDoc_Script_Comments.md) information is shown).

![](../../assets/Images/The_IDE/Code%20Editor/EditingCode_Tooltip.png)For more features that assist with code writing, see [Code Completion](Feather_Features.md).

### International Support (RTL)

The Code Editor 2 supports right-to-left text.

Fonts that make use of ligatures for special characters (such as combined <= or != operators) are supported as well (like [JetBrains Mono](https://www.jetbrains.com/lp/mono/)). This has to be enabled from the [Theme](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.htm#h) preferences.

## Further Reading

See: [Code Completion](Feather_Features.md)