var user = prompt("Hey you!").toUpperCase();

switch(user)
{
    case "NOPE":
        if (false && true)
            console.log("this is dumb");
        else
            console.log("one thing");
        break;
    case "YUP":
        if (false || true)
            console.log("this is real dumb");
        else
            console.log("something");
        break;
    case "MEBBE":
        break;
    default:
        break;
}