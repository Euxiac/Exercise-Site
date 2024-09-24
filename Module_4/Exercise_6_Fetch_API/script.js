function get(url)
{
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
}

get('https://jsonplaceholder.typicode.com/users/1');
//get(`https://jsonplaceholder.typicode.com/todos/${number}`);

