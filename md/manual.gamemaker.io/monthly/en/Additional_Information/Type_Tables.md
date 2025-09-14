---
title: "Type Tables"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Type_Tables.htm"
converted: "2025-09-14T03:59:23.022Z"
---

# Type Tables

This page shows the all the different results that you may get when performing arithmetic operations on the different [data types](../GameMaker_Language/GML_Overview/Data_Types.md) in GML.

The tables all follow the same format, with the rows (left) showing the _left hand_ side of an arithmetical operation, and the columns (right) showing the _right hand_ side, e.g.:

<result> = <LHS or row> + <RHS or column>

IMPORTANT Prior to GameMaker 2022.9, these tables were inverted -- the columns showed LHS and rows showed RHS. This was counter-intuitive and was changed to be the opposite.

| Add (+) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | String | Real | Real | Error | Error | Error |
| Bool | Real | Real | String | Real | Real | Error | Error | Error |
| String | Error | Error | String | Error | Error | Error | Error | Error |
| Int32 | Real | Real | String | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | String | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

| Subtract (-) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | Error | Real | Real | Error | Error | Error |
| Bool | Real | Real | Error | Real | Real | Error | Error | Error |
| String | Error | Error | Error | Error | Error | Error | Error | Error |
| Int32 | Real | Real | Error | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | Error | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

| Multiply (*) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | String | Real | Real | Error | Error | Error |
| Bool | Real | Real | Error | Real | Real | Error | Error | Error |
| String | Error | Error | Error | Error | Error | Error | Error | Error |
| Int32 | Real | Real | String | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | Error | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

| Divide (/) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | Error | Real | Real | Error | Error | Error |
| Bool | Real | Real | Error | Real | Real | Error | Error | Error |
| String | Error | Error | Error | Error | Error | Error | Error | Error |
| Int32 | Real | Real | Error | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | Error | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

| Divide (div) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | Error | Real | Real | Error | Error | Error |
| Bool | Real | Real | Error | Real | Real | Error | Error | Error |
| String | Error | Error | Error | Error | Error | Error | Error | Error |
| Int32 | Real | Real | Error | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | Error | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

| Mod (%) | Real | Bool | String | Int32 | Int64 | Ptr | undefined | Array |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Real | Real | Real | Error | Real | Real | Error | Error | Error |
| Bool | Real | Real | Error | Real | Real | Error | Error | Error |
| String | Error | Error | Error | Error | Error | Error | Error | Error |
| Int32 | Real | Real | Error | Int32 | Int64 | Error | Error | Error |
| Int64 | Real | Real | Error | Int64 | Int64 | Error | Error | Error |
| Ptr | Error | Error | Error | Error | Error | Error | Error | Error |
| undefined | Error | Error | Error | Error | Error | Error | Error | Error |
| Array | Error | Error | Error | Error | Error | Error | Error | Error |

## Equality Table

There are a few special constants that may or may not be equal to themselves, as shown in the following table:

| Equality (==) | NaN | undefined | infinity |
| --- | --- | --- | --- |
| NaN | false | false | false |
| undefined | false | true | false |
| infinity | false | false | true |