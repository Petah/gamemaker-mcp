---
title: "font_texture_page_size"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Fonts/font_texture_page_size.htm"
converted: "2025-09-14T03:59:33.270Z"
---

# font\_texture\_page\_size

This **built-in variable** can be used to either get or set the texture page size when using the function [font\_add()](font_add.md). On adding a font using that function, GameMaker will create a texture page cache of the required glyphs up to the size defined by this variable. The process is as follows:

-   Each character you use is cached from the font into a texture page
-   When the texture page is full (because you use big characters or a lot of different characters) GameMaker will remove characters from the cache and replace them with new ones you need
-   GameMaker tries not to make the texture too big because not all devices can cope with large textures, and it tries not to make the texture too small because removing and re-adding characters to the texture takes CPU time and causes your game to run slowly

If you think you require a larger or a smaller texture page size than the default 1024px that GameMaker uses, you can set the value using this built-in variable. If you are not using the font\_add() function, then setting this will have no effect on your games performance as fonts added in the IDE are cached on the regular texture pages (which you can control from the [Font Editor](../../../../The_Asset_Editors/Fonts.md) and the [Game Options](../../../../Settings/Game_Options.md) for the target platform).

#### Syntax:

font\_texture\_page\_size;

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (maximum width/height in pixels)

#### Example:

font\_texture\_page\_size = 512;
newfont = font\_add("Arial", 24, true, true, 32, 128);

The above code sets the font cache texture page to a maximum size of 512px and then adds a new font to the game.