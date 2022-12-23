import React, { useState } from 'react'
import MyInput from '../../UI/Input/SearchInput'
import Button from '../../UI/Button/Button'

const AddProductForm = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' })

  const addNewPost = (e) => {
    e.preventDefault()
    const newPost = {
      ...post,
      id: Date.now()
    }
    create(newPost)
    setPost({ title: '', body: '' })
  }

  return (
    <form>
      <MyInput
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <MyInput
        value={post.body}
        onChange={(e) => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <Button onClick={addNewPost}>Создать пост</Button>
    </form>
  )
}

export default AddProductForm
