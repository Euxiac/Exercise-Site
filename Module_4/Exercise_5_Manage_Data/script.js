let news = [
    { id: 1, title: 'Election Results',
    content: "Newly elected minister..." },
    { id: 2, title: 'Sporting Success',
    content: "World Cup winners..." },
    { id: 3, title: 'Tornado Warning',
    content: "Residents should prepare..." }
    ];

generateCardsFromArray();
setInterval(generateCardsFromArray, 5000);


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
    let title = document.getElementById('InputNewsTitle');
    let content = document.getElementById('InputNewsContent');
    news.push({id: news.length, title: title.value,content: content.value});
    document.getElementById('newNewsForm').reset();
    
}

function generateCard(title, content){
    const template = document.getElementById("news-card-template").content.cloneNode(true);
    template.querySelector('.card-title').innerText = title;
    template.querySelector('.card-text').innerText = content;
    document.querySelector('#card-list').appendChild(template);
}

function generateCardsFromArray(){
    document.querySelector('#card-list').replaceChildren();;
    for (let index = 0; index < news.length; index++) {
        generateCard(news[index].title, news[index].content);
    }
}