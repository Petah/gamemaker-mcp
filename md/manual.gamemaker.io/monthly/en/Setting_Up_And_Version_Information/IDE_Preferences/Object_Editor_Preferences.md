---
title: "Object Editor Preferences"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/Object_Editor_Preferences.htm"
converted: "2025-09-14T04:00:13.705Z"
---

# Object Editor Preferences

![](../../assets/Images/Setup_And_Version/Preferences/Object_Editor_Prefs.png)

The **Object Editor Preferences** are used to define certain properties for the [Object Editor](../../The_Asset_Editors/Objects.md) window. The main section contains the following option:

-   **Click to open Event method**: This option controls whether you need to perform a double click or a single click on an object event to open it. By default this is set to double-click.
-   **Inherited Events alpha**: This option permits you to change the alpha that any ¡inherited events will be drawn with in the events list of the object. By default this is set to 0.5 (values should be between 0 and 1).
-   **Events label format**: Here you can enable or disable the different possible texts that can be applied to the event label in the object editor events list. By default the Event Description is enabled only.
-   **Add default event content**: By default this option is enabled and all it does is add a simple comment into the code editor for all new events to remind you that you can add your code there.
-   **Default event content**: Here you can edit the comments that are added by default in the code window for new events. New installations of GameMaker default to no content, existing installations use the currently set content. Click **Restore defaults** to update an existing installation to the new default content.

The following sub-category also exists for the Object Editor:

[Confirm DialogsConfirm Dialogs](Object_Editor_Preferences.htm#)

![The Object Editor Confirm Dialog Preferences](../../assets/Images/Setup_And_Version/Preferences/Object_Editor_Confirm_Prefs.png)

This section deals with the dialogs that may be be shown while using the Object Editor, with the following option available:

-   **Automatic response to GML Visual conversion to GML Code**: You can use the right mouse button ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) within the GML Visual workspace, or on an event, to select the option to turn all GML Visual for that event into GML code. The default action here is to show a warning message asking if you want to continue, but you can set this to "OK" and the dialog will not be shown before the conversion.
-   **Automatic choice on event deletion**: This option can be used to control the pop up message that is shown when you delete an event in the Object Editor events list. The default action here is to show a warning message, but you can set this to "OK" and the dialog will not be shown.
-   **Automatic response to exceeding physics vertex limit**: This option can be used to control the pop up message that is shown when you exceed the permitted vertex number in the physics shape editor. The default action here is to show a warning message, but you can set this to "OK" and the dialog will not be shown.