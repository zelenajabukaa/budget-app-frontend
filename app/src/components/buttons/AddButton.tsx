import { PlusCircleOutlined } from "@ant-design/icons"
import './AddButton.css'

type AddButtonProps = {
    onClick: () => void
}

function AddButton({ onClick }: AddButtonProps) {
    return (
        <PlusCircleOutlined className="icon" onClick={onClick} />
    )
}

export default AddButton