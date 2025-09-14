---
title: "Feather Directives"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Code_Editor_Properties/Feather_Directives.htm"
converted: "2025-09-14T04:00:15.044Z"
---

# Feather Directives

Feather Directives are comments that affect how [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md) treats your GML Code, including which Feather rules it applies, the [Profile](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#message_severity_profile) it uses and whether strict type validation is applied.

By default, Feather directives apply to the current script and to the functions declared inside of it, unless you supply a [target path](Feather_Directives.htm#path).

See Also

1.  [Feather](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md)
2.  [JSDoc Comments](JSDoc_Script_Comments.md)
3.  [Feather Data Types](Feather_Data_Types.md)
4.  [Code Completion](Feather_Features.md)
5.  [Syntax Errors (Feather Messages)](../../Additional_Information/Errors/Syntax_Errors.md)

## General

A Feather directive has the following syntax:

// Feather command parameters \[in PATH\]

It is a regular script comment that starts with Feather, followed by the command and its parameters. Optionally, it may take a path to a script, object or group in [The Asset Browser](../../Introduction/The_Asset_Browser.md) to which the directive is applied.

## Ignoring Feather Rules

Specific [feather rules](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#s3) can be ignored using the directive Feather ignore or Feather disable:

// Feather ignore  GM1010
// Feather disable GM1010

For example, consider the following piece of code:

// Feather ignore GM1010
result = 5 + "5";

With **Strict Type mode** enabled, Feather normally shows a "GM1010 - Cannot perform '+' operation between types 'real' and 'string' message. With the directive above, Feather will ignore messages of this type, in that particular script.

The directive only affects lines after the comment itself, so any statements before the comment will still show warnings.

### Ignoring Once

The GM message can be ignored only once by adding once:

// Feather ignore once GM1010

This command makes Feather ignore the first occurrence of this type of message but not the ones that come after that:

// Feather ignore once GM1010
result = 5 + "5";    // ignored
result = 6 + "6";    // error

### Restoring

Finally, you can re-enable the GM message using restore / enable:

// Feather restore GM1010
// Feather enable  GM1010

## Profiles

This directive sets the profile for the script:

// Feather use syntax-errors
// Feather use type-errors
// Feather use all
// Feather use none

`NOTE` This Feather directive corresponds to the [Profile](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.htm#message_severity_profile) preference in the [Feather Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md).

## Type Validation Mode

This directive sets the type validation mode to use from either _strict_ or _relaxed:_

/// Feather use strict
/// Feather use relaxed

NOTE This Feather directive corresponds to the **Strict Type mode** preference in the [Feather Preferences](../../Setting_Up_And_Version_Information/IDE_Preferences/Feather_Settings.md).

## Combined Directives

You can also set the profile and type validation mode in a single line:

/// Feather use all, strict

The above comment will make Feather look for **All** errors _and_ use **Strict Type mode**.

## Path

Optionally you can provide a path using the in directive to apply a Feather directive to a specific script, object or group in [The Asset Browser](../../Introduction/The_Asset_Browser.md). This can be placed in the main script of an external library of functions, though you can place it in any other script, e.g. a blank "FeatherConfig" script.

NOTE Having numerous rules using paths may cause performance issues, the exception being paths set specifically to \* alone.

You can use the following special symbols in your paths:

-   / - When used in the beginning of a path, points to the root of the Asset Browser
-   . - When used in the beginning of a path, points to the current script's folder
-   \* is a wildcard that matches everything inside the preceding directory

This way you can define paths to assets in the Asset Browser, for example:

| Path | Applies To |
| --- | --- |
| /Scripts/* | All assets in /Scripts |
| /* | All assets |
| ./* | All assets in the current folder and subfolders |
| /Foo/Bar/obj_manager | obj_manager in the /Foo/Bar folder |

Examples:

| Directive | Effect |
| --- | --- |
| // Feather ignore GM2017 in * | Ignores all Naming Rule violations in the whole project |
| // Feather ignore GM1064 in ./* | Ignores GM1064 in the current folder and all subfolders |
| // Feather use type-errors in /Objects/System/* | Sets the profile to type-errors in specifically the Objects/System folder |
| // Feather use all in /Objects/System/obj_controller | Sets the profile to all in obj_controller |

WARNING No consistent result is guaranteed if you have two directives that enable and disable a Feather message on the same path.