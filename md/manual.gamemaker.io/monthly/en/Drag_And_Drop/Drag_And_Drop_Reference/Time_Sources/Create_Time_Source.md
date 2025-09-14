---
title: "Create Time Source"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Time_Sources/Create_Time_Source.htm"
converted: "2025-09-14T03:59:28.223Z"
---

# ![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Icons/Create_Time_Source.png) Create Time Source

This action creates a new Time Source, and stores it in the Target variable. Read [Time Sources](../../../GameMaker_Language/GML_Reference/Time_Sources/Time_Sources.md) for an overview.

This is based on the [time\_source\_create()](../../../GameMaker_Language/GML_Reference/Time_Sources/time_source_create.md) function. Read its page for detailed information on the arguments.

You need to use [Start Time Source](Start_Time_Source.md) to activate a Time Source after it's created.

You must destroy a Time Source using [Destroy Time Source](Destroy_Time_Source.md) when you no longer need it.

#### Action Syntax:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Action_Syntax/Create_Time_Source.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Target | The variable where the new Time Source will be stored |
| Parent | The parent Time Source: either a built-in Time Source or a custom one |
| Period | The period length of the Time Source, how long it takes to expire |
| Units | The units that the period is expressed in (seconds or frames) |
| Callback | The method or script function to call when the Time Source expires |
| Arguments | OPTIONAL An array containing the arguments to pass into the callback function |
| Repetitions | OPTIONAL How many times the Time Source should run in total, or -1 for indefinite repetition |
| Expiry Type | OPTIONAL The expiry type for the Time Source |

#### Example:

![](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Time_Sources/Examples/Eg_Create_TS.png)This code block does the following:

-   It creates a new function, with the "Temp" option enabled. This creates a local method variable.
    -    This method takes one argument, msg, which it prints to the Output Log.
-   It then creates a new Time Source with a 1-second period length.
    -   It specifies the callback\_method variable as the "Callback", and an array with one argument for the function.
    -   This Time Source is set to repeat indefinitely, as -1 is specified in "Repetitions".
-   The Time Source is then started.

This Time Source will execute its callback every second, printing "A second has passed!" to the Output Log.