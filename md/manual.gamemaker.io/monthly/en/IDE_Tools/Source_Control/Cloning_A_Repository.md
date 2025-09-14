---
title: "Cloning A Repository"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control/Cloning_A_Repository.htm"
converted: "2025-09-14T04:00:12.420Z"
---

# Cloning A Repository

When your project is stored in an external repository, you need to remember to both push your changes and pull any new ones. The reason for this is that when you commit, you store your changes locally, which allows you to work away from an internet connection and sync up when you're ready, and to sync up you push your changes to the remote repository. Pulling changes means that you want to pull any changes that others have made from the remote repository into your local repository. However, this means that there may be times when people can be editing the same files, which in turn creates a **merge conflict**. You need to know how to handle these conflicts so we're going to deliberately create one now and then [show you how to deal with it](Conflicts.md).

**NOTE**: Sharing a local project repository (even through a file synchronization service like Dropbox) isn't recommended, as commits are generally written directly to it, and thus you have very little conflict protection.

To generate our conflict we first need to have two local repositories, one for the Master repository and one for our copy. To create this we need to Clone the repository, which is done with the following steps:

-   Go to **Source Control** > **Clone Repository**.
-   In the URL field, type the path to the project that we setup in the [Reverting Files guide](Reverting_Files.md) (by default this will be <DRIVE>:\\Users\\<Username>\\GameMakerProjects\\<ProjectName>).![Source Control Clone Repository From](../../assets/Images/IDE%20Tools/SCM_RepositoryToClone.png)
-   We then need to set a path to clone to:
    ![Source Control Clone Repository To](../../assets/Images/IDE%20Tools/SCM_CloneTo.png)When we click the "OK" button we'll get the following warning about trying to clone a "non-bare" repository:
    ![Source Control Clone Warning ](../../assets/Images/IDE%20Tools/SCM_CloneWarning.png)We can click "OK" here again.
-   We'll now be presented with a directory explorer to create a "bare" proxy repository (this is a repository which you can safely store on Dropbox, for example). Browse to where we want to create this proxy repository and select (or create) the folder to use.

Once we've done that, GameMaker will push the original project to the proxy, and pull a new one to the path we've set in the **Clone Repository** window and then automatically open a file browser so we can open the stored project. If we now go to **Source Control** > **View History** we'll see our original commits plus a new "Push For Clone" commit.

![Source Control Push For Clone](../../assets/Images/IDE%20Tools/SCM_PushForClone.png)You have now cloned your repository and can continue working on the local version of the project.