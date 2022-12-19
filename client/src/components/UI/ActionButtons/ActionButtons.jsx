import { AiOutlineDelete, AiOutlineSetting } from 'react-icons/ai'

const ActionButtons = ({ action, ...rest }) => {
  return (
    <>
      <button {...rest}>
        <AiOutlineDelete />
      </button>
      <button {...rest}>
        <AiOutlineSetting />
      </button>
    </>
  )
}

export default ActionButtons
