---
title: "Android Extensions"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extension_Creation/Android_Extensions.htm"
converted: "2025-09-14T04:00:15.149Z"
---

# Android Extensions

To create an extension for Android you have to do it in two parts. The first part would be to add the extension itself, along with the required files, and the second is to create the functions and macros/constants that the extension requires.

The functions and constants are added using **placeholder** files to group them together, so you'd add a placeholder and then define the functions and macros as explained in the previous section. To add the rest of the files though you would need to first tick the _Android_ checkbox in the **Extra Platforms** section of the editor, which will open up the extension's Android Properties:

![Android Editor](../../assets/Images/Asset_Editors/Editor_Extensions_Android.png)

Here you can give the following details:

-   **Class Name**: Your extension can have multiple classes, with each class having its own functions and constants, so you should give it a name that reflects its purpose.
-   **Android Permissions**: Here you can add in any extra permissions that your extension requires. What these permissions are will depend entirely on the use that the extension has, and so you should [check the documentation supplied by Google](https://developer.android.com/reference/android/Manifest.permission.html) for the Android platform, or, if you are using a third-party SDK, the documentation that comes with the SDK. To add a new permission you need to click on the ![Add Argument Icon](../../assets/Images/Icons/Icon_AddArgument.png) button to add a placeholder permission and then do a double ![LMB Icon](../../assets/Images/Icons/Icon_LMB.png) click on that to edit it to what is required. You can remove permissions using the ![Remove Argument Icon](../../assets/Images/Icons/Icon_RemoveArgument.png) button.
-   **Code Injection**: Here you can add any code to be injected (added) into your Android application when your game is built for testing or final release. Make sure to revise this (and your permissions) carefully before submitting any games to the store, as incorrect settings will cause your game to be failed for submission. See the section below for more information.

## Code Injection

Any code entered into the "Code Injection" window needs to be separated into distinct XML groups, as shown in the screenshot above. The XML tag you use for a group will determine where the code is injected into your application.

You can use the following syntax to create code injection groups:

<YYTagName>

// Code to inject

</YYTagName>

The following tags are available for the Android platform:

| Tag | Description |
| --- | --- |
| Top-level Gradle |
| YYAndroidTopLevelGradle | The contents of this tag are inserted at the start of the top-level gradle file. |
| YYAndroidTopLevelGradleBuildscript | The contents of this tag are inserted into the top-level gradle file's build script. |
| YYAndroidTopLevelGradleBuildscriptRepositories | The contents of this tag are inserted into the top-level gradle file's repositories listing. |
| YYAndroidTopLevelGradleBuildscriptDependencies | The contents of this tag are inserted into the top-level gradle file's dependencies listing. |
| YYAndroidTopLevelGradleAllprojects | The contents of this tag are inserted into the top-level gradle file's "allprojects" section. |
| YYAndroidTopLevelGradleAllprojectsRepositories | The contents of this tag are inserted into the "repositories" section under the top-level gradle file's "allprojects" section. |
| YYAndroidTopLevelGradleEnd | The contents of this tag are inserted at the end of the top-level gradle file. |
| Module-level Gradle |
| YYAndroidGradle | The contents of this tag are inserted at the start of the module-level gradle file. |
| YYAndroidGradleEnd | The contents of this tag are inserted at the end of the module-level gradle file. |
| YYAndroidGradleAndroid | The contents of this tag are inserted into the "android" section of the module-level gradle file. |
| YYAndroidGradleDependencies | The contents of this tag should hold dependencies and are inserted at the end of the "android" section of the module-level gradle file. |
| YYAndroidGradleProperties | The contents of this tag are appended to the gradle.properties file. |
| YYAndroidBuildTypesRelease | The contents of this tag are inserted into the module-level gradle file under the "android" -> "buildTypes" -> "release" section. |
| Android Manifest |
| YYAndroidManifestAttributes | The contents of this tag are appended to the manifest's attributes. |
| YYAndroidManifestApplicationAttributes | The contents of this tag are appended to the "application" section's attributes. |
| YYAndroidManifestActivityAttributes | The contents of this tag are appended to the "activity" section (part of the "application" section). |
| YYAndroidManifestManifestInject | This tag's contents are inserted at the start of the "manifest" section. |
| YYAndroidManifestActivityInject | This tag's contents are inserted at the start of the "activity" section. |
| YYAndroidManifestApplicationInject | This tag's contents are inserted into the "application" section. |
| Strings |
| YYAndroidStringValuesInjection | This tag's contents are inserted into the strings file. |
| Layout |
| YYAndroidLayout | This tag's contents are appended at the end of the "merge" section of the layout's XML file. |
| ProGuard |
| YYAndroidProguard | This tag's contents contain ProGuard rules that are inserted into the corresponding file. |

The runtime location where the code is injected will depend on the type of the tag:

| Tag Type | Injection Path |
| --- | --- |
| Top-Level Gradle | {RUNTIME}\android\runner\RootFiles\build.gradle |
| Module-Level Gradle | {RUNTIME}\android\runner\ProjectFiles\build.gradle |
| Android Manifest | {RUNTIME}\android\runner\ProjectFiles\src\main\AndroidManifest.xml |
| Strings | {RUNTIME}\android\runner\ProjectFiles\src\main\res\values\strings.xml |
| Layout | {RUNTIME}\android\runner\ProjectFiles\src\main\res\layout\main.xml |
| ProGuard | {RUNTIME}\android\runner\ProjectFiles\proguard-rules.pro |

NOTE These paths are only for VM; for YYC, injected code will go into the {RUNTIME}\\yyc\\ directory, where the paths may or may not be equivalent to those for VM.

### Escaping XML Characters

All characters between the start and end tag are parsed as XML so any character that can be misinterpreted as an XML character needs to be escaped. You can do this:

-   By converting special characters into their XML-escaped version, where needed (e.g. < becomes &lt;, \> becomes &gt;, etc.)

    //options.compilerArgs &lt;&lt; "-Xlint:unchecked"

-   By enclosing all text between the start and end tag within a CDATA section:

    <YYAndroidGradleEnd>
    <!\[CDATA\[

    // Add what you need without escaping characters
    //tasks.withType(JavaCompile) {
    //options.deprecation = true
    //options.verbose = true
    //options.compilerArgs << "-Xlint:unchecked"
    //}

    \]\]>
    </YYAndroidGradleEnd>


### Injecting Values

You can insert various values into your injected code. This follows the ${NAME} syntax, where NAME can be any of the following:

// Gradle config
applicationId
minSdkVersion
targetSdkVersion
multiDexEnabled

// Android Studio config
PROJECT\_DIR
MODULE\_DIR
USER\_HOME
FILE\_DIR
SRC\_DIR
OUTPUT\_DIR
CLASSPATH

// Project Information
YYAndroidPackageName
YYAndroidPackageDomain
YYAndroidPackageCompany
YYAndroidPackageProduct
YYAndroidDisplayName
YYAndroidMajorVersion
YYAndroidMinorVersion
YYAndroidBuildVersion
YYAndroidMinSDKVersion

### Conditional Injection

You can inject code conditionally, depending on the value of one of the [Extension Options](../Extensions.htm#extension_options).

Inside a code injection group, use toExpand with the required option in condition:

<YYIosPlist>

<toExpand condition='${YYEXTOPT\_MyExtension\_ShouldInject}'>
...
</toExpand>

</YYIosPlist>

This will only inject the code between the toExpand tags when the option YYEXTOPT\_MyExtension\_ShouldInject is true. The option should be of the **Boolean** type.

You can also check against a specific value by specifying it in the match attribute:

<YYIosPlist>

<toExpand condition='${YYEXTOPT\_MyExtension\_ShouldInject}' match='FooBar'>
<string>This content is injected IF condition == match</string>
</toExpand>

</YYIosPlist>

This will only inject the code between the toExpand tags when the option YYEXTOPT\_MyExtension\_ShouldInject is equal to "FooBar". This allows you to match against a value of any type, as this check is done at compile time when all extension option values are provided as strings.

Also see: [Using Extension Options](Creating_An_Extension.htm#h2)

### Usage Tips

-   You can use YYAndroidLogcat to use custom logging tags with [Logcat](https://developer.android.com/studio/command-line/logcat). Set up your tag with a priority level, e.g.:

    <YYAndroidLogcat>
    myDebugTag:V
    </YYAndroidLogcat>

    In your extension, use a logging function to log a message with this tag, e.g. Log.i("myDebugTag", "Hello World");

## File Injection

Within the text files added to your extension (see: [Adding Files](Creating_An_Extension.htm#h3)), you can inject code from the Code Injection window by mentioning a tag inside ${ }. For example, say you have a file with the following contents:

<?xml version="1.0" encoding="UTF-8"?>

${YYAndroidMyInjectionTag}

IMPORTANT You can create your own tags for this use. Such custom tags must start with YYAndroid.

The ${YYAndroidMyInjectionTag} part here will be replaced with the contents of the <YYAndroidMyInjectionTag> </YYAndroidMyInjectionTag> group from the extension's Code Injection window.

### Custom Files

You can create a folder called "**AndroidSource**" in the folder of your extension (alongside its .yy file) and another folder inside that called "**ProjectFiles**". Any files placed in this folder will be moved to the root of the generated Android project at compile time, and can also take injection tags as described above.

For example, let's say you want to place the file google-services.json into your Android project using the extension Extension1, then the final path for that file in your GameMaker project will be <project\_directory>/extensions/Extension1/AndroidSource/ProjectFiles.

## Source Files

Once you have set this up correctly, you will need to add the files required for your extension package to work. To do this you need to click on the buttons at the bottom, either _Add SDK_ or _Add Source_ and then browse to the files you wish to add. Added files will be stored in the AndroidSource directory along with your extension. You can open this location at any time by right clicking ![RMB Icon](../../assets/Images/Icons/Icon_RMB.png) on the extension and selecting _Open in Explorer_.

For information on your creating native extensions for Android, see [Source Examples](Extended_Examples.md).