import React from 'react'
import { useDispatch } from 'react-redux'
import { addPost } from './postSlice'
import { useState } from 'react'

const AddPost = () => {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const onTitleChanged = e => setTitle(e.target.value)
    const onContentChanged = e => setContent(e.target.value)
    const onSavePostClicked = (e) => {
        e.preventDefault()
        if (title && content) {
            dispatch(addPost({title, content} ))
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
                <button type='submit' onClick={onSavePostClicked}>Save Post</button>
            </form>
        </section>
    )
}

export default AddPost
