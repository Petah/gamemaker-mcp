---
title: "Time Source Expiry Types"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Time_Sources/Time_Source_Expiry_Types.htm"
converted: "2025-09-14T04:00:08.006Z"
---

# Time Source Expiry Types

| Time Source Expiry Constant |
| --- |
| Constant | Description | Value |
| time_source_expire_nearest | The Time Source will expire on the frame nearest to its expiry time | 0 |
| time_source_expire_after | The Time Source will expire on the first frame after its expiry time | 1 |

Time Sources that use seconds as a [unit](Time_Source_Units.md) may not always expire on a game frame. They may expire after a game frame has been processed but before a new frame can start processing.

However, the callback for a Time Source can only run on a game frame, so the expiry type of a Time Source controls when its callback runs, in case it expires in the middle of two frames.

When using time\_source\_expire\_nearest, the callback for a Time Source will run on the frame that's nearest to its expiry time, which may be the frame before it, or the frame after it.

When using time\_source\_expire\_after, the callback for a Time Source will always run on the frame _after_ its expiry time.

During a frame, a Time Source is "ticked" (i.e. _updated_) and its callback is executed between the Begin Step and Step events (see [Event Order](../../../The_Asset_Editors/Object_Properties/Event_Order.md)).