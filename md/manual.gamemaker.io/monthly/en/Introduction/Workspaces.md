---
title: "Workspaces"
source: "manual.gamemaker.io/monthly/en/Introduction/Workspaces.htm"
converted: "2025-09-14T04:00:12.953Z"
---

# Workspaces

After logging in and starting a new project, GameMaker will take you to the initial **workspace** with some basic windows docked to the IDE. In general, the workspace is simply an area where you can organise the different assets for your game while you are working:

![Workspaces](../assets/Images/Introduction/QS_Workspace.png)

As you can see, the initial workspace is on a tab at the top of the screen (and you can rename it by double clicking the tab), but you can create further workspaces for the project by clicking the ![Add New Workspace](../assets/Images/Introduction/Icon_Add.png) to the side, giving you multiple possible workspaces for any single project. For example, maybe you are working on interactions between the player and several enemy objects, so you'd have the player on its own workspace and the enemy objects in another, and perhaps another workspace only to show the scripts that both use.

Another important feature of workspaces is that you can drag out a workspace tab into its own individual window, which will be separate from the main IDE window, making it very easy to organise things if you are using - for example - multiple displays. You also merge these secondary workspace windows back into the main one by dragging the tab back onto the first window.

NOTE Although you appear to have two instances of the IDE running when you do this, they are **both for the same project** and you cannot have one project in one and another in the other unless you specifically open two instances of GameMaker.

When you first start GameMaker, your workspace will already be populated by a couple of windows which will be "**docked**" to the IDE. These are explained briefly below:

-   **Output** \- You can also see in the image above [The Output Window](The_Output_Window.md). There are a number of sub tabs in this window related to **Source Control**, **Searching**, and **Debugging**, with the initial tab being for the console/compiler output, which shows you what is happening when you are compiling a game for testing or when creating a final package for distribution. This will also show any debug messages that you choose to send from your project at runtime, and can be configured to show different quantities of information from the [General Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Output_Windows.md). If you close the output window and wish to recover it you can use [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md).
-   **Assets** \- On the right of the screen you can find [The Asset Browser](The_Asset_Browser.md). Here is where you can create and edit the different assets that your game uses, as well as generate and change configurations, game options, room order and other things. Assets are created by right-clicking ![Rmb](../assets/Images/Icons/Icon_RMB.png) on an asset folder (or anywhere in the main Asset Browser view) and selecting **Create**, or by clicking the plus icon at the top and selecting an asset from the **Create** **Asset** window (note that with this method you can create multiple assets of the same type at a time, by setting the value at the bottom):

    ![Resources Menu](../assets/Images/Introduction/QS_ResourcesMenu.png)Selecting any one of these options will create a new, empty resource of the given type for you, with the name field highlighted so you can immediately give it a name. Note that while the Asset Browser is docked to the IDE by default, you can take it out and into its own window by clicking ![Lmb](../assets/Images/Icons/Icon_LMB.png) on the "Asset Browser" text at the top and dragging. You can re-dock it again at any time by dragging it to the sides or bottom of the IDE. If you close the Asset Browser window and wish to recover it you can use [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md). For more information on the available assets please see the section on [The Asset Editors](../The_Asset_Editors/The_Asset_Editors.md).
-   **Inspector**: On the left of the screen you can find [The Inspector](../IDE_Tools/The_Inspector.md). This shows the properties of the element(s) that you have selected in the IDE.
    You can change these properties here as well.

There are also a set of preferences related to how certain things will be displayed in the workspace so you can customise how it looks as well as certain aspects of the general workflow. You can find these preferences from the following page:

-   [Workspace Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Workspace.md)

# Workspace RMB Menu

While within any workspace you can call up the Right Button Menu at any time by right-clicking ![Rmb](../assets/Images/Icons/Icon_RMB.png) anywhere, which will open the following menu:

![RMB Menu Options](../assets/Images/Introduction/QS_RMB_Options.png)

Clicking **Assets** will open up a list of all the assets in [The Asset Browser](The_Asset_Browser.md) that you can create, and selecting any one of them will create that asset resource for you, as well as focus the workspace on the editor window for that resource. If you click the **Windows** option, you will be shown a list of all the currently open windows within the workspace and you can select any of them to have the workspace focus on that window. Finally you have the **Go To** option which will open the following window:

![Goto Window](../assets/Images/Introduction/QS_Goto.png)

