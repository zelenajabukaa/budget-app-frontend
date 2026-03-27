import {Form, Input, InputNumber, Modal, Select} from "antd";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "../../reduxStore/store.ts";
import type {Earning} from "../../reduxStore/earningsSlice.ts";
import {updateEarning} from "../../reduxStore/earningsSlice.ts";
import type {Expense} from "../../reduxStore/expensesSlice.ts";
import {updateExpense} from "../../reduxStore/expensesSlice.ts";
import {useEffect} from "react";
import {expenseCategories} from "./AddExpenseForm.tsx";
import {earningCategories} from "./AddEarningForm.tsx";
import type {TransactionType} from "../../types.ts";

type EditTransactionFormProps = {
    type: TransactionType
    item: Earning | Expense
    open: boolean
    onClose: () => void
}

function EditTransactionForm({type, item, open, onClose}: EditTransactionFormProps) {
    const [form] = Form.useForm();
    const dispatch = useDispatch<AppDispatch>();
    const isEarning = type === 'earning';

    useEffect(() => {
        if (open) { //so that it doesn't prefill after every change
            form.setFieldsValue({
                amount: item.amount,
                category: item.category,
                description: item.description,
            })
        }
    }, [open, item, form])

    const handleSubmit = () => {
        form.validateFields().then((values) => {
            if (isEarning) {
                dispatch(updateEarning({id: item.id, ...values})) //the item with the right id gets overwritten
            } else {
                dispatch(updateExpense({id: item.id, ...values}))
            }
            onClose()
        })
    }

    return (
        <Modal
            title="Transaktion bearbeiten"
            open={open}
            onCancel={onClose}
            onOk={handleSubmit}
            okText="Speichern"
            cancelText="Abbrechen"
        >
            <Form form={form} layout="vertical">
                <Form.Item
                    label="Betrag"
                    name="amount"
                    rules={[{required: true, message: 'Bitte einen Betrag eingeben!'}]}
                >
                    <InputNumber style={{width: '100%'}} min={1}/>
                </Form.Item>
                <Form.Item
                    label="Kategorie"
                    name="category"
                    rules={[{required: true, message: 'Bitte eine Kategorie auswählen!'}]}
                >
                    <Select options={isEarning ? earningCategories : expenseCategories}/>
                </Form.Item>
                <Form.Item
                    label="Beschreibung"
                    name="description"
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default EditTransactionForm

