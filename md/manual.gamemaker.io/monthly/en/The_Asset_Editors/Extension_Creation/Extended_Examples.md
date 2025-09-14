---
title: "Source Examples"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extension_Creation/Extended_Examples.htm"
converted: "2025-09-14T04:00:15.229Z"
---

# Source Examples

This page contains examples and information on extension source code for Android and iOS, to help you create your own native extensions for those platforms.

[Android (Base Example)Android (Base Example)](Extended_Examples.htm#)

Our example extension for Android will contain functions that do the following:

-   Return two numbers added together
-   Return a string consisting of an input string and value
-   Return a string consisting of two input strings
-   Trigger the [Async - Social](../Object_Properties/Async_Events/Social.md) event and fill values in its async\_load map

This extension will make use of a .java file, the contents of which are given below (click to open):

[GenericTest.java](Source_Files/GenericTest.md)

To add such a file to your extension, you need to go under its [Android Properties](Android_Extensions.md) and first enter a class name (for this example, "GenericTest"), then click on "Add Source" and select the .java file. This will add the selected file to your project directory -- you can right-click on your extension, select "Open in Explorer" and see the source files there.

You can now add a new placeholder file to your extension and create functions inside it with the following properties:

-   _function / external name:_AddTwoNumbers
    _help:_AddTwoNumbers(value1, value2)
    _arguments:_double, double
    _return type:_double
-   _function / external name:_HowManyObjects
    _help:_HowManyObjects(value1, value2, string)
    _arguments:_double, double, string
    _return type:_string
-   _function / external name:_BuildAString
    _help:_BuildAString(string1, string2)
    _arguments:_string, string
    _return type:_string
-   _function / external name:_ReturnAsync
    _help:_ReturnAsync(value1, value2)
    _arguments:_double, double
    _return type:_double

Here is an example of the AddTwoNumbers() function:

![](../../assets/Images/Asset_Editors/Editor_Extensions_EE1_Function.png)You can now call these functions from your game code and use them like any other built-in function:

var result1 = string(AddTwoNumbers(irandom(100), 50));
var result2 = BuildAString("Hello", "World");
var result3 = HowManyObjects(irandom(1000), irandom(1000), "Targets");
ReturnAsync(irandom(1000), irandom(1000));

The ReturnAsync() function will trigger the [Async - Social](../Object_Properties/Async_Events/Social.md) event, so you will need to add that event to your object and read data from its async\_load map (which is filled by the extension's source code given above).

var type = async\_load\[? "type"\];

if (type == "finished")
{
    var result4 = "value1: " + string(async\_load\[? "argument0"\]) + ", ";
    result4 += "value2: " + string(async\_load\[? "argument1"\]);
}

[iOS (Base Example)iOS (Base Example)](Extended_Examples.htm#)

The example provided for iOS is the same as the Android example given above; only the source files differ, which we'll cover in this section.

iOS extensions make use of an .h and an .mm file, and the contents of both are given below (click to open):

[GenericTest iOS Source Files](Source_Files/GenericTest-iOS.md)

To add these files to your extension, you first need to go under its [iOS Properties](iOS_Extensions.md) and enter a class name (for this example, "GenericTest"). You can then use either the "Enter framework path" option (if the files are present on your macOS machine used for building) or the "Add Source" option (if they are on your development machine); regardless of the option you use, you will need to point them to the directory that contains your .h and .mm files.

You can add these source files to the same extension that was set up in the previous section for Android, meaning that any functions already defined in that extension will now work on iOS too (given that the _External Names_ of all functions on Android and iOS are the same). If you are creating a new extension, you can simply create the functions in the same way as previously described.

[Android (Callbacks)Android (Callbacks)](Extended_Examples.htm#)

You can use the following callback functions in your .java extension files:

public void onStart()
public void onRestart()
public void onStop()
public void onDestroy()
public void onPause()
public void onResume()
public void onActivityResult(int requestCode, int resultCode, Intent data)
public void onRequestPermissionsResult(int requestCode, String permissions\[\], int\[\] grantResults)
public void onNewIntent(android.content.Intent newIntent)
public void onWindowFocusChanged(boolean hasFocus)
public void onConfigurationChanged(Configuration newConfig)



[iOS (Callbacks)iOS (Callbacks)](Extended_Examples.htm#)

You can use the following callback functions in your .mm extension files:

\-(void) Init
\-(void) onLaunch:(NSDictionary\*)launchOptions
\-(void) onResume
\-(void) onPause
\-(void) applicationDidEnterBackground:(UIApplication \*)application
\-(void) applicationWillEnterForeground:(UIApplication \*)application
\-(void) onStop
\-(void) applicationProtectedDataDidBecomeAvailable:(UIApplication \*)application
\-(void) applicationProtectedDataWillBecomeUnavailable:(UIApplication \*)application
\-(void) applicationDidReceiveMemoryWarning:(UIApplication \*)application
\-(void) applicationSignificantTimeChange:(UIApplication \*)application
\-(void) application:(UIApplication \*)application willEncodeRestorableStateWithCoder:(NSCoder \*)coder
\-(void) application:(UIApplication \*)application didDecodeRestorableStateWithCoder:(NSCoder \*)coder
\-(void) application:(UIApplication \*)application didUpdateUserActivity:(NSUserActivity \*)userActivity
\-(void) application:(UIApplication \*)application didFailToContinueUserActivityWithType:(NSString \*)userActivityType error:(NSError \*)error
\-(void) application:(UIApplication \*)application handleWatchKitExtensionRequest:(NSDictionary \*)userInfo reply:(void (^)(NSDictionary \*replyInfo))reply
\-(void) applicationShouldRequestHealthAuthorization:(UIApplication \*)application
\-(void) openURL:(NSURL \*)url sourceApplication:(NSString \*) sourceApplication annotation:(id)annotation
\-(void) application:(UIApplication \*)application userDidAcceptCloudKitShareWithMetadata:(CKShareMetadata \*)cloudKitShareMetadata