This window permits you to search through every asset, function, **Game Option** and **Preference** in your project for the search term you input. For example, typing "icon" as the search term will show all the items in your project that have "icon" somewhere in their name, e.g.: if a sprite is spr\_Icon\_Play, then it will show up here, as will the object " obj\_Iconoclast", and you'll even see the Game Options for the different icons like "**Icon for hdpi**". Clicking on any of the items shown in the filtered list will open it in the current workspace, or focus the workspace on it if it is already open.

Note that you can also use the keyboard shortcut Ctrl + T / Command + T to open the Go To window, and that the number of items listed is (by default) set to a maximum of 16. You can change this maximum limit along with other search options in the **Go To** section of the [General Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Go_To.md).

For more information on Workspace Navigation, please see the section on [IDE Input And Navigation](../IDE_Navigation/IDE_Input.md).

# Docking

We mentioned briefly above that you can dock many windows into the current workspace window and you can un-dock those that are already docked. If you click ![Lmb](../assets/Images/Icons/Icon_LMB.png) on, for example, the Asset Browser tab at the top and drag it to the left of the current workspace, you will see that it becomes a free-floating window.

![Un-docking the asset browser](../assets/Images/Introduction/QS_UnDocking.gif)This converse is true and if you drag certain windows to the sides of the workspace (or the bottom) then they will be docked, meaning that it essentially becomes part of the IDE window overlay and is no longer independent. When doing this, you drag the window to the area you want to dock to and it will be highlighted to show that you can dock the window there:

![Docking The Asset Browser](../assets/Images/Introduction/QS_Docking.gif)In this way you can create a personalised IDE experience that fits your workflow and way of doing things. It's worth noting that all docked windows can be hidden/unhidden individually by clicking the button to the side of the docked items (highlighted in the image at the top of this page), or you can hide/unhide all docked items using the quick-button  ![Docking Icon](../assets/Images/Icons/Icon_Docking.png) at the top of the IDE, and note too that the IDE will remember docked windows between sessions.

NOTE Some windows will disappear from the dock when you change editors, like in the Room Editor. However when you return to the editor in question, they will be re-opened in the dock again.

# Quick Buttons

Below we list the quick buttons that are available by default with GameMaker. These buttons can be found at the top of the IDE and represent many of the most common commands that you'll be using while working in GameMaker to make your workflow smoother (note that most of these buttons have an equivalent [menu option](../IDE_Navigation/Menus.md) too):

|  | Opens The Start Page in a new workspace. |
| --- | --- |
|  | Create a new project. |
|  | Open a previously created project. |
|  | Save the current project. Note that by default GameMaker will save your project automatically (depending on the Preferences that you have set) and this button is simply so you can force a save at any time. |
|  | This will compile the current project and create an executable package (or packages) for the target platform. It will first open the file explorer so that you can select where you want to save the project and then compile the game. See the section on Compiling for more information on setting up the compile targets. |
|  | This will create an executable, just like the option above, and then it will launch that executable on the target platform. |
|  | Clicking this will test-run your current project along with the debug module. Use this to test and debug your game. You can find more about the debug module from the section on The Debugger. |
|  | Clicking this will test-run your project on the chosen target platform. |
|  | This button can be used to cancel the compilation of your games to the target module, or (on certain targets only) to stop the game while it is running after it has been compiled. |
|  | Pressing this button will clear the current asset compiler cache. GameMaker stores images, sounds, scripts, etc. between use in a cache so as to save time when testing your game as it will only re-compile those things that have been changed before testing. However, this cache may become corrupted or "stale" over time, or you may wish to do a full test with no caching being done previously, in which case you can clear the cache by pressing this button.IMPORTANT It is recommended that you always clear the cache before creating the executable for any target platform. |
|  | Clicking this will open up the Main Game Options Editor. Note that this is only the main, general, options for the current project, but you may also have platform specific options being listed as a part of The Asset Browser. |
|  | Click this to open the manual (or alternatively, press F1). |
|  | This will zoom the focused workspace out to make everything smaller (you can also achieve this holding down Ctrl / Command and using the mouse wheel ). |
|  | This will reset the focused workspace to be 1:1 again. |
|  | This will zoom the focused workspace in to make everything larger (you can also achieve this holding down Ctrl / Command and using the mouse wheel ). |
|  | This will toggle all the docked elements between hidden and unhidden. |
|  | This will toggle laptop mode on and off (This will only appear if you are currently using a laptop - see the section on IDE Input And Navigation for more details) |