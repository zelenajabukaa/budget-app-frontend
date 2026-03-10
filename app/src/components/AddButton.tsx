import { PlusCircleOutlined } from "@ant-design/icons"

type AddButtonProps = {
    onClick: () => void
}

function AddButton({ onClick }: AddButtonProps) {
    return (
        <PlusCircleOutlined spin={true}
            style={{
                position: 'absolute',
                bottom: '4rem',
                right: '3rem',
                fontSize: '3rem',
                cursor: 'pointer'
            }}
            onClick={onClick} />
    )
}

export default AddButton