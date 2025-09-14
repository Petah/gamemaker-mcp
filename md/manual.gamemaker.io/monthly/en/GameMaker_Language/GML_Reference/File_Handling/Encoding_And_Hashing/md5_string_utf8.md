---
title: "md5_string_utf8"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/md5_string_utf8.htm"
converted: "2025-09-14T03:59:55.932Z"
---

# md5\_string\_utf8

In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic hash function with a 128-bit hash value and has been employed in a wide variety of security applications. It is also commonly used to check the integrity of files and strings. This function will take an input UTF-8 string (which has a variable number of bytes per character) and return the 32-character hexadecimal MD5 hash that is unique to that string. In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).

**NOTE**: There are two formats for the MD5 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.

**NOTE**: MD5 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/MD5) for more info.

#### Syntax:

md5\_string\_utf8(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to hash. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var hash, str;
str = json\_encode(hiscore\_map);
hash = md5\_string\_utf8(str);
ini\_open("local.ini");
ini\_write\_string("info", "0", hash);
ini\_close();
get\[0\] = http\_post\_string("http://www.MacSweeney Games.com/CatchTheHaggis?game\_hiscores=" + string(global.game\_id), str)

The above code will encode a DS map into a JSON string. An MD5 hash is then generated and stored in an ini file so that this can later be used to check the integrity of the JSON should the same information be received later form the server. The JSON is then sent.