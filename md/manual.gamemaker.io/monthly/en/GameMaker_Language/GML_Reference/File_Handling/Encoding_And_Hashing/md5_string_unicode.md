---
title: "md5_string_unicode"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/md5_string_unicode.htm"
converted: "2025-09-14T03:59:55.917Z"
---

# md5\_string\_unicode

In cryptography, MD5 (Message-Digest algorithm 5) is a widely used cryptographic hash function with a 128-bit hash value and has been employed in a wide variety of security applications. It is also commonly used to check the integrity of files and strings. This function will take an input unicode string (which is 16bits for each char) and return the 32-character hexadecimal MD5 hash that is unique to that string. In this way you can generate a secure key which can be stored and used to check the integrity of the information being sent to (or received from) an external server (for example).

**NOTE** There are two formats for the MD5 encoding, UTF-8 and unicode. Both are provided to facilitate communication with different server setups, but the most common to use is unicode.

**NOTE**: MD5 is not completely secure and can be broken. See [this page](https://en.wikipedia.org/wiki/MD5) for more info.

#### Syntax:

md5\_string\_unicode(string)

| Argument | Type | Description |
| --- | --- | --- |
| string | String | The string to hash. |

#### Returns:

[String](../../../GML_Overview/Data_Types.md)

#### Example:

var hash, str;
str = base64\_encode(game\_data);
hash = md5\_string\_unicode(str);
http\_get("http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?hash=" + hash); http\_get("http://www.MacSweeneyGames.com/CatchTheHaggis/gamedata?data=" + str);

The above code will base64 encode a string and then generate an MD5 hash. Finally, both the hash and the encoded string are sent to a server.