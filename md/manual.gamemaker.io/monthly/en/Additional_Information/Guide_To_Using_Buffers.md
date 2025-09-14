---
title: "Guide To Using Buffers"
source: "manual.gamemaker.io/monthly/en/Additional_Information/Guide_To_Using_Buffers.htm"
converted: "2025-09-14T03:59:22.555Z"
---

# Guide To Using Buffers

A buffer (in programming) is basically a space within the system memory that is used to store small packets of data for just about anything (for example: data transfer, collisions, colour data, etc.). Since it is held in system memory it is very fast to access, and a buffer would generally be used for very short-term storage, like receiving network information before processing it, or for storing a checkpoint in your game (this is explained in the example given further down the page).

![Buffer Memory](../assets/Images/Scripting_Reference/Additional_Information/Buffer_Memory.png)Buffers are created by allocating a space in the system memory, calculated in byte s, which is then reserved for your game as long as your game is running or until you delete the buffer using the appropriate function (you can find all the GML buffer functions listed [here](../GameMaker_Language/GML_Reference/Buffers/Buffers.md)). This means that even when your game is not in focus (for example, on a mobile device when you take a call the game will be put into the background) the buffer will still exist, however if the game is closed or re-started the buffer will be lost.

NOTE Restarting the game will not clear or delete the buffer! But it will prevent any further access to the previously created buffer as the ID handle will have been lost, causing a memory leak which will crash your game eventually. So, when re-starting a game, remember to delete any buffers first.

GameMaker permits the creation of four different buffer types. The reason for this is that buffers are designed to be a highly optimised temporary storage medium, and as such you should create a buffer that is appropriate to the type of data that you wish it to store, otherwise you could get errors or cause a bottleneck in your code. Before explaining this further, let's look at the four available buffer types (defined as **constants** in GML):

| Buffer Type Constant |
| --- |
| Constant | Description |
| buffer_fixed | A buffer of a fixed size in bytes. The size is set when the buffer is created and cannot be changed again. |
| buffer_grow | A buffer that will grow dynamically as data is added. You create it with an initial size (which should be an approximation of the size of the data expected to be stored), and then it will expand to accept further data that overflows this initial size. |
| buffer_wrap | A buffer where the data will "wrap". When the data being added reaches the limit of the buffer size, the overwrite will be placed back at the start of the buffer, and further writing will continue from that point. |
| buffer_fast | A special "stripped" buffer that is extremely fast to read/write to. Can only be used with buffer_u8 data types, and must be 1 byte aligned. |

Those are the buffer types available to you when using GameMaker, and which one you choose will greatly depend on the use you wish to put it to. For example, a grow buffer would be used for storing a "snapshot" of data to create a save game since you do not know the actual amount of data that is going to be placed in it, or a fast buffer would be used when you know that the values you are working with are all between 0 and 255 or -128 and 127, for example when processing ARGB data from an image.

![Buffer Types](../assets/Images/Scripting_Reference/Additional_Information/Buffer_Types.png)When creating a buffer, you should always try to create it to a size that is appropriate to the type, with the general rule being that it should be created to accommodate the maximum size of data that it is to store, and if in doubt, use a grow buffer to prevent overwrite errors.

The actual code to create a buffer would look something like this:

player\_buffer = buffer\_create(16384, buffer\_fixed, 2);


That would create a fixed buffer of 16384 bytes and byte-aligned to 2, with the function returning a buffer handle that is stored in a variable for later referencing of this buffer.

When reading and writing data to a buffer, you do it in "chunks" of data defined by their "data type". The "data type" sets the number of bytes allocated within the buffer for the value being written, and it is essential that you get this correct, otherwise you will get some very strange results (or even errors) for your code.

Buffers are written to (and read from) **sequentially**, in that one piece of data is written after another, with each piece of data being of a set type. This means that you should ideally be aware of what data you are writing to the buffer at all times. These data types are defined in GML by the following constants:

