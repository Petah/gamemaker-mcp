---
title: "Addressing Variables In Other Instances"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Addressing_Variables_In_Other_Instances.htm"
converted: "2025-09-14T03:59:28.647Z"
---

# Addressing Variables In Other Instances

In the sections dedicated to [variables](Variables_And_Variable_Scope.md) you found out how to create and use variables within a single instance, or on a global scope, but what happens if you want one instance to access a variable in another, different instance?

There are many cases when you may want to do this, for example in a collision with a bullet object, you may want to find out how much damage the bullet does by accessing a variable in the bullet, or you might want to stop the motion of all the balls in a puzzle, or you might want to move the main character to a particular position, or any number of other situations you typically come across in any game. Thankfully the GameMaker Language comes equipped with mechanisms to achieve this.

One of the most common methods of accessing or changing a variable in _another_ instance is to use its object name as an identifier, and then use a point . to tell GameMaker that the variable being referenced should be assigned or changed within that specific object's instance. This is known as "dot notation", and its syntax is as follows:

<object\_id>.<_variable_\> = <value>;

In practice it would look like this:

obj\_ball.speed = 0;

With the above code you are setting the speed of an instance of obj\_ball. However if you have more than one instance of the given object in the room, _then it will apply to ALL of them equally_ - unless you are using **HTML5**, in which case it will affect only _one_, but you have no way of knowing which one it will affect - so if you need to access all instances of an object, you should be using [with](Language_Features/with.md), as that is 100% cross-platform compatible. In general, this format should only be used when you have a single instance of the object in the room, or (as you will see in the next part) when you have a specific _instance **handle**_.

NOTE Reading a variable using an object handle with dot notation (e.g. spd = obj\_ball.speed) will return the value from the first instance of that object that was created in the room. This is affected by the [Instance Creation Order](../../The_Asset_Editors/Room_Properties/Room_Properties.htm#creation_order) if the instances were set up in [The Room Editor](../../The_Asset_Editors/Rooms.md).

You can also access a single instance of an object when there are multiple instances within the room using the unique **instance name** to tell GameMaker exactly which instance we wish to address. The **instance name constant** is the unique identifying constant that is given to each and every instance added to a room in your game. You can find this constant by double-clicking on an instance in [The Room Editor](../../The_Asset_Editors/Rooms.md):

![The instance constant in the room editor](../../assets/Images/Scripting_Reference/GML/Overview/Instance_Constant.png)Note that this name can be be edited and given a more descriptive name - although the name _must_ be unique to the entire game - and it can be used as the left-hand side of the point:

inst\_4DB70D2.speed = 0;

NOTE In-game, this name is a handle to the instance. See [Data Types](Data_Types.md) for more info.

By far the most common and practical method, however, is to use a _variable_ on the left of the point, as long as the variable in question _has stored a valid **instance handle**_. The following examples illustrate this.

// Example 1
var \_inst = instance\_position(mouse\_x, mouse\_y, all);
if (instance\_exists(\_inst))
{
    \_inst.speed = 0;
}

// Example 2
var \_inst = instance\_create\_layer(mouse\_x, mouse\_y, "Enemies", obj\_E\_Parent);
\_inst.direction = point\_direction(\_inst.x, \_inst.y, x, y);
\_inst.target = id;

Example 1 finds an instance at the mouse position and changes its speed. Example 2 creates a new instance, changes its direction and sets a custom target variable. Both examples target one specific instance using its **instance handle**.

In Example 1, there is an [instance\_exists](../GML_Reference/Asset_Management/Instances/instance_exists.md) call in the code block. This is because using the point method to access or change another instances value will give an error and crash the game if the instance does not exist, and there is the possibility that this is the case in that example.

We don't need the check however in Example 2 because we _know_ that the instance is there since we created it. However, if there is _any_ possibility that the instance could be destroyed, deactivated, or otherwise removed from the room while using this method, you should _always_ check beforehand using the [instance\_exists](../GML_Reference/Asset_Management/Instances/instance_exists.md) function.

Note that you cannot use the special [keyword](Instance_Keywords.md) all with this method to target all instances (e.g.: all.val = 10; would give an error), but you _can_ use the keywords other and self without issues. For example, using other in a [collision event](../../The_Asset_Editors/Object_Properties/Object_Events.md) to target the instance you collided with:

// Example 3
other.hp -= 10;

if (other.hp <= 0)
{
    other.sprite\_index = spr\_E\_Dead;
}

It is also important to note that you cannot use any function by itself as the left-hand side of an assignment. For example, the following code would give you an error:

instance\_nearest(x, y, obj).speed = 0;

The return value for the expression in that code example is an instance handle (for the nearest instance) and so it must be enclosed in brackets ( ) to be used in this way and properly address the instance required. The above code would be correctly written as:

(instance\_nearest(x, y, obj)).speed = 0;

//or

var \_inst = instance\_nearest(x, y, obj);
\_inst.speed = 0;

These are all perfectly valid ways of reading, changing and setting variables in other instances, and work because the point is actually an _operator_. It takes a value as the left operand and a variable as the right operand, and returns the address of this particular variable in the indicated object or instance. All the object names, constants, IDs, etc. simply represent values and these can be dealt with like any other value.

The other way to reference variables in another instance is to use the GameMaker Language statement [with](Language_Features/with.md):

// This will affect all instances of the object "obj\_Enemy"
with (obj\_Enemy)
{
    target = other.parent;
}

// This will affect one instance of the object "obj\_Enemy"
var \_enemy = instance\_nearest(x, y, obj\_Enemy);
if (instance\_exists(\_enemy))
{
    with (\_enemy)
    {
        target.x = mouse\_x;
        target.y = mouse\_y;
    }
}