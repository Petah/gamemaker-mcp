---
title: "Evaluation Order"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Evaluation_Order.htm"
converted: "2025-09-14T03:59:28.793Z"
---

# Evaluation Order

When programming your game using the GameMaker Language you should be aware that function call arguments **are not guaranteed an evaluation order**. What this means is that the order in which functions placed in your code are run will change from platform to platform, so you should code them in an explicit manner. This is due to optimisation differences between the different target platforms, for example on the Windows target function arguments may be evaluated from right to left, but on the HTML5 target, they may be evaluated from left to right. So to avoid any issues you are best not to call multiple functions in the arguments of a single function call as you may well be building in a reliance on the order of evaluation.

To see an example of what this means, consider the following code which has a [script function](Script_Functions.md) "buffer\_get\_info" which is calling several [runtime functions](Runtime_Functions.md) and using them as arguments:

buffer\_seek(buff, buffer\_seek\_start, 0);

buffer\_get\_info(buffer\_read(buff, buffer\_s8), buffer\_read(buff, buffer\_s16), buffer\_read(buff, buffer\_s16));

Now, the problem here is that on some platforms, the _last_ buffer\_read() will be called _first_, and so all the arguments of the script will be wrong as the data is being read from the buffer in "reverse" order as you would perceive it. This has the knock-on effect here of affecting all further values for the buffer\_read() function so all the arguments being passed to this script function will be wrong!

To get around this you should _explicitly_ call the functions in the required order and store the returned values in variables, like this:

var \_val = array\_create(3);
\_val\[0\] = buffer\_read(buff, buffer\_s8);
\_val\[1\] = buffer\_read(buff, buffer\_s16);
\_val\[2\] = buffer\_read(buff, buffer\_s16);

buffer\_get\_info(\_val\[0\], \_val\[1\], \_val\[2\]);

While it may seem a more verbose method, it keeps everything clear and avoids any possible problems with evaluation order.

You should also take care when using expressions too, as the order in which they are evaluated in will change depending on which target you are compiling to. So, when using expressions in your code, ensure you use brackets () to properly control the order of operations. This is very important to ensure the correct behaviour of your games across all the target platforms games and is _essential_ for the HTML5 platform. The page on [expressions](Expressions_And_Operators.md) explains this in more detail.