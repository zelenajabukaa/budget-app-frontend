import {Form} from "antd";
import {addEarning, type Earning} from "../../reduxStore/earningsSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "recharts/types/state/store";
import {useNavigate} from "react-router-dom";
import CustomForm from "./CustomForm.tsx";

type FormValues = {
    description: string;
    amount: number;
    category: Earning['category'];
}

function AddEarningForm() {

    const dispatch: AppDispatch = useDispatch();
    const [form] = Form.useForm<FormValues>()
    const navigate = useNavigate()

    const onSubmit = (values: FormValues) => {

        const newEarning: Earning = {
            description: values.description,
            amount: values.amount,
            category: values.category,
        }

        dispatch(addEarning(newEarning))
        form.resetFields()

        navigate('/earnings')
    }

    const categoryOptions = [
        {value: 'Gehalt', label: 'Gehalt'},
        {value: 'Geschenk', label: 'Geschenk'},
        {value: 'Verkauf', label: 'Verkauf'},
        {value: 'Sonstiges', label: 'Sonstiges'},
    ];

    return (
        <CustomForm form={form} onSubmit={onSubmit} categoryOptions={categoryOptions} navigateTo={'/earnings'}/>
    )
}

export default AddEarningForm