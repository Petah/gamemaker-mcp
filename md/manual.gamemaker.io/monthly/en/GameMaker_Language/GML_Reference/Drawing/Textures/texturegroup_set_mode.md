---
title: "texturegroup_set_mode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Drawing/Textures/texturegroup_set_mode.htm"
converted: "2025-09-14T03:59:55.243Z"
---

# texturegroup\_set\_mode

This function allows you to set three things:

1.  **Mode**: You can set whether Dynamic Texture Groups use **Implicit** (default) or **Explicit** loading, by using false for Implicit and true for Explicit.

    For information on modes, see: [Dynamic Group Modes](../../../../../../../Settings/Texture_Information/Dynamic_Textures.md)
2.  **Debug**: You can enable debugging, which will show you all of your game's Texture Pages along with their [status](texturegroup_get_status.md) in-game.
    ![](../../../../assets/Images/Settings/Texture_Groups_Debug_Info.png)
3.  **Default Sprite**: This is the default sprite that appears when the mode is set to Explicit, and the texture you're drawing to draw has not been loaded.

    For more information, see: [Explicit](../../../../../../../Settings/Texture_Information/Dynamic_Textures.md)

#### Syntax:

texturegroup\_set\_mode(explicit, \[debug=false, default\_sprite=-1\]);

| Argument | Type | Description |
| --- | --- | --- |
| explicit | Boolean | The mode used for Dynamic Texture Groups: Implicit (false), or Explicit (true) |
| debug | Boolean | OPTIONAL Enable/disable Texture Group debugging |
| default_sprite | Sprite Asset | OPTIONAL Only used in Explicit mode: The sprite used as the "fallback" texture when another texture is not loaded (the whole texture page is drawn) |

#### Returns:

N/A

#### Example:

texturegroup\_set\_mode(true, false, spr\_fallback);

This will enable Explicit mode, disable debugging and set spr\_fallback as the fallback sprite for unloaded textures.