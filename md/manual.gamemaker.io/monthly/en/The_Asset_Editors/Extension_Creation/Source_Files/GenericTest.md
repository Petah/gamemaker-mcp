---
title: "GenericTest.java"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extension_Creation/Source_Files/GenericTest.htm"
converted: "2025-09-14T04:00:15.282Z"
---

# GenericTest.java

package ${YYAndroidPackageName};

import android.util.Log;
import java.io.File;
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.String;

import ${YYAndroidPackageName}.R;
import com.yoyogames.runner.RunnerJNILib;

public class GenericTest
{
    private static final int EVENT\_OTHER\_SOCIAL = 70;

    public void ReturnAsync(double arg0, double arg1)
    {
            int dsMapIndex = RunnerJNILib.jCreateDsMap(null, null, null);
            RunnerJNILib.DsMapAddString( dsMapIndex, "type", "finished");
            RunnerJNILib.DsMapAddDouble( dsMapIndex, "argument0", arg0);
            RunnerJNILib.DsMapAddDouble( dsMapIndex, "argument1", arg1);
            RunnerJNILib.CreateAsynEventWithDSMap(dsMapIndex, EVENT\_OTHER\_SOCIAL);
    }

    public double AddTwoNumbers(double arg0, double arg1)
    {
            double value = arg0 + arg1;
            Log.i("yoyo", arg0 + "+" + arg1 + " = " + value);

            return value;
    }

    public String BuildAString(String arg0, String arg1)
    {
            String myString = arg0 + " " + arg1;
            Log.i("yoyo", myString);

            return myString;
    }

    public String HowManyObjects(double arg0, double arg1, String arg2)
    {
            double value = arg0 + arg1;
            Log.i("yoyo", arg0 + "+" + arg1 + " = " + value);

            String myString = String.valueOf(value) + " " + arg2;
            Log.i("yoyo", myString);

            return myString;
    }
}