---
title: "sprite_get_number"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Sprites/Sprite_Information/sprite_get_number.htm"
converted: "2025-09-14T03:59:41.475Z"
---

# sprite\_get\_number

A sprite has to have at least one sub-image and this function will return just how many it has. Remember, a sprite sub-image starts being numbered from 0, so if this function returns 3 (the sprite being checked has 3 sub-images) they will be numbered 0, 1 and 2.

#### Syntax:

sprite\_get\_number(index);

| Argument | Type | Description |
| --- | --- | --- |
| index | Sprite Asset | The index of the sprite. |

#### Returns

[Real](../../../../GML_Overview/Data_Types.md)

#### Example:

image\_index = floor(random(sprite\_get\_number(sprite\_index)));

The above code will set the image index to a random frame based on the number of sub-images that the sprite has.