const API_URL = "https://69ecc861af4ff533142b5e8f.mockapi.io/books";

export const getBooks = async () => {
  const response = await fetch(API_URL);
  if (!response.ok) throw new Error("Failed to fetch books");
  return response.json();
};

export const addBook = async (book) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!response.ok) throw new Error("Failed to add book");
  return response.json();
};

export const deleteBook = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Failed to delete book");
  return response.json();
};