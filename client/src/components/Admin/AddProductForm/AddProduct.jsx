import styles from '../../../pages/SignupPage/SignupPage.module.scss'
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearMessage } from '../../../store/messageSlice'
import { Field, FormikProvider, useFormik } from 'formik'
import TextField from '../../common/form/TextInput/TextInput'
import Button from '../../UI/Button/Button'
import { categoryListSelector } from '../../../store/categorySlice'
import CustomSelect from './TestCustomSelect'
import { addProduct } from '../../../store/productSlice'
import { colorListSelector } from '../../../store/colorSlice'
import MultiSelectField from './TestCustomMultiSelect'

const signUpSchema = Yup.object({
  name: Yup.string().required('Required'),
  image: Yup.string().required('Required'),
  category: Yup.object().required('Required'),
  price: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  colors: Yup.object().required('Required')

})

const initialValues = {
  name: '',
  image: '',
  category: '',
  price: '',
  description: '',
  colors: []
}

const SignupPage = () => {
  const [loading, setLoading] = useState(false)
  const [successful, setSuccessful] = useState(false)
  const { message } = useSelector((state) => state.message)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const categories = useSelector(categoryListSelector())
  const categoriesList = categories.map((c) => ({
    label: c.name,
    value: c._id
  }))

  const colors = useSelector(colorListSelector())
  const colorsList = colors.map((c) => ({
    label: c.name,
    value: c._id
  }))
  console.log('colorsList', colorsList)

  useEffect(() => {
    dispatch(clearMessage())
  }, [dispatch])

  const handleSubmit = (formValues) => {
    const data = formValues
    setLoading(true)
    setSuccessful(false)

    dispatch(addProduct({ ...data, colors: data.colors.map((c) => c.value) }))
      .unwrap()
      .then(() => {
        setSuccessful(true)
        navigate('/')
      })
      .catch(() => {
        setSuccessful(false)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const formik = useFormik({
    initialValues,
    validationSchema: signUpSchema,
    onSubmit: handleSubmit
  })

  return (
    <div className={styles.signupForm}>
      <div className={styles.formWrapper}>
        <h2>Signup Form</h2>
        <FormikProvider value={formik}>
          {!successful && (
            <form onSubmit={formik.handleSubmit}>
              <CustomSelect
                className="input"
                onChange={(value) =>
                  formik.setFieldValue('category', value.value)
                }
                value={formik.values.category}
                options={categoriesList}
              />
              <MultiSelectField
                options={colorsList}
                onChange={(value) =>
                  formik.setFieldValue('colors', value.value)}
                name="qualities"
                label="Выберите ваши качесвта"
              />
              <TextField label="Name" name="name" />
              <TextField label="Image" name="image" />
              <TextField label="Description" name="description" />
              <TextField label="Price" name="price" />

              <Button disabled={loading}>Create</Button>
            </form>
          )}
          {message && (
            <div className="form-group">
              <div
                className={
                  successful ? 'alert alert-success' : 'alert alert-danger'
                }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
        </FormikProvider>
      </div>
    </div>
  )
}

export default SignupPage
