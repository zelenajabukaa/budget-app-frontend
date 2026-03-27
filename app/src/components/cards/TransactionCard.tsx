import {Card, Dropdown, Modal} from "antd";
import {useState} from "react";
import type {Expense} from "../../reduxStore/expensesSlice.ts";
import {removeExpense} from "../../reduxStore/expensesSlice.ts";
import type {Earning} from "../../reduxStore/earningsSlice.ts";
import {removeEarning} from "../../reduxStore/earningsSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../reduxStore/store.ts";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditTransactionForm from "../forms/EditTransactionForm.tsx";
import type {TransactionType} from "../../types.ts";
import {categoryColors} from "../../categoryColors.ts";

type TransactionCardProps = {
    type: TransactionType
    item: Earning | Expense
}

function TransactionCard({type, item}: TransactionCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const dispatch = useDispatch<AppDispatch>();

    const isEarning = type === 'earning';
    const amountColor = isEarning ? '#52c41a' : '#ff4d4f';
    const amountPrefix = isEarning ? '+' : '-'; // + 9999 CHF, - 9999 CHF

    const handleDelete = () => {
        if (isEarning) {
            dispatch(removeEarning(item.id))
        } else {
            dispatch(removeExpense(item.id))
        }
    }

    const contextMenuItems = [// for the dropdown
        {
            key: 'edit',
            label: 'Bearbeiten',
            icon: <EditOutlined/>,
            onClick: () => setIsEditModalOpen(true),
        },
        {
            key: 'delete',
            label: 'Löschen',
            icon: <DeleteOutlined/>,
            danger: true, //make the delete option red
            onClick: handleDelete,
        },
    ]

    return (
        <>
            <Dropdown menu={{items: contextMenuItems}} trigger={['contextMenu']}>
                <Card
                    style={{width: 600, margin: '0.5rem auto', color: categoryColors[item.category], cursor: 'pointer'}}
                    onClick={() => setIsModalOpen(true)}
                >
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        {item.category}
                        <div style={{color: amountColor}}>
                            {amountPrefix} {item.amount.toFixed(2)} CHF {/*so that it also shows the decimal*/}
                        </div>
                    </div>
                </Card>
            </Dropdown>
            <Modal
                title={<div style={{color: categoryColors[item.category]}}>{item.category}</div>}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <p><strong>Betrag:</strong> <span style={{color: amountColor}}>{amountPrefix} {item.amount.toFixed(2)} CHF</span></p>
                {item.description && <p><strong>Beschreibung:</strong> {item.description}</p>}
            </Modal>
            <EditTransactionForm
                type={type}
                item={item}
                open={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
            />
        </>
    )
}

export default TransactionCard