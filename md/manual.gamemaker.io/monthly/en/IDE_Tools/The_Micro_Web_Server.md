---
title: "The Micro Web Server"
source: "manual.gamemaker.io/monthly/en/IDE_Tools/The_Micro_Web_Server.htm"
converted: "2025-09-14T04:00:12.565Z"
---

# The Micro Web Server

This small tool's primary function is to connect to and serve files to some of the available target platforms for GameMaker (like the HTML5 target). It also serves files for the GameMaker manual when used offline.

When you run a game on a target that requires the Micro Web Server, you will see debug output appear in [The Output Window](../Introduction/The_Output_Window.md) as the game is served to the chosen device:

![Micro Web Server Window](../assets/Images/IDE%20Tools/Micro_Web_Server.png)

NOTE The first time you run a game on a target that requires the Micro Web Server, you may get a firewall alert. You should permit the web server to communicate through the firewall if this happens.

When the Micro Web Server is running, you can access your game from any local device (and even remotely, if port forwarding is properly set up). Simply access your computer's local IP address through the port shown in the output, and you will be able to play your game from another device, like a mobile phone, or another computer.

For example, let's say your computer's local IP address is 192.168.0.110 ([read this](https://lifehacker.com/how-to-find-your-local-and-external-ip-address-5833108) to know how to find it), and the **Default Web Server Port** set in the [HTML5 Preferences](../Setting_Up_And_Version_Information/Platform_Preferences/HTML5.htm#h) is 51264. After running the game on your computer, you would connect to 192.168.0.110:51264 from a browser on your mobile, and play your game. The Web Server will then output debug information related to the files that have been served.

You can also change the list of **Allowed IPs** along with the **Port** number being used, either in the [Device Manager](../Setting_Up_And_Version_Information/The_Device_Manager.md) settings for the given device target, or in the [HTML5 Preferences](../Setting_Up_And_Version_Information/Platform_Preferences/HTML5.htm#h) when using the **Default** device.