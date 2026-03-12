import {Button, Card, Form, Input, InputNumber, Select, Space} from "antd";
import {addEarning, type Earning} from "../../reduxStore/earningsSlice.ts";
import {useDispatch} from "react-redux";
import type {AppDispatch} from "recharts/types/state/store";
import './AddEarningForm.css'
import {useNavigate} from "react-router-dom";
import * as React from "react";

type FormValues = {
    description: string;
    amount: number;
    category: Earning['category'];
}

type AddEarningFormProps = {
    style?: React.CSSProperties;
}

function AddEarningForm({style}: AddEarningFormProps) {

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

        navigate('/')
    }

    const categoryOptions = [
        {value: 'Gehalt', label: 'Gehalt'},
        {value: 'Geschenk', label: 'Geschenk'},
        {value: 'Verkauf', label: 'Verkauf'},
        {value: 'Sonstiges', label: 'Sonstiges'},
    ];

    return (
        <Card className={'main-card'} style={style}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onSubmit}
                initialValues={{amount: 0, description: '', category: undefined}}
            >
                <Form.Item
                    label="Betrag"
                    name="amount"
                    rules={[{required: true, message: 'Bitte einen Betrag eingeben!'}]}
                >
                    <InputNumber style={{width: '100%'}} min={0}/>
                </Form.Item>
                <Form.Item
                    label="Kategorie"
                    name="category"
                    rules={[{required: true, message: 'Bitte eine Kategorie auswählen!'}]}
                >
                    <Select options={categoryOptions}/>
                </Form.Item>
                <Form.Item
                    label="Beschreibung"
                    name="description"
                    rules={[{required: true, message: 'Bitte eine Beschreibung eingeben!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item style={{justifyItems:'right'}}>
                    <Space>
                        <Button onClick={() => navigate('/')}>
                            Abbrechen
                        </Button>
                        <Button type="primary" htmlType="submit">
                            Speichern
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </Card>
    )
}

export default AddEarningForm