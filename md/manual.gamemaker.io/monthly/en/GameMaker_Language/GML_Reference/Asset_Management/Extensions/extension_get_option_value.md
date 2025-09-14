---
title: "extension_get_option_value"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Extensions/extension_get_option_value.htm"
converted: "2025-09-14T03:59:32.722Z"
---

# extension\_get\_option\_value

This function returns the value of the given [option](../../../../The_Asset_Editors/Extension_Creation/Creating_An_Extension.htm#h1) in the extension with the given name.

The function will return undefined if the provided extension name is invalid.

#### Syntax:

extension\_get\_option\_value(extension\_name, option\_name);

| Argument | Type | Description |
| --- | --- | --- |
| extension_name | String | The name of your extension asset as a string |
| option_name | String | The name of the option to read |

#### Returns:

[Any](../../../GML_Overview/Data_Types.htm#variable)

#### Example:

var \_enabled = extension\_get\_option\_value("MyExtension", "enabled");

This code gets the value of the enabled option in the MyExtension extension.