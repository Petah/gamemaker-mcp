---
title: "Arrays"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Arrays.htm"
converted: "2025-09-14T03:59:28.699Z"
---

# Arrays

Arrays are essentially a type of variable that can hold multiple values as a "list". They can be extremely useful and are an essential part of making games. Consider the following code:

numbers = \[ 0, 1, 2, 3, 4, 5 \];

fruits = \[ "Apples", "Oranges", "Mangoes" \];

Using the \[item, item, item\] syntax we are creating an array that is stored in a variable. The items stored in an array can later be accessed through that variable using an integer number, starting at 0, which is placed inside \[ \] brackets:

first\_fruit = fruits\[ 0 \];
second\_fruit = fruits\[ 1 \];
// ...and so on.

A basic array is classed as having 1 **dimension**, but you can have arrays with more than one dimension too. The sections below explain both types of arrays:

[1-Dimensional Arrays1-Dimensional Arrays](Arrays.htm#)

Before going any further let's clarify what an array actually is and how it's structured. An array is simply a [data type](Data_Types.md) that is assigned to a variable, and it can contain not just one value, but multiple values. The image below shows a schematic for a basic array:

![](../../assets/Images/Scripting_Reference/GML/Overview/1DArrayExample.png)

This is called a **1D** (one-dimensional) array, and as you can see the array is stored in the variable a and contains multiple values. To access the array you would do something like the following:

var \_val = a\[0\];
show\_debug\_message(\_val);

The above code gets the value from position 0 of the array a then outputs it to the console, which - based on the contents of the array shown in the image above - would output 125. If you did the following:

var \_val = a\[3\];
show\_debug\_message(\_val);

The output would show "Hi!".

As you can see, you give the array a variable name and then a value in square brackets \[ \], where the value is the position in the array to get the data from. So essentially, an array is a container with a number of slots to store values, and each position in the container has a specific number to identify it, which is what we put in the \[ \]. It's worth noting that the contents of an array **always start at 0** and can _never be negative__!_

### Creating Arrays

We've shown how to check an array for data, but how do we create the array to start with? First it has to be _initialised_ before we can use it or GameMaker will give us an error. Initialising an array just means that we give each slot of the array an initial value in preparation for it to be used elsewhere in the project code. This is important to remember as it means that you have to do a certain amount of planning before using arrays, but it is easy enough to initialise one using a repeat loop like this:

var i = 9;

repeat(10)
{
    array\[i\] = 0;
    i -= 1;
}

This simple code will initialise a ten-slot array (from 0 to 9) to hold 0, i.e.: each slot in the array contains the value 0. You will notice that the array has been initialised _backwards_, with the last value being defined first. This is not strictly necessary but is the optimal way to do it as it will reserve a space in memory that is the exact size of the array, whereas if you initialise an array from 0 _upwards_, the memory has to be re-allocated for every additional value added (so for a ten-slot array, initialising it in a loop would change the memory allocation ten times). The speed difference is negligible for smaller arrays, but larger ones should be optimised as much as possible in this way.

NOTE The HTML5 export is the exception to the above rule, and when targeting that you should initialise arrays in consecutive order from 0 upwards.

You can also use the GML function [array\_create](../GML_Reference/Variable_Functions/array_create.md) to initialise an array with a fixed size, and you can even create "empty" arrays with _no_ values, for example:

my\_array = \[\];

This tells GameMaker that the variable my\_array is an array, and you can then [add values](../GML_Reference/Variable_Functions/array_push.md) to it at any time in the future. However, if you try to access a value in an empty array then you will get an error.

If you already know which items you want to put into the array, you can add comma-separated values between the brackets when declaring the array:

my\_array = \["Steve", 36, "ST-3V3 - Steve Street"\];

### Array Bounds

You should always take care to only access valid array positions, as trying to access a value outside of an array will also give an error. For example, this will cause the project to crash when run:

my\_array = array\_create(5, 0);
var \_val = my\_array\[6\];

The array was only initialised with 5 positions, but we've tried to get position 7 - since arrays are numbered from 0, my\_array\[6\] is position 7 - therefore the game generates an error and crashes.

### Using Arrays

Now how do we use an array practically? Exactly the same as we would use a normal variable, as shown in the following examples:

// Add two array values together
total = array\[0\] + array\[5\];

// Check an array value
if (array\[9\] == 10)
{
    // Do something
}

// Draw an array value
draw\_text(32, 32, array\[3\]);

Since arrays are numbered sequentially, this means you can loop through them to perform extra actions too, just like we did to initialise it:

var \_total = 0;

for (var i = 0; i < 10; ++i)
{
    \_total += array\[i\];
    draw\_text(32, 32 + (i \* 32), array\[i\]);
}

draw\_text(32, 32 + (i \* 32), \_total);

The above code will add up all the values in our array, draw each one of them and then draw the total value at the end.

### Deleting Arrays

The [Garbage Collector](../GML_Reference/Garbage_Collection/Garbage_Collection.md) will automatically clean up arrays that lose references, i.e. no active variables point to the array now. This means that setting a variable that holds an array to _any other value_ will eventually make the garbage collector remove the array from memory (assuming it was the only reference to the array).

Setting a variable holding an array to undefined will however prioritise the clean up of the array so the garbage collector removes it in the next collection cycle. Here is an example:

// Create an array
for (var i = 9; i > -1; --i)
{
    a\[i\] = i;
}

// Delete the array
a = undefined;

If the array has multiple dimensions (see below), they will all be cleaned up too. Note that when you create arrays in instances, these do not need to be cleaned up when the instance is removed from the game, as they will be removed automatically by the garbage collector on Destroy or Room End (as long as the only references to the array were in the instance). However, if any of the array positions hold references to _dynamic_ assets, such as particle systems, buffers, or data structures, then these _will_ need to be destroyed before the array is deleted, the instance is destroyed or the room ends.

[Multi-Dimensional ArraysMulti-Dimensional Arrays](Arrays.htm#)

We now know what a 1-dimensional array is, but in GameMaker you can have arrays with multiple dimensions, which are essentially structured as an array inside an array inside an array... For example, the following is a **2D** (two-dimensional) array:

array\[0\]\[0\] = 5;

This is essentially telling GameMaker that the array is actually comprised of various 1D arrays. Here's an extended example:

array**\[0\]**\[0\] = 0;
array**\[0\]**\[1\] = 1;
array**\[0\]**\[2\] = 2;

array**\[1\]**\[0\] = 3;
array**\[1\]**\[1\] = 4;
array**\[1\]**\[2\] = 5;

In the above code, array\[0\] holds another array, and so does array\[1\].

Alternatively, to access 2D arrays you can also use the following syntax:

array\[0, 0\] = 5;

NOTE The above syntax only works for 2D arrays.

A multi-dimensional array needs to be initialised before use, the same as a single 1D array, and can hold real numbers, strings, and any other [data type](Data_Types.md), just like any variable, making them ideal candidates for any game that needs to store large amounts of data in an easily accessible way (remember, you can loop through an array easily).

You can also initialise a multi-dimensional array within one statement by nesting 1-dimensional arrays:

two\_dimensional\_array =
\[
    \["Apple", 10, 2\],
    \["Orange", 5, 2\],
    \["Mango", 15, 4\],
    // ...and so on.
\];

Multi-dimensional arrays are also not limited to _just_ two dimensions, and you can have 3, 4 or more dimensions to an array as required in your code, just by adding \[n\] further arguments, e.g.:

array\[0\]\[0\]\[0\] = 1;     // A three dimensional array
array\[0\]\[0\]\[0\]\[0\] = 1;  // A four dimensional array
// Etc.

It should be noted too that the length of each dimension in an array can be different, so you can have the initial array dimension with a length of 3, but the second dimension entry can be a different length for each slot in the first dimension; for example:

array\[2\]\[2\] = "3";
array\[2\]\[1\] = "2";
array\[2\]\[0\] = "1";

array\[1\]\[3\] = "four";
array\[1\]\[2\] = "three";
array\[1\]\[1\] = "two";
array\[1\]\[0\] = "one";

array\[0\]\[1\] = 2;
array\[0\]\[0\] = 1;

In the above code, array\[0\] has 2 slots, array\[1\] has 4 slots and array\[2\] has 3 slots.

### Extended Example

Here is one final example of how this may be used in an actual game: Say you want to spawn four different enemies at four different points in your game depending on a random value. Well, we can use an array with 2 dimensions to do this and save writing out a load of code.

First we should initialise the array we are going to use in the Create event of our "controller" object (note the use of comments to remind you what each array entry does):

enemy\[3\]\[2\] = 448;       //y position
enemy\[3\]\[1\] = 32;        //x position
enemy\[3\]\[0\] = obj\_Slime; //Object
enemy\[2\]\[2\] = 448;
enemy\[2\]\[1\] = 608;
enemy\[2\]\[0\] = obj\_Skeleton;
enemy\[1\]\[2\] = 32;
enemy\[1\]\[1\] = 608;
enemy\[1\]\[0\] = obj\_Knight;
enemy\[0\]\[2\] = 32;
enemy\[0\]\[1\] = 32;
enemy\[0\]\[0\] = obj\_Ogre;

We now have the objects to spawn instances of and their corresponding x and y spawn coordinates within the room all stored in our array. This can now be used as follows in another event of the controller object (an alarm for example, or a key press event):

//get a random number from 0 to 3, inclusive
var i = irandom(3);

//Use the array to create the object
instance\_create\_layer(enemy\[i\]\[1\], enemy\[i\]\[2\], "Enemy\_Layer", enemy\[i\]\[0\]);

That short code will now spawn a random enemy in the game room, and it uses far less code than an "if / then / else" structure or even a "switch", and as the array is initialised all together in the Create event it is MUCH easier to edit and change any of those values as they are not hard-coded into the rest of the project code.

Also see: [Array Functions](../GML_Reference/Variable_Functions/Array_Functions.md)

## Arrays as Function Arguments

You can pass arrays into [script functions](Script_Functions.md) and [method variables](Method_Variables.md) as arguments, and modify those arrays anywhere inside the function. Doing so will modify the original arrays as well.

For example, this function simply changes the first three elements of the array passed into it:

modify\_array = function (array)
{
    array\[0\] = 2;
    array\[1\] = 4;
    array\[2\] = 6;
}

You can now create an array and pass it into this function, which will modify the array:

my\_array = \[100, 4, 214\];

modify\_array(my\_array);

show\_debug\_message(my\_array); // Prints \[2, 4, 6\];

In previous GameMaker versions, this was not the case, as modifying an array inside a function would create a copy instead. This _deprecated_ behaviour can still be enabled if desired: read the "**Copy on Write**" section below for more information.

## Copy on Write

The Copy on Write behaviour is deprecated, and is only used when "**Enable Copy on Write behaviour for Arrays**" is enabled in the [General Game Options](../../Settings/Game_Options.md). This section describes the behaviour of arrays when this option is enabled.

As described in the previous section, arrays can be passed into functions as arguments. To do this, you simply have to specify the array variable (no need for each of the individual positions, nor the \[ \] brackets) and the entire array will be **passed by reference** into the function:

my\_array = \[1, 2, 4, 8, 16\];

do\_something(my\_array);

However, when **Copy on Write** is enabled, changing any of the array's values inside the function creates a temporary copy with your modifications. The original array is not modified. This behaviour is called Copy on Write.

To actually modify the original array that was passed into the function, you must either return it back, or use the @ accessor.

For example, the function called above, do\_something(), may do something simple like this:

do\_something = function(array)
{
    array\[1\] = 200;
}

Now you would expect my\_array to hold the values 1, 200, 4, etc., which would normally be correct - but when **Copy on Write** is enabled, the original array remains unaffected.

To work around this, you can make the function **return** the modified array copy, and then apply it back to the original variable:

my\_array = \[1, 2, 4, 8, 16\];

my\_array = do\_something(my\_array);

The function itself would return the modified array back:

do\_something = function(array)
{
    array\[1\] = 200;

    return array;
}

NOTE The above code is not necessary if you are not changing any of the array's values, but rather referencing them. Referencing an array will not copy it and will be faster to parse.

The second solution is to use the @ accessor to change the array values directly, which saves the CPU overhead of having to make a temporary copy. This means that you do not need to return the array from the function and can edit it directly:

do\_something = function(array)
{
    array\[@ 1\] = 200;
}

Using this accessor bypasses the Copy on Write behaviour and directly modifies the referenced array. This can be used to selectively disable Copy on Write for specific statements while keeping the option enabled.

Again, all of this is not necessary if **Copy on Write** is **disabled** (which is the default and recommended option).

Find out more information on accessors and how they work, along with an example for arrays, from the following page:

-   [Accessors](Accessors.md)