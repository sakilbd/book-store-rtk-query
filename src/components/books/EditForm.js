import React, { useState } from "react";


function EditForm({ book }) {
  const { name:initialName, author:initialAuthor, thumbnail:initialThumbnail, price:initialPrice, rating:initialRating, featured:initialFeatured } = book;
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState(false);
  return (
    <div>
      <form class="book-form">
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={initialName}
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
            value={initialAuthor}
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
            value={initialThumbnail}
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
              value={initialPrice}
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
              value={initialRating}
            />
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            checked={initialFeatured}
           
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
