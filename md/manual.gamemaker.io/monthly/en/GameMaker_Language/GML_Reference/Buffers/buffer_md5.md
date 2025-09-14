---
title: "buffer_md5"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_md5.htm"
converted: "2025-09-14T03:59:43.681Z"
---

# buffer\_md5

This function takes the input data from a given buffer (or part of the buffer) and return the 32-character hexadecimal MD5 hash that is unique to that data. In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).

In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic hashing function with a 128-bit hash value which has been employed in a wide variety of security applications. It is also commonly used to check the integrity of data.

When applying this to buffers using this function you must specify the buffer to use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed.

**NOTE** MD5 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/MD5) for more info.

#### Syntax:

buffer\_md5(buffer, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| offset | Real | The data offset value. |
| size | Real | The size of the buffer. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

check\_string = buffer\_md5(buff, 0, buffer\_get\_size(buff));

The above code will create an MD5 hash for the full data stored in the buffer stored in the variable buff, and store the returned hash in the variable check\_string.