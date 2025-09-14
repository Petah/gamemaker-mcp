---
title: "Compiler Batch Files / Scripts"
source: "manual.gamemaker.io/monthly/en/Settings/Runner_Details/Compiler_Batch_Files.htm"
converted: "2025-09-14T04:00:14.644Z"
---

# Compiler Batch Files / Scripts

The GameMaker compiler allows you to place Batch files (Windows) or Shell scripts (on macOS and Linux) in your project directory, and in the directory for each extension in your project.

## Placement

A script file may be placed at the root of your project directory, alongside the project's .yyp file.

A script file may also be placed in the directory of an extension, which may look like this: <project\_directory>/extensions/<extension\_folder>/.

The extension versions of a script file will be executed first, and its root version will be executed last. The order in which extensions are executed can't be controlled, so an extension developer must ensure that one extension's scripts don't rely on another extension's scripts.

## Execution

Script files with specific names, placed in any of the directories described above, are executed at various points during the compilation process:

NOTE The steps in these tables are listed in the order that they are run, except for those under "**Platform-Specific Steps**".

| Windows Batch File Name | macOS/Linux Shell Script Name | Description |
| --- | --- | --- |
| pre_project_step.bat | pre_project_step.sh | This is executed before the asset compiler has loaded the project files |
| post_project_step.bat | post_project_step.sh | This is executed after the asset compiler has loaded the project files |
| pre_run_step.bat | pre_run_step.sh | Only runs when testing the game ("Run" or F5 in the IDE), not run when creating a packageThis is executed before the game deployment is about to start |
| pre_build_step.bat | pre_build_step.sh | This is executed before the asset compiler is asked to build the game |
| post_textures.bat | post_textures.sh | This is executed after the textures for your game have been generated. You can use this step to optimise your game textures manually.This script receives an environment variable called TexturesDir, which stores the path to the generated textures. |
| post_build_step.bat | post_build_step.sh | This is executed after the asset compiler has been started for building the game |
| remote_build_step.bat | remote_build_step.sh | This is executed on the remote machine, when you are on a Windows machine and compiling remotely for macOS/iOS/tvOS or Ubuntu. |
| pre_package_step.bat | pre_package_step.sh | This is executed before the final packaging step, which is when all files are ready but the final ZIP file or store package is about to be created |
| post_package_step.bat | post_package_step.sh | Only runs when creating a package/executableThis is executed after the final packaging step has completed and the final ZIP file or store package has been prepared. It will run locally on the machine where the package command was executed even when compiling for a different device (e.g. Windows to macOS). |
| post_run_step.bat | post_run_step.sh | Only runs when testing the game ("Run" or F5 in the IDE), not run when creating a packageThis is executed when the game is prepared and ready to run. After the script's execution, the game is started (unless you exit the script with 1). It will run locally on the machine where the run command was executed even when compiling for a different device (e.g. Windows to macOS). |
| Platform-Specific Steps |
| pre_gradle_step.bat | pre_gradle_step.sh | Android This is executed when the files necessary for the Android tools have been created, but before Gradle is called. You can use this step to access and modify the Android files yourself, before the Android tools compile it into a final executable. |

These script files are supported when building on all target platforms.

Aside from the script files in the table above, you can also execute scripts during a clean of the cache:

| Windows Batch File Name | macOS/Linux Shell Script Name | Description |
| --- | --- | --- |
| pre_project_step.bat | pre_project_step.sh | This is executed before the asset compiler has loaded the project files |
| post_project_step.bat | post_project_step.sh | This is executed after the asset compiler has loaded the project files |
| pre_clean_step.bat | pre_clean_step.sh | This is executed before the cache directory is cleaned during a Clean operation |
| post_clean_step.bat | post_clean_step.sh | This is executed after the cache directory is cleaned during a Clean operation |

## Extension Version and Options Environment Variables

You can retrieve the extension version and any of the extension options in the Batch files/Shell scripts:

-   Extension option: YYEXTOPT\_<ExtensionName>\_<OptionName>
-   Version number: GMEXT\_<ExtensionName>\_version

Replace <ExtensionName> here with the name of the extension you're using.

## Disabling Scripts for an Extension

If you use multiple extensions that run scripts, for example, Steamworks and GDK, then you'll want to disable Steamworks when exporting to GDK, and vice versa.

For that, see: [How to Disable Extensions?](../../The_Asset_Editors/Extension_Creation/Disabling_Extensions.md)