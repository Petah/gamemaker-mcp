---
title: "buffer_copy_stride"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_copy_stride.htm"
converted: "2025-09-14T03:59:43.334Z"
---

# buffer\_copy\_stride

This function copies the given number of items from a source buffer to a destination buffer, where all items have the same size in bytes and are spaced apart evenly by a different number of bytes in the source and destination buffer.

You can use this function with buffers that store items and their attributes in a structured way, e.g. game data, vertex data or any other data in a known format.

NOTE You cannot copy to the same buffer.

![](../../../assets/Images/Scripting_Reference/GML/Reference/Buffers/buffer_copy_stride_schematic.png)

The function call belonging to the above diagram would look as follows: buffer\_copy\_stride(src\_buffer, 6, 2, 6, 3, dest\_buffer, 8, 2);

You can interpret the source offset as the sum of two offsets: an offset to the start of the item data and an offset within the item (i.e. which attribute of the item to copy).

### Stride

The stride is the number of bytes to go from one item to the next. A positive value moves forward, a negative value moves backward.

For example, in case of GameMaker's [default vertex format](../../../Additional_Information/Guide_To_Primitives_And_Vertex_Building.htm#passthrough_vertex_format) the stride value is 24 (3\*4+4\*1+2\*4). The number of bytes to move from one (x, y, z) position in the buffer to the next is 24, the number of bytes to move from one colour value to the next is also 24, as well as the number of bytes to move from one UV to the next.

You "select" the attribute you want to copy by changing the offset, meanwhile the stride remains unchanged:

![](../../../assets/Images/Scripting_Reference/GML/Reference/Buffers/buffer_copy_stride_stride.png)

### How It Works

-   The function starts by moving src\_offset bytes from the start of the source buffer and dest\_offset bytes from the start of the destination buffer.
-   It then repeats src\_count times the following:
    -   Copy src\_size bytes of data from the current offset in the source buffer to the current offset in the destination buffer.
    -   Move src\_stride bytes to the right or to the left in the source buffer, depending on the sign of src\_stride, and dest\_stride bytes to the left or right in the destination buffer.

### Usage Notes

-   The stride value can be greater than the number of bytes that an item actually uses. These bytes in between may contain other data or no useful data at all.
-   By setting dest\_stride to a value greater than src\_size you can insert "gaps" between values written to the destination buffer.
-   In case of a fixed-size buffer (buffer\_fixed) or of a non-wrapping buffer the copying stops when the end of the buffer is reached. For a buffer that's set to wrap (buffer\_wrap) copying will continue from the start of the buffer.

#### Syntax:

buffer\_copy\_stride(src\_buffer, src\_offset, src\_size, src\_stride, src\_count, dest\_buffer, dest\_offset, dest\_stride);

| Argument | Type | Description |
| --- | --- | --- |
| src_buffer | Buffer | The buffer containing the source data |
| src_offset | Real | The offset, in bytes, in the source buffer to start copying bytes. When negative, it is subtracted from the buffer size. |
| src_size | Real | The size, in bytes, of a single item to copy |
| src_stride | Real | The number of bytes between two items. This value can be negative and be set to 0. |
| src_count | Real | The number of items to copy |
| dest_buffer | Buffer | The buffer to copy the data to |
| dest_offset | Real | The offset, in bytes, in the destination buffer to write the data. This offset can be negative. |
| dest_stride | Real | The number of bytes between two items in the destination buffer. This value can be negative. |

#### Returns:

N/A

#### Example 1: Basic Usage

var \_num\_items = 200;
var \_attribute\_size = buffer\_sizeof(buffer\_u16);
var \_itemsize\_source = buffer\_sizeof(buffer\_f32) + \_attribute\_size;
buff\_source = buffer\_create(\_num\_items \* \_itemsize\_source, buffer\_fixed, 1);
buff\_destination = buffer\_create(\_num\_items \* \_attribute\_size, buffer\_fixed, 1);

var \_i = 0;
repeat(\_num\_items)
{
    buffer\_write(buff\_source, buffer\_f32, random\_range(-100, 100));
    buffer\_write(buff\_source, buffer\_u16, \_i++);
}

buffer\_copy\_stride(buff\_source, 4, \_attribute\_size, \_itemsize\_source, \_num\_items, buff\_destination, 0, \_attribute\_size);

The above code shows basic usage of the buffer\_copy\_stride function. First, a couple of temporary variables are defined that store the number of items in source and destination buffer, the stride of the source buffer and the size of an item. Two buffers of fixed size are then created, one to store the source data and one to store the destination data. The references to them are stored in the variables buff\_source and buff\_destination respectively. Next, the source buffer has 200 items written to it using [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md). Every item consists of one random buffer\_f32 value between -100 and 100 followed by a buffer\_f16 value that stores an index. Finally, the second buffer\_f16 element of each item is copied to the destination buffer using buffer\_copy\_stride. The first buffer\_f16 value is written to byte 0 (as dest\_offset is set to 0), the next one is written to byte 2 (dest\_stride is set to \_itemsize which is 2), the next one to byte 4, and so on. After the function call, buff\_destination will contain the 200 buffer\_f16 values in buff\_source one right after the other, with no bytes in-between.

#### Example 2: Negative Offset & Stride

