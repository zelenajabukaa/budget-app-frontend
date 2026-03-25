import {Form} from "antd";
import {addEarning, type Earning} from "../../reduxStore/earningsSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "recharts/types/state/store";
import {useNavigate} from "react-router-dom";
import CustomForm from "./CustomForm.tsx";
import {nanoid} from "@reduxjs/toolkit";

type FormValues = {
    description: string
    amount: number
    category: Earning['category']
}

export const earningCategories = [// export so I can use it in other components
    {value: 'Gehalt', label: 'Gehalt'},
    {value: 'Geschenk', label: 'Geschenk'},
    {value: 'Verkauf', label: 'Verkauf'},
    {value: 'Sonstiges', label: 'Sonstiges'},
]

function AddEarningForm() {

    const dispatch: AppDispatch = useDispatch();
    const [form] = Form.useForm<FormValues>()
    const navigate = useNavigate()

    const onSubmit = (values: FormValues) => {

        const newEarning: Earning = {
            id: nanoid(), //using nanoid here instead of crypto.randomUUID because its already included in redux toolkit
            description: values.description,
            amount: values.amount,
            category: values.category,
        }

        dispatch(addEarning(newEarning))
        form.resetFields()

        navigate('/earnings')
    }

    return (
        <CustomForm form={form} onSubmit={onSubmit} categoryOptions={earningCategories} style={{marginTop: '2rem'}} navigateTo={'/earnings'}/>
    )
}

export default AddEarningForm