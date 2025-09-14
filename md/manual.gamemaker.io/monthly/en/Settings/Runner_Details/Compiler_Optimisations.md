---
title: "Compiler Optimisations"
source: "manual.gamemaker.io/monthly/en/Settings/Runner_Details/Compiler_Optimisations.htm"
converted: "2025-09-14T04:00:14.669Z"
---

# Compiler Optimisations

GameMaker will optimise parts of your game code when compiling (i.e. building) your game. Some optimisations are performed automatically, others can be turned on or off with a call to [gml\_pragma](../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md).

## Automatic Optimisations

The compiler performs certain optimisations automatically, and does this recursively:

-   Struct variables are looked up using the hash value instead of the variable name if that name resolves to a constant value at compile time. For example, using this struct:

    a = {this: "this", that: "that"};

    the following variable lookups:

    b = a\[$ "this"\];
    // OR
    b = a.this

    will be replaced by the compiler by a lookup using the hash value, since it knows the variable name is "this". However, the following lookup:

    var \_varname = choose("this", "that");
    b = a\[$ \_varname\];

    cannot be replaced and the hash needs to be calculated at runtime, as the value of \_varname depends on what the [choose](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/choose.md) function returns.

    NOTE The above optimisations are also applied when you call the [Struct Functions](../../GameMaker_Language/GML_Reference/Variable_Functions/Variable_Functions.htm#struct_functions).

-   _Deterministic_ functions (also known as pure functions) that are called with constant parameters are replaced with the return value of the function call. A deterministic function returns a known output for a given input; for every input value that you can pass the output value is known. For example, [dcos](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dcos.md) is deterministic (i.e. dcos(0) always returns 1, dcos(90) always returns 0, etc.), while [choose](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/choose.md) is not (i.e. choose("A", "B", "C") can return any of the three parameters).
    -   [Template Strings](../../GameMaker_Language/GML_Reference/Strings/Strings.htm#h4) are replaced with a call to [string](../../GameMaker_Language/GML_Reference/Strings/string.md) and are also replaced according to the above rule.

        NOTE If you use the template literal string $"Hello, I am {name}!" then internally this becomes string("Hello, I am {0}!", name). If name is a string literal (or a macro that maps to a string literal) then this would be optimised out completely and become a string literal.

-   Strings:
    -   When being used with formatting any constant arguments are inlined into the main string and then the parameters are reordered, i.e.:

        string("{0} {1} {2}", "a", "=", a);

        becomes:

        string("a = {0}", a);

    -   Constant strings are concatenated by the compiler:

        string\_concat("the ", "answer ", "is ", string(a));

        becomes:

        string\_concat("the answer is ", string(a));

    -   Constant string arguments are joined by the compiler:

        string\_join(" ", "Hello", "World", string(a), "is", "the", "answer");

        becomes:

        string\_join(" ", "Hello World", string(a), "is the answer" );


NOTE The compiler will only optimise when the arguments are constants that it can evaluate.

The following functions are optimised by the compiler, according to the rule for deterministic functions when it detects that the parameters are constant (i.e. they cannot change at runtime):

-   [make\_colour\_rgb](../../GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/make_colour_rgb.md)
-   [string\_lower](../../../../../GameMaker_Language/GML_Reference/Strings/string_lower.md)
-   [string\_upper](../../GameMaker_Language/GML_Reference/Strings/string_upper.md)
-   [sin](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/sin.md)
-   [cos](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/cos.md)
-   [tan](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/tan.md)
-   [arcsin](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arcsin.md)
-   [arccos](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arccos.md)
-   [arctan](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan.md)
-   [arctan2](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/arctan2.md)
-   [ceil](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/ceil.md)
-   [floor](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/floor.md)
-   [degtorad](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/degtorad.md)
-   [radtodeg](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/radtodeg.md)
-   [dsin](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dsin.md)
-   [dcos](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dcos.md)
-   [dtan](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/dtan.md)
-   [darcsin](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darcsin.md)
-   [darccos](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darccos.md)
-   [darctan](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan.md)
-   [darctan2](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Angles_And_Distance/darctan2.md)
-   [abs](../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/abs.md)
-   [sign](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sign.md)
-   [frac](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/frac.md)
-   [sqr](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/sqr.md)
-   [exp](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/exp.md)
-   [ln](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/ln.md)
-   [log2](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/log2.md)
-   [log10](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/log10.md)
-   [power](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/power.md)
-   [logn](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/logn.md)
-   [colour\_get\_red](../../GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_red.md)
-   [colour\_get\_green](../../GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_green.md)
-   [colour\_get\_blue](../../GameMaker_Language/GML_Reference/Drawing/Colour_And_Alpha/colour_get_blue.md)
-   [string\_concat](../../GameMaker_Language/GML_Reference/Strings/string_concat.md)
-   [string\_join](../../GameMaker_Language/GML_Reference/Strings/string_join.md)
-   [string](../../GameMaker_Language/GML_Reference/Strings/string.md)
-   [min](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/min.md)
-   [max](../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/max.md)
-   [mean](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/mean.md)
-   [median](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/median.md)
-   [clamp](../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/clamp.md)
-   [lerp](../../../../../GameMaker_Language/GML_Reference/Maths_And_Numbers/Number_Functions/lerp.md)
-   [ord](../../GameMaker_Language/GML_Reference/Strings/ord.md)
-   [chr](../../../../../GameMaker_Language/GML_Reference/Strings/chr.md)
-   [int64](../../GameMaker_Language/GML_Reference/Variable_Functions/int64.md)
-   [real](../../GameMaker_Language/GML_Reference/Variable_Functions/real.md)
-   [is\_method](../../GameMaker_Language/GML_Reference/Variable_Functions/is_method.md)
-   [variable\_get\_hash](../../GameMaker_Language/GML_Reference/Variable_Functions/variable_get_hash.md)
-   [os\_get\_config](../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/os_get_config.md)
-   [buffer\_sizeof](../../GameMaker_Language/GML_Reference/Buffers/buffer_sizeof.md)

## Using gml\_pragma()

You can also optimise how the compiler compiles (parts of) your game's code by providing it optimisations with the "optimise" (or "optimize") pragma. These may apply to multiple targets or be specific to some build targets. Using them in the right places in your code can lead to great performance improvements in your game.

See [gml\_pragma](../../../../../GameMaker_Language/GML_Reference/OS_And_Compiler/gml_pragma.md) for the full list of optimisations you can use and how to use them.