---
title: "string_split_ext"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_split_ext.htm"
converted: "2025-09-14T04:00:07.864Z"
---

# string\_split\_ext

This function splits a string into into separate strings using any of the _delimiters_ in an array. The resulting strings are returned in a new array.

The delimiter array contains all possible values at which the string is split. For example, you can have a string that you want to split "Name,Age;Height|Description". In the end you want the individual words but there are multiple delimiter characters, which you can specify in an array: \[",", ";", "|"\]. The result of string\_split\_ext on the given string with this array will then be \["Name", "Age", "Height", "Description"\].

Also see: [string\_split](string_split.md)

#### Syntax:

string\_split\_ext(string, delimiter\_array, \[remove\_empty\], \[max\_splits\]);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to split using any of the provided delimiters |
| delimiter_array | Array of String | An array with the delimiters on which to split the string |
| remove_empty | Boolean | OPTIONAL This parameter determines if empty array elements should be removed from the array or not (default is false). It can be useful for those situations where two delimiters are right next to each other in the string, with nothing in between. By default, in this case, an empty string is added to the array (representing the empty string between those two delimiters). If you don't want these empty strings in the array then you should set this parameter to true instead. |
| max_splits | Real | OPTIONAL This parameter determines the maximum number of splits to make. Any delimiters that come after max_splits become part of the last string, e.g. splitting "1\|2\|3\|4\|5" with a max_splits of 3 and \| as the delimiter will return ["1", "2", "3", "4\|5"]. |

#### Returns:

[Array](../../../../../../GameMaker_Language/GML_Overview/Arrays.md)

#### Example:

words = string\_split\_ext("here,there;everywhere,and beyond", \[",", ";"\]);

The above code splits a string using two different delimiters "," and ";". It stores the resulting array in the variable words.