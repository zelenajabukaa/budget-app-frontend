import {Form} from "antd";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "recharts/types/state/store";
import {useNavigate} from "react-router-dom";
import CustomForm from "./CustomForm.tsx";
import {addExpense, type Expense} from "../../reduxStore/expensesSlice.ts";

type FormValues = {
    description: string;
    amount: number;
    category: Expense['category'];
}

function AddExpenseForm() {

    const [form] = Form.useForm<FormValues>()
    const dispatch: AppDispatch = useDispatch()
    const navigate = useNavigate()

    const onSubmit = (values: FormValues) => {

        const newExpense: Expense = {
            description: values.description,
            amount: values.amount,
            category: values.category,
        }

        dispatch(addExpense(newExpense))
        form.resetFields()

        navigate('/expenses')
    }

    const categoryOptions = [
        {value: 'Miete', label: 'Miete'},
        {value: 'Lebensmittel', label: 'Lebensmittel'},
        {value: 'Transport', label: 'Transport'},
        {value: 'Freizeit', label: 'Freizeit'},
        {value: 'Handyrechnung', label: 'Handyrechnung'},
        {value: 'Sonstiges', label: 'Sonstiges'},
    ];

    return (
        <CustomForm form={form} onSubmit={onSubmit} categoryOptions={categoryOptions} style={{marginTop: '2rem'}} navigateTo={'/expenses'}/>
    )
}

export default AddExpenseForm