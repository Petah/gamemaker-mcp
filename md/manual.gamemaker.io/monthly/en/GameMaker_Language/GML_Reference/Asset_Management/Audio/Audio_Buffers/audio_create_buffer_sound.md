---
title: "audio_create_buffer_sound"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Asset_Management/Audio/Audio_Buffers/audio_create_buffer_sound.htm"
converted: "2025-09-14T03:59:30.368Z"
---

# audio\_create\_buffer\_sound

With this function you can create a new sound from the contents of a buffer.

The buffer should have been created previously (see the [buffer functions](../../../Buffers/Buffers.md) for details on how to do this), and have had data added or loaded into it. You then pass it to this function with the data format (only buffer\_u8 or buffer\_s16 are currently supported), the sample rate (which can be between 8000hz and 48000hz), and an offset into the buffer to get the data from.

NOTE You cannot pass a buffer of the type [buffer\_grow](../../../Buffers/buffer_create.md) into this function.

You also need to supply the number of samples in the buffer and the channels that the sound requires. These channels are defined by one of the following constants:

| Audio Channel Constant |
| --- |
| Constant | Description |
| audio_mono | Mono (single channel) audio |
| audio_stereo | Stereo (dual channel) audio |
| audio_3d | 3D (5.1) audio |

Note that after you have created a sound, you should free the pointer index associated with it when it is no longer required using the function [audio\_free\_buffer\_sound()](audio_free_buffer_sound.md). If you fail to do this and then re-assign the variable or change rooms etc. the sound ID will be lost and you will have a memory leak.

You can't delete the buffer if any sound has been created from it and the sound has not been freed up first. So you would free the sound(s) first, and _then_ delete the buffer.

Adding anything to the buffer, or changing the buffer size, after it has had a sound created from it, will give unexpected results and is not recommended - once you have started creating sounds from any buffer you should not manipulate it in any other way afterwards.

#### Syntax:

audio\_create\_buffer\_sound(bufferId, bufferFormat, bufferRate, bufferOffset, bufferLength, bufferChannels);

| Argument | Type | Description |
| --- | --- | --- |
| bufferId | Buffer | The ID of the buffer to use. |
| bufferFormat | Buffer Data Type Constant | The format of the data in the buffer (buffer_u8 or buffer_s16). |
| bufferRate | Real | The sample rate of the data in the buffer. |
| bufferOffset | Real | The offset into the buffer to read the sample data from (in bytes). |
| bufferLength | Real | The length of the buffer (the number of bytes of audio data, excluding the header). |
| bufferChannels | Audio Channel Constant | The channels to use from one of the constants listed above. |

#### Returns:

[Sound Asset](../../../../../The_Asset_Editors/Sounds.md)

#### Example:

var rate = 44100;
var hertz = irandom\_range(220, 880);
var samples = 44100;

var bufferId = buffer\_create(rate, buffer\_fast, 1);
buffer\_seek(bufferId, buffer\_seek\_start, 0);

var num\_to\_write = rate / hertz;
var length = buffer\_get\_size(bufferId);
var val\_to\_write = 1;

for (var i = 0; i < (samples / num\_to\_write) + 1; i++)
{
    for (var j = 0; j < num\_to\_write; j++)
    {
        buffer\_write(bufferId, buffer\_u8, val\_to\_write \* 255);
    }
    val\_to\_write = (1 - val\_to\_write);
}

soundId = audio\_create\_buffer\_sound(bufferId, buffer\_u8, rate, 0, length, audio\_stereo);

The above creates a buffer and then procedurally fills it with data. This data is then used to create a new sound, which is stored in the variable "soundId".