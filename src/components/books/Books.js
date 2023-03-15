import React, { useState } from "react";
import Book from "./Book";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import {Error} from '../ui/Error';




function Books() {
  const {data:books,isLoading,isError}= useGetBooksQuery();
  const [featuredClicked,setFeaturedClicked]=useState(false);
  

  let content = null;

    if (isLoading) {
        content = <div>Loading</div>
    }

    if (!isLoading && isError) {
        content = <div>There are some errors</div>;
    }

    if (!isLoading && !isError && books?.length === 0) {
        content = <div>No Books Found</div>
    }

    if (!isLoading && !isError && books?.length > 0) {
      let filteredBooks = [...books]
      if(featuredClicked){
        filteredBooks = books.filter(book=>book.featured)
      }
        content = filteredBooks.map((book) => <Book key={book.id} book={book} />);
    }
  return (
    <div>
      <main class="py-12 px-6 2xl:px-6 container">
        <div class="order-2 xl:-order-1">
          <div class="flex items-center justify-between mb-12">
            <h4 class="mt-2 text-xl font-bold">Book List</h4>

            <div class="flex items-center space-x-4">
              <button class={`lws-filter-btn ${!featuredClicked && 'active-filter'}`} onClick={()=>setFeaturedClicked(false)}>All</button>
              <button class={`lws-filter-btn ${featuredClicked && 'active-filter'}`} onClick={()=>setFeaturedClicked(true)}>Featured</button>
            </div>
          </div>
          <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* <!-- Card 1 --> */}
           {content}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Books;
