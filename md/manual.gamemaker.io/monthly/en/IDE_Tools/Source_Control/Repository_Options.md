---
title: "Repository Options"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control/Repository_Options.htm"
converted: "2025-09-14T04:00:12.469Z"
---

# Repository Options

Having [set up the Git executable and enabled Source Control for you project](Setting_Up_Git_Plugin.md), you now need to link the GameMaker IDE to a repository, which is done in one of two ways:

-   Create a project repository
-   Clone an existing repository

In the first case, **creating a project repository**, this will create a Git repository directly where your project is. In Git parlance this is a "_non-bare repository_", so **Push**/**Pull** make no sense in this case, but you can still commit and keep track of project changes, as well as revert changes and revisions if need be. To set this up, you just need to click **Source Control** > **Create Project Repository** on the main menu.

![Source Control Create Repository](../../assets/Images/IDE%20Tools/SCM_CreateProjectRepository.png)As a convenience function, you can also **Clone** an external repository through the IDE. Again, you'll need the username and password for the repository you are going to connect to setup in your identity preferences, and then it's just a case of clicking **Source Control** > **Clone Repository**. Fill out the URL (using the HTTPS variant rather than SSH) and say where you want it to go:

![Source Control Clone Repository](../../assets/Images/IDE%20Tools/SCM_CloneRepository.png)Once the clone is done, it will automatically open up a file browser for you to open the project if you wish.