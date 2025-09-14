---
title: "File Watcher"
source: "manual.gamemaker.io/monthly/en/Setting_Up_And_Version_Information/IDE_Preferences/General/File_Watcher.htm"
converted: "2025-09-14T04:00:13.461Z"
---

# File Watcher Preferences

![File Watcher Preferences](../../../assets/Images/Setup_And_Version/Preferences/General_FileWatcher_Prefs.png)

The **File Watcher** is the name given to the part of the IDE that watches the files related to a project for any changes due to external software (i.e.: editing an image in an external editor) or due to internal changes like editing a script asset. In general, these settings shouldn't need to be edited, but on some systems - like those that use an SSD as the save drive for the project files - the file watcher may be informing you of changes when you do things like simply saving the project or whenever you edit any project asset, in which case you may need to change these settings.

The settings available are:

-   **Enable File Watcher**: This can be used to enable or disable the File Watcher system. If this is disabled, **the IDE will no longer pick up on any files changed by external sources**, so care should be taken when disabling this feature. The File Watcher is enabled by default.
-   **Set File Watcher tolerance in MS after saving In the IDE**: This adjusts the time between saving a file and the file watcher checking for changes. You would adjust this value if you were saving your project and the File Watcher was erroneously appearing saying something had changed, in which case you would increase the delay until the message no longer appears. The default value is 2000ms, but can range from 1ms up to 10,000ms.
-   **Set File Watcher action delay in ms after filesystem changes**: This adjusts the time the File Watcher waits before it takes into account changes in detected in the filesystem. The default value is 1000ms.