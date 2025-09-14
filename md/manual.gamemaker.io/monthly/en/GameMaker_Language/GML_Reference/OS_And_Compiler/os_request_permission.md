---
title: "os_request_permission"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Reference/OS_And_Compiler/os_request_permission.htm"
converted: "2025-09-14T04:00:04.685Z"
---

# os\_request\_permission

This function requests the OS for a specific permission.

It is used on two different targets:

-   On Android you supply the permission to request as a string using the format "android.permission.<permission>", so to request, for example, the RECORD\_AUDIO permission you would call:

os\_request\_permission("android.permission.RECORD\_AUDIO");

-   On GX.games you can use this function to request access to orientation information, though only on certain browsers (see [Device Input](../../../../../../GameMaker_Language/GML_Reference/Game_Input/Device_Input/Device_Input.md)). This permission request has to be made in response to a user press, so will only take place the first time the app is clicked after the call to os\_request\_permission is made. In this case you request the permission "DeviceMotion":

os\_request\_permission("DeviceMotion");

NOTE You can request multiple permissions at once by passing multiple arguments into the function.

The function will later trigger a [System Asynchronous Event](../../../The_Asset_Editors/Object_Properties/Async_Events/System.md) where the built-in [async\_load](../../GML_Overview/Variables/Builtin_Global_Variables/async_load.md) DS map will contain the following key/value pairs:

-   "**type**": This will be the string "permission\_request\_result", used to identify the type of event triggered.
-   "**<permission>**": This will be a permission requested by the function, as a string. You will get keys for all the permissions you requested in the original function call.

    This key will equal one of the following constants:

| Constant | Description |
| --- | --- |
| os_permission_granted | This indicates that the permission has been granted |
| os_permission_denied | This indicates that the permission has not been granted |

-   "response": This is only returned for the "DeviceMotion" permission. It holds the string value returned by the request.

It is worth noting that the following permissions are supported natively by GameMaker, but are considered "dangerous" by Google and as such they _must_ be explicitly requested (note too that some permissions can be requested using the [Android Game Options](../../../Settings/Game_Options/Android.md) without the need for this function):

-   android.permission.WRITE\_EXTERNAL\_STORAGE
-   android.permission.READ\_PHONE\_STATE
-   android.permission.RECORD\_AUDIO

For more information on app permissions, please see the [Android Documentation](https://developer.android.com/guide/topics/permissions/overview).

#### Syntax:

os\_request\_permission(permissions...)

| Argument | Type | Description |
| --- | --- | --- |
| permissions | String | The permission(s) to request. Request multiple permissions by adding more arguments. |

#### Returns:

N/A

#### Example 1:

if (os\_type == os\_android)
{
    if (os\_check\_permission("android.permission.INTERNET") == os\_permission\_denied)
    {
        os\_request\_permission("android.permission.INTERNET");
    }
}

The above code checks the OS type and if it's Android, it performs a check on the "INTERNET" permission and if it's not yet been granted, it requests it.

#### Example 2:

var \_read = "android.permission.READ\_EXTERNAL\_STORAGE";
var \_write = "android.permission.WRITE\_EXTERNAL\_STORAGE";

if (os\_check\_permission(\_write) && os\_check\_permission(\_read))
{
    MobileUtils\_Share\_Open("Title!", "image/gif", file);
}
else
{
    os\_request\_permission(\_write, \_read);
}

This function checks if the user has permissions for reading from and writing to external storage. If it's allowed, it runs an extension function to operate using those permissions. However, if either of those permissions are not allowed, it calls os\_request\_permission to request both permissions at once.