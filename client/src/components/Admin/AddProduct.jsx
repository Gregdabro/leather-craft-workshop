import styles from './Admin.module.scss'
import Button from '../UI/Button/Button'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import MyInput from '../UI/Input/SearchInput'
import MyPostForm from '../MyPostForm/MyPostForm'

const AddProduct = () => {
  const [file, setFile] = useState('')
  const [posts, setPosts] = useState([
    { id: 1, title: 'Some Title', body: 'SomBody' }
  ])

  console.log('posts', posts)

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className={styles.main}>
      <AdminNavbar title="Add new Product" isBackButton={true} />
      <div className={styles.mainSection}>
        <div className={styles.newProduct}>
          <div className={styles.left}>
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
              }
            />
          </div>
          <div className={styles.right}>
            <MyPostForm create={createPost}/>
            {/*<form className={styles.form}>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <label htmlFor="file">*/}
            {/*      Image: <AiOutlineCloudUpload className={styles.icon} />*/}
            {/*    </label>*/}
            {/*    <input*/}
            {/*      type="file"*/}
            {/*      id="file"*/}
            {/*      style={{ display: 'none' }}*/}
            {/*      onChange={(e) => setFile(e.target.files[0])}*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <Input*/}
            {/*      value={post.title}*/}
            {/*      onChange={(e) => setPost({ ...post, title: e.target.value })}*/}
            {/*      type="text"*/}
            {/*      placeholder="product name"*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <Input*/}
            {/*      value={post.body}*/}
            {/*      onChange={(e) => setPost({ ...post, body: e.target.value })}*/}
            {/*      type="text"*/}
            {/*      placeholder="description"*/}
            {/*    />*/}
            {/*  </div>*/}

            {/*  <div className={styles.formInput}>*/}
            {/*    <label>Description</label>*/}
            {/*    <input type="text" placeholder="Description" />*/}
            {/*  </div>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <label>Category</label>*/}
            {/*    <input type="text" placeholder="category" />*/}
            {/*  </div>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <label>Price</label>*/}
            {/*    <input type="text" placeholder="100" />*/}
            {/*  </div>*/}
            {/*  <div className={styles.formInput}>*/}
            {/*    <label>Colors</label>*/}
            {/*    <input type="text" placeholder="Blue, red, gray" />*/}
            {/*  </div>*/}
            {/*  <button onClick={(e) => addNewPost(e)}>SEND</button>*/}
            {/*  /!*<Button>Send</Button>*!/*/}
            {/*</form>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddProduct
