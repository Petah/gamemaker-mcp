---
title: "self"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Instance Keywords/self.htm"
converted: "2025-09-14T03:59:29.002Z"
---

# self

self is the struct or instance that is the **current scope** of the code being executed. For object instances this will be a struct as well, containing the variables for that instance.

The current scope can be changed within an event or function using a [with](../Language_Features/with.md) block, in which case self can be used to target the new struct or instance that is now in scope. For example:

var val = 100;
with (instance\_create\_layer(x, y, "Instances", obj\_Fire))
{
    self.val = val;
}

In this example you can see that we have a _local_ variable called val and we want it to set the _instance_ variable with the same name in the newly created object instance. To identify the instance variable correctly and tell GameMaker to set it in the instance calling the code block, we use the self keyword.

self is used in the same way with [structs](../Structs.md) to reference member variables of the struct. It can also be used within constructor functions to reference the struct being generated from the constructor.

NOTE Due to compatibility reasons, converting self into a [string](../../GML_Reference/Strings/string.md) will return -1, and inversely, using -1 in certain places (e.g. in a [with](../Language_Features/with.md) statement) will refer to self. See [Legacy Values](../Instance_Keywords.htm#h) for more information.

## When 'self' changes

Within an event or script, the current self will change in the following situations:

-   Inside a [with](../Language_Features/with.md) block, as shown above
-   Using dot notation on a struct or instance (struct.variable)
-   When calling a [method](../Method_Variables.md) that is bound to an instance or a struct, the self during the execution of that method will be the instance or struct to which the method is bound

value = 40;

var \_struct = instance\_create\_depth(0, 0, 0, Object2, {
    value : 99,
    func : function () {
        return self.value;
    }
});

var \_func = \_struct.func;

show\_message(\_func()); // Prints 99

-   When calling a constructor function, self will refer to the new struct that is being generated as a result of that function.

value = 40;

item = function () constructor {
    value = 99;

    copied\_value = self.value;
}

my\_item = new item();
show\_debug\_message(my\_item.copied\_value); // Prints 99

-   When stored as a reference through a struct literal, covered below under "**'self' as a reference**".

In all of these cases, when self changes to a new scope, [other](other.md) will be set to be the previous scope. The only exception is when a bound constructor method is called. This is described more in [When 'other' changes](other.htm#h).

## Notes

NOTE You can also use the [id](../../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md) built-in instance variable instead of self, but self offers certain benefits. To start with, it is faster for the compiler to identify the instance (or struct) using self rather than id, as the id value goes through the instance lookup table while self does not. Secondly, for those people making extensions, it is very useful to ensure the correct scoping of variables, since it is possible that a project which uses an extension may have a global scope variable or something with the same name as a variable in the extension.

NOTE The self keyword is **not** a shortcut for the actual handle of an instance and should only be used in the context explained above. If you require the ID handle for an instance then you need to use [id](../../GML_Reference/Asset_Management/Instances/Instance_Variables/id.md).

NOTE The self struct of an instance will be destroyed when its instance is destroyed (either [manually](../../GML_Reference/Asset_Management/Instances/instance_destroy.md) or as a result of a [room ending](../../GML_Reference/Asset_Management/Rooms/room_goto.md)), however it will be kept alive if there are any references to the self struct itself or any resources within the self struct (e.g. arrays, methods, structs). This may cause unintended issues in addition to a possible memory leak. To avoid this in case of a struct reference, you can create a [weak reference](../../GML_Reference/Garbage_Collection/weak_ref_create.md).

## 'self' as a reference

When self is used in a struct literal, there are two rules that define its scope:

1.  When stored as a reference (just self) to be read later, it stores the scope of the struct being created
2.  When a value from it is accessed, it is read from the scope that is creating the struct, not the struct itself

Consider the following code that is run in an instance:

name = "instance";

struct = {
    name : "struct",
    self\_ref : self,
    self\_name : self.name
}

show\_debug\_message( struct.self\_ref.name );
show\_debug\_message( struct.self\_name );

This sets a name variable in the instance, then defines a struct with a name variable as well.

In the struct, it creates two more variables: one that stores self (rule 1 above) and one that reads name from the current self (rule 2 above).

In such a struct declaration, the scope does not change, so in both of these cases you would normally expect them to point to the instance that is defining the struct.

However when you execute this code, you get the following output:

struct
instance

The argument for the first call, struct.self\_ref.name, where self\_ref stores self, resolves to the scope of the struct, instead of the scope of the instance, which was the active scope when self was stored into the variable.

This happens as a result of self being stored as a reference in the struct literal which follows rule 1 defined above - with it pointing at the struct.

The argument for the second call, struct.self\_name, correctly refers to the name of the instance, as self was accessed at the time the instance was the current scope. This follows rule 2 defined above.

NOTE These rules also apply when storing other as a reference, see ['other' as a reference](other.htm#h1).