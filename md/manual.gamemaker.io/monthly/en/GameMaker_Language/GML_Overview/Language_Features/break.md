---
title: "break"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/break.htm"
converted: "2025-09-14T03:59:29.081Z"
---

# break

The break statement is used to end prematurely a [for](for.md), [repeat](repeat.md), [while](while.md) or [do / until](do___until.md) loop of some kind, or to tell a [switch](switch.md) statement to end at that point, or to prematurely end a [with](with.md) call. Please see the individual pages for these different functions to get a more in-depth explanation of how it can be used under each circumstance. Note that if break is used outside of any of these contexts it will give an error.

Below you can see a few basic examples of how break can be used, and its syntax is simply:

break;

break in a for loop:

for (var i = 0; i < 10; i += 1)
{
    if (array\[i\] == 234)
    {
        break;
    }
}

num = i;

break in a repeat loop:

var i = 0;
var temp = 0;
repeat (10)
{
    temp += array\[i\];
    if (temp > max\_total)
    {
        break;
    }
    else
    {
        i += 1;
    }
}

break in a while loop:

var i = 0;
while (!place\_free(x, y))
{
    x = random(room\_width);
    y = random(room\_height);
    if (i > 50)
    {
        break;
    }
    else
    {
        i+=1;
    }
}

break in a do / until loop:

var \_id = noone;
do
{
    \_id = list\[| 0\];
    if (instance\_exists(\_id))
    {
        break;
    }
    ds\_list\_delete(list, 0);
}
until (ds\_list\_empty(list));
target = \_id;

break when using with:

var count = 0;
with (obj\_Enemy)
{
    count++;
    if (count > 10)
    {
        break;
    }
    hp = 100;
}

break in a switch:

switch (keyboard\_key)
{
    case vk\_left:
    case ord("A"):
        x -= 4;
    break;

    case vk\_right:
    case ord("D"):
        x += 4;
    break;

    case vk\_up:
    case ord("W"):
        y -= 4;
    break;

    case vk\_down:
    case ord("S"):
        y += 4;
    break;
}