| Constant | Description | Datatype Returned |
| --- | --- | --- |
| buffer_u8 | An unsigned, 8bit integer. This is a positive value from 0 to 255. | int32 |
| buffer_s8 | A signed, 8bit integer. This can be a positive or negative value from -128 to 127 (0 is classed as positive). | int32 |
| buffer_u16 | An unsigned, 16bit integer. This is a positive value from 0 - 65,535. | int32 |
| buffer_s16 | A signed, 16bit integer. This can be a positive or negative value from -32,768 to 32,767 (0 is classed as positive). | int32 |
| buffer_u32 | An unsigned, 32bit integer. This is a positive value from 0 to 4,294,967,295. | int64 |
| buffer_s32 | A signed, 32bit integer. This can be a positive or negative value from -2,147,483,648 to 2,147,483,647 (0 is classed as positive). | int32 |
| buffer_u64 | An unsigned 64bit integer. This is a positive value from 0 to 18,446,744,073,709,551,615. | int64 |
| buffer_f16 | A 16bit float. This can be a positive or negative value within the range of +/- 65504. | number (real) |
| buffer_f32 | A 32bit float. This can be a positive or negative value within the range of +/-16777216. | number (real) |
| buffer_f64 | A 64bit float. | number (real) |
| buffer_bool | A boolean value, can only be either 1 or 0 (true or false). It is stored in a single byte (8bit) | int32 |
| buffer_string | A string of any size, including a final null terminating character | string |
| buffer_text | A string of any size, without the final null terminating character | string |

So, say you have created a buffer and you want to write information to it, then you would use something like the following code:

buffer\_write(buff, buffer\_bool, global.Sound);
buffer\_write(buff, buffer\_bool, global.Music);
buffer\_write(buff, buffer\_s16, obj\_Player.x);
buffer\_write(buff, buffer\_s16, obj\_Player.y);
buffer\_write(buff, buffer\_string, global.Player\_Name);

looking at the example above you can see that you can write different types of data to a buffer at the same time (you are only limited to a specific data type when using the _fast_ buffer type), and this data will be added into the buffer sequentially (although its actual position in the buffer will depend on its byte-alignment, explained below). This is the same for reading information from the buffer too, and in the case of the example given above, you would read from the buffer in the same order that you wrote the data, checking for the same data type, e.g.:

global.Sound = buffer\_read(buff, buffer\_bool);
global.Music = buffer\_read(buff, buffer\_bool);
obj\_Player.x = buffer\_read(buff, buffer\_s16);
obj\_Player.y = buffer\_read(buff, buffer\_s16);
global.Player\_Name = buffer\_read(buff, buffer\_string);

As you can see, you read out information in the same order that you read it into the buffer. For further information on how to add and remove data from the buffer please see the examples given below.

If you have been reading through this page you will have seen references to the **byte-alignment** of a buffer. This basically refers to the position that new data will stored at within a given buffer. How does this work? Well, for a single byte aligned buffer, each piece of data is written to the buffer sequentially, with each new data piece being added directly after the previous. However a 2 byte aligned buffer will write each piece of data to intervals of 2 bytes, so that even if your initial write is 1 byte of data, the next write will be moved to align to two bytes:

![Buffer Byte Alignment](../assets/Images/Scripting_Reference/Additional_Information/Buffer_Byte_Alignment.png)So, if your byte-alignment is set to, say, 4 bytes and you write a single piece of data which is 1 byte in size then do a buffer **tell** (a tell gets the current position for reading/writing for the buffer), you'll get an **offset** of 1 byte (the offset in this case is the number of bytes from the start of the buffer to the current read/write position).

However, if you write another piece of data, also 1 byte in size, _then_ do a buffer tell, you'll get an offset of 5 bytes (even though you have only written 2 bytes of data) as the alignment has padded the data to align it with the 4 byte buffer alignment.

Basically, what this means is that alignment will only affect _where_ things are written to, so if you do a buffer tell after you write something, it'll return the current write position which immediately follows the data you've previously written. Note, however, that if you then write another piece of data, internally the buffer will move the write position along to the next multiple of the alignment size before actually writing the piece of data.

Below we have a couple of examples of how to use buffers in a project:

