const input = document.querySelector('#textInput');
const main = document.querySelector('#main');

const loadBookmarks = () => {
  try {
    return JSON.parse(localStorage.getItem('axylen_bookmarks')) || [];
  } catch {
    return [];
  }
};

const saveBookmarks = (bookmarks) => {
  localStorage.setItem('axylen_bookmarks', JSON.stringify(bookmarks));
};

const bookmarks = loadBookmarks();

const renderBookmarks = () => {
  const html = bookmarks
    .map(({ text }) => {
      return `<a target="_blank" href="${text}">${text}</a>`;
    })
    .join('');

  main.innerHTML = html;
};

const addBookmark = (text) => {
  bookmarks.push({ text });
  saveBookmarks(bookmarks);
  renderBookmarks();
};

const removeBookmark = (id) => {
  bookmarks.splice(id, 1);
  saveBookmarks(bookmarks);
  renderBookmarks();
};

renderBookmarks();

input.addEventListener('keydown', (e) => {
  console.log(e.code);
  if (e.code === 'Enter' && e.target.value) {
    addBookmark(e.target.value);
    e.target.value = '';
  }
});
