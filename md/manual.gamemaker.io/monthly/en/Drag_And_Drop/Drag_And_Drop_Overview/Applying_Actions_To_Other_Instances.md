---
title: "Applying Actions To Other Instances"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Overview/Applying_Actions_To_Other_Instances.htm"
converted: "2025-09-14T03:59:23.140Z"
---

# Applying Actions To Other Instances

Most actions in the GML Visual libraries have an option to apply the action in different ways. This is called setting the **action scope** and it can be one of several things:

![GML Visual Applies To](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Applies_To.png)Essentially what you are telling GameMaker is the which instance should run the action. The default action scope is self, which means that once the object is created as an instance in the room, that instance will run the action code. However this isn't always what you want, and you may want some actions to affect other, or even all, instances in the room. This is where changing the action scope comes in.

The different scopes for performing actions are listed below, but it should be noted that changing the scope on an action in this way will only apply the new scope to that action _and not to subsequent actions in the chain_. If you want to apply a change of action scope to multiple chained actions, then use the [Apply to...](../Drag_And_Drop_Reference/Common/Apply_To...md) action first.

![Self Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Scope_Self.png)[SelfSelf](Applying_Actions_To_Other_Instances.htm#)

This is the default scope for an action and simply states that the action should only be called by the instance that is running the code.

![Other Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Scope_Other.png)[OtherOther](Applying_Actions_To_Other_Instances.htm#)

The other scope has two main functions, and the value it returns will depend on where and how you use it. In the **Collision Event**, other will return the instance handle, so you can, for example, create a "bullet" instance and have a collision event with a "player" instance and in that use the other scope to remove hit points from the "player" object and then return to self scope to destroy the "bullet" instance.

Outside of the collision event the other setting will behave as if it was set to noone unless it is being called from within a scoped block of actions. What this means is that if you change the scope of a group of actions to a specific object, then while those actions are being called, the other scope will return the instance ID of the instance that initially called the action group. For example, you could run an [Apply to...](../Drag_And_Drop_Reference/Common/Apply_To...md) action and then in the next code block set the scope to other to perform an action on the instance running the whole event block, and not the instance that is being scoped in the apply to code blocks. The image below gives an example:

![GML Visual Scope](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Scope_Other.png)In the image, we are checking for a mouse press in the instance, and if one is detected we change scope using the **Apply To...** action. The next two action blocks are now being called from the "obj\_Player" instance (if there is more than one then it will run for all of them) and so the object will change its sprite and then create an object at the other position, ie: the position of the object that is running the event and detected the mouse press.

![All Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Scope_All.png)[AllAll](Applying_Actions_To_Other_Instances.htm#)

When you scope an action for all, you are telling GameMaker to run that block for **every single active instance within the current room**. For example creating a [Destroy Object Instance](../Drag_And_Drop_Reference/Instance/Destroy_Object_Instance.md) action and setting its scope to all will cause every instance in the room to disappear, no matter what object they have been created from.

![Object Icon](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/i_Scope_Object.png)[ObjectObject](Applying_Actions_To_Other_Instances.htm#)

An action can also be given an **object** as its scope. What this means is that all instances of the given object will run that action at the same time it is called. So if you have 100 enemy instances in the room, for example, and you want to set them all to point towards a specific point. You'd call the [Set Point Direction](../Drag_And_Drop_Reference/Movement/Set_Point_Direction.md) and set the action scope to the object "obj\_Enemy" and when it is called, all instances of that object will change direction.

[ExpressionExpression](Applying_Actions_To_Other_Instances.htm#)

The Expression input field is for you to input the ID of a specific instance that you want the action to work on. It can be the unique ID value assigned to an instance from the Room Editor or it can be the handle of an instance that you've stored in a variable (where the variable would be the input value) or it can even be an expression using code, as shown in the image below:

![GML Visual Target](../../assets/Images/Scripting_Reference/Drag_And_Drop/Overview/DnD_Scope_Target.png)In this case, an instance calls the [Set Sprite](../Drag_And_Drop_Reference/Instance/Set_Sprite.md) from the instance created by the code given for the Expression. Note that in this case, the instance being created will run its Create Event first before the action is applied to it.