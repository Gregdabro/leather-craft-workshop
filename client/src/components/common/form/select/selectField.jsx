import styles from './selectField.scss'
import { useField } from 'formik'
const SelectField = ({
  label,
  value,
  onChange,
  defaultOption,
  options,
  error,
  name,
  props
}) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  const optionsArray =
    !Array.isArray(options) && typeof options === 'object'
      ? Object.keys(options).map((optionName) => ({
          name: options[optionName].name,
          value: options[optionName]._id
        }))
      : options

  return (
    <div className={styles.select}>
      <label htmlFor="validationCustom04" className="form-label">
        {label}
      </label>
      <select
        className={getInputClasses()}
        id="validationCustom04"
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option disabled value="">
          {defaultOption}
        </option>
        {optionsArray &&
          optionsArray.map((option) => (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  )
}

export default SelectField
