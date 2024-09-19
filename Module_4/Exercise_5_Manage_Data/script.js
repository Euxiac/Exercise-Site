let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];

updateAllCards();
setInterval(updateAllCards, 5000);

function updateAllCards(){
    //console.log('test');
    updateNewsCard(document.getElementById('card-1').children[0], 0);
    updateNewsCard(document.getElementById('card-2').children[0], 1);
    updateNewsCard(document.getElementById('card-3').children[0], 2);
}

function updateNewsCard(card, entry){
    for (const child of card.children) {
        if (child.classList.contains('card-title'))
            {
                child.textContent = news[entry].title;
            }
        if (child.classList.contains('card-text'))
            {
                child.textContent = news[entry].content;
            }
    }
}

function addNewsEntry(){
    news.push({id: news.length, title: document.getElementById('InputNewsTitle').value,
        content: document.getElementById('InputNewsContent').value});
}