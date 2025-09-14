---
title: "Feather Data Types"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Feather_Data_Types.htm"
converted: "2025-09-14T04:00:15.021Z"
---

# Feather Data Types

[Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) uses data types to provide smart syntax-checking when writing code, ensuring you don't use the wrong data type for a variable or function parameter.

It also allows you to specify the data types for the parameters and return values of your own [script functions](../../GameMaker_Language/GML_Overview/Script_Functions.md), using [JSDoc comments](JSDoc_Script_Comments.md).

The @param and @return JSDoc tags allow you specify any one of the following types:

NOTE JSDoc base types are case-insensitive, so string and String are the same, however specifiers (after the .) are case-sensitive, meaning Id.DsList is valid (referring to a [DS List](../../GameMaker_Language/GML_Reference/Data_Structures/DS_Lists/ds_list_create.md)) but Id.dslist is not.

| Base Types | Specifier Examples* | Description |
| --- | --- | --- |
| Real | N/A | A real number |
| Bool | N/A | A boolean |
| String | N/A | A string |
| Array | Default - Array... | An array, may include specifiers |
| Pointer | Default - Pointer... | A pointer, may include specifiers |
| Function | Default - Function... | A function, may include specifiers |
| Struct | Default - Struct... | A struct, may include specifiers (such as constructors) |
| Id | .Instance - Object Instance.DsList - DS List.DsMap - DS Map.DsGrid - DS Grid.DsStack - DS Stack.DsPriority - DS Priority.DsQueue - DS Queue... | An ID, requires specifiers |
| Asset | .GMAnimCurve - Animation Curve Asset.GMObject - Object Asset.GMAudioGroup - Audio Group ID.GMFont - Font Asset.GMPath - Path Asset.GMScript - Script Asset.GMShader - Shader Asset.GMSound - Sound Asset.GMTimeline - Timeline Asset.GMRoom - Room Asset .GMSequence - Sequence Asset.GMSprite - Sprite Asset.GMTileSet - Tile Set Asset... | An asset, requires specifiers |
| Constant | .Colour - Colour.HAlign - Horizontal Alignment Constant.VAlign - Vertical Alignment Constant.Cursor - Cursor Constant.EventType - Event Type Constant.EventNumber - Event Number Constant.PrimitiveType - Primitive Type Constant... | A constant, requires specifiers |
| Any | N/A | Any data type |

NOTE _\*_ The **Specifier Examples** column lists some example specifiers, but not all of them. For example, there may be more possible types under the Id, Asset, and Constant groups, which are not listed here.

You may see an Any**\*** type in the IDE when using Feather, which indicates that the type of the identifier (which may be a variable, parameter, return value, etc.) can't be discerned by Feather at the moment. When more code is added for that identifier, it may be able to assume a specific type.

### Specifiers

A specifier is added after the base data type using a dot ., to specify the exact type of data in that group.

Types such as Id.DsList, Asset.GMObject, and Constant.Color use specifiers. Constructors are specified through the syntax Struct.{ConstructorName}. For example:

function Person() constructor
{

}

/// @param {Struct.Person} \_person
function do\_business(\_person)
{

}

### Collection Types

Types such as Array and Id.DsList, which are data structures that contain multiple values, are able to specify a single data type for all of their contents.

This is done using Collection Types, which are appended to the type using angle brackets <>.

For example, an array containing strings would be Array<String>, and a DS List, containing an Array, containing Reals, would be Id.DsList<Array<Real>>.

### Multiple Types

Multiple data types can also be listed, separated by a comma ,. For example String,Array<String>, Id.Instance,Asset.GMObject, etc.

## Type Validation

The table below shows what happens if you pass a value of a certain type (rows) into a parameter requiring a data type (column).

For example, specifying undefined (first row) for a parameter requiring a string (second column) results in an error.

|  | Undefined | String | Real | Bool | Array | Pointer | Function | Struct |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Undefined | Allowed | Error | Error | Error | Error | Error | Error | Error |
| String | Error | Allowed | Allowed | Allowed | Error | Error | Warning | Warning |
| Real | Error | Warning | Allowed | Allowed | Error | Error | Error | Error |
| Bool | Warning | Error | Allowed | Allowed | Error | Warning | Warning | Warning |
| Array | Error | Error | Error | Error | Allowed | Error | Error | Error |
| Pointer | Error | Error | Error | Error | Error | Allowed | Error | Error |
| Function | Error | Error | Error | Error | Error | Error | Allowed | Error |
| Struct | Error | Error | Error | Error | Error | Error | Error | Allowed |

See Also

1.  [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md)
2.  [JSDoc Comments](JSDoc_Script_Comments.md)
3.  [Code Completion](Feather_Features.md)
4.  [Syntax Errors (Feather Messages)](../../Additional_Information/Errors/Syntax_Errors.md)
5.  [Feather Directives](Feather_Directives.md)