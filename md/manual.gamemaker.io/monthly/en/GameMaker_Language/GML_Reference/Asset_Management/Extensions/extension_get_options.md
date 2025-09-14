---
title: "extension_get_options"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Extensions/extension_get_options.htm"
converted: "2025-09-14T03:59:32.735Z"
---

# extension\_get\_options

This function returns a struct containing all the [options](../../../../../../../The_Asset_Editors/Extension_Creation/Creating_An_Extension.md), and their values, for the extension with the given name.

The function will return undefined if the provided extension name is invalid.

#### Syntax:

extension\_get\_options(extension\_name);

| Argument | Type | Description |
| --- | --- | --- |
| extension_name | String | The name of your extension asset as a string |

#### Returns:

[Struct](../../../../../../../GameMaker_Language/GML_Overview/Structs.md)

#### Example:

var \_options = extension\_get\_options("MyExtension");
var \_enabled = \_options.enabled;

This code gets the options struct for an extension and reads a value from it.