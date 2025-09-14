---
title: "Editing Code"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Editing_Code.htm"
converted: "2025-09-14T04:00:14.912Z"
---

# Editing Code

NOTE This page covers the Legacy Code Editor for [Script assets](../Scripts.md). You can enable the new Code Editor 2 from the [preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_2_Preferences.md). Read about the [editor here](../The_Text_Editor.md), and its [code editing capabilities here](Editing_Text.md).

When you start to use the Text Editor, it's simply a case of typing the code you want to have for the document, following the correct GML syntax. While you do this, you will get help from the **auto-complete** window:

![Script Editor Code Complete](../../assets/Images/Asset_Editors/Editor_Scripts_CodeComplete.png)This window will pop up while you are writing your code (normally after a slight pause, but this can be set in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_Preferences.md)) and give you a selection of "best-fit" answers in alphabetical order.

While using the code editor you can click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag the mouse to select a row of code or hold down ![Alt Icon](../../assets/Images/Icons/Icon_Alt.png) then click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag to select columns of code. Anything selected in this way can then be _copied_, _cut_ and _pasted_ using the standard keyboard shortcuts of ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + " C", ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + "X" and ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + "V".

It is worth noting that you can **comment** your code in various ways. Commenting your code is very important for maintaining productivity as it keeps things clear and separates sections of code in such a way that it is obvious what each part does and why it is there. It also means that if you are working in a team then you can leave notes for other members and that they will know exactly what you have done or what a specific section of code is for. Even if you are a solo developer, leaving comments in your code is important, especially if you have to leave the project and come back to it at a later date.

Commenting your code is simple, as you just have to use "//" before any line of text or you can comment out whole paragraphs by using "/\* text here \*/". There are even two keyboard shortcuts to comment and un-comment selected lines of code: ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + "K" to comment, and ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) + "K" to un-comment. The following image illustrates code written using both these methods as well as some **JS Doc** comments (explained in more detail below):

![Script Editor Comments](../../assets/Images/Asset_Editors/Editor_Scripts_Comments.png)Scripts can also have certain JSDoc style comments added to define the properties of the functions they contain so that when you use the functions in your code they show up in auto-complete along with their arguments and other details. You can find out more about this from the section [JSDoc Script Comments](JSDoc_Script_Comments.md) for more information.

By default all code that is written will have **code folding** icons beside each set of matching braces {}. These take the form of a little plus + or minus \- icons, and clicking on these will "fold" the code within the matching braces so that it takes up less visual space.

You can also manually set code folding regions using the special #region tags to mark a section of code. How this works is that you add a #region tag (along with any comment text) to the top of a section of code and then add a corresponding #endregion tag to the bottom of the section and then you can "fold" the code, ie: hide it away so you can cut down on the number of lines of code visible in the editor at any one time:

![Script Editor Code Regions](../../assets/Images/Asset_Editors/Editor_Scripts_CodeRegion.gif)The actual code looks something like this:

# region This is an example region

width = sprite\_get\_width(sprite);
height = sprite\_get\_height(sprite);
xoff = sprite\_get\_xoffset(sprite);
yoff = sprite\_get\_yoffset(sprite);

# endregion Further comment here if required

As you might have noticed, parts of the script text are coloured. The script editor "knows" about existing objects, built-in variables and functions, etc... and colour codes them accordingly. Colour-coding helps a lot in avoiding mistakes as you can see immediately if you have misspelled some name or used a keyword as a variable, or have a syntax error. However, if you don't like the colour coding, in the [Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Text_Editor_Preferences.md) you can switch it on and off (you can also use F10 to toggle it on or off in the editor) as well as customise the colours that are used.

You can right-click ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) anywhere in the editor too to open up the following menu:

![Script Editor Menu](../../assets/Images/Asset_Editors/Editor_Scripts_RMB_Menu.png)Apart from the regular functions you'd expect to cut, copy and paste lines of code you also have the option to comment or un-comment any selected text, add or remove indents, as well split the code window into 1, 2 or 3 separate panes (note that the options relating to #regions will not be available if you have not defined any in the code being edited).

The last option for splitting into panes will split the actual window into different parts where you can then drag a script or event and have it show alongside the other ones for comparing and editing.

![Script Editor Panes](../../assets/Images/Asset_Editors/Editor_Scripts_Panes.png)This is exceptionally useful for comparing two scripts or for viewing connected scripts at the same time, without needing another window or having to switch constantly between tabs.

The other options in this menu are to toggle a breakpoint for use with the [Debugger](../../../../../IDE_Tools/The_Debugger.md), and to convert the GML code into GML Visual or vice versa. Note that if converting code to GML Visual, then it will _not_ create individual actions for each line of code, but rather use a single code action to hold everything that was previously in the event or script.