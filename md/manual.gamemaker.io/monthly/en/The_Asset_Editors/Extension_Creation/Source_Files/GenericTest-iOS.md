---
title: "GenericTest iOS Source Files"
source: "manual.gamemaker.io/monthly/en/The_Asset_Editors/Extension_Creation/Source_Files/GenericTest-iOS.htm"
converted: "2025-09-14T04:00:15.271Z"
---

# GenericTest iOS Source Files

GenericTest.h

@interface GenericTest : NSObject
{
}

\- (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1;
\- (NSString \*) BuildAString:(char \*)arg0 Arg2:(char \*)arg1;
\- (NSString \*) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char \*)arg2;
\- (void)ReturnAsync:(double)arg0 Arg2:(double)arg1;

@end

GenericTest.mm

# import "GenericTest.h"
# include
# include

@implementation GenericTest

const int EVENT\_OTHER\_SOCIAL = 70;
extern int CreateDsMap( int \_num, ... );
extern void CreateAsynEventWithDSMap(int dsmapindex, int event\_index);

\- (void)ReturnAsync:(double)arg0 Arg2:(double)arg1
{

    int dsMapIndex = CreateDsMap(3,
                    "type", 0.0, "finished",
                    "argument0", arg0, (void\*)NULL,
                    "argument1", arg1, (void\*)NULL
                    );
    CreateAsynEventWithDSMap(dsMapIndex, EVENT\_OTHER\_SOCIAL);
}

\- (double) AddTwoNumbers:(double)arg0 Arg2:(double)arg1
{
    double value = arg0 + arg1;
     NSLog(@"yoyo: %f + %f = %f", arg0, arg1, value);

     return value;
}

\- (NSString \*) BuildAString:(char \*)arg0 Arg2:(char \*)arg1
{
    NSString \*value = \[NSString stringWithFormat:@"%s%s",arg0,arg1\];//\[arg0 stringByAppendingString:arg1\];
         NSLog(@"yoyo: %s + " " + %s = %@", arg0, arg1, value);

         return value;
}

\- (NSString \*) HowManyObjects:(double)arg0 Arg2:(double)arg1 Arg3:(char \*)arg2
{
    double value = arg0 + arg1;
    NSLog(@"yoyo: %f + %f = %f", arg0, arg1, value);
    NSString \*arg2ns = \[NSString stringWithFormat:@"%s",arg2\];

    NSString \*myString = \[NSString stringWithFormat:@"%f %@", value,arg2ns\];


    NSLog(@"yoyo: %@", myString);

    return myString;
}

@end