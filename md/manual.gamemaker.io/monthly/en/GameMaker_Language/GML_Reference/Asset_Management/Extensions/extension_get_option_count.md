---
title: "extension_get_option_count"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Extensions/extension_get_option_count.htm"
converted: "2025-09-14T03:59:32.693Z"
---

# extension\_get\_option\_count

This function returns the total number of [options](../../../../../../../The_Asset_Editors/Extension_Creation/Creating_An_Extension.md) that exist in the extension with the given name.

The function will return undefined if the provided extension name is invalid.

#### Syntax:

extension\_get\_option\_count(extension\_name);

| Argument | Type | Description |
| --- | --- | --- |
| extension_name | String | The name of your extension asset as a string |

#### Returns:

[Real](../../../../../../../GameMaker_Language/GML_Overview/Data_Types.md)

#### Example:

var \_names = extension\_get\_option\_names("MyExtension");
var \_count = extension\_get\_option\_count("MyExtension");

for (var i = 0; i < \_count; i ++)
{
    var \_option\_name = \_names\[i\];

    show\_debug\_message(\_option\_name + ": ");
    show\_debug\_message(extension\_get\_option\_value("MyExtension", \_option\_name));
}

This code gets the names of all options, and the number of options in the extension MyExtension.

It loops through all option names, and prints each option's name and value to the Output Log.