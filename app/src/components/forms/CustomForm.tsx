import {Button, Card, Form, type FormInstance, Input, InputNumber, Select, Space} from "antd";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import './CustomForm.css'

type CustomFormProps = {
    style?: React.CSSProperties
    form:  FormInstance
    onSubmit: (values: any)=>void
    categoryOptions: {value: string; label: string;}[]
    navigateTo: string
}

function CustomForm({style, form, onSubmit, categoryOptions, navigateTo}: CustomFormProps){

    const navigate = useNavigate()

    return(
        <Card className={'main-card'} style={style}>
            <Form
                form={form}
                layout="vertical"
                onFinish={onSubmit}
                initialValues={{description: '', category: undefined}}
            >
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
                        <Button onClick={() => navigate(navigateTo)}>
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

export default CustomForm