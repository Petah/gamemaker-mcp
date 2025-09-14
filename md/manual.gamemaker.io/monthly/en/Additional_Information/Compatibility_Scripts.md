---
title: "Compatibility Scripts"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Compatibility_Scripts.htm"
converted: "2025-09-14T03:59:22.029Z"
---

# Compatibility Scripts

For those users coming from previous versions of GameMaker,  it may be a bit confusing using GameMaker at first since there have been a number of changes made to the way that project assets, editing and coding are handled. These changes mean that the neither the IDE nor the [GameMaker Language (GML)](../GameMaker_Language/GameMaker_Language_Index.md) supports the items listed below. However, that does not mean that you cannot import games made with previous versions into GameMaker, as you can. GameMaker will automatically convert all legacy functions into **compatibility scripts**, which are scripts containing functions that convert the legacy methods into the updated methods.

What happens is that GameMaker will parse your project for all the obsolete functions and variables that you have used, and then create a series of scripts using those function names. These scripts will contain either the new equivalent [runtime function](../GameMaker_Language/GML_Overview/Runtime_Functions.md) or a short [script function](../GameMaker_Language/GML_Overview/Script_Functions.md) that performs the same action as the obsolete function.

When you first import a GameMaker project you will be shown a compatibility report much like this one:

![Compatibility Report](../assets/Images/Scripting_Reference/Additional_Information/Compatibility_Overview.png)The main body of the report shows which objects and scripts have been affected and where, while at the end you can find a list of the scripts that have been created for your project. You can click the middle mouse button ![MMB Icon](../assets/Images/Icons/Icon_MMB.png) or press ![F1 Icon](../assets/Images/Icons/Icon_f1.png) on any of the scripts listed in the report to open it and see what has been done.

Note that if you see any scripts created with a double under-bar before their name (for example: \_\_global\_object\_depths), then these are scripts that have been created by the IDE to help with compatibility and are not scripts that have been converted from obsolete functions, so these **should not be tampered with** as they are required for the other compatibility scripts to work.

When you have finished revising the compatibility report you can close the workspace, but should you need to revise anything within the report you can find it again by going to the [Notes](../The_Asset_Editors/Notes.md) section of the [Asset Browser](../Introduction/The_Asset_Browser.md).

Note that you can keep using these compatibility scripts just as you would have used the functions in the legacy version of GameMaker, however, due to the way they work, there will be a performance impact associated with this. We recommend that you update projects to directly use the new methods and remove the compatibility scripts if you can, as it will improve performance and also give you an insight into the way that GameMaker and the GameMaker Language works compared to legacy products.

Also note that there are some functions that have been introduced to the GameMaker Language to ensure compatibility with older projects and that will appear in these compatibility scripts. However these functions should never be used in your own projects. You can find a list of these functions from the following section of the manual:

-   [Compatibility Functions](Compatibility_Functions.md)

You can also find a complete list of all the obsolete functions that have equivalent compatibility scripts created for them from the following page:

-   [Obsolete Functions](Obsolete_Functions.md)