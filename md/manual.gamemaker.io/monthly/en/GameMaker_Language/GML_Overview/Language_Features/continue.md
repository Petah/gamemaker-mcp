---
title: "continue"
source: "manual.gamemaker.io/monthly/en/GameMaker_Language/GML_Overview/Language_Features/continue.htm"
converted: "2025-09-14T03:59:29.095Z"
---

# continue

The continue statement has the following basic syntax:

continue;

If used inside of a statement that forms a loop ([for](for.md), [repeat](repeat.md), [while](while.md) or [do / until](do___until.md)), it will immediately end the current iteration and jump back to the beginning of the loop starting a new iteration and omitting any code that comes after the continue within the loop. It can also be used within the [with](with.md) statement, where it will cause the code to skip to the next instance and run again. Note that if continue is used outside of any of these contexts it will give an error.

Below is an example of use in a for loop:

var \_val = 0;

for (var i = 0; i < 10; i += 1)
{
    if (val\_array\[i\] <= 0)
    {
        continue;
    }
    \_val += val\_array\[i\];
}

draw\_text(32, 32, "Positive Values Total = " + string(\_val));

Below is an example of use in a while loop:

var file = file\_text\_open\_read("Game\_Data.txt");
var \_num = 0;

while (!file\_text\_eof(file))
{
    var \_s = file\_text\_readln(file);
    if (\_s == "")
    {
        continue;
    }
    str\[num++\] = \_s;
}

file\_text\_close(file);

Below is an example of use in a do / until loop:

do
{
    var \_x = random(room\_width);
    var \_y = random(room\_height);

    if (instance\_position(\_x, y, obj\_Enemy)
    {
        continue;
    }

    instance\_create\_layer(\_x, \_y, "Instances", obj\_Enemy);
}
until (instance\_count(obj\_Enemy) >= 10);

Below you can find an example of use in a repeat loop:

repeat(10)
{
    var \_x = random(room\_width);
    var \_y = random(room\_height);

    if (instance\_position(\_x, y, obj\_Enemy)
    {
        continue;
    }

    instance\_create\_layer(\_x, \_y, "Instances", obj\_Enemy);
}

Finally, an example of use in a with statement:

with (obj\_Enemy\_Parent)
{
    if (object\_index == obj\_Enemy\_InDestructible)
    {
        continue;
    }

    hp -= 100;

    if (hp <= 0)
    {
        instance\_destroy();
    }
}