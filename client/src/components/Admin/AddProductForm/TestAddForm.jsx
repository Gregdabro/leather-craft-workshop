import React from 'react'
import { useFormik } from 'formik'
import CustomSelect from './TestCustomSelect'
import { useSelector } from 'react-redux'
import { categoryListSelector } from '../../../store/categorySlice'
import TextField from '../../common/form/TextInput/TextInput'
export function TestAddForm() {
  const categories = useSelector(categoryListSelector())
  const categoriesList = categories.map((c) => ({
    label: c.name,
    value: c._id
  }))
  const validate = (values) => {
    const errors = {}

    if (!values.email) {
      errors.email = 'Required'
    }

    if (!values.job) {
      errors.job = 'Required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues: {
      image: '',
      name: '',
      description: '',
      category: '',
      price: ''
    },
    validate,
    onSubmit: (values) => {
      console.log(values)
    }
  })

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
      <h1>Register </h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', gap: 40 }}
        onSubmit={formik.handleSubmit}
      >
        {/*<label htmlFor="email">Email Address</label>*/}
        {/*<input*/}
        {/*  id="email"*/}
        {/*  name="email"*/}
        {/*  type="email"*/}
        {/*  className="input"*/}
        {/*  onChange={formik.handleChange}*/}
        {/*  value={formik.values.email}*/}
        {/*/>*/}
        {/*{formik.errors.email ? (*/}
        {/*  <div className="error">{formik.errors.email}</div>*/}
        {/*) : null}*/}
        {/*<label htmlFor="job">Option</label>*/}

        {/*<TextField label="Name" name="name" />*/}

        <CustomSelect
          className="input"
          onChange={(value) => formik.setFieldValue('job', value.value)}
          value={formik.values.job}
          options={categoriesList}
        />
        {formik.errors.job ? (
          <div className="error">{formik.errors.job}</div>
        ) : null}

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default TestAddForm
