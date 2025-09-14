---
title: "Changing GML Visual To Code"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/Changing_DnD_To_Code.htm"
converted: "2025-09-14T03:59:23.153Z"
---

# Changing GML Visual To Code

Another feature of GML Visual is that you can convert it into GML Code, and in this way see what exactly is going on behind the scenes when you use actions. Before actually changing the actions into code however, you can first **Preview** them by using the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) menu option **Live Preview**:

![Live Preview](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Preview_RMBMenu.png)Which will open a new window:

![GML VisualLive Preview Window](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Preview.png)As you add, change or remove GML Visual actions, the GML Live Preview will update to show you the actual code that is being created "behind the scenes". The code in the live preview cannot be edited directly, but you can select sections and copy them for pasting into GML scripts or Code Actions (for example).

If you decide that you want to convert the GML Visual into code after seeing the preview, then this can be done again by clicking the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) in any event workspace with actions and selecting **Convert To GML Code**.

![Convert to GML](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Code_RMBMenu.png)The first time you do this you will be given a warning message saying that this is a one way conversion, since you can convert actions to code, but you cannot convert them back to _individual_ actions again later. Clicking "okay" here will perform the conversion for you.

![GML Visual as code](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Code.png)The resulting code will use {} to delimit individual actions, and you can clearly see what actions relate to which functions or variable declarations within the code. If the GML Visual is more complex then the code will be too, but the same general rules apply and code will be structures sequentially exactly the same as you have written the GML Visual. Note that sometimes the code will have extra **local** (temporary) variables added in to store certain values that will be used, for example this:

![GML Visual If Instance Exists](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_InstanceExists.png)

Will become this code:

![GML Visual Converted Instance Exists](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Code_InstanceExists.png)

Here the code first of all creates a local (temporary) variable and sets it to false, then it checks if the instance exists and sets the local variable to the return of the function call. The local variable is then checked to see if it is true or false and if it is true the rest of the code is run.

When learning to program using GML Visual, this can be an important tool in moving on to using GML at a later stage, but it's by no means obligatory and you can still make great games using GML Visual! It's also worth noting that while the conversion process is one way, after converting actions to code, you can go back to using GML Visual again by using the right click ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) menu in the code editor and selecting "**Convert To GML Visual**". This will place the previously created code within an [Execute Code](../Drag_And_Drop_Reference/Common/Execute_Code.md) action and you can then continue to use GML Visual as before:

![GML Visual Execute Code](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_ExecuteCode.png)