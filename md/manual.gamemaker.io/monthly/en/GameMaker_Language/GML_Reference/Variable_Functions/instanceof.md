---
title: "instanceof"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Variable_Functions/instanceof.htm"
converted: "2025-09-14T04:00:10.395Z"
---

# instanceof

This function can be used to get the name of the [constructor function](../../GML_Overview/Structs.md) that was used to create a struct. The struct itself should have been created using the [new](../../GML_Overview/Language_Features/new.md) operator along with the constructor itself. You supply the variable with the struct reference to check and the function will return either a string with the constructor name or undefined.

TIP It's recommended to use [is\_instanceof](is_instanceof.md) to check the constructor of a struct, as it additionally allows you to check using parent constructors (i.e. constructors that the struct's constructor may have inherited from). [is\_instanceof](is_instanceof.md) also allows you to check using the constructor function reference directly instead of strings.

### Usage Notes

-   If you pass the function a struct literal (i.e.: a struct that was created without using a constructor function) then it will simply return the string "struct".
-   If you pass the function the self keyword inside an object instance, it will return "instance".
-   The returned constructor name will include additional text if the constructor function was not created in a script. If it was created inside an object, its name will include the object and the event where it was created. For example, a constructor called test\_constructor created in the Create event of **Object1** will be returned as "test\_constructor\_gml\_Object\_Object1\_Create\_0". To avoid this, create your constructors in a [script](../../GML_Overview/Script_Functions.md).
-   This function can also be used to check if a struct reference is a **weak reference** or not, in which case the function will return the string "weakref" instead of the name of the function that created the struct. For more information, see the function [weak\_ref\_create()](../Garbage_Collection/weak_ref_create.md).

#### Syntax:

instanceof(struct\_id);

| Argument | Type | Description |
| --- | --- | --- |
| struct | Struct | The struct reference to use. |

#### Returns:

[String](../../GML_Overview/Data_Types.md) or [undefined](../../GML_Overview/Data_Types.md)

#### Extended Example:

In this example we must first define the function that will be used as the constructor for our struct. The following function is defined in a script asset:

function init\_struct(\_a, \_b, \_c) constructor
{
    a = \_a;
    b = \_b;
    c = \_c;
}

This function can then be used along with the new operator to create a struct and populate it with the variables set to the values of the arguments used in the function:

mystruct = new init\_struct(10, 100, "Hello World");

We can then get the name of the constructor function that was used like this:

var \_name = instanceof(mystruct);
if (is\_string(\_name))
{
    show\_debug\_message(\_name);
}

This will print the string "init\_struct" to the output log, which is the name of the constructor function as defined in its script.