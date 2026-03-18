import {Button} from "antd";

type ActionButtonProps = {
    onClick: ()=>void
    text: string
    bottom: string
}

function ActionButton({onClick, text, bottom}: ActionButtonProps){
    return(
        <Button
            className='action-button'
            style={{ bottom: bottom }}
            onClick={onClick}
        >
            {text}
        </Button>
    )
}

export default ActionButton