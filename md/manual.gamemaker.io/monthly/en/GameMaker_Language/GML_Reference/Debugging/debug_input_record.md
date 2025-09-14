---
title: "debug_input_record"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Debugging/debug_input_record.htm"
converted: "2025-09-14T03:59:48.818Z"
---

# debug\_input\_record

This function starts recording various types of input.

The types of input that you want to include are specified as a bitmask that can be a combination of the following constants:

| Constant | Description |
| --- | --- |
| debug_input_filter_keyboard | Include keyboard input |
| debug_input_filter_mouse | Include mouse input |
| debug_input_filter_touch | Include touch input |

If you want to record, for example, keyboard and mouse input the value would be debug\_input\_filter\_keyboard|debug\_input\_filter\_mouse.

WARNING This function is meant for debugging purposes only and should not be used in a final game.

#### Syntax:

debug\_input\_record(filter);

| Argument | Type | Description |
| --- | --- | --- |
| filter | Debug Input Filter Constant | A bitmask combining the different types of input to record |

#### Returns:

N/A

#### Example:

debug\_input\_record(debug\_input\_filter\_keyboard|debug\_input\_filter\_mouse);

The above code starts recording both keyboard and mouse input, which can be saved to a file using [debug\_input\_save](debug_input_save.md).