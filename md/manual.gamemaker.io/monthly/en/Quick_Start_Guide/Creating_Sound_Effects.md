---
title: "Adding Sound Effects"
source: "manual.gamemaker.io/monthly/en/Quick_Start_Guide/Creating_Sound_Effects.htm"
converted: "2025-09-14T04:00:12.968Z"
---

# Adding Sound Effects

All games have to have sound effects - and most also have music - which means that you need to be able to add them to your game in GameMaker. This is done through the [**Sound Editor**](../The_Asset_Editors/Sounds.md), which is opened whenever you create a new Sound asset in the Asset Browser:

![The Sound Editor](../assets/Images/QS_Guide/QS_SoundEditor.png)

Sounds in GameMaker can be **uncompressed** or **compressed**, with compressed sounds having additional options on how to deal with them at runtime (i.e. while the game is running). Uncompressed sounds are those that have been saved as WAV format files, while compressed sounds can be either MP3 or OGG format. In general you'll want small sound effects to be WAV - like shooting sounds, or button sounds, etc... - and larger effects or music to be MP3 or OGG. As with the other different resources, it is recommended that you name your sounds using an appropriate prefix like "snd\_" so you can easily identify it later.

**NOTE** An uncompressed sound simply means that it has not had any type of compression **algorithm** applied to it. Applying compression to a sound means that it will require less storage space, but will also mean that it needs to be decompressed before playing, and since small sound effects are generally used a lot and very quickly - and don't take up much storage space - you don't want the extra CPU cost of decompressing it when it's being played. However, since things like music files can generally be very large files, you do want them to be compressed, as they will take up less storage space that way, and the extra CPU cost of decompressing is negligible, since they are only generally being played one at a time. Even with sounds that are repeated though, you can use the "Uncompress on Load" option to have it decompress once at the beginning of the game, however this will only save disk space from the game installation and not RAM.

Adding a sound is as simple as clicking the add sound button ![Add Sound Icon](../assets/Images/Icons/Icon_AddSound.png) and then browsing in the file explorer that opens to the file you want to use (you can also drag and drop sound files onto the GameMaker IDE and they will be added as a new sound asset). Once you have selected one and loaded it in, you can then preview it using the playback controls shown as well as change certain attributes for how the file should be exported. If you aren't sure about this, then simply leave everything "as-is", although if you are adding music or MP3 / OGG format sounds you should probably change to the _Compressed - Not Streamed_ format.

You can find further information on the sound editor on the page linked below:

-   [Editors: The Sound Editor](../The_Asset_Editors/Sounds.md)

Note that sounds take up a lot of space on disk, so you should be careful when creating them for your game projects. Do you really need a 48KHz sound effect that only plays for a fraction of a second? Probably not! So, think about reducing the sample rate here to 11025 or 22050 for effects, and for longer things like music or for looping effects think also about using a compressed format. Note too that if you plan on using 3D positional audio effects, then the initial sound file must be _mono_.

You can close the sound editor now and we can move on to looking at **Objects And Instances**...