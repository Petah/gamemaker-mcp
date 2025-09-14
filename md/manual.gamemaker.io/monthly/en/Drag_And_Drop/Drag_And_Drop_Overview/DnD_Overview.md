---
title: "GML Visual​​​​​​​ Overview"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/DnD_Overview.htm"
converted: "2025-09-14T03:59:23.205Z"
---

# GML Visual Overview

GML Visual is a visual scripting tool that can be used to create your games without actually typing any code. That's not to say that you aren't programming code when you use GML Visual, as you are, only that your code is created and presented in a visual way using "blocks" of **actions** rather than text. Actions are simple expressions or statements that can be "chained" together to have an instance of an object do something when placed in a room. For example, you could have an action in a **Create Event** to move an instance in a random direction, and another action in a **Collision Event** to make it bounce off the things it collides with (for more information on the different events available and how they work together see the section on [Object Events](../../The_Asset_Editors/Object_Properties/Object_Events.md)).

![GML Visual Overview Screen](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Overview_Main.png)The image above shows a typical object open on a [workspace](../../Introduction/Workspaces.md) to be edited. It has an "Event" window and a "Code" window chained to it, and in the code window you can see where we have constructed our GML Visual. Let's look a bit closer at this window and see what options are available to us:

![GML Visual Properties Screen](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Overview_Properties.png)Below you can find more information on each of the sections shown:

[Event TabsEvent Tabs](DnD_Overview.htm#)

When you add an **Event** to your object, a new tab is opened in the code window to display the contents of that event. You can add multiple events and have multiple tabs open at the same time, switching between them and editing them as you wish. You can also close the tabs at any time to reduce clutter (selecting the event in the object again will re-open them), and you can click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag the tab out of the window into its own code window, in which case closing the object or the code window will not close the new window. Tabs can be dragged left or right to be re-ordered too.

[Action OverviewAction Overview](DnD_Overview.htm#)

As you add action blocks to your event, they will appear in "shorthand" form as a plain English overview of what's going on. The overview order is the order in which each of the action blocks will be run for that event, and you can click on any item in the list to have the action block view zoom to that position for editing.

[Action Block WorkspaceAction Block Workspace](DnD_Overview.htm#)

This workspace area is where you drag Actions from the **Toolbox** to create your GML Visual code. Click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on an action and drag it into this area to add it to the list of actions and edit it. Most actions have various arguments (parameters) that you can set, and most will also take **keywords**, **instance variables**, or even **GML functions** - for example, you can call the [Set Direction](../Drag_And_Drop_Reference/Movement/Set_Point_Direction.md) action and use the GML function [random(val)](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/random.md) to set a random direction.

As you add action blocks to your code, they will be visually "chained" together to indicate the order in which different actions will occur, although how this chain is created will depend on the initial block that has been used. For example, an [If Variable](../Drag_And_Drop_Reference/Common/If_Variable.md) block will have two chains - one to the blocks that are to be called if the condition being checked is true and then the next block after that. For more information on constructing action blocks into code, see the sections linked below.

While in the Action Block workspace, you can press and hold the middle mouse button ![MMB Icon](../../assets/Images/Icons/Icon_MMB.png) to pan around and the mouse wheel ![MMB Icon](../../assets/Images/Icons/Icon_MMB.png) to scroll the action list up or down. If you hold ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) while moving the mouse wheel, then the view will scroll left/right, and if you hold down ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) and move the mouse wheel then the view will zoom in and out, permitting you to see more of the workspace with the actions. You can click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on any action from the action list on the left to focus on that action, resetting the zoom and position. Also note that you can resize the action blocks by moving the mouse towards the edges of the block and then - when the cursor changes - dragging in the direction you require.

You can also right click ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) anywhere in the GML Visual workspace to bring up the RMB Menu, which is explained in detail [here](Right_Mouse_Button_Menu_Options.md).

[ToolboxToolbox](DnD_Overview.htm#)

The **toolbox** is where all the GML Visual actions are stored, with different sections holding collections (libraries) of actions that are similar or related. Each collection of actions is related to a specific theme or common purpose and you simply click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag the required action from the toolbox into the action block workspace to add it to the current event. To make things simpler - as there are a lot of actions - you can use the "Search" bar at the top to search for a specific action or to filter the visible actions (type "draw" for example to get all the drawing actions), and you can also click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and drag icons from any library into your **Favourites** folder to keep commonly used actions together. This is particularly useful if there are certain things you'll be doing again and again. The favourites folder can be cleared by clicking the small "bin" icon.

For a complete list of the actions available, as well as what arguments they take and how they can be chained, please see the [GML Visual​​​​​​​ Reference](../Drag_And_Drop_Reference/DnD_Reference.md) section.

You can use the right mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) on any action in the toolbox to open the following menu:

![Toolbox RMB Menu](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Toolbox_RMB_Menu.png)

Here you have the following options:

-   **Use <_action_\>**: This will add the action that was under the mouse when the right mouse button was clicked to the current event workspace.
-   **Make** / **Remove Favourite**: This will add or remove the action to the **Favourites** library at the top of the toolbox. This library is where you can create a custom group of actions that you use regularly, reducing the amount of time needed to look for them in their actual libraries.
-   **Clear Favourites**: Selecting this will remove all actions from the Favourites library.
-   **Clear Recently Used**: Selecting this will remove all actions from the Recently Used library.
-   **Collapse All**: This option will collapse all the GML Visual libraries so that only the library titles are visible, and not the action nodes. Each library can be expanded again by clicking on them.

The following pages go into a bit more depth about how to construct action block code, as well as how to set the scope of the actions to affect different things within your project and other important details:

-   [Constructing Action Block Code](Constructing_Action_Block_Code.md)
-   [Applying Actions To Other Instances](Applying_Actions_To_Other_Instances.md)
-   [Action Block Scripts](Action_Block_Functions.md)
-   [Changing GML Visual To Code](Changing_DnD_To_Code.md)
-   [Right Mouse Button Menu Options](Right_Mouse_Button_Menu_Options.md)