---
title: "delta_time"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Maths_And_Numbers/Date_And_Time/delta_time.htm"
converted: "2025-09-14T04:00:01.733Z"
---

# delta\_time

This variable returns the frame delta time, which is the time difference between the previous frame and the current frame. This value is in microseconds, where 1 microsecond is 1,000,000th of a second.

The purpose of delta timing is to eliminate the effects of the lag or slowness of computers that try to handle complex graphics or a lot of code. It is a value that can be multiplied with the speed of objects so that they will eventually move at the same speed, regardless of lag. This is achieved in GameMaker by using the delta\_time variable every step as it measures the time that has passed between one step and the next in microseconds. Therefore the variable delta\_time can be used to calculate how much faster (for example) a game character has to move to make up for a lag spike in the game.

#### Syntax:

delta\_time

#### Returns:

[Real](../../../GML_Overview/Data_Types.md) (integer)

#### Example 1: Base speed in pixels per step

var \_dt = delta\_time / game\_get\_speed(gamespeed\_microseconds);
speed = spd \* \_dt;

The above code will set the [speed](../../Asset_Management/Instances/Instance_Variables/speed.md) of the instance taking delta time into account to correct for lag. The variable \_dt would be used to hold the previously calculated delta time value, divided by the length of a game frame in microseconds. This ratio can be used to multiply the base speed value (held in the variable spd and expressed in the same units as speed, i.e. pixels per step) and to get a consistent speed for the instance.

#### Example 2: Base speed in pixels per second

var \_dt = delta\_time / 1000000;
speed = spd \* \_dt;

The above code will set the [speed](../../Asset_Management/Instances/Instance_Variables/speed.md) of the instance taking delta time into account to correct for lag. The variable \_dt is calculated as delta\_time / 1000000, which can be expressed in seconds per step. Multiplying this with a base speed spd in pixels per second gives a value expressed in pixels per step. This gives a convenient way to account for delta time using a base speed in pixels per second.