---
title: "db_to_lin"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/db_to_lin.htm"
converted: "2025-09-14T03:59:32.638Z"
---

# db\_to\_lin

This function converts a gain expressed in decibels (dB) to a linear gain, which can be used with functions such as [audio\_sound\_gain](audio_sound_gain.md).

Changes in gain can be expressed in dB. This corresponds better to how we perceive changes in amplitude (human perception of sound is not linear).

The conversion from a gain expressed in dB to a linear gain is done using the following formula: gain\_linear = power(10, gain\_db/20);

TIP  0dB means no change in gain (i.e. a linear gain of 1). An increase of 6dB roughly corresponds to a doubling of the linear gain, a decrease of 6dB (i.e. an increase of -6dB) to a halving of it.

Also see: [lin\_to\_db](lin_to_db.md)

#### Syntax:

db\_to\_lin(x);

| Argument | Type | Description |
| --- | --- | --- |
| x | Real | The value to convert |

#### Returns:

[Real](../../../GML_Overview/Data_Types.md)

#### Example:

var \_lin = db\_to\_lin(-3);

The above code calculates the linear gain reduction corresponding to a reduction of 3dB. The result of the conversion is stored in a temporary variable \_lin.