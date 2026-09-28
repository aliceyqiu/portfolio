// Renders the favorite-books grid from BOOKS (scripts/books-data.js)
// and wires up the click-to-enlarge detail modal.
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('library-grid');
  const overlay = document.getElementById('book-modal-overlay');
  const modalCover = document.getElementById('book-modal-cover');
  const modalTitle = document.getElementById('book-modal-title');
  const modalAuthor = document.getElementById('book-modal-author');
  const modalQuotes = document.getElementById('book-modal-quotes');

  function openModal(book) {
    modalCover.src = book.coverUrl || '';
    modalCover.alt = book.title ? `cover of ${book.title}` : 'book cover';
    modalTitle.textContent = book.title;
    modalAuthor.textContent = book.author;

    // Optional favorite quotes: `quote: "..."` or `quote: ["...", "..."]` on a book in books-data.js.
    const quotes = [].concat(book.quote || []);
    modalQuotes.replaceChildren(...quotes.map((text) => {
      const quote = document.createElement('div');
      quote.className = 'quote';
      const line = document.createElement('p3');
      line.className = 'burgundy';
      line.textContent = text;
      quote.appendChild(line);
      return quote;
    }));
    modalQuotes.hidden = quotes.length === 0;
    overlay.hidden = false;
  }

  function closeModal() {
    overlay.hidden = true;
  }

  BOOKS.forEach((book) => {
    if (!book.title || !book.coverUrl) {
      return;
    }

    const card = document.createElement('button');
    card.className = 'book-card';
    card.type = 'button';
    card.setAttribute('aria-label', `${book.title} by ${book.author}`);

    const cover = document.createElement('img');
    cover.className = 'book-cover';
    cover.loading = 'lazy';
    cover.src = book.coverUrl;
    cover.alt = `cover of ${book.title}`;

    card.appendChild(cover);
    card.addEventListener('click', () => openModal(book));
    grid.appendChild(card);
  });

  overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
      closeModal();
    }
  });
  document.getElementById('book-modal-close').addEventListener('click', closeModal);
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
});
