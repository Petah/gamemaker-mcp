---
title: "sha1_string_unicode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/sha1_string_unicode.htm"
converted: "2025-09-14T03:59:55.959Z"
---

# sha1\_string\_unicode

In cryptography, SHA-1 is a cryptographic hash function designed by the United States _National Security Agency_ and is employed in several widely used applications and protocols like the popular **Git** where it is used to check for file changes. This function will take an input unicode string and returns a 160 bit message digest in ASCII format, for example:

sha1 input string = "The quick brown fox jumps over the lazy dog"
sha1 output hash = "2fd4e1c6 7a2d28fc ed849ee1 bb76e739 1b93eb12"

In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).

**NOTE**: There are two formats for the sha1 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.

**NOTE**: SHA-1 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/SHA-1) for more info.

#### Syntax:

sha1\_string\_unicode(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to hash. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var hash, str;
str = base64\_encode(game\_data);
hash = sha1\_string\_unicode(str);
http\_get("http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?hash=" + hash); http\_get("http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?data=" + str);

The above code will base64 encode a string and then generate a sha1 hash. Finally, both the hash and the encoded string are sent to a server.