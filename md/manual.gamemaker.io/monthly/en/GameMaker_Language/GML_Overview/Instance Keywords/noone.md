---
title: "noone"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Instance Keywords/noone.htm"
converted: "2025-09-14T03:59:28.942Z"
---

# noone

It may seem odd, but many times while programming your games will you find the need to check if there are **no instances** found at a location, in a collision, etc. In those cases you would use this keyword to check for nothing, something like this:

if (instance\_nearest(x, y, obj\_enemy) != noone)
{
    //do something as there is an enemy instance near
}

In this example, the function [instance\_nearest](../../GML_Reference/Asset_Management/Instances/instance_nearest.md) will return either noone or the nearest found instance. Basically, any time that you need to check for an instance, you can expect to get either noone or an instance returned.

This can also be useful in combination with a [with](../Language_Features/with.md) statement:

with (instance\_nearest(x, y, obj\_enemy))
{
    //do something as there is an enemy instance near
}

If the function returns an instance, the code between the curly braces { } will run once. If the function returns noone, the code won't be executed.

You can also assign noone as a value to a variable to store the result of such a function:

Create Event

ins\_last\_collided\_with = noone;

Collision Event

ins\_last\_collided\_with = other.id;

Also see: [Legacy Values](../Instance_Keywords.htm#h)