import React, { useState } from 'react';
import { useAddBookMutation } from '../../features/api/apiSlice';
import { useNavigate } from 'react-router-dom';

function Add() {
    const [addBook,{isLoading,isError,isSuccess}]=useAddBookMutation()
    const nevigate = useNavigate();
    const [name,setName] = useState('')
    const [author,setAuthor] = useState('')
    const [thumbnail,setThumbnail] = useState('')
    const [price,setPrice] = useState('')
    const [rating,setRating] = useState('')
    const [featured,setFeatured] = useState(false)
 const submitHandler = (e) =>{
   e.preventDefault();
   addBook({
    name,
    author,
    thumbnail,
    price,
    rating,
    featured,
   })
   nevigate('/')

 }
    

  return (
    <div>
      <main class="py-6 2xl:px-6">
        <div class="container">
            <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
                <form class="book-form" onSubmit={submitHandler}>
                    <div class="space-y-2">
                        <label for="lws-bookName">Book Name</label>
                        <input required class="text-input" type="text" id="lws-bookName" name="name" onChange={(e)=>setName(e.target.value)} />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-author">Author</label>
                        <input required class="text-input" type="text" id="lws-author" name="author" onChange={(e)=>setAuthor(e.target.value)}/>
                    </div>

                    <div class="space-y-2">
                        <label for="lws-thumbnail">Image Url</label>
                        <input required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" onChange={(e)=>setThumbnail(e.target.value)}/>
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="lws-price">Price</label>
                            <input required class="text-input" type="number" id="lws-price" name="price" onChange={(e)=>setPrice(e.target.value)}/>
                        </div>

                        <div class="space-y-2">
                            <label for="lws-rating">Rating</label>
                            <input required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                max="5" onChange={(e)=>setRating(e.target.value)}/>
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" onChange={(e)=>setFeatured(e.target.checked)}/>
                        <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" class="submit" id="lws-submit">Add Book</button>
                </form>
            </div>
        </div>
    </main>
    </div>
  )
}

export default Add
