import {ConfigProvider, Tabs, type TabsProps, theme, Typography} from "antd";
import {PieChartFilled, PieChartOutlined, PieChartTwoTone} from "@ant-design/icons";
import {EarningPieChart} from "./EarningPage.tsx";
import {ExpensesPieChart} from "./ExpensesPage.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useState} from "react";
import TransactionButtons from "../components/buttons/TransactionButtons.tsx";
import TransactionBarChart from "../components/piecharts/TransactionLineChart.tsx";

const { Title } = Typography

function HomePage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Einnahmen',
            children: <EarningPieChart/>,
            icon: <PieChartFilled/>
        },
        {
            key: '2',
            label: 'Ausgaben',
            children: <ExpensesPieChart/>,
            icon: <PieChartOutlined/>
        },
        {
            key: '3',
            label: 'Alle Transaktionen',
            children: <TransactionBarChart/>,
            icon: <PieChartTwoTone/>
        },
    ]

    return (
        <>
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>
            <Title style={{ justifySelf: 'center', color: 'white' }}>Home</Title>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}>
                <Tabs style={{marginTop: '1rem'}} defaultActiveKey="1" items={items} type={'card'} tabPlacement={'top'}/>
            </ConfigProvider>
            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <TransactionButtons/>
            </div>
        </>
    )
}

export default HomePage