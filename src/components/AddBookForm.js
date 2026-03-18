import { useState } from "react";

const GENRES = ["Programming", "Classic", "Sci-Fi", "Fantasy", "Dystopia", "Mystery", "Romance", "Non-Fiction"];

const emptyForm = {
  title: "",
  author: "",
  genre: "Programming",
  price: "",
  available: true,
};

function AddBookForm({ onAddBook }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = "Title is required";
    if (!form.author.trim()) newErrors.author = "Author is required";
    if (!form.price || isNaN(form.price) || Number(form.price) <= 0)
      newErrors.price = "Enter a valid price (e.g. 9.99)";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onAddBook({ ...form, price: parseFloat(form.price), rating: 4.0 });
    setForm(emptyForm);
    setErrors({});
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2500);
  };

  return (
    <form className="add-book-form" onSubmit={handleSubmit}>
      <h3 className="form-title">➕ Add New Book</h3>

      {success && <p className="form-success">✅ Book added successfully!</p>}

      <div className="form-group">
        <label>Title</label>
        <input name="title" value={form.title} onChange={handleChange} placeholder="Book title" />
        {errors.title && <span className="form-error">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label>Author</label>
        <input name="author" value={form.author} onChange={handleChange} placeholder="Author name" />
        {errors.author && <span className="form-error">{errors.author}</span>}
      </div>

      <div className="form-group">
        <label>Genre</label>
        <select name="genre" value={form.genre} onChange={handleChange}>
          {GENRES.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label>Price ($)</label>
        <input
          name="price"
          type="number"
          step="0.01"
          min="0"
          value={form.price}
          onChange={handleChange}
          placeholder="e.g. 12.99"
        />
        {errors.price && <span className="form-error">{errors.price}</span>}
      </div>

      <div className="form-group form-checkbox">
        <input
          type="checkbox"
          name="available"
          id="available"
          checked={form.available}
          onChange={handleChange}
        />
        <label htmlFor="available">Available in stock</label>
      </div>

      <button type="submit" className="btn-full">Add Book</button>
    </form>
  );
}

export default AddBookForm;