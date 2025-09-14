---
title: "Legacy Code Editor Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_Preferences.htm"
converted: "2025-09-14T04:00:13.954Z"
---

# Legacy Code Editor Preferences

![The Text Editor Preferences](../../assets/Images/Setup_And_Version/Preferences/Text_Editor_Prefs.png)The Legacy Code Editor **preferences** are used to define how the different code/script editors look and feel. The main page has the following options:

-   **Syntax checking delay (ms)**: The delay time (in milliseconds) before the syntax checker runs. This default value is 2000ms.
-   **Code Completion Delay (ms)**: The delay time (in milliseconds)
-   **Open scripts in full screen editor**: Checking this option will make script resources open automatically in a new workspace. If this is un-checked, they will open in a window within the current workspace. This option is unchecked by default.
-   **Open shaders in full screen editor**: Checking this option will make shader resources open automatically in a new workspace. If this is un-checked, they will open in a window within the current workspace. This option is unchecked by default.
-   **Open object events in full screen editor**: Checking this option will make object event code editors open automatically in a new workspace. If this is un-checked, they will open in a window chained to the object event editor. This option is unchecked by default.
-   **Open event scripts as tabs in same window**: When adding code or GML Visual to an event, the code window is chained to the event window, and when this option is checked any further events that are opened for editing will be added to the same window as tabs along the top. Un-checking this option will make each event open as its own unique chained window. This option is checked by default.
-   **Open linked scripts as tabs in same window**: When you have multiple linked scripts and open them, by default they will be grouped n the same window as tabs. Un-checking this option will force them to open each in their own window/workspace. This option is checked by default.
-   **Pan text editor into view on focus**: When you open a text editor from an object event, selecting this option will automatically pan the workspace to bring the editor to within the bounds. This option is off by default.
-   **Default code window width**: Set the default width (in pixels) for the code window to be when opened. Default value is 900.
-   **Default code window height**: Set the default height (in pixels) for the code window to be when opened. Default value is 600.
-   **Minimum code window width**: Set the minimum width (in pixels) permitted by the code window. Default value is 300.
-   **Minimum code window height**: Set the minimum height (in pixels) permitted by the code window. Default value is 200.
-   **Disable Right-To-Left Ordering**: This disables right-to-left ordering for text, resulting in a performance boost. This must be unchecked if you wish to use a right-to-left ordered font in your text editor for comments.

Apart from the options above there are two sub-categories, Code Editor and Visual Editor, described below.

## Code Editor

![The Text Editor Colour Preferences](../../assets/Images/Setup_And_Version/Preferences/Text_Editor_Colour_Prefs.png)

The **Colour preferences** are used to change how the code and script editor display different texts. Each entry has a number of sub-entries to permit you to define exactly how each separate piece of text should look, as shown in the example image above. In general, you can set the colour, font, size and style for each of the different options. Further down you can also set more general styling for things like line selection of code brackets, etc...

![The Code Editor Preferences](../../assets/Images/Setup_And_Version/Preferences/Text_Editor_Code_Prefs.png)

Under the colour preferences you have the different **styling Options**. These preferences are used to set the behaviour of the code/script editor, with the following options available:

-   **Keep tabs**: If checked, this will keep tab key presses as tab characters - ' \\t' - in the editor, while unchecked means that tabs are converted into spaces. Default is off.
-   **Tab size**: The number of character spaces that pressing "Tab" should indent the code. Default is 4.
-   **Show Whitespace**: Display " ." to show whitespace (see image below). Default is off.
-   **Show line numbers**: Whether to show the line numbers down the left or not. Default is on.
-   **Show tab lines**: Display " ...." to show tabbed space. Default is off.
-   **Enable colour coding**: Enable or disable colour coding for the editor. If off, the code will not be styled, while when on it will be styled using the formatting given above in the Colour section. Default is on.
-   **Document line limit**: Set the maximum number of lines for any given editor document. The default value is 0 (0 or less is essentially infinite) and any other value will limit the lines permitted.
-   **Match indent on new lines**: Enable or disable auto-indentation for your code. Default is on, which will maintain any tabs set on a line when a new line is added.
-   **Auto indent after brace**: Enable or disable auto-indentation for your code when adding braces {}. Default is on, which will tab the next line of code when a new brace { and a new line are added.
-   **Enable code completion**: Enable or disable the code completion window. When writing code and this is enabled, you will get a popup window showing possible functions that you can use based on the current input text. Default is on.
-   **Auto add function brackets**: Enable or disable the automatic addition of brackets () when you use the autocomplete. When writing code and this is enabled, the IDE will automatically add the two brackets () that a function requires, placing the cursor within them if the function takes arguments, or placing the cursor after them if it does not. This feature only works when the function has been selected from the autocomplete. Default is on.
-   **Undo / Redo Stack Limit**: Here you can set the Undo/Redo stack limit. Anything under 0 is essentially infinite (limited by the memory available) while positive values will limit the stack to that number, removing any action at the tail of the stack if the limit is reached. Default is -1.
-   **Highlight selection matches**: This will lightly highlight any section of code that is duplicated elsewhere. So, if you select a function, for example, all instances of this function in the current code window will be highlighted too. Default is on.
-   **Colour coding/code completion for obsolete functions**: This will highlight any section of code that is obsolete. Default is on.

## Visual Editor

![](../../assets/Images/Setup_And_Version/Preferences/Text_Editor_Visual_Prefs.png)

The Comments preferences control the different colour and formatting options for any comments that have been added to your GML Visual scripts. These options are:

-   **Colour**: The default colour for the text being written to the window (default ARGB #FF53E270).
-   **Font Name**: The name of the font to use (available fonts will depend on those installed on your system).
-   **Style**: The font style to use, like **bold** or _italics_ (note that not all windows will permit the same styles and it will also depend on the font used).
-   **Size**: The size to set the font to for the given output window.
-   **Anti-Aliasing**: Here you can set the anti-aliasing mode for the output windows font rendering. You can choose to let the IDE decide by selecting _Use Default_, or you can force it _On_ or _Off_ by selecting either of those options.