let upButton = document.querySelector('.up-button');

window.onscroll = function () {
    if (window.pageYOffset > 400) {
        upButton.classList.add('shown');
    } else {
        upButton.classList.remove('shown');
    }
};
upButton.onclick = function () {
    window.scrollTo(0, 0);
};

let commentForm = document.querySelector('.comment-form');
let commentList = document.querySelector('.comment-list');
let commentField = document.querySelector('.comment-field');

commentForm.onsubmit = function (evt) {
    evt.preventDefault();
    let newComment = document.createElement('li');
    newComment.classList.add('user-comment');
    newComment.textContent = commentField.value;
    commentField.value = '';
    commentList.append(newComment);
};

