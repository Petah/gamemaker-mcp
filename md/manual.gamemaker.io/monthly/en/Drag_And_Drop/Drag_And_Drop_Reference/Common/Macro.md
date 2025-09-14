---
title: "Macro"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Macro.htm"
converted: "2025-09-14T03:59:24.285Z"
---

# ![Macro Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Macro.png) Macro

This action permits you to define one or more **macros**. Macros are simply unique _constant_ values - or expressions that evaluate to a unique constant value - which can then be used in a similar way to a regular constant. You can also use a function call in this this action to generate a single return value, in which case the macro will evaluate the function every time it is called. Note that macros are global in scope, and once declared they can be used by any instance, script or action block in your game, but they _cannot be changed_ after being defined. Note that you can define additional macros in the same action by clicking the plus icon ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Icon_Expand_Arguments.png) beside the action. For more information on macros, please see [Macros](../../../GameMaker_Language/GML_Overview/Variables/Constants.htm#h).

#### Action Syntax:

![Macro Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Macro.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Return | The return value. |

#### Example:

![Macro Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Macro.png)The above action will create three new macros called to generate new colour constants which can then be used in any other action in your game.