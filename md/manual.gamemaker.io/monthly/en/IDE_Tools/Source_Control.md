---
title: "Source Control"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control.htm"
converted: "2025-09-14T04:00:12.534Z"
---

# Source Control

**Source Control Management** (SCM) is the name given to the method of working with **sub-versions** or backups of your projects through a repository and local source. Basically, an SCM solution is an independent software package which controls all the aspects of maintaining, changing and comparing versions of your project as you work on it. This is especially useful to those who work in a team and need to be able to control who does what and not worry about losing data or making changes that may need to be undone at a later date, but individuals can also benefit from this powerful yet flexible system.

GameMaker makes use of [Git](https://git-scm.com/ "Git") for its SCM, which must be installed and set up separately before SCM can be used within GameMaker. See the [Git Documentation](https://git-scm.com/doc "Git Documentation") for more specific info regarding Git.

Below you can find links to a small tutorial on how to set up this plugin and use the SCM tools with a project.

**IMPORTANT** We recommend that you have some working knowledge of how source control works before attempting to use it in GameMaker.

-   [Setting Up The Git Plugin](Source_Control/Setting_Up_Git_Plugin.md)
-   [Repository Options](Source_Control/Repository_Options.md)
-   [Standard Workflow](Source_Control/Standard_Workflow.md)
-   [Reverting Files](Source_Control/Reverting_Files.md)
-   [Cloning A Repository](Source_Control/Cloning_A_Repository.md)
-   [Conflicts](Source_Control/Conflicts.md)
-   [Setting Up External Merge/Diff Tools](Source_Control/External_Merge_Diff_Tools.md)
-   [Plugin Preferences](../Setting_Up_And_Version_Information/IDE_Preferences/Plugin_Preferences.md)

GameMaker will show a drop-down menu in the Menu Bar for Source Control, which will be populated with the following options once Source Control has been activated for your project (see the section [Setting Up The Git Plugin](Source_Control/Setting_Up_Git_Plugin.md) above for details):

![Source Control Context Menu](../assets/Images/IDE%20Tools/SCM_ContextMenu.png)Here we outline each of the available options (most of them are explained in more depth in the tutorial sections above):

-   **Create Project Repository**: This option permits you to create a local repository in the same directory as your project files.
-   **Clone Repository**: This option will permit you to clone a repository from a source to a new destination.
-   **Commit Changes**: With this option you can stage changed files in your project and then commit them to the repository.
-   **Push Changes**: After doing a commit or a merge this option is used to push the changes to the master repository.
-   **Pull Changes**: With this option you can update the local repository by pulling the changed files from the master repository.
-   **View History**: This will open the history window where you can view all the version history of the project and choose to roll back specific file paths or whole revisions.
-   **Show Conflicts**: This will open the Conflicts window and list any conflicted files that may exist in the project, permitting you to deal with them either through the GameMaker IDE or using a specific Merge Tool.