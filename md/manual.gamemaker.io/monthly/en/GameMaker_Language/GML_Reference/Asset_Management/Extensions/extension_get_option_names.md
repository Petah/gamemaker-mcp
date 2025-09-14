---
title: "extension_get_option_names"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Extensions/extension_get_option_names.htm"
converted: "2025-09-14T03:59:32.706Z"
---

# extension\_get\_option\_names

This function returns an array containing the names of all the [options](../../../../The_Asset_Editors/Extension_Creation/Creating_An_Extension.htm#h1) that exist in the extension with the given name.

The function will return undefined if the provided extension name is invalid.

#### Syntax:

extension\_get\_option\_names(extension\_name);

| Argument | Type | Description |
| --- | --- | --- |
| extension_name | String | The name of your extension asset as a string |

#### Returns:

[Array](../../../GML_Overview/Arrays.md) of [String](../../../GML_Overview/Data_Types.md)s

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