---
title: "Accessors"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Accessors.htm"
converted: "2025-09-14T03:59:28.626Z"
---

# Accessors

The GameMaker Language (GML) also permits you to access certain [Data Structures](../GML_Reference/Data_Structures/Data_Structures.md) and [Arrays](Arrays.md) through the use of logical expressions called **accessors**. This is structured in a similar way as when you are normally working with an array, only we use an _identifier symbol_ before the first argument to tell GameMaker that you are working on a (previously created) data structure or the array literal.

[DS Lists \[| \]DS Lists \[| \]](Accessors.htm#)

The accessor for [DS Lists](../GML_Reference/Data_Structures/DS_Lists/DS_Lists.md) is | and the syntax is:

list\_index\[| index\]

So when you have used [ds\_list\_create](../GML_Reference/Data_Structures/DS_Lists/ds_list_create.md) to create your list, you would use the list handle (that you have stored in a variable) to reference it, with the index value being the position in the list to set or add. For example, the following code creates a list and then adds 10 entries, setting each entry to random number from 0 to 9:

ds = ds\_list\_create();
var \_index = 0;
repeat(10)
{
    ds\[| \_index++\] = irandom(9);
}

Note that if you are using an expression to add a reference to an index that already has a value, the previous value will be replaced rather than have a further index added to the list. To add further entries you would need to know the DS list size and add them to the end. It is also worth noting that you can set a list index that is _greater_ than the size of the list being referenced, and this will set that value, expanding the list at the same time and initialising all the positions in the list up to the given index to 0.

Once you have created your list structure and filled it with data, to get values from the list you would have something like:

value = ds\[| 5\];

The above will get the value from position 5 (the sixth index, since lists start at 0) and store it in a variable. If you supply a position that is outside of the list size then the value undefined will be returned, which you can check for using the function [is\_undefined](../GML_Reference/Variable_Functions/is_undefined.htm#h).

[DS Maps \[? \]DS Maps \[? \]](Accessors.htm#)

The accessor for [DS Maps](../GML_Reference/Data_Structures/DS_Maps/DS_Maps.md) is ? and the syntax is:

map\_index\[? key\]

TIP The key isn't limited to strings and can be of any type, including a [struct](Structs.htm#struct).

After creating your map with [ds\_map\_create](../GML_Reference/Data_Structures/DS_Maps/ds_map_create.htm#h), you would use the map handle that you have stored in a variable to reference it, with the key value being the map key to set or get. For example, the following code creates a map and then adds a few entries to it using this syntax:

ds = ds\_map\_create();
ds\[? "Name"\] = "Hamish";
ds\[? "Company"\] = "MacSeweeny Games";
ds\[? "Game"\] = "Catch The Haggis";

NOTE If the map already contains the same key value as you are trying to add, it will not create a duplicate key with the new value, but rather the previous value will be replaced.

Once you have created your map structure and filled it with data, to get values from a specific map key you would have something like this:

value = ds\[? "Name"\];

The above will get the value from the key "Name" and store it in a variable, but be aware that if the given key does not exist in the DS map, then the value returned will be undefined. This can be checked for using the function [is\_undefined](../GML_Reference/Variable_Functions/is_undefined.htm#h).

[DS Grids \[# \]DS Grids \[# \]](Accessors.htm#)

The accessor for [DS Grids](../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Grids/DS_Grids.md) is # and the syntax is:

grid\_index\[# xpos, ypos\]

After creating your grid with the [ds\_grid\_create](../GML_Reference/Data_Structures/DS_Grids/ds_grid_create.md) function, you would use the grid handle that you have stored in a variable to reference it, with the xpos and ypos being the position within the grid to get or set a value. For example, the following code creates a grid, clears it to 0 and then adds a few entries to it:

ds = ds\_grid\_create();
ds\_grid\_clear(ds, 0);
var \_gw = ds\_grid\_width(ds) - 1;
var \_gh = ds\_grid\_height(ds) - 1;
repeat(10)
{
    var \_xx = irandom(\_gw);
    var \_yy = irandom(\_gh);
    if (ds\[# \_xx, \_yy\] == 0)
    {
        ds\[# \_xx, \_yy\] = 1;
    }
}

Once you have created your grid structure and filled it with data, to get values from a specific grid position you would have something like:

value = ds\[# mouse\_x div 16, mouse\_y div 16\];

The above will get the value from the given DS grid based on the mouse position (divided by the "cell" width in the room to get the correct location). If you supply a position that is outside of the grid boundaries then the value undefined will be returned, which you can check for using the function [is\_undefined](../GML_Reference/Variable_Functions/is_undefined.md).

[Arrays \[@ \]Arrays \[@ \]](Accessors.htm#)

This accessor is only used when the [Copy on Write option](../../Settings/Game_Options.md) is enabled.

Arrays also have their own accessors which work in a similar way as those listed above for data structures. However, array accessors have an interesting property and that is to permit you to modify an array from a [Script Function](Script_Functions.md) or [Method](Method_Variables.md) without having to copy it. When you pass an array into a function, it is **passed by reference**, meaning that the array itself isn't being given into the script but rather it is simply being referenced to get the data. Normally if you then need to change the array, it would be _copied_ to the script and then you would need to pass back (return) the copied array for the original array to be updated. This can have costly processing overheads, and so you can use the accessor instead, as that will change the original array _directly_ without the need for it to be copied. You can see how this works in the examples below.

The syntax for arrays, using the @ accessor, is:

array\[@ i\]

After you have created your array in an instance, you can then pass it to a script by reference and use the accessor @ to change it directly. For example, you would create the array and call the function like this:

array\[99\] = 0;
array\_populate(array);

The function itself would have something like this:

function array\_populate(\_array)
{
    var a = \_array; var i = 0;
    repeat(25)
    {
        i = irandom(99);
        while (a\[i\] != 0)
        {
            i = irandom(99);
        }
        a\[@ i\] = 100;
    }
}

All this function is doing is selecting 25 random positions in the array and setting the value of the chosen array position to 100.

Of course, the @ accessor is not required when **Copy on Write** is disabled.

NOTE You cannot use the array accessor @ when working with the argument\[n\] array in script functions.

[Structs \[$ \]Structs \[$ \]](Accessors.htm#)

The struct accessor uses the $ sign as the identifier symbol. This makes the accessor syntax for [structs](Structs.md):

struct\[$ "name"\]

This accessor is essentially a wrapper for the functions [struct\_get](../GML_Reference/Variable_Functions/variable_struct_get.md) and [struct\_set](../GML_Reference/Variable_Functions/variable_struct_set.md), and [variable\_global\_get](../GML_Reference/Variable_Functions/variable_global_get.md) and [variable\_global\_set](../GML_Reference/Variable_Functions/variable_global_set.md) if you access [The Global Struct](../../../../../GameMaker_Language/GML_Overview/Variables/Global_Variables.md) using the global keyword.

You would use it much like the accessor for a DS map. For example, if you have created a struct and want to retrieve a value from a variable called "my\_health" then you'd do:

var \_hp = struct\[$ "my\_health"\];

As you can see, you don't supply the variable itself, but rather a _string_ with the variable's name.

NOTE If the struct does not have a variable with the given name, then the accessor will return undefined as the value.

TIP In case a value returned by the accessor is (or might be) undefined you might want to provide a "default" value to be used instead. A clean, shorthand way to do this is the [nullish](Expressions_And_Operators.htm#nullish) operator.

To set a variable in a struct then you would do the following

struct\[$ "my\_score"\] = 100;

As with getting a value, you supply the name of the variable to set as a string, and it will be set to the value given. If the variable name used doesn't exist in the struct, then it will be created and set to the given value.

An important feature of accessors is the fact that they can be _chained_ together. This means that if you have several nested data structures and/or arrays, there is no longer the need to use a variety of functions to get access to a value that is deep within the nested structure. For example, say you have an array, and each item in the array is a DS list, like this:

array = array\_create(3);
for (var i = 0; i < 3; ++i;)
{
    array\[i\] = ds\_list\_create();
    switch(i)
    {
        case 0:
            with (obj\_Wall) ds\_list\_add(array\[i\], id);
        break;

        case 1:
            with (obj\_Door) ds\_list\_add(array\[i\], id);
        break;

        case 2:
            with (obj\_Chest) ds\_list\_add(array\[i\], id);
        break;
    }
}

In the above code we've created a 3 item array and assigned a DS list to each of them, and then we've populated the different lists with the instance IDs of various objects in the game. Now, to access an ID in one of the lists we can do the following:

var \_list = array\[0\];
var \_id = ds\_list\_find\_value(\_list, 0);

However, you can do the same thing using chained accessors in a much cleaner way that uses less code:

var \_id = array\[0\]\[| 0\];

You can chain multiple accessors together in this way and they can be of multiple types to get access to the information stored in each part of the nested structure. Here are some more examples:

// Access a grid that has been added to a list that is part of a map:
var \_a = data\[? "lists"\]\[| 0\]\[# 0, 0\];

// Access an array nested in a list from a script and modify it:
data\[| 0\]\[@ 10\] = 100;

// Access a map nested in a grid nested in a list nested in an array:
data\[0\]\[| 10\]\[# 3, 4\]\[? "key"\] = "hello world";

Using chained accessors for things not only means you can write more compact code, it will also permit you to use iteration (for example, using a [for](Language_Features/for.md) loop) and other techniques to access your data in a cleaner and more intuitive manner.

It is worth noting that when using accessors in this way, you should always use the @ accessor for arrays, as otherwise you will be adding extra overhead to any actions being performed. As mentioned above, by default arrays are passed by reference into functions and then use the "copy on write" behaviour when modified. However, if the array is part of a chain, then the previous item in the chain will be updated with the copied array and the "original" will be deleted. For example, doing something like this:

// In an object event
data\[| 0\]\[0\] = 100;

// In a function
data\[| 0\]\[0\] = 200;

achieves the same results as doing this:

// In an object event
data\[| 0\]\[0\] = 100;

// In a function
data\[| 0\]\[@ 0\] = 200;

However, the second example is better as it works without the unnecessary overhead of copying the entire array first.