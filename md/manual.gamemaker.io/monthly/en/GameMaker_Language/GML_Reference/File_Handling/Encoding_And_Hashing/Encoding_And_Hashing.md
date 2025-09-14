---
title: "Encoding And Hashing"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/File_Handling/Encoding_And_Hashing/Encoding_And_Hashing.htm"
converted: "2025-09-14T03:59:55.741Z"
---

# Encoding And Hashing

When dealing with external files, there is always the possibility that the end user could open and change the information that they contain, and so change your game. This can result in broken gameplay elements or fraudulent scores on-line (for example), and so GameMaker provides you with some basic encoding functions as well as functions to perform hashing checks on strings and files to make sure that they have maintained their integrity before being used. There are also some functions supplied for encoding and decoding JSON format strings, as well as for creating ZIP files.

NOTE Encoding is NOT encryption! A base64 encoding renders the file unreadable to the naked eye and will require an effort on behalf of the user to decode, but it is not secure from hacking. It is recommended that you mix those functions with your own encryption (there are many forms of encryption and script functions for GameMaker available on the internet).

## Function Reference

### JSON

NOTE See [Guide To Using JSON](../../../../Additional_Information/Guide_To_Using_JSON.md) for detailed information on how to use JSON in GameMaker.

-   [json\_stringify](json_stringify.md)
-   [json\_parse](json_parse.md)
-   [json\_encode](json_encode.md)
-   [json\_decode](json_decode.md)

### Base64

-   [base64\_encode](base64_encode.md)
-   [base64\_decode](base64_decode.md)

### Hashing

-   [md5\_string\_utf8](md5_string_utf8.md)
-   [md5\_string\_unicode](md5_string_unicode.md)
-   [md5\_file](md5_file.md)
-   [sha1\_string\_utf8](sha1_string_utf8.md)
-   [sha1\_string\_unicode](sha1_string_unicode.md)
-   [sha1\_file](sha1_file.md)

### CSV

-   [load\_csv](load_csv.md)

### ZIP Files

-   [zip\_unzip](zip_unzip.md)
-   [zip\_unzip\_async](zip_unzip_async.md)
-   [zip\_create](zip_create.md)
-   [zip\_add\_file](zip_add_file.md)
-   [zip\_save](zip_save.md)

### Encoding and Hashing [Buffers](../../Buffers/Buffers.md)

-   [buffer\_md5](../../Buffers/buffer_md5.md)
-   [buffer\_sha1](../../Buffers/buffer_sha1.md)
-   [buffer\_crc32](../../Buffers/buffer_crc32.md)
-   [buffer\_base64\_encode](../../../../../../../GameMaker_Language/GML_Reference/Buffers/buffer_base64_encode.md)
-   [buffer\_base64\_decode](../../Buffers/buffer_base64_decode.md)
-   [buffer\_base64\_decode\_ext](../../Buffers/buffer_base64_decode_ext.md)