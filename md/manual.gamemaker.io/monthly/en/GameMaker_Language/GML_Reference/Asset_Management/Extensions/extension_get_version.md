---
title: "extension_get_version"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Extensions/extension_get_version.htm"
converted: "2025-09-14T03:59:32.748Z"
---

# extension\_get\_version

This functions gets the version of an [Extension Asset](../../../../The_Asset_Editors/Extensions.md) with the given name, and returns it as a string formatted as "major.minor.revision".

#### Syntax:

extension\_get\_version(ext\_name);

| Argument | Type | Description |
| --- | --- | --- |
| extension_name | String | The name of the extension |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var \_version\_string = extension\_get\_version("MyExtension");
var \_values = string\_split(\_version\_string, ".");
var \_major = \_values\[0\], \_minor = \_values\[1\], \_revision = \_values\[2\];
show\_debug\_message($"Version: {\_ver}\\nMajor: {\_major}\\nMinor: {\_minor}\\nRevision:{\_revision}");
if (\_major < 1)
{
    show\_debug\_message("At least version 1 of the extension is required.");
    game\_end();
}

The above code first calls extension\_get\_version to get a string containing the version number of an extension named "MyExtension". It stores the returned value in a temporary variable \_version\_string and calls [string\_split](../../Strings/string_split.md) on that to get the major and minor version number, as well as the revision number. These are assigned to the temporary variables \_major, \_minor and \_revision respectively. A debug message shows this information. Finally the major version number is checked; if it is too low a debug message is output and the game is ended by calling [game\_end](../../General_Game_Control/game_end.md).