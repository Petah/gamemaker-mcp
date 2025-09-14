---
title: "Push Notifications"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Object_Properties/Async_Events/Push_Notifications.htm"
converted: "2025-09-14T04:00:15.649Z"
---

# Push Notifications

![Push Notification Event](../../../assets/Images/Asset_Editors/Async_Push.png)The Push Notification Event is triggered by the callback from [**push notifications**](../../../GameMaker_Language/GML_Reference/Asynchronous_Functions/Push_Notifications/Push_Notifications.md) on the device OS, either from a local source or a remote source. It generates a [DS Map](../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) that is exclusive to this event and is stored in the special variable [async\_load](../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md).

This event is exclusively used by extensions (such as the [Firebase Cloud Messaging](https://marketplace.gamemaker.io/assets/10451/firebase-cloud-messaging-ext) extension), so please refer to your extension's documentation for instructions on using this event.