[Buffer CheckpointBuffer Checkpoint](Guide_To_Using_Buffers.htm#)

A simple example of how a buffer can be used in any GameMaker game for any platform, is the function [game\_save\_buffer()](../GameMaker_Language/GML_Reference/General_Game_Control/game_save_buffer.md). This function will take a "snapshot" of the current game state and save it to a pre-defined buffer, which can then be read from to load the game at that point again.

NOTE This function is very limited and it is designed for the beginner to get a checkpoint system up and running quickly, but more advanced users may prefer to code their own system using the File functions, due to the fact that the game will not save any of the dynamic resources that you can create at run-time like data structures, surfaces, added sprites, etc...

The first thing we need to do is create a new object to control the saving and loading, so you would make one and give it a **Create Event**. In this event, you could place the following code:

SaveBuffer = buffer\_create(1024, buffer\_grow, 1);
StateSaved = false;

The first line creates a grow buffer (since we don't know the final size of the saved data) of 1024 bytes and aligned to 1 byte. A variable is then created to check against and see if the game has been saved or not (this will be used for loading).

Next we would add a **Keypress Event** (for example) in which we will save the current game state to the created buffer:

StateSaved = true;
buffer\_seek(SaveBuffer, buffer\_seek\_start, 0);
game\_save\_buffer(SaveBuffer);

The above will first set the control variable to true (so that this is saved when we save the game to the buffer) and then seek to the start of the buffer before writing the current save state into it. Why do we use [buffer\_seek()](../GameMaker_Language/GML_Reference/Buffers/buffer_seek.md)? Well, as mentioned already on this page, you read and write to a buffer from the last position that data was added to it. This means that if you don't set the buffer tell back to the start then when you save you will be adding the data into the buffer at the current buffer read/write position. So, we use the function buffer\_seek() to move the tell to the buffer start.

We have now saved the current game state to a buffer. The next step would be to code how to load it, probably in another **Keypress Event**:

if (StateSaved)
{
    buffer\_seek(SaveBuffer, buffer\_seek\_start, 0);
    game\_load\_buffer(SaveBuffer);
}

The game will then be loaded at the end of the event in which you place the above code.

NOTE This is only for use in the same room, and not for generating complete saved games for after your game has been closed or restarted!

The final thing to add to the controller object is some "clean up" code. Buffers are stored in memory and as such if you do not clean up when you are finished with them, you can get memory leaks that will eventually lag and crash your game. So you would probably add a **Room End Event** (from the **Other** event category) with:

buffer\_delete(SaveBuffer);

This object can now be placed into a room and on a key press save and load the room state from a buffer.

[Network BuffersNetwork Buffers](Guide_To_Using_Buffers.htm#)

When working with the GameMaker [networking functions](../GameMaker_Language/GML_Reference/Networking/Networking.md), you have to use buffers to create the data packet that is being sent over the network connection. This example intends to show how this is done, but due to the scope of the networking possibilities, it is only designed to show how to use the buffers themselves, and not the full networking system.

The first thing we will show is the creation and use of a buffer for the client side of the network connection. This buffer will be used to create small data packets that can then be sent to the server, so in the **Create Event** of an instance we would assign a buffer like this:

send\_buff = buffer\_create(256, buffer\_grow, 1);

We make the buffer small (256 bytes) - as it is not intended for holding large amounts of data - then we make it a grow buffer to ensure no errors should we need to add more data to be sent at any time, and the alignment is set to one for convenience.

Now, let's say that we want our client to send data to the server. For that we need to create a buffer "packet", and in this example we are going to send a **Key Press Event**, like when the player presses _Left Arrow_ to move around the game. To do this we write the necessary data to the buffer first then send it off:

buffer\_seek(buff, buffer\_seek\_start, 0);
buffer\_write(buff, buffer\_u8, 1);
buffer\_write(buff, buffer\_s16, vk\_left);
buffer\_write(buff, buffer\_bool, true);
network\_send\_packet(client, buff, buffer\_tell(buff));

Before writing to the buffer we have set the "tell" to the start of the buffer as networking always takes the data from the start of a buffer. We then write the check value (this will be used by the server to determine the type of event to be processed), then the key being used, and then the state of the key (in this case true for pressed). This buffer is then sent as a data packet by the network function. Note that we do not send the whole buffer! We only send the data written, using the buffer\_tell function to return the current read/write position of the buffer (remember that writing to the buffer moves the "tell" to the end of what has been written). This is simply to avoid sending more bytes than is necessary.

What about receiving the data on the server? The received data packet that must be written into the buffer on the server and then used to update the game. For that we would use the [Networking Asynchronous Event](../The_Asset_Editors/Object_Properties/Async_Events.md) in the network controller object of the server, as this simplified code below shows:

var buff = ds\_map\_find\_value(async\_load, "buffer");
if (cmd == buffer\_read(buff, buffer\_u8))
{
    key = buffer\_read(buff, buffer\_s16);
    key\_state = buffer\_read(buff, buffer\_bool);
}

The asynchronous event will contain a special temporary DS map async\_load (it is removed from memory at the end of the event automatically) which contains different information depending on the type of incoming data from the network. In this case, we are assuming that the map has been checked and found to be a buffer data packet sent from a client. We now check the first piece of data that is in the buffer to see what kind of event has been sent - in this case the value "1" represents a key event, however when coding these things you should define constants to hold these values to simplify things - and then store the key being pressed and its state (true = pressed, false = released). This information would then be used to update all the clients with the new status of the sending client player.

NOTE The buffer that is created from the DS map is automatically removed at the end of the Network Asynchronous Event so there is no need to use buffer\_delete() here.