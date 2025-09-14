---
title: "The Room Manager"
source: "manual.gamemaker.io/monthly/en/Settings/The_Room_Manager.htm"
converted: "2025-09-14T04:00:14.801Z"
---

# The Room Manager

![The Room Manager](../assets/Images/Settings/Room_Manager.png)When using the [Asset Browser](../Introduction/The_Asset_Browser.md), you can create your rooms and move them between the different folder groups to organise the project in a way that best suits you. However, games in GameMaker generally have rooms that follow a certain order, and at the very least must have a specific **start room** (after the game starts in this room you can use code or actions to go to any room in the game if you wish), which is where the **Room Manager** comes into play.

You can open the room manager by clicking the "Extras" button ![Extras Menu Icon](../assets/Images/Icons/Icon_AssetMenu.png) at the top of the Asset Browser and selecting it from the menu that opens, or you can simply click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) the icon to the left of a room in the asset browser:

![Opening The Room Manager](../assets/Images/Settings/Room_Manager_Open.gif)Once open, the Room Manager presents you with two different tabs, one for **Room Order** and one for **Room Inheritance**. The room order defines the order in which rooms will be accessed if you are traversing the game literally, using the function [room\_goto\_next()](../GameMaker_Language/GML_Reference/Asset_Management/Rooms/room_goto_next.md) at the end of each room, and the very top room listed will always be flagged by the "home" icon ![Room Manager Home Room Icon](../assets/Images/Icons/icon_RoomManager_Home.png), which shows you that this room is the designated _start_ room for the game. This icon will also be shown in the Asset Browser so you can see clearly which room it is, regardless of the how you have filtered or set up your assets.

NOTE The IDs of your room assets will not be in the same order as defined in this list, and so you should not supply a number value directly to change the room at runtime. Always use the room constant for the asset you want to reference (which is simply its name) or retrieve it through a function.

You can change the order of rooms by simply clicking ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and dragging the room you want to move up or down the list, and you can use ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) and/or ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png) to select multiple rooms then click and drag them to move them altogether:

![Moving Rooms Within The Room Manager](../assets/Images/Settings/Room_Manager_Move.gif)The **Room Inheritance** tab is for setting up "child" rooms. A child room is one that has been copied from a "parent" room and set to inherit all of its properties. If you do nothing to this room, then this room will indeed be a copy of the original room, but you can then go into the [Room Editor](../The_Asset_Editors/Rooms.md) and toggle inheritance on or off for specific things like layers, or instances, as well as add new layers, instances and properties to the room.

![The Room Inheritance Tab](../assets/Images/Settings/Room_Manager_Inheritance.png)As with the Room Order tab, you can click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) and drag to reorder the rooms, but note that selecting a child room and moving it to a different parent will break the room inheritance with the original parent and it will instead inherit the properties of the new room. Note too that you can convert a child into a "full" room with no inheritance by dragging it to the left of the list (the list border will become highlighted), at which point it will simply become a room in its own right.

Rooms can have multiple children, and each child can also be a parent and have their own children, for example:

![Example Of Room Inheritance With Multiple Children](../assets/Images/Settings/Room_Manager_Inheritance_Example.png)Here we have a parent room, "rm\_Level\_1\_Day", which has two children "rm\_Level\_1\_Day\_AfterBattle" and "rm\_Level\_1\_Night". We have also assigned another child room to "rm\_Level\_1\_Night" called " rm\_Level\_1\_Night\_AfterBattle". In this way you can re-use resources and level design from one parent room, and then only change what is required to make it slightly different in the child room or rooms.

NOTE For more information on room inheritance, please see [here](../The_Asset_Editors/Room_Properties/Room_Inheritance.md).

Finally, the room manager has some extra tools to help you navigate and organise your rooms. At the top you have a **Search Bar** which enables you to add a search term and then quickly go to the rooms that have the search term in their names. Rooms that have the search term in them will be highlighted, and then you can navigate to them instantly using the up/down buttons on the side:

![Searching rooms in the Room Manager](../assets/Images/Settings/Room_Manager_Search.gif)There are also some helpful buttons at the bottom of the Room Manager that permit you to move rooms up or down the room order list:

![Moving rooms up or down in the Room Manager](../assets/Images/Settings/Room_Manager_MoveButtons.gif)Beside these buttons you also have a **Create Group** button which can be used to create a group folder. These folders can be used to better organise the rooms in your game (room order will still be respected), and you can click and drag rooms onto the folder to add them. You can also select multiple rooms by clicking while holding down ![Shift Icon](../assets/Images/Icons/Icon_Shift.png) and/or ![Control Icon](../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../assets/Images/Icons/Icon_Cmd.png), then click the Create Group button and all the selected rooms will be added to the group. Note that this _will_ change the order of the rooms in your game, and also note that if you choose to delete the group folder later, **any rooms within the folder will be deleted too** (by default GameMaker will warn you about this).

You should also note that you can right click on any room in the Room Manager to bring up the following menu:

![Room Manager RMB menu](../assets/Images/Settings/Room_Manager_Room_RMB_Menu.png)This menu gives you the following options:

-   **Create Child Room**: This will create a new room as a child of the room that was clicked on, with the new room inheriting the parent room properties.
-   **Edit**: This will open the [Room Editor](../The_Asset_Editors/Rooms.md) for the room.
-   **Edit Tags**: This will open the [Tag Editor](../Introduction/The_Asset_Browser.md) so you can add tags to the room.
-   **Rename**: This permits you to rename the room asset (you can also do a slow double click ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) on the room to rename it).
-   **Duplicate**: This will duplicate the selected room, placing the new room under the selected room.
-   **Favourite**:  This will add the selected room to the [Asset Browser](../Introduction/The_Asset_Browser.md) Favourites section.
-   **Delete**: Clicking this will delete the room (or rooms) that have been selected. If used on a group folder, all rooms within the folder will be deleted along with the folder. If used on a parent room, only the parent will be deleted, and all child rooms will remain, although they will now be independent and no longer child rooms.
-   **Expand Children**: If a group folder is selected, this option will expand the contents of the folder.
-   **Expand All**: This option will expand all folder groups.
-   **Collapse All**: This option will collapse all folder groups.
-   **Arrange**:  The arrange sub.menu can be used to move rooms up or down in the room manager, much the same as the buttons at the bottom of the manager window.
-   **Open In Explorer**: This will open a OS file explorer on the asset in the game project.
-   **Asset Colour**: Here you can select a colour for the room (or rooms) to help identify them in the Room Manager. Note that this colour will also be used in the Asset Browser and override any colour that has been set previously.