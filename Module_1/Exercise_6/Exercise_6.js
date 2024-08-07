//import * as data from './Exercise_6_data.json';
const data = require("./Exercise_6_data.json");

/*Lab Exercise 6

• Try creating a json object variable for a book. The book should
have a title, description, author and number of pages
• Try printing these object property values in your console
individually and via the whole book object
• Update the description of the book
• Extension: Create an array of 5 book objects*/

const booklist = {
    book : [
        {
            title : "A Court of Thorns and Roses",
            description : "When nineteen-year-old huntress Feyre kills a wolf in the woods, a terrifying creature arrives to demand retribution. Dragged to a treacherous magical land she knows about only from legends, Feyre discovers that her captor is not truly a beast, but one of the lethal, immortal faeries who once ruled her world.",
            author: "Sarah J. Maas",
            numberOfPages:419
        },
        {
            title : "A Court of Mist and Fury",
            description : "Feyre has undergone more trials than one human woman can carry in her heart. Though she's now been granted the powers and lifespan of the High Fae, she is haunted by her time Under the Mountain and the terrible deeds she performed to save the lives of Tamlin and his people.",
            author: "Sarah J. Maas",
            numberOfPages:626
        },
        {
            title : "A Court of Wings and Ruin",
            description : "Feyre has returned to the Spring Court, determined to gather information on Tamlin's actions and learn what she can about the invading king threatening to bring her land to its knees. But to do so she must play a deadly game of deceit. One slip could bring doom not only for Feyre, but for everything-and everyone-she holds dear.",
            author: "Sarah J. Maas",
            numberOfPages:703
        },
        {
            title : "A Court of Frost and Starlight",
            description : "Feyre, Rhysand, and their friends are still busy rebuilding the Night Court and the vastly altered world beyond, recovering from the war that changed everything. But Winter Solstice is finally approaching, and with it, the joy of a hard-earned reprieve.",
            author: "Sarah J. Maas",
            numberOfPages:232
        },
        {
            title : "A ​Court of Silver Flames",
            description : "Nesta Archeron has always been prickly-proud, swift to anger, and slow to forgive. And ever since being forced into the Cauldron and becoming High Fae against her will, she's struggled to find a place for herself within the strange, deadly world she inhabits. Worse, she can't seem to move past the horrors of the war with Hybern and all she lost in it.",
            author: "Sarah J. Maas",
            numberOfPages:757
        }
    ]
}



function replaceDescription (array, entry, newValue)
{
    array.book[entry].description = newValue;
}
//console.log(booklistParsed);
console.log(booklist.book[2].description);
console.log(booklist.book[2]["description"]); //for dictionaries with keys with spaces
console.log(booklist.book[2]);
replaceDescription (booklist, 2, "This one has alot of torture, it's abit hard to read");
console.log(booklist.book[2]);

let arr2 = booklist.book;
console.log(arr2.length);
arr2.pop();
console.log(arr2.length);
console.log(data);