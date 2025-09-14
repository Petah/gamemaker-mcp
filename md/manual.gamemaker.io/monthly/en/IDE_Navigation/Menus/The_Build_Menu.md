---
title: "The Build Menu"
source: "manual.gamemaker.io/monthly/en/IDE_Navigation/Menus/The_Build_Menu.htm"
converted: "2025-09-14T04:00:12.059Z"
---

# The Build Menu

![The Build Menu](../../assets/Images/IDE_Input/Build_Menu.png)

The build menu is where you can choose to build your project either for testing, debugging or as a final executable. The available options are:

-   **Run** \- Run your current project on the chosen target platform for testing. For the different compile options available when compiling please see the section on [Compiling](../../Introduction/Compiling.md). Note that this command is the same as pressing the Run button ![The Run Game Button](../../assets/Images/Icons/Icon_PlayGame.png) in the IDE.
-   **Debug** \- Run your current project for testing with the debugger so that you can see detailed performance information and debug any errors or issues you may have. For more information on debugging, please see the section [Debugging](../../Introduction/Debugging.md). Note that this command is the same as pressing the Debug button ![The Debug Button](../../assets/Images/Icons/Icon_Debug.png) in the IDE.
-   **Re-Run** - This re-runs the last build without rebuilding. This command will be greyed out if a re-run isn't possible at the time, e.g. when there hasn't been a previous build, there were errors in the previous build or in the case of a run if more than an hour has passed as there is a licensing check in that will prevent this from running.
-   **Clean** \- GameMaker keeps a cache of files to help speed up compile time when testing. However sometimes a "stale" cache can lead to odd and unexpected errors in your game, in which case the first thing you should do is clean the cache from here and re-test. It is also a good idea to clean the cache before you create a final executable for the target platform. Note that this command is the same as pressing the **Clean Cache** button ![The Clean Cache Button](../../assets/Images/Icons/Icon_Clean.png) in the IDE.
-   **Clean Code** - This cleans the code in the project's cache directory (i.e. the "Scripts" folder).
-   **Clean Graphics** - This cleans the graphics in the project's cache directory (i.e. the "Shader", "Sprite", "TextureGroups" and "TexturePageEntries" folders).
-   **Clean Audio** - This cleans the audio in the project's cache directory (i.e. the "Audio" folder).
-   **Create Executable** - This will compile the current project and create an executable package (or packages) for the target platform. It will first open the file explorer so that you can select where you want to save the project and then compile the game. See the section on [Compiling](../../Introduction/Compiling.md) for more information on setting up the compile targets. Note that this command is the same as pressing the **Create Executable** button ![The Create Executable Button](../../assets/Images/Icons/Icon_Compile.png) in the IDE.
-   **Create Executable and Launch** - This will create an executable, just like the option above, and then it will launch that executable on the target platform. This command is the same as pressing the **Create Executable and Launch** button ![The Create Executable Button](../../assets/Images/Icons/Icon_CompileAndLaunch.png) in the IDE. However if the package being created is an installer, it will not be launched, and this will function the same as the **Create Executable** button ![The Create Executable Button](../../assets/Images/Icons/Icon_Compile.png) in the IDE.