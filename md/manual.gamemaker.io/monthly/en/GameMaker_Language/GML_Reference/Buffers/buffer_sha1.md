---
title: "buffer_sha1"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Buffers/buffer_sha1.htm"
converted: "2025-09-14T03:59:43.889Z"
---

# buffer\_sha1

This function takes input data from a buffer and returns a 160 bit message digest in ASCII format. In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).

In cryptography, SHA-1 is a cryptographic hashing function designed by the United States National Security Agency and is employed in several widely used applications and protocols like the popular **Git** where it is used to check for file changes.

When applying this to buffers using this function you must specify the buffer to use, then an offset value (in bytes) for where to begin, and then a size (again in bytes) for the region to be hashed.

NOTE SHA-1 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/SHA-1) for more info.

#### Syntax:

buffer\_sha1(buffer, offset, size);

| Argument | Type | Description |
| --- | --- | --- |
| buffer | Buffer | The buffer to use. |
| offset | Real | The data offset value. |
| size | Real | The size of the buffer. |

#### Returns:

[String](../../GML_Overview/Data_Types.md)

#### Example:

check\_string = buffer\_sha1(buff, 0, buffer\_get\_size(buff));

The above code creates an SHA-1 hash for the full data stored in the buffer stored in the variable buff, and stores the returned hash in the variable check\_string.