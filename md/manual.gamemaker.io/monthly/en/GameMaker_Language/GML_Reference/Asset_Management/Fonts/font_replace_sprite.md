---
title: "font_replace_sprite"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_replace_sprite.htm"
converted: "2025-09-14T03:59:33.210Z"
---

# font\_replace\_sprite

With this function you can use a "sprite strip" to replace a previously created sprite font asset, where each sub-image would be an individual symbol or letter. The index is the UTF8 map number for the first character to use and the ranges to use are the same as you would for a normal font, starting with "!" but remember that you should only include what you need and that you should be using the [ord()](../../Strings/ord.md) function to get the correct UTF8 value for the starting letter.

You can also set the spacing for the font to be proportional (true) or not (false), where a proportional font is spaced based on the actual width of the letters (so the letter "i" takes less room than the letter "w", for example) while a non-proportional font will be spaced based on the sub-image width, like a monospaced font. Finally, you can define the space to leave between each letter when writing, and this can be any integer value, with 0 being no space (the letters will "touch" if proportional).

If the function fails, then it will fail silently without replacing the given sprite font.

It is also worth noting that there cannot be any _spaces_ in the character map, so that if you, for example, use '.' and '0' but not '/', you need to either include '/' anyway or leave a blank sub-image between the two used characters. The image below shows a typical sprite font layout:

#### Syntax:

font\_replace\_sprite(ind, spr, first, prop, sep);

| Argument | Type | Description |
| --- | --- | --- |
| ind | Font Asset | The index of the font that shall be replaced (ie all references to this resource past this function will refer to the new font, not the original). |
| spr | Sprite Asset | The sprite to add a font based on. |
| first | Real | The index of the first available character. |
| prop | Boolean | Whether white space around each letter should be removed (if false, the created font will be monospaced, otherwise it'll be like most regular fonts). |
| sep | Real | The space between each letter, 0 meaning the right of one letter just touches the left of the next one. |

#### Returns:

N/A

#### Example:

font\_replace\_sprite(global.Font, working\_directory + "Sprites\\spr\_Font.png", ord("!"), true, 2);

The above code will replace the font asset indexed in the global variable "Font" with a new font asset from an external image file.