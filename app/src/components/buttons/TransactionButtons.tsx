import ActionButton from "./ActionButton.tsx";

function TransactionButtons() {
    const openAddEarningForms = () => {
        navigate('/add-earning')
    }

    const openAddExpenseForms = () => {
        navigate('/add-earning')
    }

    return (
        <>
            <ActionButton text={"Einnahmen Erfassen"} onClick={openAddEarningForms} bottom={'8rem'}/>
            <ActionButton text={"Ausgaben Erfassen"} onClick={openAddExpenseForms} bottom={'14rem'}/>
        </>
    )
}

export default TransactionButtons