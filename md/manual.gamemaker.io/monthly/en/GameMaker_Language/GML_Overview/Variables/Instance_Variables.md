---
title: "Instance Variables"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Variables/Instance_Variables.htm"
converted: "2025-09-14T03:59:29.711Z"
---

# Instance Variables

An **instance** variable is created within an instance of an object and is considered unique to that instance - i.e.: many instances of the same object can have the same variable, but each variable can hold a different value as they are _unique_ to each instance. But _how_ is an instance variable created? Well, you create new variables by simply assigning a value to them as shown in this small example (this is called _declaring_ the variable):

potions = 12;
life = 100;
name = "Jock MacSweeney";
strength = 5.5;
armour = -2;

As you can see you just have to give the name and then a value (the value can be any [data type](../Data_Types.md)) to set that variable and have it ready for use within an instance of the object you are coding for (note that the value can come from the return value of a function or the result of an operation between other variables, etc.). These variables can then be used and modified in a number of ways from within the instance, for example this code could be in a collision event and used to take an amount off of the variable "life":

life -= 5 + armour;

If "life" is at 100 it will now have a value of 97 (100 - (5 + -2) = 97). Now, that's a simple example, and you _could_ replace "armour" for the actual value of -2, but what happens if that value is hard-coded in multiple places and then you decide to change it? You would have to go through ALL your code and change every -2 to whatever the new value is, which is time consuming and very error prone! But if you use a variable, all you have to do is reassign it a new value and the code will automatically use that new value from then onwards, making things far more flexible and far easier to fix should there be a problem. It should also be noted that even if a value is not going to change it is far easier to remember what a variable called "life" means rather than just looking at a number.

GameMaker has a collection of "built-in" instance variables too, so you should be aware of them as you may name one of your own instance variables the same or wish to have your own global variable with the same name and wonder why you are getting errors. They are easy to spot, however, as they are shown in a different colour in the code editor and also come up in auto-complete and are shown in bar at the bottom of the [code editor](../../../The_Asset_Editors/Scripts.md).

There are quite a few [runtime functions](../Runtime_Functions.md) designed to help you when dealing with instance variables, which are all listed in the following section:

-   [Variable Functions](../../GML_Reference/Variable_Functions/Variable_Functions.md)