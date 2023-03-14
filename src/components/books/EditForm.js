import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../../features/api/apiSlice";

function EditForm({ book }) {
  const {
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
    id,
  } = book;
  const [editBook]   = useEditBookMutation();
  const navigate = useNavigate();
  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);
  const submitHandler = (e) => {
    e.preventDefault();
    // alert(id);
    editBook({
      id,
      data: { name, author, thumbnail, price, rating, featured },
    });
    navigate("/");
  };
  return (
    <div>
      <form class="book-form" onSubmit={submitHandler}>
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            onChange={(e) => setName(e.target.value)}
            defaultValue={initialName}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-author">Author</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
            defaultValue={initialAuthor}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-thumbnail">Image Url</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            onChange={(e) => setThumbnail(e.target.value)}
            defaultValue={initialThumbnail}
          />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="lws-price">Price</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-price"
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              defaultValue={initialPrice}
            />
          </div>

          <div class="space-y-2">
            <label for="lws-rating">Rating</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              onChange={(e) => setRating(e.target.value)}
              defaultValue={initialRating}
            />
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            onChange={(e) => setFeatured(e.target.checked)}
            defaultChecked={initialFeatured}
          />
          <label for="lws-featured" class="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" class="submit" id="lws-submit">
          Edit Book
        </button>
      </form>
    </div>
  );
}

export default EditForm;
