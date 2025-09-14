---
title: "buffer_async_group_option"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_async_group_option.htm"
converted: "2025-09-14T03:59:43.189Z"
---

# buffer\_async\_group\_option

This function sets some platform-specific options for the buffer group being saved/loaded. The options available are as follows:

-   "**subtitle**" or "**slottitle**" - The value for this option is a string, which is shown to the user when managing their save data in the OS. This is only important when saving data, not when loading again.
-   "**showdialog**" - The value for this option is a boolean true or false. If set to true, when you save _or_ load GameMaker will show the System UI, otherwise it will do a quicksave/quickload with no UI shown. You normally only need this if you're supporting multiple save slots to allow the user to pick a slot, but if you just support one slot per user, set this to false.
-   "**savepadindex**" - For this option you would specify the _pad index_ of the player who is saving _or_ loading and the system will write data to and read data from this player's save folder.
-   "**saveslotsize**" - This option requires that you specify the actual size in bytes you want to save (so you can do a [buffer\_seek](buffer_seek.md) and [buffer\_tell](buffer_tell.md) to get that, for example). Note that it is not obligatory to supply this value as all saves are pre-assigned a minimum space, which usually varies with the target platform.
-   These are some options for PlayStation only. Please refer to [this Helpdesk article](https://help.gamemaker.io/hc/en-us/articles/216756278-Using-Buffers-for-Console-Saving-and-Loading) for information (you'll need to be logged in with your developer access account).

IMPORTANT This function is only valid for PlayStation, Xbox and Nintendo Switch targets. On all the other targets it will do nothing.

#### Syntax:

buffer\_async\_group\_option(option, value);

| Argument | Type | Description |
| --- | --- | --- |
| option | String | The option to set. |
| value | Real or String | The value to set (can be a real or string, depending on the option). |

#### Returns:

N/A

#### Example:

buffer\_async\_group\_begin("save\_folder\_name");
buffer\_async\_group\_option("showdialog", false);
buffer\_async\_group\_option("slottitle", "Catch The Haggis Save");
buffer\_async\_group\_option("subtitle", "All your haggis are saved here!");
save = buffer\_save\_async(buff, "Player\_Save.sav", 0, 16384);
buffer\_async\_group\_end();

The above code starts a buffer group then sets the group options before it sets 4 files to save asynchronously. The group definition is then ended (at which point saving will begin).