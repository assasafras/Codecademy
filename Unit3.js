/*jshint multistr:true */
text = "blah blah blash, things and such. Nothing here yet... Is Iceland real? Isaac is lame."

myName = "Isaac"

hits = [];

for (var i = 0; i < text.length; i++)
{
    // Is the current character (text[i]) the same as the first letter of the myName variable?
    if (text[i] === myName[0])
    {
        // Yep, it sure is. So now we want to push the next X letters into hits, where X is the length of the myName variable.
        for(var j = i; j < (i + myName.length); j++)
        {
            hits.push(text[j]);
        }
    }
}

if (hits.length === 0)
    console.log("Your name wasn't found");
else
    console.log(hits);