---
title: "Right Mouse Button Menu Options"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/Right_Mouse_Button_Menu_Options.htm"
converted: "2025-09-14T03:59:23.229Z"
---

# Right Mouse Button Menu Options

When working on your GML Visual code, you can click the right mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on the action, on the workspace, or on the text in the shortlist on the left to open up the Right Mouse button menu:

![GML Visual RMB Menu](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_RMB_Menu.png)This menu has the following options:

-   **Cut** / **Copy** / **Paste**: This will permit you cut, copy or paste any action that is selected in the workspace. Note that you can use ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) outside of the actions and drag, or use ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) + ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on individual actions, to select more than one and apply the command to all of them.
-   **Comment** / **Remove Comment**: This option permits you to add and remove comments from your GML Visual code blocks. When you select Comment, text editor will be opened to the right of the selected GML Visual block, and there you can add any text you require, whether it be a reminder to change something, or a helpful comment for a tutorial, or even instructions for your teammates:
    ![GML Visual Comments](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Add_Comment.gif)Once you have added the comment, you can click on it and drag it to position it vertically and horizontally - although only to the right of the parent node - and collapsing the GML Visual node will also collapse the comment and show a summary of its contents (in which case it cannot be repositioned). If the comment is no longer required, then you can either delete all the text in the comment, or use the **Remove Comment** option from the menu. Note that when you copy a node, the comment will be copied along with it, and if you convert the node from GML Visual to GML, then the comment will be preserved and added to the GML that is created, as illustrated in the image below:
    ![GML Visual Comments In GML](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Comments_In_GML.png)As mentioned above, a comment can only be applied to a single node, but you can expand it to cover multiple nodes by simply adding in line breaks to extend it - although this may require you to re-position the comment to prevent overlaps with subsequent nodes:
    ![GML Visual Comment Over Multiple Nodes](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Comments_Extended.png)Once a comment has been added, you can select the "**Comment**" option again from the RMB menu or you can double click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on it to enable editing.
-   **Disable** / **Enable**: These commands can be used disable or enable the action (or actions) selected. When an action is disabled, it is still visible in the workspace but it will not run when you compile the game. In this way you can add/remove actions for testing and debugging. The image below shows some GML Visual code with actions disabled:
    ![GML Visual Disable Actions](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Disable_Actions.png)You can see that the actions "If Score" and "Go To Next Room" have been disabled - they have been grayed out, visually - and so they will be skipped when the game is tested or compiled.
-   **Toggle Breakpoint**: This command will toggle a breakpoint on or off for the selected action. A breakpoint is simply a point in the GML Visual code where the [debugger](../../../../../IDE_Tools/The_Debugger.md) should stop when the game is being run in Debug Mode. An action with a breakpoint assigned to it will be highlighted, as shown in the image below (the "If Health" action has been set as a breakpoint):
    ![GML Visual Breakpoint](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_ToggleBreakpoint.png)
-   **Delete All Breakpoints**: With this command you can remove all breakpoints form the GML Visual code.
-   **Collapse All** / **Expand All**: GML Visual actions can be either collapsed or expanded, where a collapsed action will simply show the name of the action but not any of the internal values thus maximising the available space for the workspace. For example:
    ![GML Visual Collapsed Actions](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_CollapseActions.png)As you can see, the actions take up much less space, and you can still see what they do from the short description given to the right. You can select the "Expand All" option to undo this for every node in the workspace.
-   **Reset Layout**: This will reset the GML Visual workspace, setting the zoom level to 100%, focusing on the currently selected action, and expanding any (and all) collapsed actions too.
-   **Live Preview**: When you select this option, you will enable or disable the GML Visual to GML (GameMaker Language) code preview window. This is explained in more detail on the page [Changing GML Visual To Code](Changing_DnD_To_Code.md).
-   **Convert To GML**: This will convert all your actions in the current event to GML (GameMaker Language) code. Be very careful with this as _you cannot convert GML back into the GML Visual actions that it was created from_. You can convert the event back to a GML Visual event from code, but any code will simply be wrapped in an [Execute Code](../Drag_And_Drop_Reference/Common/Execute_Code.md) action. This is explained in more detail on the page [Changing GML Visual To Code](Changing_DnD_To_Code.md).
-   **Window**: This section opens the following sub-menu:
    ![GML Visual Window Options](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_WindowOptions.png)The menu items available here are:
    -   **Go To Object**: This will pan the workspace to the object that is calling the event
    -   **Open Inherited Event**: This option is only available if the object being edited is a child of a parent object, and will open the event being edited of the parent object and pan the workspace to it.
    -   **Single Pane** / **2 Columns** / **3 Columns**: These options can be used to split the current workspace into 1, 2 or 3 different "panes". Each pane is a separate workspace that can have scripts or events dragged onto them so you can edit and compare 2 or more GML Visual code blocks at a time. The image below shows two scripts in one window shown in their own workspace pane:
        ![GML Visual Split Workspace Panes](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_SplitPaneWindow.png)

The following two options are only available when the RMB menu is opened on a GML Visual node:

-   **Pan**: When selecting this option on any node, the workspace will pan to ring that node to the center.
-   **Show Help...**: Selecting this will open the Manual in a new workspace on the page relevant to the node that has been selected. You can also achieve the same results by using ![Icon F1](../../assets/Images/Icons/Icon_f1.png) on the node.