var \_item\_size = buffer\_sizeof(buffer\_f32);
var \_num\_items = 100;

var \_i = 0;
buff\_numbers = buffer\_create(\_num\_items \* \_item\_size, buffer\_fixed, 4);
repeat(\_num\_items) buffer\_write(buff\_numbers, buffer\_f32, \_i++);

buff\_data = buffer\_create(2048, buffer\_fixed, 4);
buffer\_copy\_stride(buff\_numbers, -\_item\_size, \_item\_size, -\_item\_size, \_num\_items, buff\_data, 0, 12);

The above code first initialises two temporary variables that are used in the code that follows: the size of a single item \_item\_size and the number of items \_num\_items. It then creates a new buffer of a fixed size with room for this number of items. The byte alignment can be set to 4 since every item is stored at an integer multiple of 4 bytes. Next, a [repeat](../../GML_Overview/Language_Features/repeat.md) loop writes the values 0 to 100 to the buffer, using [buffer\_write](../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_write.md). After that, another fixed-size buffer of 2048 bytes is created and stored in the variable buff\_data. Finally, buffer\_copy\_stride is called to write the numbers in the source buffer buff\_numbers to the destination buffer buff\_data. Because of the negative value of the source offset, the last number in the buffer is the first one to be written. Also, the numbers are traversed backwards because of the negative value of the source stride. The destination stride of 12 makes sure the numbers are spaced 12 bytes apart in buff\_data. As a result buff\_data contains the numbers in reverse order, with 12 bytes between each of them.

#### Example 3: Stride set to 0

var \_item\_size = buffer\_sizeof(buffer\_f32);
buff\_source = buffer\_create(\_item\_size, buffer\_fixed, 4);
buff\_destination = buffer\_create(16 \* \_item\_size, buffer\_fixed, 4);

buffer\_write(buff\_source, buffer\_f32, 1);

buffer\_copy\_stride(buff\_source, 0, \_item\_size, 0, 4, buff\_destination, 0, 5 \* \_item\_size);

The above code shows how you can use a stride value of 0 to keep copying the same value multiple times to a destination buffer.

First, the size of an item is set to the size of a float (buffer\_f32) and stored in \_item\_size. Next, the source and destination buffer are created with a fixed size and an alignment of 4 (since floats always align to multiples of 4 bytes). The source buffer can only store a single float, the destination buffer can store 16 floats. Then, the value 1 is written to the source buffer. Finally, this value is copied a total of 4 times using buffer\_copy\_stride with a destination stride value of 5 times the item size. After the function has finished buff\_destination will contain the values of an [identity matrix](../Maths_And_Numbers/Matrix_Functions/matrix_build_identity.md).

#### Example 4: Interleaving Data from Multiple Buffers

Create Event

vertex\_format\_begin();
array\_foreach(\[vertex\_format\_add\_position\_3d, vertex\_format\_add\_colour, vertex\_format\_add\_texcoord\], script\_execute);
vertex\_format = vertex\_format\_end();

buff\_positions\_xyz = buffer\_base64\_decode("JqwCQwuLi0J5DIBBcQc3Q27Ar0NNpBZD+WSqQ8B9OEPB0YtD");
buff\_colours\_rgba = buffer\_base64\_decode("Ud93/wghI//D2cr/");
buff\_uvs = buffer\_base64\_decode("9KQyP69/UT9Uxak+ybENPzKNZzwxS1A9");

buff\_vertex\_data = buffer\_create(3 \* 24, buffer\_fixed, 1);
buffer\_copy\_stride(buff\_positions\_xyz, 0, 3 \* 4, 3 \* 4, 3, buff\_vertex\_data, 0, 24);
buffer\_copy\_stride(buff\_colours\_rgba, 0, 4 \* 1, 4 \* 1, 3, buff\_vertex\_data, 12, 24);
buffer\_copy\_stride(buff\_uvs, 0, 2 \* 4, 2 \* 4, 3, buff\_vertex\_data, 16, 24);
vb = vertex\_create\_buffer\_from\_buffer(buff\_vertex\_data, vertex\_format);

Draw Event

vertex\_submit(vb, pr\_trianglelist, -1);

The above example shows how to join together data that's stored as attributes in separate buffers. The data are combined into a single buffer, in which the data are [interleaved](https://en.wikipedia.org/wiki/Interleaving_(data)).

First, in the Create event, the default vertex format is created and assigned to an instance variable vertex\_format. Then the three buffers containing the attribute data are created from base64-encoded data: buff\_positions\_xyz stores the (x, y, z) position data of 3 vertices, buff\_colours\_rgba stores their RGBA colour data and buff\_uvs their UV data. The values of each attribute are stored one after the other, e.g. buff\_positions\_xyz stores the (x, y, z) position of the first vertex, followed by the (x, y, z) position of the second vertex, followed by that of the third vertex, etc.

After that, another buffer buff\_vertex\_data is created to store the interleaved vertex data. Each of the three calls to buffer\_copy\_stride then reads the values of each attribute (position, colour and uv) and places them in the correct positions in the destination buffer, leaving room for the other attributes to be written by the next call to the function. Finally a vertex buffer is created from the data in the buffer.

In the Draw event, the vertex buffer is submitted. This will draw a triangle.