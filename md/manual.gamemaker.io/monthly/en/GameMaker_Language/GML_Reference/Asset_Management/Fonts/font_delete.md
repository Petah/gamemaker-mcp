---
title: "font_delete"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_delete.htm"
converted: "2025-09-14T03:59:32.888Z"
---

# font\_delete

With this function you can delete a font asset from the game. This is a **permanent** removal, and changing rooms, or restarting the game will not bring the removed font back. For that the player would need to exit the game and restart that way, so take care when using this function. In general it is only needed for freeing up memory that has been used by a font added to the game through the functions [font\_add](font_add.md) or [font\_add\_sprite](font_add_sprite.md).

#### Syntax:

font\_delete(ind);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The font to delete. |

#### Returns:

N/A

#### Example:

font\_delete(global.font);

The above code will delete the font stored in a global variable global.font.