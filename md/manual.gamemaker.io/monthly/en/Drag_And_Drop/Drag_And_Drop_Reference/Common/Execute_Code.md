---
title: "Execute Code"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Common/Execute_Code.htm"
converted: "2025-09-14T03:59:24.140Z"
---

# ![Execute Code Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/i_Common_Execute_Code.png) Execute Code

This action simply adds a [code editor](../../../The_Asset_Editors/Scripts.md) block into the GML Visual list where you can add any valid GML code that you require for the object. Note that all the code in the action will be run before the next action in the list is run. To make it easier to track what these actions do you can name them by using the [JSDoc](../../../The_Asset_Editors/Code_Editor_Properties/JSDoc_Script_Comments.md) @description identifier, as shown in the image below:

![Execute Code example of use](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Execute_Code_JSDoc_Description.png)

#### Action Syntax:

![Execute Code Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/a_Common_Execute_Code.png)

#### Example:

![Execute Code Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Common/e_Common_Execute_Code.png)The above action block code creates a couple of global scope variables to create an MP grid and a path.