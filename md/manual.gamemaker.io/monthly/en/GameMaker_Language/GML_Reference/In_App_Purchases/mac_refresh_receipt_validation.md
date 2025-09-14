---
title: "mac_refresh_receipt_validation"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/In_App_Purchases/mac_refresh_receipt_validation.htm"
converted: "2025-09-14T04:00:00.447Z"
---

# mac\_refresh\_receipt\_validation

This function attempts to revalidate a Mac App Store receipt.

It triggers an Async [System](../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event of type "receipt\_validation". If the receipt is valid, the valid key in async\_load will be true. See the example below.

NOTE The async event is automatically triggered a single time at game start.

#### Syntax:

mac\_refresh\_receipt\_validation();

#### Returns:

N/A

#### Example:

Left Pressed Event

 mac\_refresh\_receipt\_validation();

Async - System Event

if (async\_load\[? "type"\] != "receipt\_validation") exit;

if (async\_load\[? "valid"\])
{
    // Unlock functionality
    // ...
}
else
{
    // Show debug message and keep functionality unchanged
    show\_debug\_message("Invalid receipt - staying in demo mode");
}

The above code shows a call to mac\_refresh\_receipt\_validation in a mouse Left Pressed event - on a button object, for example - and the code of the Async [System](../../../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event. If the event type held in the [async\_load](../../../../../../GameMaker_Language/GML_Overview/Variables/Builtin_Global_Variables/async_load.md) map doesn't equal "receipt\_validation", the code is exited. If it does, code execution continues and the "valid" key is checked in an if statement. If the receipt is valid, additional functionality is unlocked. If not, a debug message is shown and no additional functionality is unlocked.