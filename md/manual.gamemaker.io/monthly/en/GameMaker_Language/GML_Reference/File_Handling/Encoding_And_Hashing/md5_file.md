---
title: "md5_file"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/md5_file.htm"
converted: "2025-09-14T03:59:55.903Z"
---

# md5\_file

In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic hash function with a 128-bit hash value and has been employed in a wide variety of security applications. It is also commonly used to check the integrity of files and strings. This function will take the given file and generate a unique MD5 for that file which can then be stored for later use.

**NOTE**: MD5 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/MD5) for more info.

#### Syntax:

md5\_file(filename)

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The file to generate the MD5 hash for. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

hash = md5\_file(working\_directory + "game\_data.ini")

The above code will generate an MD5 hash for the specified file and store the returned value in the variable "hash".