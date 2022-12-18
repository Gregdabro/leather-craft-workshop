import { AiOutlineDelete, AiOutlineSetting } from 'react-icons/ai'

const ActionButton = ({ action }) => {
  switch (action) {
    case 'REMOVE': {
      return (
        <button>
          <AiOutlineDelete />
        </button>
      )
    }
    case 'UPDATE': {
      return (
        <button>
          <AiOutlineSetting />
        </button>
      )
    }
    default:
      break
  }
}

export default ActionButton
