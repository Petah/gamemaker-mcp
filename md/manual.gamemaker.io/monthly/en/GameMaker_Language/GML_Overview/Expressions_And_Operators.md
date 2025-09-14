---
title: "Expressions And Operators"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Expressions_And_Operators.htm"
converted: "2025-09-14T03:59:28.827Z"
---

# Expressions And Operators

## Expressions

An expression is a mathematical phrase that can contain ordinary numbers, variables, strings, or functions as well as one or more **operators** (like add, subtract, multiply, etc.). The values used in an expression can be real numbers (e.g. 3.4 \* 6), hexadecimal numbers starting with a $ sign (e.g. $00FFAA | $88FFAA), strings between double quotes (e.g. "hello" + "world") or more complicated expressions using multiple operators and values.

## Operators

The following operators are provided for use with expressions:

[Assigning (=)Assigning (=)](Expressions_And_Operators.htm#)

**\=** is used to assign a value to a variable. Note that this can _also_ be used for comparing variables in GameMaker and you may see this in examples and other peoples codes. However, this is a legacy from old GameMaker versions and you should use the \== operators for comparing and \= for assigning, as shown in these examples:

a = 12;
speed = 5;
val = (old\_val + 5);

[Combining (&&, ||, ^^)Combining (&&, ||, ^^)](Expressions_And_Operators.htm#)

**&&, ||, ^^ (and, or and xor)** are used to combine boolean values to give either true or false. If any of the following examples resolves to true then the code would be run:

if (a == b && c == d) { do something... }  // and
if (a == b || c == d) { do something... }   // or
if (a == b ^^ c == d) { do something... }  // xor

[Nullish (??, ??=)Nullish (??, ??=)](Expressions_And_Operators.htm#)

NOTE "Nullish" simply refers to a value being equal to undefined or pointer\_null.

?? is a nullish coalescing operator that returns a specified expression if the given value is undefined or pointer\_null. This operator expects the following syntax:

(input ?? null\_output)

If input is undefined or pointer\_null, the expression will return the null\_output value; however in all other cases it will simply return the input value. This can be used to define a "default" value for a variable in case the variable itself does not hold a valid value.

Consider the following example:

username = data.username ?? "INVALID USERNAME";

Here, the username variable will get the value stored in data.username, however if data.username happens to be undefined or pointer\_null, the variable will get the string "INVALID USERNAME" instead. This example ensures that any function calls using the username variable do not cause an error because of being given a nullish value, and that the user knows when their username was not returned.

NOTE The expression on the right hand side of the nullish coalescing operator is only executed when the input value is nullish, meaning that any function calls included in the RHS expression will only be executed if the input value is nullish.

---

??= is similar to the nullish coalescing operator described above but is used specifically for variable assignments. This operator expects the following syntax:

variable ??= null\_value

If variable is undefined or pointer\_null, the null\_value value will be assigned to it; otherwise the variable will remain unchanged. This can be used to assign a custom "default" value to a variable when it holds a nullish value.

[Comparing (<, <=, ==, !=, >, >=)Comparing (<, <=, ==, !=, >, >=)](Expressions_And_Operators.htm#)

**<, <=, \==, !=, \>, \>=** are comparisons and can only give a true or false result (where true can also be interpreted as 1, and false as 0). Examples of use:

if (a < b) {do something...}
if (a != b) {do something...}

[Bitwise (|, &, ^, <<, >>)Bitwise (|, &, ^, <<, >>)](Expressions_And_Operators.htm#)

**|, &, ^, <<, \>>** are used to perform bitwise operations, where | = bitwise or, & = bitwise and, ^ = bitwise xor, << = shift left, \>> = shift right. Examples of use:

x = (x & $ffffffe0) + 32;
if (y ^ $1f) > 0 {do something...};

You can find additional information on how to use the bitwise operators and what they do from the section: [Bitwise Operators](../../Additional_Information/Bitwise_Operators.md).

[Arithmetical (+, -, \*, /)Arithmetical (+, -, \*, /)](Expressions_And_Operators.htm#)

**+, \-, \*, /** are add, subtract, multiply and divide, respectively. Examples of use:

c = a \* b;
str = a + "world";

**NOTE** Floating point numbers do not stop on Divide by Zero as they will get an infinity as the answer. If A and B are integers (either int32 or int64) then the division will be done as integers (and divide by 0 will be checked and error'd). Otherwise it will be done as a floating point division (with no divide by 0 check).

[Increment/Decrement (++, --)Increment/Decrement (++, --)](Expressions_And_Operators.htm#)

**++**, **\--** are used to add or subtract one (1) from a value. It is worth noting that placing this before or after the value to be added to or subtracted from will have slightly different results. For example:

-   ++a will increment the variable and return the incremented value.
-   a++ will increment the variable but return the value before it was incremented.

Therefore, if you have something like this:

var a = 1;
show\_debug\_message(string(a++));
show\_debug\_message(string(++a));

The debug output would be 1 and 3. Here are some examples of use:

for (var i = 0; i < 10; i++;)
{
    do something...
}

if (hit == true)
{
    --score;
}

NOTE On the YoYo Compiler target platforms (those marked (YYC)), these expressions are evaluated from left to right, while on all other target platforms they are evaluated from right to left, meaning that this:

val = max(num, ++num, num++);

will give different results depending on the platform.

[Division and Modulo (div, %, mod)Division and Modulo (div, %, mod)](Expressions_And_Operators.htm#)

**div** and **mod** (or %) are division and modulo, where div gives you the amount a value can be divided into producing only an integer quotient, while mod (or %) gives you only the remainder of a division. Examples of use:

secs = time mod 60;
secs = time % 60;    // Identical to the above line
time\_str = string(time div 60);

[Unary (!, -, ~)Unary (!, -, ~)](Expressions_And_Operators.htm#)

The following **unary** operators are provided:

-   **!**: boolean "not", so !true == false
-   **\-**: negates the next real or integer value (not valid for strings or booleans)
-   **~**: negates the next value bitwise

## Expression Grouping

As values in all expressions you can use numbers, variables, or functions that return a value, and sub-expressions can be placed between brackets too. All operators work for real number values, but _comparisons_ also work for strings and the "**+**" operator can be used to concatenate strings.

When doing multiple operations in a single expression, it is **very important** that you use brackets () to separate out the order of operation, as different platforms may perform them differently if not explicitly stated in this way. For example, consider the following code:

a = b == c || d;

The different target compilers will perform the operations in different orders since they are not explicitly shown, giving rise to "odd" results that you may not expect when you play your game. to avoid this, use the () to separate out the parts, like this:

a = (b == c || d);   //better
a = ((b == c) || d); //best

## Statement Grouping

When using various operations and expressions in a single code block, these too should be separated. For example, the following _looks_ like valid code:

if my\_var == your\_var ++their\_var;

However, the compiler could interpret this in one of two ways:

if my\_var == your\_var**++** then their\_var;

// or

if my\_var == your\_var then **++**their\_var;

Now, you can tell looking at the code that one of those is a bit stupid, but that's because we know what we are wanting to achieve and what we want to happen, but the compiler doesn't. All it sees is two variables with the ++ operator between them so it has to choose which one to apply it to. Therefore, you should **always explicitly bracket expressions, operations and statements**. The correct version of the above code should be:

if (my\_var == your\_var)
{
    ++their\_var;
}

This may appear more verbose, but there is no ambiguity about the operations being performed and it will compile and behave consistently across all platforms. Also note that while you can chain expressions and statements without the use of brackets at the moment, this is a legacy feature and going forward may be deprecated and removed from GML, so using brackets appropriately now will "future-proof" your code (and is generally good practice anyway).

Here are some final examples of the various different expressions:

{
    x = 23 div 2;
    colour = $FFAA00 + $00BB12;
    str = "hello" + "world";
    y += 5;
    x \*= y;
    x = y << 2;
    x = 23 \* ((2 + 4) / sin(y));
    b = (x < 5) && !((x == 2) || (x == 4));
}

One final thing to note is that there are also some expression "short-cuts" called **accessors** for use with certain [Data Structures](../GML_Reference/Data_Structures/Data_Structures.md) and [Arrays](Arrays.md). These enable you to add, or replace data within these formats quickly and easily and without the use of any function calls. For full details, please see the following page

-   [Accessors](Accessors.md)