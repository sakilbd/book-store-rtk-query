import React from 'react'
import EditForm from './EditForm'
import { useParams } from 'react-router-dom'
import { useGetBookQuery } from '../../features/api/apiSlice';

function Edit() {
    const {bookId} = useParams();
    const {data:book,isLoading,isError}= useGetBookQuery(bookId);
    let content = ''
    if (isLoading) {
        content = <div>Loading...</div>;
    }
    if (!isLoading && isError) {
        content = <div>There is an error</div>;
    }
    if (!isLoading && !isError && book?.id) {
        content = <EditForm book={book} />;
    }
  return (
    <div>
       <main class="py-6 2xl:px-6">
        <div class="container">
            <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
               {content}
            </div>
        </div>
    </main>
    </div>
  )
}

export default Edit
 