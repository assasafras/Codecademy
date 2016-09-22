var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}

/*Create a search function
then call it passing "Jones"*/
function search(lastName)
{
    for(i in contacts)
    {
        if(contacts[i].lastName === lastName)
        {
            printPerson(contacts[i]);
        }
    }
}
search("Jones");

function add(firstName, lastName, email, phoneNumber)
{
    var p = new Object()
    p.firstName = firstName;
    p.lastName= lastName;
    p.email= email;
    p.phoneNumber= phoneNumber;
    console.log("before:", contacts);
    contacts.push(p);
    console.log("after:", contacts);
}

add("first", "last", "1@2.com", "123-4567");

list();