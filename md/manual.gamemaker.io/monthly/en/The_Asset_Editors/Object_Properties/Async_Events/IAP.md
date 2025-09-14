---
title: "IAP"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/IAP.htm"
converted: "2025-09-14T04:00:15.588Z"
---

# IAP

![IAP Event](../../../assets/Images/Asset_Editors/Async_IAP.png)This event can only be triggered by the various **In-App Purchase** (IAP) extensions for the different target platforms available on [The Marketplace](../../../Introduction/The_Marketplace.md). It will always generate a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_create.md) that is exclusive to this event and stored in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md). This DS map will have different key/value pairs depending on the extension function that triggered it, but there will always be an "id" key which can then be used to identify the type of In-App Purchase event that it is. For exact details of the possible return values and functions that generate this event, please see the individual PDF manuals included with each of the extensions.