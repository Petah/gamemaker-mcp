---
title: "Constructing Action Block Code"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/Constructing_Action_Block_Code.htm"
converted: "2025-09-14T03:59:23.177Z"
---

# Constructing Action Block Code

To add behaviours to objects you can construct your code using **Actions** from the different libraries available to you from the **Action Toolbox**. To start with you'll need to make a [new GML Visual project](../../Introduction/The_Start_Page.md) and then make a new [object](../../The_Asset_Editors/Objects.md) (you can assign a [sprite](../../The_Asset_Editors/Sprites.md) to the object too if required). In your new object you can start to add [events](../../The_Asset_Editors/Object_Properties/Object_Events.md), and in the events add your GML Visual code actions.

![GML Visual Create Event](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Create_Event.png)Note that when you add a new event, a "code" window is opened with a tab for the given event (see the image above), and you can now drag any action you wish from the Toolbox on the right into the Action Block pane of the code window. Now, while it's true that you can add any action, that doesn't mean that they will all work or that the project will compile with them. Some actions require at least one variable to work, while others - like the [Draw](../Drag_And_Drop_Reference/Drawing/Drawing_Actions.md) actions - will only work if used in a specific event. How do you know which ones to use? Well, generally, it's simply a question of using logic... if an action requires a variable and we haven't defined one yet, then we shouldn't be using it until we've added an action to create the variable.

When you drag an action from the Toolbox into the main Action Block workspace, it will expand to show you the available arguments (parameters) that you can fill in and change to set the behaviour. In the image below, we have dragged an [Assign Variable](../Drag_And_Drop_Reference/Common/Assign_Variable.md) action from the Toolbox [Common library](../Drag_And_Drop_Reference/Common/Common_Actions_Library.md) into the action block workspace:

![GML Visual Assign Variable](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Add_Var.png)You can see that the new action is also shown on the left of the code window in a shorthand form. This list of actions, called the action Overview, can be clicked on to quickly navigate to that action for editing. You can continue to add actions to the event should you need to, with each new action being "chained" to the previous one to show the flow of the GML Visual code you are constructing. Note that the area where you can drop further actions is highlighted for you underneath the initial action, and, depending on the action you are using, different areas will highlight to show where in the chain you can add it:

![GML Visual Set Direction Variable](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Set_Dir.png)As you add actions to the workspace, they will be "chained" to the actions above so you can see how the GML Visual code flows, with one action leading to another, and the overview pane shows them in shorthand form and in order of execution:

![GML Visual chain of actions](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Scope_Other.png)Some actions will place code in a separate chain away from the main flow - things like [If Variable](../Drag_And_Drop_Reference/Common/If_Variable.md) will create a _sub-chain_ of actions that should occur if the correct conditions are met before continuing on with the main chain:

![GML Visual side chain of actions](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_If_Variable.png)Note that when using actions that can have a side chain block like this, the action will have _two_ areas highlighted for dropping further actions:

-   One below the action as normal
-   One to the right of the action to show that you want to create a separate block of actions to run when the condition of the first action returns true

![GML Visual Side Chain Of Actions](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_If_Drop.png)You can change the position of actions within the chain by simply clicking ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and dragging them into the new position that you require, and if you do a click ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) and hold for a second then move the mouse, you can move the action within the workspace while maintaining its place within the action block chain.

It is also possible to add **comments** to GML Visual actions, so you can leave notes beside different blocks to explain what they do (which is especially useful when working in a team):

![GML Visual Add Comment](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Add_Comment.gif)You can find out more about this feature from the page on the [Right Mouse Button Menu](Right_Mouse_Button_Menu_Options.md).

That's the basics of using the GML Visual code editor, but there are further important details explained in the sections below:

[Target VariablesTarget Variables](Constructing_Action_Block_Code.htm#)

It is important to note that many actions offer a "target" variable, which can be flagged as "Temporary", for example:

![Example Of Target](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Audio_Get_Audio_Volume.png)What this means is that you can supply a variable which is the target to hold the value returned by the action. In the example action above, the action will return the volume of the audio resource that you select, so you supply a target variable to hold this value so you can reference it later.

Now, this target variable will need to have been declared previously either using [Assign Variable](../Drag_And_Drop_Reference/Common/Assign_Variable.md) (which creates an **Instance Variable**) or [Declare Temporary Variable](../Drag_And_Drop_Reference/Common/Declare_Temporary_Variable.md) (which creates a **Local Temporary Variable**) If you check the "Temp" option, then you can simply add a variable name and the action will create that variable and set it to hold the return value for you (creating a temporary local variable). Any actions used after this can now access the value in the temporary variable, **but only within the same Event or Script**. Temporary variables are only available within the scope that they were created. For more in depth information on variables and variable scope, please see [here](../../GameMaker_Language/GML_Overview/Variables_And_Variable_Scope.md).

[Action ScopeAction Scope](Constructing_Action_Block_Code.htm#)

Not only variables have scopes (see the **Target Variables** section, above), actions can have different scopes too. In fact, almost all actions can be given a different scope to work in, set from the drop down window opened in the action itself as shown here:

![GML Visual Applies To](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Applies_To.png)You can also set the scope for all further actions using the special action [Apply to](../Drag_And_Drop_Reference/Common/Apply_To...md). For more information on this feature of the GML Visual actions, please see here:

-   [Applying Actions To Other Instances](Applying_Actions_To_Other_Instances.md)

[Auto CompleteAuto Complete](Constructing_Action_Block_Code.htm#)

When working with GML Visual you will have to add variables and expressions into the different input fields of the actions. However, as you do this you will often get the **Auto Complete** window popping up to help you:

![Auto Complete](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Action_AutoComplete.png)This pop up window will list all the built-in GML (GameMaker Language) variables, constants and functions, as well as any resources that contain the initial letters of what you were typing. It can be used to quickly find the resource or variable that you are wanting for the action without having to type it all in yourself. For example, if all your rooms are prefixed "rm\_" then typing that and waiting a moment will show the auto complete window with all the assets beginning with "rm\_". Note that all the built-in variables that are shown in the auto complete window can be used anywhere where a variable or expression is expected in an action, as can most GML functions.

[Action ExpansionAction Expansion](Constructing_Action_Block_Code.htm#)

Sometimes when using an action you will see a small plus icon ![Expand Arguments Icon](../../assets/Images/Icons/Icon_Expand_Arguments.png) to the side. This means that you can expand the action to perform extra tasks or take further arguments. For example, if you look at the [Declare Temporary Variables](../Drag_And_Drop_Reference/Common/Declare_Temporary_Variable.md) action, you can see that it has this  icon:

![Temp Variable Expansion](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Declare_Temp_Var.png)When you click the icon, the action will _expand_ and permit you to declare more variables, making it easier and faster to define multiple variables at the same time.

![Temp Variable Expansion Example](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Expansion_Example.png)The icon can also be used for those actions that require **optional** arguments, like the [Choose](../Drag_And_Drop_Reference/Random/Choose.md) action, which permits you to add various different values to be returned:

![Choose Expansion Example](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Mathematics_Choose.png)