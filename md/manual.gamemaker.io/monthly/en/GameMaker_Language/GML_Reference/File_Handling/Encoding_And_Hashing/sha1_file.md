---
title: "sha1_file"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/sha1_file.htm"
converted: "2025-09-14T03:59:55.945Z"
---

# sha1\_file

In cryptography, SHA-1 is a cryptographic hash function designed by the United States _National Security Agency_ and is employed in several widely used applications popular **Git** where it is used to check for file changes, and the protocols TLS and SSL, PGP, SSH, S/MIME, and IPsec. This function will take an input file and return a 160 bit message digest in ASCII format unique to that file to be used for integrity verification at any later date.

**NOTE**: SHA-1 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/SHA-1) for more info.

#### Syntax:

sha1\_file(filename)

| Argument | Type | Description |
| --- | --- | --- |
| filename | String | The file to generate the sha1 hash for. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

hash = sha1\_file(working\_directory + "game\_data.ini")

The above code will generate a sha1 hash for the specified file and store the returned value in the variable "hash".