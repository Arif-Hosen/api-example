// Task-1 &2

/* const loadComment = () => {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => displayComment(data));
}

const displayComment = (comments) => {
    const commentContainer = document.getElementById('displayComment');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.innerText = `Name: ${comment.name} Email: ${comment.email}`;
        commentContainer.appendChild(div);
        console.log(comment);
    })
    // console.log(data);
} */

//Task-3 &4
/* fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));

const displayComment = (comments) => {
    const commentContainer = document.getElementById('displayComment');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerText = `Name: ${comment.name} Email: ${comment.email}`;
        commentContainer.appendChild(div);
        console.log(comment);
    })
} */

// Task-5
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => displayComment(data));

const displayComment = (comments) => {
    const commentContainer = document.getElementById('displayComment');
    comments.forEach(comment => {
        const div = document.createElement('div');
        div.classList.add('comment');
        div.innerHTML = `
        <div onclick="details(${comment.id})">
        <h3>Name: ${comment.name}</h3>
        <h4>Email:${comment.email}</h4>
        `
        commentContainer.appendChild(div);
        // console.log(comment);
    })
}

const details = id => {
    console.log(id);
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            const div = document.getElementById('details');
            div.innerHTML = `
            <p>Name:${data.name}</p>
            <p>Email: ${data.email}</p>
            ` ;
            console.log(data);
        })

}



//html
< !DOCTYPE html >
    <html lang="en">

        <head>
            <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>My Practice</title>
                        <style>
                            .comment {
                                margin: 10px;
                            padding: 10px;
                            border: 1px solid orangered;
        }
                        </style>
                    </head>

                    <body>
                        <h1>JSON placeholder</h1>
                        <!-- display details -->
                        <div id="details">

                        </div>
                        <!-- display on website -->
                        <div id="displayComment">

                        </div>

                        <button onclick="loadComment()">Load Comments</button>

                        <script src="js/practice.js"></script>
                    </body>

                </html>
