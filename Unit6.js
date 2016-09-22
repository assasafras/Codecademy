friends = 
{
    bill: 
    {
        firstName: 'Bill',
        lastName: 'gates',
        number: '1231029380912',
        address: ['One Microsoft Way','Redmond','WA','98052']
    },
    steve: 
    {
        firstName: 'Steve',
        lastName: 'jobs',
        number: '1231029380912',
        address: ['One  Way','Redmond','WA','98052']
    }
}

function list(param)
{
    for(friend in friends)
        console.log(friend);
}

function search(firstName)
{
    for(friend in friends)
    {
        name = friends[friend].firstName;
        console.log('comparing' + name + ' to ' + firstName);
        if(name == firstName)
        {
            return friends[friend];
            console.log(friends[friend]);
        }
    }
}