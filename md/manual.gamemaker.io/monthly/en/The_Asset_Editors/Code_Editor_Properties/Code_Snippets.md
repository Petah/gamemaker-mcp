---
title: "Code Snippets"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Code_Snippets.htm"
converted: "2025-09-14T04:00:14.888Z"
---

# Code Snippets

A very handy tool you have at your disposal when editing your code is the use of **Code Snippets**.

These are pre-made blocks of code you can insert into your code at any time. A snippet can have _placeholders_, where you can insert expressions while entering the snippet.

## Using Snippets

In [Code Editor 2 (Beta)](../The_Text_Editor.md), code snippets are inserted through [Code Completion](Feather_Features.md). For example, writing for will show its snippet in the [Candidate Window](Feather_Features.htm#h3), and pressing enter will insert that snippet.

Inserting a snippet will highlight its first placeholder. After entering text into that placeholder, press tab to cycle through each placeholder until you have gone through all of them.

### Custom Snippets

You can define your own code snippets. Before doing this, you'll need to create a file with the extension .tmSnippet in one of the following directories:

-   Windows: %ProgramData%\\GameMakerStudio2\\User\\
-   macOS: /Users/Shared/GameMakerStudio2/User/
-   Ubuntu: ./var/opt/GameMakerStudio2/  _OR_   ~/.local/share/GameMakerStudio2

This folder is _not_ modified during any update to GameMaker, so your edited file will remain intact.

Each .tmSnippet file must contain one snippet. This is an example snippet file (you can copy this to create your own snippets):

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple Computer//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>content</key>
    <string>CONTENT</string>
    <key>name</key>
    <string>NAME</string>
    <key>scope</key>
    <string>source.gml</string>
    <key>uuid</key>
    <string>UUID</string>
    <key>tabTrigger</key>
    <string>Inc</string>
</dict>
</plist>

This is a basic XML with some keys (with the names "content", "name", "scope" etc.):

-   **content**: The snippet content. Must follow the **snippet syntax** defined below.
-   **name**: The name of the snippet that shows up in the editor's auto-complete.
-   **scope**: The language this snippet is associated with. (Default: GML)
-   **uuid**: This must be replaced with a new UUID. You can use a [UUID generator](https://www.uuidgenerator.net).

Hotkeys for your snippets can be assigned in the [Redefine Keys Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Redefine_Keys_Preferences.md) under the "Code Editor 2" section. They will be created as unbound by default.

### Snippet Syntax

The snippet content must follow a specific format where:

-   All code is on a single line
-   You use "\\n" for a newline
-   You place tab stops with numbers after $, e.g. $0 for the first tab stop, $1 for the second, etc.
-   Tab stops can contain placeholder text, e.g. {$0:insert\_function\_name}();. A tab stop may be surrounded with {} to define placeholder boundaries (e.g. the () is not part of the placeholder in the example).

You can use the following variables in your snippets:

[Snippet VariablesSnippet Variables](Code_Snippets.htm#)

-   CLIPBOARD: Contents of the clipboard
-   WORKSPACE\_NAME: Name of current [project](../../Additional_Information/Project_Format.md) (\*.yyp filename without extension)
-   WORKSPACE\_FOLDER: Path to the \*.yyp
-   CURSOR\_INDEX: Column-1
-   CURSOR\_NUMBER: Column
-   CURRENT\_YEAR: Year in format yyyy
-   CURRENT\_YEAR\_SHORT: Year in format yy
-   CURRENT\_MONTH: Month in format MM
-   CURRENT\_MONTH\_NAME: Month in format M
-   CURRENT\_MONTH\_NAME\_SHORT: Month in format MMM
-   CURRENT\_HOUR: Hour in format HH
-   CURRENT\_MINUTE: Minutes in format mm
-   CURRENT\_SECOND: Seconds in format ss
-   CURRENT\_SECONDS\_UNIX: Current UNIX Timestamp (not UTC)
-   CURRENT\_TIMEZONE\_OFFSET: Time zone in format +HHMM
-   RANDOM: A random base 10 integer between inclusive 100000-999999
-   RANDOM\_HEX: A random base 16 integer between inclusive 0x111111-0xFFFFFF (excluding leading 0x)
-   UUID: A new GUIDv4 in lower case with hyphens format

More rules about the snippet syntax can be [found here](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#snippet_syntax), including more variables that can be used in your snippets.

If the legacy snippets.txt file (described in the section below) is found in the **User** directory, all contained snippets will automatically be converted to .tmSnippet files when the IDE is started.

## Legacy Code Editor

When using the Legacy Code Editor, you can press F4 to open the code snippet pop-up:

![Code Snippets Window](../../assets/Images/Asset_Editors/CodeSnippets_IDE.png)From this window you can select with the mouse the snippet to use, or you can press the associated hotkey listed on the right. This will add the snippet to your code for editing.

Snippets for the Legacy Code Editor can be created in the same directories listed above, but instead in a snippets.txt file containing all snippets.

The following rules must be followed for the snippets file:

-   Each snippet has to be on a separate line (there should be no blank lines)
-   Each snippet must start with the name of the snippet (which is what is shown in the menu) followed by a colon ":", e.g.:

Instance Create:

After the colon you add your snippet of code:

Instance Create:instance\_create\_layer(x, y, {$0:layer}, object);

-   Hotkeys for your snippets can be assigned in the [Redefine Keys Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Redefine_Keys_Preferences.md) under the "Text Editor" section. They will be created as unbound by default.

These snippets must follow a specific format where:

-   All code is on a single line
-   You use "$" for a newline
    -   NOTE When creating multiple newlines, there needs to be a space between each "$" sign. For example, you would write $ $ $ to add three newlines.
-   You put the placeholder text that needs to be highlighted between "|" symbols. The Code Editor will automatically select this text for editing when the snippet is added.

See the examples that are already in the base snippets file to see how it is set up following the rules above. You can find the base file in the GameMaker install directory:

-   Windows: GameMaker\\TextEditor\\snippets.txt
-   macOS: /Applications/GameMaker.app/Contents/MonoBundle/TextEditor/snippets.txt
-   Ubuntu: /opt/GameMaker/x86\_64/TextEditor/snippets.txt

![Code Snippets Example](../../assets/Images/Asset_Editors/CodeSnippets_Example.png)