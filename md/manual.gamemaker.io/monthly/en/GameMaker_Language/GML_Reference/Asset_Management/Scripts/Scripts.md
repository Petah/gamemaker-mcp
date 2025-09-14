---
title: "Scripts"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Scripts/Scripts.htm"
converted: "2025-09-14T03:59:39.453Z"
---

# Scripts

The following functions used for checking and running scripts that have been written in [The Script Editor](../../../../The_Asset_Editors/Scripts.md):

-   [script\_exists](script_exists.md)
-   [script\_get\_name](script_get_name.md)
-   [script\_execute](script_execute.md)
-   [script\_execute\_ext](script_execute_ext.md)

NOTE Keep in mind that if your script is **completely empty**, it will not be loaded into the compiled game and will become non-existent; meaning that trying to reference such a script asset will crash your game. Note that this only applies to scripts that are completely empty, so even if your script only contains comments, it will still be included in the compiled game.