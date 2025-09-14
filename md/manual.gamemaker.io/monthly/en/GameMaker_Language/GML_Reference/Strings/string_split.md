---
title: "string_split"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Strings/string_split.htm"
converted: "2025-09-14T04:00:07.848Z"
---

# string\_split

This function splits a string into separate strings using the given _delimiter_. The separated strings are returned in a new array.

The delimiter string is the boundary (either a single character or a string of characters) which causes the string to split.

For example, if the string is "This is the string", it can be split by using a single space character " " as the delimiter. The resulting array will look like this: \["This", "is", "the", "string"\], with the original string being "split" wherever the delimiter was present.

The delimiter itself is never included in the resulting strings.

Also see: [string\_split\_ext](../../../../../../GameMaker_Language/GML_Reference/Strings/string_split_ext.md)

#### Syntax:

string\_split(string, delimiter, \[remove\_empty\], \[max\_splits\]);

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to split using the given delimiter |
| delimiter | String | The delimiter to use |
| remove_empty | Boolean | OPTIONAL This parameter determines if empty array elements should be removed from the array or not (default is false). It can be useful for those situations where two delimiters are right next to each other in the string, with nothing in between. By default, in this case, an empty string is added to the array (representing the empty string between those two delimiters). If you don't want these empty strings in the array then you should set this parameter to true instead. |
| max_splits | Real | OPTIONAL This parameter determines the maximum number of splits to make. Any delimiters that come after max_splits become part of the last string, e.g. splitting "1\|2\|3\|4\|5" with a max_splits of 3 and \| as the delimiter will return ["1", "2", "3", "4\|5"]. |

#### Returns:

[Array](../../GML_Overview/Arrays.md)

#### Example 1:

file\_path = "C:/Users/someone/Documents/data.json";

var \_path\_parts = string\_split(file\_path, "/");

show\_debug\_message(\_path\_parts);

drive\_name = \_path\_parts\[0\];
file\_name = array\_last(\_path\_parts);

The above code first creates a string path that stores a path to a file. It then calls string\_split on the path with a forward slash "/" as the delimiter and stores the array it returns in a temporary variable \_path\_parts.

Then it shows a debug message showing the contents of the \_path\_parts array. Finally it stores the first array entry (the drive letter) in a variable drive\_name and the last array entry (the name of the file) in a variable file\_name.

#### Example 2:

the\_string = "abc|def||ghi|jkl|mno|pqrs|tuv|wxyz";
string\_parts = string\_split(the\_string, "|", true, 5);

show\_debug\_message\_ext("{0}, {1}, {2}, {3}, {4}", string\_parts);

The above code creates a string the\_string and splits it into a total of 5 (the value of max\_splits) separate strings using string\_split. By setting remove\_empty to true, empty array elements such as the white space between the delimiter after "def" and the delimiter before "ghi" is first removed. Finally it displays a debug message using [show\_debug\_message\_ext](show_debug_message_ext.md), printing the first five slots in the array.