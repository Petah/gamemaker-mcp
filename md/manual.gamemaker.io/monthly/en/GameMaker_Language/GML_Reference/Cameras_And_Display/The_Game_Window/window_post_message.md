---
title: "window_post_message"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/Cameras_And_Display/The_Game_Window/window_post_message.htm"
converted: "2025-09-14T03:59:45.320Z"
---

# window\_post\_message

This function is for the **GX.games** target and is used to send a message to the host window containing the game. It takes a string which is sent to the host iframe.

### Host Webpage

The host webpage should contain the game within an iframe (as shown in the example below). If an iframe is not found, the message will be sent back to the runner.

In a script on the same page, you can use window.addEventListener('message', <function>') to listen for messages sent from the runner using window\_post\_message. The argument received in the callback contains an origin variable with a URL and a data variable with the string received.

The host webpage will also receive a 'gm\_post\_message\_listener\_setup\_complete' message when the runner's listener setup has finished, meaning it can now start receiving messages.

From the same webpage, you can call the .contentWindow.postMessage() function on your iframe element to send a string or object to the runner. This is received by the runner in an **Async System** event as described in the next section.

[Example HTMLExample HTML](window_post_message.htm#)

The following is example HTML code (inside a body tag) containing the game in an iframe, with a button for sending data to the runner and an event listener for receiving messages and logging them to the console.

<!-- The iframe running the game, the link is from a webserver hosting the game's html file -->

<iframe id="gameframe" sandbox="allow-same-origin allow-scripts allow-popups allow-forms" src="http://127.0.0.1:51264/runner.html?game=BLANK\_GAME\_13" name="" width="1366" height="768" frameborder="0" marginheight="0" scrolling="no"></iframe>

<!-- The button used to send data to the runner -->

<button type="button" onclick="document.getElementById('gameframe').contentWindow.postMessage('Hello this is a message from your host window','\*')">Post Message</button>

<!-- A script that creates a listener for the runner's messages -->

<script type="text/javascript">
window.addEventListener('message', function(e) {
  console.log(e.origin);
  alert("MessageReceived:"+e.data);
}, false);
</script>

### Async System event

Messages sent by the host webpage are received in the [Async System](../../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) event. The async\_load DS map in the event will contain the following variables:

-   "event\_type": "post\_message\_received"
-   "origin": The origin of the received message, undefined if not valid
-   "data": The received string, undefined if not valid. If the host webpage sent a data object, this will be a JSON string representing that data, which can be converted to structs/arrays using [json\_parse](../../File_Handling/Encoding_And_Hashing/json_parse.md).

#### Syntax:

window\_post\_message(data);

| Argument | Type | Description |
| --- | --- | --- |
| data | String | The string to send |

#### Returns:

N/A

#### Example: Sending data

if (keyboard\_check\_released(vk\_space))
{
    var data = {
        "action": "score",
        "score": 10
    };

    window\_post\_message(json\_stringify(data));
}

When space is pressed, this will create a struct and send a JSON string of that struct to the host window.

#### Example: Receiving data

if (async\_load\[? "event\_type"\] == "post\_message\_received")
{
    var \_origin = async\_load\[? "origin"\];

    if (\_origin != undefined)
    {
        show\_debug\_message("Message received from: " + string(\_origin));
    }

    var \_data = async\_load\[? "data"\];

    if (\_data != undefined)
    {
        show\_debug\_message("Message received: " + string(\_data));
    }
}

When a message is received, this prints the origin and data variables to the output log, only if they are not undefined.