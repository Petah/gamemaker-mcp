---
title: "The Start Page"
source: "manual.gamemaker.io/monthly/en/Introduction/The_Start_Page.htm"
converted: "2025-09-14T04:00:12.921Z"
---

# The Start Page

When you open GameMaker, the main IDE will open on the Start Page:

![The Start Page](../assets/Images/Introduction/QS_Start.png)

When you start GameMaker for the first time, you will be able to see a description for each start screen element by hovering over it.

![](../assets/Images/Introduction/QS_Start_Helper.png)Here, you can click on the **"SKIP to Setup Wizard"** button to start creating your first project with the help of the Setup Wizard, which will take you through the steps necessary for creating your first game in GameMaker.

![](../assets/Images/Introduction/QS_Start_Wizard.png)

You can also click on "Close" to close the wizard and continue using GameMaker manually, and optionally enable the "Don't show me again" checkbox if you do not wish to see the wizard when you start GameMaker again.

WARNING A warning message will be shown if GameMaker detects that your "My Projects" directory is set to a cloud storage location, as saving projects to cloud storage may cause problems when saving and building projects. You'll be asked to change it in the [Path Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/General/Paths.md):

## Start Page Elements

The Start Page contains the following elements:

-   **Menu Bar**: This shows you the menus that you can use throughout the IDE; more information is given in a section below.
-   **Project Options**: The Projects section is where you can create, open or import projects. This is explained in more detail further down this page.
-   **Recent Projects**: Here you can see a list of previous projects that you can open. You can also see the full project name and path, and clicking the left mouse button  ![LMB Icon](../assets/Images/Icons/Icon_LMB.png) will open the project. You can also switch the view of this section between tile mode and list mode by pressing the buttons in the top-right corner.
-   **Version & Log In**: This section provides details on the current IDE version being used, as well as the current Runtime version. You will also get notified of any changes available to either the IDE or the Runtime in this section. Here you are also able to log in and access your account. See: [Version & Account Details](../IDE_Navigation/Menus/Version_&_Account_Details.md).
-   **Useful Resources**: This shows you various tiles that you can click on to access official tutorial resources for GameMaker.

## IDE Menus

At the top you can find the general IDE menus which are explained in the following sections of the manual:

-   [The File Menu](../IDE_Navigation/Menus/The_File_Menu.md)
-   [The Edit Menu](../IDE_Navigation/Menus/The_Edit_Menu.md)
-   [The Build Menu](../IDE_Navigation/Menus/The_Build_Menu.md)
-   [The Windows Menu](../IDE_Navigation/Menus/The_Windows_Menu.md)
-   [The Tools Menu](../IDE_Navigation/Menus/The_Tools_Menu.md)
-   [The Marketplace Menu](../IDE_Navigation/Menus/The_Marketplace_Menu.md)
-   [The Layouts Menu](../IDE_Navigation/Menus/The_Layouts_Menu.md)
-   [The Help Menu](../IDE_Navigation/Menus/The_Help_Menu.md)
-   [Version & Account Details](../IDE_Navigation/Menus/Version_&_Account_Details.md)

Note that there will also appear **context specific** menu options in the top menu bar, depending on the window that you have focused on currently. For example, if you have the Image Editor window in focus then you will have extra menu items here for "**Images**", "**View**" and "**Effects**". These extra menu items are explained in the relevant sections of the manual for the workspace or window that generated them.

# Starting A New Project

You can click the **New** button to create a new project, the **Open** button to open an existing project or the **Import** button to open a compressed YYZ GameMaker project file or a legacy GameMaker: Studio 1.4 GMX project file. Both Open and Import will open the file explorer for you to browse to the project file you require.

NOTE GameMaker is not completely backwards compatible with GameMaker: Studio 1.4 projects but imported 1.4 projects should still run, as obsolete functionality has been recreated for you automatically using **compatibility scripts**. For full details of the possible issues and the changes made to GML, please see the Help Center article [Porting A GMS 1.4 Project To GameMaker](https://help.gamemaker.io/hc/en-us/articles/231719468-Porting-A-GMS-1-4-Game-To-GameMaker), as well as the section of the manual on [Obsolete Functions](../Additional_Information/Obsolete_Functions.md).

To create a new project simply click the button labelled **New**, which will open the Project Type and Template menu:

![New Project Buttons](../assets/Images/Introduction/QS_NewProject.png)

First select a project type, which should be **Game** unless you are making a Live Wallpaper or Game Strip for Opera GX.

After choosing your project type, select **Blank** or choose a template.

Then choose a name and save location for your project. If you selected a non-blank template, you may need to choose between [GML Code](../GameMaker_Language.md) and [GML Visual](../GameMaker_Language.md) versions.

Finally, click on **Let's Go!** to enter your new project.

WARNING A warning message is shown if GameMaker detects that the path you try to save the project to refers to a cloud storage location. Saving projects to cloud storage may cause problems when saving and building projects. See the [Permissions Guide](https://help.gamemaker.io/hc/en-us/articles/360022953052-User-Permissions-and-Internet-Access-Required-by-GameMaker#h_01GSTA4T4JBX2HHBRENJ7B56B1) for more information.

TIP You can create your own template by opening a project, and [exporting as a template](../IDE_Navigation/Menus/The_File_Menu.htm#exportproject).