---
title: "Conflicts"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/Source_Control/Conflicts.htm"
converted: "2025-09-14T04:00:12.436Z"
---

# Conflicts

In this section we are going to look at resolving conflicts between a [cloned local repository](Cloning_A_Repository.md) and a master repository. Assuming you are now using a local repository we'll need to edit a file and then cause some kind of conflict, so open the test script we've been using and change the "Hello World" message to something like this:

show\_debug\_message("Hello World, How Are You?");

You should now save the project and commit it to the local repository. Now, since we are linked to a remote master repository (even if it's one we've cloned to the same disk) we need to do a Push to get the changes on to master. For that, go to **Source Control** > **Push Changes**, which will give us a status update in the Source Control [Output Tab](../../Introduction/The_Output_Window.md):

![Source Control Output Panel](../../assets/Images/IDE%20Tools/SCM_OutputPanel.png)We now need to open up our original project (not the cloned one), so browse to where you saved it on disk - or simply check the **Recent Projects** in the [File menu](../../IDE_Navigation/Menus/The_File_Menu.md), as it should be directly under the current one - and load it into GameMaker. An easy way to check you have the right project is to simply check the script you have and if the message is "Hello World" then you have the right one, or you can open up the **View History** window and check that way.

You now need to edit the script again, so make it read something like this:

show\_debug\_message("This will cause a conflict.");

This can be saved to disk, and the changes committed, but if you try to push these changes you'll get the following message:

![Source Control Push Conflict Message](../../assets/Images/IDE%20Tools/SCM_PushConflict.png)Someone has already pushed changes which you don't have yet! This means that you need to do a pull on the repository and see what exactly the issue is, so go to **Source Control** > **Pull Changes**. This will show two windows, the first is a warning about changed files (as with previous actions, you want to choose **Reload** here and _not_ **Save**), and the other is the **Conflicts** window:

![Source Control Conflict Window](../../assets/Images/IDE%20Tools/SCM_ConflictsWindow.png)This window will show the conflicted files in a list to the left, and you can select the files from that list using the left mouse button ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) (or select multiple files using ![Control Icon](../../assets/Images/Icons/Icon_Ctrl.png) / ![CMD Icon](../../assets/Images/Icons/Icon_Cmd.png) or ![Shift Icon](../../assets/Images/Icons/Icon_Shift.png) along with ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png)). You have four options for dealing with the conflicted files, available from the buttons on the right:

-   **Use Theirs** - This will overwrite the changes you have made with the one from the remote repository.
-   **Use Mine** - This will overwrite the changes from the remote repository with the ones you've just made.
-   **Merge** \- This will attempt to open an External Merge Tool to handle the conflict.
-   **Choose Merge Tool** - This will let you configure the Merge Tool (see the section on [External Merge/Diff Tools](External_Merge_Diff_Tools.md) for more details).

Now, you can use the buttons to sort out the conflict, but before you do, let's just open the conflicted file to see exactly what the issue is. If you open the script that is conflicted it will now look like this:

![Source Control Conflicted Code](../../assets/Images/IDE%20Tools/SCM_ConflictedCode.png)This shows that "This Will Cause A Conflict" is on the HEAD (this is what we have pushed to the local repository) and that "Hello World, How Are You?" is being pulled from master, the remote repository.

Let's go back to the Conflicts window now and click on **Use Theirs** to pull the changed file and overwrite the current HEAD file. The script will now be flagged as changed and you should do a new commit and push before continuing.

Note that we could actually fix this in the GameMaker IDE. If we remove lines 1, 2, 3 and 5 so we are left with just show\_debug\_message("Hello World, How Are You?") and save it, it'll clear the conflict, as Git will assume that you know what you are doing with your own file. However, this can be complicated to do depending on the merge, so you may want to install a merge tool, then configure and use that instead of manually trying to merge.