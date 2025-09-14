---
title: "os_get_info"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_info.htm"
converted: "2025-09-14T04:00:04.489Z"
---

# os\_get\_info

This function returns a [DS Map](../Data_Structures/DS_Maps/DS_Maps.md) with detailed information about the OS that the game is running on. The exact information returned will depend on the OS and the device, so it is recommended that you test this function on all platforms that you wish to target and output the returned values using a function like [show\_debug\_message()](../../../../../../GameMaker_Language/GML_Reference/Debugging/show_debug_message.md). Note that the DS map is not automatically cleared from memory and you should use the [ds\_map\_destroy()](../../../../../../GameMaker_Language/GML_Reference/Data_Structures/DS_Maps/ds_map_destroy.md) function when you no longer need it.

Below you can find some details on the extra data that will be made available to the DS map specific to the following platforms, and it should be noted that on all platforms _except_ HTML5 the map will have the key "is64bit" which will either be true or false depending on whether the runner is running in 64-bit mode or not.

[WindowsWindows](os_get_info.htm#)

On Windows, you will get some extra data from DX11 with the following keys available in the DS map (useful for extensions):

-   udid: An identifier that is unique to the machine
-   **video\_d3d11\_device**: pointer to the DX11 device
-   **video\_d3d11\_context**: pointer to the DX11 context
-   video\_d3d11\_swapchain: pointer to the DX11 swapchain
-   **video\_adapter\_vendorid**: string with the adapter's vendor id
-   **video\_adapter\_deviceid**: string with the adapter's device id
-   **video\_adapter\_subsysid**: string with the adapter's sub system id
-   **video\_adapter\_revision**: string with the adapter's revision number
-   video\_adapter\_description: string with the video adapter's description
-   **video\_adapter\_dedicatedvideomemory**: string with the size of the video memory
-   **video\_adapter\_dedicatedsystemmemory**: string with the size of the system memory (used by DX11 adapter)
-   video\_adapter\_sharedsystemmemory: string with the size of the shared system memory

[macOSmacOS](os_get_info.htm#)

The function returns some limited OpenGL information on macOS:

-   udid: An identifier that is unique to the machine
-   gl\_vendor\_string: GL\_VENDOR from OpenGL, example - _"Intel Inc."_
-   gl\_version\_string: GL\_VERSION from OpenGL, example - _"2.1 INTEL-16.2.16"_
-   gl\_renderer\_string: GL\_RENDERER from OpenGL, example - _"Intel(R) Iris(TM) Graphics 6100"_

[UbuntuUbuntu](os_get_info.htm#)

This contains the same information as on macOS.

[AndroidAndroid](os_get_info.htm#)

On the **Android** platform you will get some extra data from various different APIs with the following keys available in the DS map:

-   android\_tv: this will return true if the device is detected as being an Android TV device, or false otherwise
-   GL\_VERSION: the version of OpenGL as reported by the driver
-   GL\_VENDOR: the vendor of OpenGL as reported by the driver
-   GL\_RENDERER: the renderer of OpenGL as reported by the driver
-   GL\_EXTENSIONS: the extensions of OpenGL that are available as reported by the driver
-   GL\_SHADING\_LANGUAGE\_VERSION: the version of the GLSL that is supported by this OpenGL driver
-   GL\_MAX\_TEXTURE\_SIZE: the maximum texture size supported by this OpenGL driver
-   SDK\_INT: value of **android.os.Build.VERSION.SDK\_INT** _(see note below)_
-   RELEASE: value of **android.os.Build.VERSION.RELEASE**
-   MODEL: value of **android.os.Build.MODEL**
-   DEVICE: value of **android.os.Build.DEVICE**
-   MANUFACTURER: value of **android.os.Build.MANUFACTURER**
-   CPU\_ABI: value of **android.os.Build.CPU\_ABI**
-   CPU\_ABI2: value of **android.os.Build.CPU\_ABI2**
-   BOOTLOADER: value of **android.os.Build.BOOTLOADER**
-   BOARD: value of **android.os.Build.BOARD**
-   VERSION: value of **os.version** from the Android System.getProperty method.
-   REGION: values of **user.region** from the Android System.getProperty method
-   VERSION\_NAME: value of this package's versionName - see [here](https://developer.android.com/reference/android/content/pm/PackageInfo.html#versionName) for more information.
-   PHYSICAL\_KEYBOARD: if we think a physical keyboard is available then the string "TRUE" otherwise "FALSE"

NOTE For information on any **android.os.Build** variables, see the [Android Developer documentation](https://developer.android.com/reference/android/os/Build "Android Developer documentation").

[iOS & tvOSiOS & tvOS](os_get_info.htm#)

Here are the keys returned on iOS and tvOS (for detailed information, please refer to the Apple Developer documentation):

-   name: string as reported by \[\[UIDevice currentDevice\] name\]
-   systemName: string as reported by \[\[UIDevice currentDevice\] systemName\]
-   systemVersion: string as reported by \[\[UIDevice currentDevice\] systemVersion\]
-   model: string as reported by \[\[UIDevice currentDevice\] model\]
-   localisedModel: string as reported by \[\[UIDevice currentDevice\] localizedModel\]
-   uiIdiom: string as reported by \[\[UIDevice currentDevice\] userInterfaceIdiom\]
-   platform: hw.machine string gathered from sysctlbyname
-   hwModel: hw.model string gathered from sysctlbyname
-   freeDiskSpace: The free disk space
-   totalDiskSpace: The total disk space
-   cpuFrequency: The CPU's frequency
-   busFrequency: The bus frequency
-   cpuCount: The CPU count
-   totalMemory: The total memory of the device
-   userMemory: The user memory
-   maxSocketBufferSize: The max socket buffer size
-   Additional keys containing OpenGL graphics info


[GX.gamesGX.games](os_get_info.htm#)

The following extra keys will be included in the DS Map for GX.games:

-   mobile: This will be **1.0** if the game is running on a mobile browser, and **0.0** if it's not.

[HTML5HTML5](os_get_info.htm#)

Returns \-1.

[Nintendo SwitchNintendo Switch](os_get_info.htm#)

Returns \-1.

[PlayStation 4PlayStation 4](os_get_info.htm#)

_Please refer to the PS4 documentation for information on the functions referenced here._

The function returns the following keys on a PlayStation 4 console:

-   display\_safe\_area\_ratio: A floating point value as returned by sceSystemServiceGetDisplaySafeAreaInfo().
-   is\_neo\_mode: This will be 1 if the game is running on a Neo (PS4 Pro) and 0 if it's running on a regular PS4.
-   enter\_button\_assign: An integer value as returned by sceSystemServiceParamGetInt(SCE\_SYSTEM\_SERVICE\_PARAM\_ID\_ENTER\_BUTTON\_ASSIGN, &enterassign); a value of 0 means the Circle button is used as "assign" and 1 means the X button is used instead.

[PlayStation 5PlayStation 5](os_get_info.htm#)

The function returns the following keys on a PlayStation 5 console:

-   display\_safe\_area\_ratio: Same as PS4 (see above).
-   display\_resolution: "HD", "4K"  or "unknown"
-   display\_dynamic\_range: "HDR", "SDR" or "unknown"
-   display\_refresh\_rate: "120Hz", "60Hz" or "Unknown"



[Xbox One & Series X/SXbox One & Series X/S](os_get_info.md)

The info returned on Xbox One and Xbox Series X/S is mostly the same as Windows, however the video\_adapter\_\* and udid keys are 0 (except for video\_adapter\_description which is an empty string ""). It also does not have the video\_d3d11\_swapchain key and the video\_d3d11\_\* keys have been replaced by video\_d3d12\_\*.

Here are some keys that this platform returns in addition to the ones listed under Windows:

-   video\_d3d12\_cmdqueue: Points to the DX12 command queue
-   video\_d3d12\_cmdlist: Points to the DX12 command list
-   video\_d3d12\_currentrt: Points to the current DX12 render target
-   device\_type: Contains a constant value that represents the device type. These constants map directly to values returned by the XSystemGetDeviceType() function.
    This will be one of the following constants: device\_gdk\_unknown, device\_gdk\_xboxone, device\_gdk\_xboxones, device\_gdk\_xboxonex, device\_gdk\_xboxonexdevkit, device\_gdk\_xboxseriess, device\_gdk\_xboxseriesx, device\_gdk\_xboxseriesdevkit.

#### Syntax:

os\_get\_info()

#### Returns:

[DS Map](../Data_Structures/DS_Maps/ds_map_create.md)

#### Example:

if (os\_type == os\_android)
{
    var \_info = os\_get\_info();

    if (\_info\[? "android\_tv"\])
    {
        global.android\_tv = true;
    }
}

The above code checks if the current OS is Android, gets the OS info and reads the returned map to check if the game is running on an Android TV; in that case it sets the custom variable global.android\_tv to true.