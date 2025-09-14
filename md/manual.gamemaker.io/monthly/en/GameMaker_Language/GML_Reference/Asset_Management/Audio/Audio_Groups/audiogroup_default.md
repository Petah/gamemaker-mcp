---
title: "audiogroup_default"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Groups/audiogroup_default.htm"
converted: "2025-09-14T03:59:31.357Z"
---

# audiogroup\_default

This is a built-in constant that represents the default audio group.

All newly added [Sound Asset](../../../../../The_Asset_Editors/Sounds.md)s are added to this audio group by default, unless you create new ones and assign the sounds to one of those.

NOTE This audio group is a special audio group. Any non-streamed assets in it are guaranteed to be loaded at game start. [Streamed sounds](../audio_create_stream.md) are also assigned to this group, but are ignored when it is loaded.

#### Syntax:

audiogroup\_default

#### Example:

audio\_group\_set\_gain(audiogroup\_default, 0.5, 0);

The above code sets the gain of the default audio group to 0.5. The change in gain takes place instantly.