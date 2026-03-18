import Header from "../components/header/Header.tsx";
import {ConfigProvider, Tabs, type TabsProps, theme} from "antd";
import {PieChartFilled, PieChartOutlined, PieChartTwoTone} from "@ant-design/icons";

function HomePage() {

    const onChange = (key: string) => {
        console.log(key);
    };

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Einnahmen',
            children: 'Content of Tab Pane 1',
            icon: <PieChartFilled/>
        },
        {
            key: '2',
            label: 'Ausgaben',
            children: 'Content of Tab Pane 2',
            icon: <PieChartOutlined/>
        },
        {
            key: '3',
            label: 'Alle Transaktionen',
            children: 'Content of Tab Pane 3',
            icon: <PieChartTwoTone/>
        },
    ]

    return (
        <>

            <Header/>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <Tabs style={{marginTop: '1rem'}} defaultActiveKey="1" items={items} onChange={onChange} type={'card'} tabPlacement={'top'}/>
            </ConfigProvider>
        </>
    )
}

export default HomePage