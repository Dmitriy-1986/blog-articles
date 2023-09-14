const postsPerPage = 3;
let currentPage = 1;
let currentPosts = [];
let totalPages = 1;


const searchInput = document.getElementById('searchInput');
const postList = document.getElementById('postList');
const pagination = document.getElementById('pagination');

function displayPostContent() {
    const prevContents = document.querySelectorAll('.prevContent');
    const postContents = document.querySelectorAll('.postContent');

    let currentlyVisibleIndex = -1;

    prevContents.forEach((prev, index) => {
        prev.addEventListener('click', () => {
            if (currentlyVisibleIndex === index) {
                prev.style.display = 'block';
                postContents[index].style.display = 'none';
                currentlyVisibleIndex = -1;
            } else {
                prev.style.display = 'none';
                postContents[index].style.display = 'block';
                if (currentlyVisibleIndex !== -1) {
                    prevContents[currentlyVisibleIndex].style.display = 'block';
                    postContents[currentlyVisibleIndex].style.display = 'none';
                }
                currentlyVisibleIndex = index;
            }
        });
    });
}

function displayPosts(postsToShow) {
    postList.innerHTML = '';
    postsToShow.forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `  <small>Категория: ${post.category}</small>
                                <h3>${post.title}</h3>
                                <p class="prevContent">${post.prevContent} <span class="read-all"> [ Читать больше... ]</span></p>
                                <p class="postContent">${post.content}</p>
                                
                                <small>Дата публикации: ${post.date}</small>`;
        postList.appendChild(listItem);
    });
    displayPostContent();
}

function paginate(posts, page) {
    const startIndex = (page - 1) * postsPerPage;
    return posts.slice(startIndex, startIndex + postsPerPage);
}


function handlePaginationClick(newPage) {
    currentPage = newPage;
    const paginatedPosts = paginate(currentPosts, currentPage);
    displayPosts(paginatedPosts);

}

function handleSearch() {
    const searchText = searchInput.value.toLowerCase();
    currentPosts = posts.filter(post => post.category.toLowerCase().includes(searchText) || post.title.toLowerCase().includes(searchText) || post.content.toLowerCase().includes(searchText));
    totalPages = Math.ceil(currentPosts.length / postsPerPage);
    currentPage = 1;
    
    if (currentPosts.length === 0) {
        postList.innerHTML = '<div style="text-align: center;"><mark style="padding: 10px;">Ничего не найдено...</mark></div>';
        pagination.innerHTML = ''; // Очистить навигацию
    } else {
        handlePaginationClick(currentPage);
        createPaginationButtons();
    }
}

function createPaginationButtons() {
    pagination.innerHTML = '';
    if (totalPages <= 1) {
        return; // Не создавать кнопки, если всего одна страница
    }

    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.addEventListener('click', () => handlePaginationClick(i));
        button.addEventListener('click', (e) => {
            const targetButton = e.target;
            const buttons = pagination.getElementsByTagName('button');

            for (let j = 0; j < buttons.length; j++) {
                if (buttons[j] === targetButton) {
                    buttons[j].classList.add('active');
                } else {
                    buttons[j].classList.remove('active');
                }
            }
        });
        pagination.appendChild(button);
    }
}

searchInput.addEventListener('input', handleSearch);

// Initialize
currentPosts = posts.reverse();
totalPages = Math.ceil(currentPosts.length / postsPerPage);
handlePaginationClick(currentPage);
createPaginationButtons();
