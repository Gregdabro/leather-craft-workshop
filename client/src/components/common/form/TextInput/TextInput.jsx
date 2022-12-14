import { useField } from "formik"
import styles from "./TextInput.module.scss"

const TextField = (props) => {
  const [field, meta] = useField(props)
  const displayError = meta.touched && meta.error
  const isValue = meta.value
  // const errorStyle =
  //     "absolute text-slate-500 ring-blue-700 ring-opacity-5 appearance-none rounded block w-full   sm:text-sm -bottom-6 ";

  // const getInputClasses = () => {
  //     return (
  //         {styles.input} +
  //         (displayError
  //             ? " ring-1 ring-blue-700 focus:border-blue-700 focus:ring-blue-700 focus:"
  //             : "")
  //     );
  // };

  return (
    <div className={styles.inputBox}>
      <div className={styles.inputWrapper}>
        <input
          id={props.name}
          {...field}
          {...props}
          type={props.type}
          className={styles.input}
        />
        {props.label && (
          <label
            className={
              displayError || isValue ? styles.labelActive : styles.label
            }
            htmlFor={props.name}
          >
            {props.label}
          </label>
        )}
        {displayError ? <div className={styles.error}>{meta.error}</div> : null}
      </div>
    </div>
  )
}

export default TextField
