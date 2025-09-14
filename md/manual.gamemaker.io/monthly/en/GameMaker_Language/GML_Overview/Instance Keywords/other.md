---
title: "other"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Instance Keywords/other.htm"
converted: "2025-09-14T03:59:28.978Z"
---

# other

other has two definitions:

-   In Collision events, other refers to the "other" instance that collided with the current instance.
-   Anywhere else, this is the previous scope before the [self](self.md) changed, for example, the instance or struct that executed a [with](../Language_Features/with.md) statement or called a bound method. As such it is only useful in those specific cases and outside of those cases it remains the same as self.

other has multiple ways that it can be used to reference a specific instance or struct: it can be used in a [with](../Language_Features/with.md) statement, in a [collision event](../../../The_Asset_Editors/Object_Properties/Object_Events.md), or in a function. This page is going to explain the last two use cases.

Also see: [Legacy Values](../Instance_Keywords.htm#h)

## Collision Event

A collision event can only happen between **two** instances. You _can_ have multiple collisions between multiple instances, but they are all resolved by GameMaker on a 1-on-1 basis, with the "self" instance that has the collision event and the "other" instance that is colliding with it.

Imagine you have a player instance, multiple enemy instances and multiple bullet instances that the enemy can fire at you. You can assign each enemy a single bullet instance but with a different damage variable randomly assigned to it when created, for example:

var bullet;
bullet = instance\_create\_layer(x, y, "Bullets", obj\_Bullet);
bullet.damage = 5 + irandom(5);
bullet.speed = 8;
bullet.direction = point\_direction(x, y, obj\_Player.x, obj\_Player.y);

You can see how we set its variables using the dot notation as outlined in the section on [Addressing Variables In Other Instances](../Addressing_Variables_In_Other_Instances.md). This will give each bullet instance a different damage value, but how will the player detect the damage that it has to take when it's hit by a bullet?

For this, the player will need to have a collision event with obj\_Bullet, and within that event use other to read variables from the colliding bullet instance:

hp -= other.damage;
if (hp <= 0) instance\_destroy();

The above code will deduct the amount stored in the _other_ instance's damage variable from the player's hp variable, then it will check to see if the hp is lower than or equal to 0. If it is then it will destroy the player instance. Please note that the other instance must have the variable being checked or else an error will be thrown.

NOTE The Collision event is the only event that has a special meaning for the other keyword. In all other events and scripts, the behaviour of other will be defined by the context it is being used in (such as a with() block, a function, struct declaration, etc.).

You can assign values to variables, or even create new ones, using other in the collision event, like this:

// add ten to the other instance's "mana" variable
other.mana += 10;
// set the other instance variable "hit" to true, creating the variable if it doesn't already exist
other.hit = true;

## When 'other' changes

The page on [self](self.md) contains a section on [When 'self' changes](self.htm#h).

This section describes those cases in relation to how other changes:

-   Inside a [with](../Language_Features/with.md) block, other will be the instance or struct that called the with() function

value = 40;

var \_struct = {
    value : 99
}

with (\_struct)
{
    show\_debug\_message(other.value); // Prints 40
}

-   Using dot notation on a struct or instance (struct.variable)
-   When calling a [method](../Method_Variables.md) that is bound to an instance or a struct, other will be the instance or struct that called that method

value = 40;

var \_struct = instance\_create\_depth(0, 0, 0, Object2, {
    value : 99,
    func : function () {
        return other.value;
    }
});

var \_func = \_struct.func;

show\_message(\_func()); // Prints 40

-   In the above case, calling \_struct.func() directly would return 99, as the scope first changes to \_struct due to dot notation, and then it changes again when the bound method is called, making the other the previous scope at the moment the method is called, which is the struct (with value set to 99)
-   When calling an unbound constructor function, other will be the instance or struct that called that function. If the constructor is bound as a method, then other will be the instance or struct to which the constructor method is bound.

value = 40;

item = function () constructor {
    value = 99;

    copied\_value = other.value;
}

my\_item = new item();
show\_debug\_message(my\_item.copied\_value); // Prints 40

-   When stored as a reference through a struct literal, covered below under "**'other' as a reference**".

### Legacy other Behaviour

In previous versions of GameMaker other only changed in the following cases:

-   As part of the with statement
-   When new is called when a constructor is executed other is set to the self at the point that new was called

This behaviour can be enabled by the [Legacy Other Behaviour](../../../Settings/Game_Options.htm#legacy_other_behaviour) game option.

## Struct Declaration

Scope doesn't change inside a struct declaration, so other refers to the same scope as self (the **current** scope), meaning the struct or instance that's initialising the struct:

var \_struct =
{
    parent\_instance : other
}

show\_debug\_message(\_struct.parent\_instance == self);
// This prints '1' (true) meaning that both sides refer to the same instance

However, you do not need to use other to read variables from the instance as any variables you reference directly will be read from that instance's scope, as described [in this section](../Structs.htm#inst_in_struct) of the manual. You would only need to use this if you wanted to store a reference to that instance's struct.

### 'other' as a reference

The page on [self](self.md) contains a section on ['self' as a reference](self.htm#h1) with an example, which you should read before this section. This will cover that same example and how it would affect the other reference.

Both rules covered on the aforementioned page regarding storing self as a reference also apply to storing other as a reference. However other would be the previous self as it would be if self was stored.

Let's take that same example and replace self with other:

name = "instance";

struct = {
    name : "struct",
    other\_ref : other,
    other\_name : other.name
}

show\_debug\_message( struct.other\_ref.name );
show\_debug\_message( struct.other\_name );

This prints:

instance
instance

The base scope in the code example is an instance, so with self changing in other\_ref it stays as the instance scope (which was the "previous" scope) and for other\_name it also remains the instance scope as the self there is unchanged and there is no previous scope before the instance (as it is the base scope).

However, what would happen in the second case if there were another scope before the instance scope?

We can answer that question by placing this code inside a with() block:

name = "other\_instance";

with (inst)
{
    name = "instance";

    struct = {
        name : "struct",
        other\_ref : other,
        other\_name : other.name
    }

    show\_debug\_message( struct.other\_ref.name );
    show\_debug\_message( struct.other\_name );
}

This prints:

instance
other\_instance

In the first case, as self changes to be the struct, the instance that is inside the with() block becomes the previous scope and is stored in other.

However in the second case, as self remains the with() instance, other retains the scope before that, which is the base scope ("other\_instance"). You can visualise the hierarchy of scopes as such:

other\_instance
 > instance
   > struct

## Instance Method

Using other within another instance's [method](../Method_Variables.md) refers to the instance that called that method.

For example, let's say Object2 has a method that references self and other. This method is then called in Object1. Since the method was created in Object2, it is **bound** to it and will always use the Object2 instance as the "self", no matter which instance calls it. In such a case, the calling instance becomes other.

// In Object2
my\_method = function()
{
    show\_debug\_message(object\_get\_name(self.object\_index));
    show\_debug\_message(object\_get\_name(other.object\_index));
}

// In Object1
Object2.my\_method();

This would cause the instance to first print its own object name ("Object2") and then the object name of the calling instance ("Object1").

The same will apply to a method that is bound to a struct.