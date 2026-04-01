import {ConfigProvider, Tabs, type TabsProps, theme, Typography} from "antd";
import {PieChartFilled, PieChartOutlined, PieChartTwoTone} from "@ant-design/icons";
import {EarningPieChart} from "./EarningPage.tsx";
import {ExpensesPieChart} from "./ExpensesPage.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useState} from "react";
import TransactionButtons from "../components/buttons/TransactionButtons.tsx";
import TransactionBarChart from "../components/piecharts/TransactionBarChart.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../reduxStore/store.ts";
import TotalCard from "../components/cards/TotalCard.tsx";
import BalanceCard from "../components/cards/BalanceCard.tsx";

const {Title} = Typography

function HomePage() {

    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const earningsList = useSelector((state: RootState) => state.earnings.list)
    const expensesList = useSelector((state: RootState) => state.expenses.list)

    //takes either the earnings or the expenses and sums either of them together with the reduce
    const totalEarnings = earningsList.reduce((sumEarnings, item) => sumEarnings + item.amount, 0)
    const totalExpenses = expensesList.reduce((sumExpenses, item) => sumExpenses + item.amount, 0)

    const items: TabsProps['items'] = [
        {
            key: '1',
            label: 'Einnahmen',
            children:
                <>
                    <EarningPieChart/>
                    {(earningsList.length !== 0) && (
                        <ConfigProvider theme={{algorithm: theme.compactAlgorithm}}> {/* so that the totalcard doesn't get affected by the dark mode */}
                            <TotalCard type={'earning'} total={totalEarnings}/>
                        </ConfigProvider>
                    )}
                </>,
            icon: <PieChartFilled/>
        },
        {
            key: '2',
            label: 'Ausgaben',
            children:
                <>
                    <ExpensesPieChart/>
                    {(expensesList.length !== 0) && (
                        <ConfigProvider theme={{algorithm: theme.compactAlgorithm}}>
                            <TotalCard type={'expense'} total={totalExpenses}/>
                        </ConfigProvider>
                    )}
                </>,
            icon: <PieChartOutlined/>
        },
        {
            key: '3',
            label: 'Alle Transaktionen',
            children: <TransactionBarChart style={{marginTop: '5rem'}}/>,
            icon: <PieChartTwoTone/>
        },
    ]

    return (
        <>
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>
            <Title style={{justifySelf: 'center', color: 'white'}}>Home</Title>
            <ConfigProvider theme={{algorithm: theme.darkAlgorithm}}> {/*configprovider so that the tabs are in dark mode*/}
                <Tabs style={{marginTop: '1rem'}} defaultActiveKey="1" items={items} type={'card'}
                      tabPlacement={'top'}/>
            </ConfigProvider>
            <BalanceCard/>
            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <TransactionButtons/>
            </div>
        </>
    )
}

export default HomePage