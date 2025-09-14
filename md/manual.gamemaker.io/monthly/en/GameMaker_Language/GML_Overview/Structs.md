---
title: "Structs & Constructors"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Structs.htm"
converted: "2025-09-14T03:59:29.537Z"
---

# Structs & Constructors

A **struct** is a variable that holds a collection of other variables. The variables that a struct holds can be of any [data type](Data_Types.md) previously mentioned and these variables can be read from and written to after the initial struct declaration, and you can also add more variables to a struct after it has been declared.

NOTE There are subtle differences between Structs & Constructors and [Objects And Instances](../../Quick_Start_Guide/Objects_And_Instances.md). See [Constructors & Structs vs. Objects & Instances](Structs.htm#constructors_structs_vs_objects_instances) for more info.

The variables used in a struct should follow the usual variable naming scheme, i.e.: they cannot start with a number and should only be made up of alphanumeric characters and the underscore "\_" character, and also note that the contents of a struct are _independent of the instance or function that created it_, and as such you can - if you wish - use built-in variable names such as [image\_index](../GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md) or [x](../GML_Reference/Asset_Management/Instances/Instance_Variables/x.md) and [y](../GML_Reference/Asset_Management/Instances/Instance_Variables/y.md).

After the initial creation, structs have no processing overhead while they exist, although they _will_ take up space in memory. The struct syntax is as follows:

_<variable>_ =
{
    _<variable>_ : _<value>_,
    _<variable>_ : _<value>_,
    etc...
};

So, an example of this in practice would be:

mystruct =
{
    a : 20,
    b : "Hello World"
};

The above code creates an instance scope struct in the variable mystruct and populates it with some values (structs can be created at local, instance and global scopes, just like any other variable - see the section on [Variables and Variable Scope](Variables_And_Variable_Scope.md) for more information). Note that you don't have to populate the contents of a struct when it is created initially and you can create an empty struct by simply doing this:

mystruct = {};

Variables can then be added to this struct at a later point in the game code. To add them afterwards you use the dot operator (in the same way as in [Addressing Variables In Other Instances](Addressing_Variables_In_Other_Instances.md)):

mystruct.newItem = "Some Text";

This has the same result as initialising the struct like this:

mystruct =
{
    newItem : "Some Text"
};

Here is an example of a struct with various variables and data types:

var \_xx = 100;
mystruct =
{
    a : 10,
    b : "Hello World",
    c : int64(5),
    d : \_xx + 50,
    e : function(a, b)
        {
            return a + b;
        },
    f : \[ 10, 20, 30, 40, 50 \],
    g : image\_index
};

You can see in the above code that you can define methods and use runtime functions in structs, and you can also use local and instance variables within the struct declaration.

### Instance Variables in Struct Declaration?

You'll notice in the above example that the struct variable "g" is being set to [image\_index](../GML_Reference/Asset_Management/Sprites/Sprite_Instance_Variables/image_index.md), which is an instance variable. You might think that you'd need to use the [keyword](Instance_Keywords.md) other in this case to get the instance variable, but this is not necessary. Essentially, when you define a struct**, all member variables on the left-hand side of the colon ":" are the _struct_ variables, and the values and variables on the right-hand side use the scope of whatever is defining the struct** (in this case, an instance). Using [self](Instance%20Keywords/self.md) will also refer to the instance (or struct) that is defining the new struct.

Let's look at a simple example to illustrate this. Say you want to define a struct with the variables "x" and "y" and you want to set them to the [x](../GML_Reference/Asset_Management/Instances/Instance_Variables/x.md) and [y](../GML_Reference/Asset_Management/Instances/Instance_Variables/y.md) of the instance defining the struct. In practice the code would look like this:

mystruct =
{
    x : x,
    y : y
};

In the above code the struct member variables x and y are being set to the values held in the instance variables [x](../GML_Reference/Asset_Management/Instances/Instance_Variables/x.md) and [y](../GML_Reference/Asset_Management/Instances/Instance_Variables/y.md), since the right-hand side of the colon : refers to the instance that is defining the struct. It is worth noting that this means you _cannot_ use struct member variables for defining subsequent variables within the struct declaration. For example, the following would give you an error:

mystruct =
{
    a : 10,
    b : 10,
    c : a + b
}

The error occurs because the variables a and b are actually being evaluated at the scope of whatever is defining the struct (they are on the right-hand side of the colon :), and are _not_ the ones being defined within the struct itself.

### Shorthand Initialisation of Variables With The Same Name

Struct variables that you initialise with the value of an existing variable of the same name (a local or instance variable), can be written using a shorthand notation. Instead of having to write:

var a = 12;
b = 14;

mystruct =
{
    a : a,
    b : b,
    c : 101
}

You can write:

var a = 12;
b = 14;

mystruct =
{
    a,
    b,
    c: 101
}

In both cases mystruct.a will be assigned the value 12 and mystruct.b the value 14, as it will look for a variable with the same name in the scope where the struct is being initialised.

### Accessing Struct Variables

Once a struct has been defined, you can access the data within it using the "point" notation, like this:

mystruct =
{
    a : 20,
    b : "Hello World"
}

mystring = mystruct.b + string(mystruct.a);

You can also perform operations on the variables within a struct or use them in functions, just as you would with any other variable. For example:

mystruct.a += 1;
mystruct.b = mystruct.a + 20;
mydir = point\_direction(mouse\_x, mouse\_y, mystruct.xx, mystruct.yy);

Finally, structs can have other structs nested inside them, like this:

mystruct =
{
    a :
    {
        aa : "This is an example"
    },
    b :
    {
        bb : "And another one"
    },
};

To access such nested structs you would still use the point notation, like this:

var \_str = mystruct.a.aa + " " + mystruct.b.bb;
show\_debug\_message(\_str);

Another way to access data in a struct is by using the [with](Language_Features/with.md) statement. So, for example, you could do this:

with (mystruct)
{
    a += other.x;
}

Using with changes the scope of the code to the given struct where you can manipulate the member variables at the struct scope. Note that in the example we also use the [other keyword](Instance_Keywords.md). This works just like in an instance when using with and will reference the instance (or struct) that is actually running the code block.

A last way to access data in a struct is by using the struct accessor [$](Accessors.htm#$). This allows access to struct variables using strings, for both reading:

var \_value = mystruct\[$ "x"\];

and writing:

mystruct\[$ "x"\] = 200;

If you need to use strings to access a struct variable, it is faster to [get its hash](../GML_Reference/Variable_Functions/variable_get_hash.md) and use that in [read](../GML_Reference/Variable_Functions/struct_get_from_hash.md)/[write](../GML_Reference/Variable_Functions/struct_set_from_hash.md) to the variable.

When a struct is no longer required it can be removed from memory using the [delete](Language_Features/delete.md) operator, which flags the struct as being able to be garbage collected. This is not strictly required as the garbage collector will do this automatically if the struct is no longer referenced in your code, but using delete prioritises the referenced struct for garbage collection (for example, call [delete](Language_Features/delete.md) in the [Clean Up event](../../The_Asset_Editors/Object_Properties/Object_Events.md) of an instance to explicitly tell the garbage collector that an instance scope struct is to be deleted as soon as possible).

Here is an example:

// Create event
mystruct =
{
    pos\_x : x,
    pos\_y : y,
    count : 1000
};

// Clean Up event
delete mystruct;

## Constructor Functions

You can also use [script functions](Script_Functions.md) or [methods](Method_Variables.md) to create functions that can be used to generate new structs, which requires the use of the constructor keyword for the function and the [new](Language_Features/new.md) operator when creating a struct from such a function. See the following function:

function Vector2(\_x, \_y) **constructor**
{
    x = \_x;
    y = \_y;

    static Add = function(\_vec2)
    {
        x += \_vec2.x;
        y += \_vec2.y;
    }
}

Or, using the method variable syntax:

Vector2 = function(\_x, \_y) constructor
{
    x = \_x;
    y = \_y;

    static Add = function(\_vec2)
    {
        x += \_vec2.x;
        y += \_vec2.y;
    }
}

Here we are creating a function called Vector2 and telling GameMaker that this is a function used for creating structs by adding the constructor keyword after its definition. You can then call this constructor function with [new](Language_Features/new.md) (to create a **new** struct):

v2 = new Vector2(10, 10);

The variable v2 will now contain a struct with the variables x and y and the [static](Functions/Static_Variables.md) [method variable](Method_Variables.md) Add.

NOTE You cannot call a constructor function without the new keyword and doing so will throw a fatal error. You can, however, call a constructor without the new keyword on a previously created struct with [script\_execute](../GML_Reference/Asset_Management/Scripts/script_execute.md) or [script\_execute\_ext](../GML_Reference/Asset_Management/Scripts/script_execute_ext.md).

You can also make use of optional arguments in your constructor functions:

function Vector2(**\_x = 0, \_y = 0**) constructor
{
    x = \_x;
    y = \_y;
}

This constructor will now use 0 for the \_x and \_y arguments if they are not specified when the function is called. This means that you can create a new Vector2 struct without having to specify any arguments:

empty\_vector = new Vector2();

## Inheritance

Functions created this way will also support single **inheritance**, i.e.: you can create a constructor function that inherits data from another constructor function.

NOTE When working with inheritance, you cannot use method variables to define the constructor function, only script functions.

For example, we created the Vector2 constructor function above, so we can then use that as the "parent" for another constructor function, which we'll call Vector3:

function **Vector3(\_x, \_y, \_z)** **:** **Vector2(\_x, \_y)** constructor
{
    z = \_z;

    static Add = function( \_vec3 )
    {
        x += \_vec3.x;
        y += \_vec3.y;
        z += \_vec3.z;
    }
}

As you can see, when defining the function we use a colon ":" to separate the new constructor from the parent constructor to be inherited from. The child constructor (Vector3) passes the \_x and \_y arguments into the parent (Vector2) constructor, which are used to run the parent's constructor first, after which the child's constructor is executed. This way the child constructor gets the parent's variables (x and y) and can also define its own (z).

You can also pass values into the parent constructor, so that a certain child constructor always provides the same values to its parent constructor:

function item(damage) constructor
{
    my\_damage = damage;
}

function basic\_sword() : item(10) constructor {}

var \_basic\_sword = new basic\_sword();
show\_debug\_message(\_basic\_sword.my\_damage); // Prints 10

This means that the damage of a basic sword will always be 10, since it passes that value to its parent constructor irrespective of what its own arguments might be.

Note that assigning a default value to an argument in a child constructor will override the parent's default value for that argument. See the following example:

function parent(value = 10) constructor
{
    show\_debug\_message(value);
}

function child(value = 20) : parent(value) constructor
{
    show\_debug\_message(value);
}

var \_child = new child();

Both of these constructors will print 20 to the output log, as that was the default value for the argument set by the child constructor, and the same value was passed into the parent constructor.

For more details on the new and delete operators, please see the following pages:

-   [new](Language_Features/new.md)
-   [delete](Language_Features/delete.md)

### Checking Constructor Inheritance

You can use [is\_instanceof](../GML_Reference/Variable_Functions/is_instanceof.md) to check if a struct belongs to the given constructor, or has the constructor as a parent constructor.

function item() constructor {}

function potion() : item() constructor {}

function enemy() constructor {}

var \_potion = new potion();

show\_debug\_message(is\_instanceof(\_potion, potion)); // true (1)
show\_debug\_message(is\_instanceof(\_potion, item)); // true (1)
show\_debug\_message(is\_instanceof(\_potion, enemy)); // false (0)

The above code shows three constructors: item, potion which is a child of item, and enemy, which is a separate constructor.

It creates a struct from the potion constructor. Using is\_instanceof(), we can check that the new struct:

-   is a potion
-   is an item
-   is not an enemy

This way you can check whether a struct "is" something, as **a potion is an item**, so it returns true for both constructors. However if wouldn't be true the other way around: **an item is not a potion**.

This functionality makes use of "static structs". See: [Static Struct](Structs/Static_Structs.md)

## String Output

One final thing to mention about structs is that you can change what is output to the console from them for debugging. By default, calling the function [show\_debug\_message](../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) on a struct will output the contents of the struct (as shown above). However, it's possible to customise this message by adding a specifically named method to the struct called toString:

mystruct =
{
    a : 20,
    b : "Hello World",

    toString : function()
    {
        return "This struct says " + b + ", " + string(a) + " times!";
    }
}
show\_debug\_message(mystruct);

Now when the [show\_debug\_message](../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md) function is called, the toString method will be used to generate the output and - with the above example - you'll get:

This struct says Hello World, 20 times!

Note that you can also call the [string](../GML_Reference/Strings/string.md) function on a struct reference and use that to display the contents - or the toString method - to the screen, or save it to a file, or whatever, e.g.:

var \_str = string(mystruct);
draw\_text(32, 32, \_str);

## Constructors & Structs vs. Objects & Instances

Constructors and structs are similar to [Objects And Instances](../../Quick_Start_Guide/Objects_And_Instances.md), as they also hold variables and methods that can be executed. There are, however, a couple of important differences between them:

-   A struct is created by calling a constructor function using the [new](Language_Features/new.md) operator, by creating a struct literal {} or returned by some function. An instance, on the other hand, is created from an object using [instance\_create\_depth](../GML_Reference/Asset_Management/Instances/instance_create_depth.md) or [instance\_create\_layer](../GML_Reference/Asset_Management/Instances/instance_create_layer.md).
-   Structs are just variables and don't have events. GameMaker executes events for all instances, but not for structs. Compared to an object's event, a struct's method never executes on its own, you have to call it yourself in your game's code. This can be from an [Object Event](../../The_Asset_Editors/Object_Properties/Object_Events.md), from a [Time Source](../GML_Reference/Time_Sources/Time_Sources.md) or from a more specific place where you can "tap into" GameMaker's game loop, such as the layer and camera begin/end scripts.
-   Structs can have static variables, object instances cannot. [Object Variables](../../The_Asset_Editors/Object_Properties/Object_Variables.md) are not the equivalent of static variables; they don't belong to the object, rather they provide default values for [Instance Variables](Variables/Instance_Variables.md) that are assigned to instances created from that object before the Create event runs.

## Struct Functions

Finally, there are a number of runtime functions that you can use on structs to get the variables they contain as well as a few other things. You can find them under [Struct Functions](../GML_Reference/Variable_Functions/Variable_Functions.htm#struct_functions).

[a](Struct_Forbidden_Variables.md)