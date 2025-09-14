---
title: "Set Audio Pitch"
source: "manual.gamemaker.io/monthly/en/Drag_And_Drop/Drag_And_Drop_Reference/Audio/Set_Audio_Pitch.htm"
converted: "2025-09-14T03:59:23.568Z"
---

# ![Set Audio Pitch Icon](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/i_Audio_Set_Audio_Pitch.png) Set Audio Pitch

This action can be used to set the pitch of a sound. You supply the sound asset from the Asset Browser, and then give the desired pitch to change it to, and all further instances of that sound which you play will have their pitch changed. This action will not change the pitch of any sound currently playing, however, and should be used before you use the [Play Audio](Play_Audio.md) action for the sound.

The pitch value is a pitch _multiplier_, in that the input value multiplies the current pitch by that amount, so the default value of 1 is no pitch change, while a value of less than 1 will lower the pitch and greater than 1 will raise the pitch. It is best to use small increments for this function as any value under 0 or over 5 may not be audible anyway. It is worth noting that the total pitch change permitted is clamped to (1/256) - 256 octaves, so any value over or under this will not be registered.

NOTE The clamped value given above is what GameMaker attempts to clamp the range to, but this value is not guaranteed on all target platforms. iOS, for example, clamps to (1/256) - 8, so you may need to experiment on each target platform and have different versions of a sound resource, each one pre-shifted, should you require higher or lower octave values.

#### Action Syntax:

![Set Audio Pitch Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/a_Audio_Set_Audio_Pitch.png)

#### Arguments:

| Argument | Description |
| --- | --- |
| Sound | The sound resource to set the pitch of |
| pitch | The pitch to set the sound to (default is 1) |

#### Example:

![Set Audio Pitch Action](../../../assets/Images/Scripting_Reference/Drag_And_Drop/Reference/Audio/e_Audio_Get_Audio_Pitch.png)The above action block code first gets the pitch for the given sound and stores it in a temporary local variable. It then checks for a key press, and if one is detected, the value of the pitch is checked to see if it is less than 2. If it is, then the sound is stopped, the pitch variable has 0.1 added to it, and then this variable is used to set the pitch of the sound again before it is played.