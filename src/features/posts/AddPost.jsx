import React from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postSlice'
import { useState } from 'react'
import { nanoid } from '@reduxjs/toolkit'

const AddPost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
const onSavePostClicked = (e) => {
    e.preventDefault(); // Prevent the default form submission
        if (title && content) {
            dispatch(addPost({ id: nanoid(), title, content }))
            setContent('')
            setTitle('')
        }

    }

  return (
    <section>
        <h2>ADD POST</h2>
        <form>
            <label htmlFor='title'>Title:</label>
            <input type='text' id='title' value={title} onChange={onTitleChanged} />
            <label htmlFor='content'>Content:</label>
            <textarea id='content' value={content} onChange={onContentChanged} />
            <button type = 'submit' onClick={onSavePostClicked}>Save Post</button>
        </form>
    </section>
  )
}

export default AddPost