---
title: "String To Number"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Data_Types/String_To_Number.htm"
converted: "2025-09-14T03:59:24.890Z"
---

# ![String To Number Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/i_Types_String_To_Number.png) String To Number

This action can convert a string into a number. You provide the string to change and then give a target variable to return the real number back to (this variable can be flagged as a temporary local variable). Note that if the string has any characters other than numbers and a decimal point, it will _not_ be converted, although if the string _starts_ with a number then those will be converted and the rest of the string excluded. It is important to note that when passing decimals into this action, the returned string will be rounded to _two_ decimal places only. Below is a table of input values and what you'd expect returned

| String | Returned Value |
| --- | --- |
| "123" | 123 |
| "123 Hello World" | 123 |
| "Hello World" | 0 (by default if the string can't be converted, 0 will be returned) |
| "Hello World 123" | 0 |
| "123.45678" | 123.46 |

#### Action Syntax:

![String To Number Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/a_Types_String_To_Number.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Value | The string to convert |
| Target | The target variable to hold the returned value |

#### Example:

![String To Number Example](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Data_Types/e_Types_String_To_Number.png)The above action block code initialises a global variable and then loads a file with a buffer saved in it. Two strings are read from the buffer and stored in a temporary local variables before one of them is converted into a real number and stored in another temporary local variable. These are then assigned to global variables, and the buffer is deleted.