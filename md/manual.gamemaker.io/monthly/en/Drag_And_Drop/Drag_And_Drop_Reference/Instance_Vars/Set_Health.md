---
title: "Set Health"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Instance_Vars/Set_Health.htm"
converted: "2025-09-14T03:59:26.294Z"
---

# ![Set Health Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/i_IV_Set_Health.png) Set Health

With this action you can create or set an instance variable for health. You supply the value to either set the health variable to or to add to the health variable (if you tick the _relative_ checkbox then the value will be added to the current "health" value). Note that if you wish to use the [Draw Instance Healthbar](../Drawing/Draw_Instance_Health.md) action then this value should be between 0 and 100, otherwise it can be any amount you require. Also note that unlike regular instance variables the variable name for "health" is stored internally so to retrieve the score value you need to use the action [Get Health](Get_Health.md).

#### Action Syntax:

![Set Health Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/a_IV_Set_Health.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Health | The amount to set the health to (or to add on to the health if relative is checked) |

#### Example:

![Set Health Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Instance_Vars/e_IV_Set_Score.png)The above action block code will check to see if the room is the first in the game and if it is it sets up "score", "lives" and "health" variables for the instance.