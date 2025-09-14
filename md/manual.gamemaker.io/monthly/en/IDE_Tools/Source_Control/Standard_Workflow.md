---
title: "Standard Workflow"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control/Standard_Workflow.htm"
converted: "2025-09-14T04:00:12.517Z"
---

# Standard Workflow

As you work on your project, you will naturally create sprites, edit scripts, delete timelines, and whatever else is required as your project develops over time. These are all actions which you may want to keep track of and get back should something go wrong.

This is one of the main reasons for using Source Control - so that any accidents can be reverted - and we will quickly take you through the basic workflow from the start so you understand how this works.

Starting from the beginning, create a new GML project and then [activate source control](Setting_Up_Git_Plugin.md). This gives us access to the Source Control menu on the top, so we'll immediately go and select **Create Project Repository**. If you look at the room assets, you can see that the default room has gained a red exclamation ![SCM Modified Icon](../../assets/Images/Icons/SCM_Modified.png), meaning that it has been **modified** from its last state. If we had other resources in the project, you'd see that they all have the same icon as shown in the image below:

![Source Control Modified Assets](../../assets/Images/IDE%20Tools/SCM_ModifiedState.png)We now have the option of either committing the blank project as it is, or getting it to a base state. For now, we'll do our first commit so click **Source Control** > **Commit Changes**. We'll now get a new window opened which is split into three areas:

![Source Control Commit Window](../../assets/Images/IDE%20Tools/SCM_CommitWindow.png)

-   **Staged Changes**: This represent the changes which will be committed to source. This will likely be blank, but it may show a Game Options change, which is fine.
-   **Unstaged Changes**: This shows the files that have changed, but that we haven't told Git that we want to commit them - they're "pending" changes.
-   **Commit Message**: This is a note that we can add to explain what the changes are.

For now, click the **Stage All** button, as we want to commit all the changes, and type something like "First Commit!" into the Commit Message and click **Commit**. All our resources should now have a green tick![SCM Committed Icon](../../assets/Images/Icons/SCM_Committed.png), meaning there's no modifications found.

It is worth noting that as you work within this window, the various **Staged** and **Unstaged** messages will be prefixed by a symbol. The symbol being used will vary depending on the operation and file, with the following being used:

-   \[...\] - Staged Change
-   \[+\] - Newly Added
-   \[->\] - Renamed/Moved
-   \[-\] - Removed
-   \[M\] - Unstaged Changes
-   \[?\] - Untracked File
-   \[!\] - Missing File

Our work process can now begin, and we can start to build our project and save and commit changes, just as we've done in the paragraphs above.

After working for a while, you may want to check and see what you've committed at any given time, and so for that you'll want to open the **Commit History**. To open the history window you simply go to **Source Control** > **View History** which opens another window with three panes:

![Source Control History Window](../../assets/Images/IDE%20Tools/SCM_HistoryWindow.png)The top pane describes the commits, the middle pane describes the comment given to the selected commit, and the bottom pane describes the files that have been modified in this commit. Note that if you have set up a [Diff Tool](External_Merge_Diff_Tools.md), then double-clicking on any file in this window will open the diff tool and you'll be able to see the changes between the files.

Then you might want to push your changes to where the repository is stored online. If the repository was created from within GameMaker then it won't have a remote, which you can add from the command line using git remote add <name> <url>.