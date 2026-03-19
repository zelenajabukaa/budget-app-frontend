import {List, Typography} from "antd";
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useMemo, useState} from "react";
import type {RootState} from "../reduxStore/store.ts";
import {useSelector} from "react-redux";
import {Legend, Pie, PieChart, Tooltip} from "recharts";
import TransactionCard from "../components/cards/TransactionCard.tsx";
import {categoryColors} from '../categoryColors.ts';
import TransactionButtons from "../components/buttons/TransactionButtons.tsx";
import type {Expense} from "../reduxStore/expensesSlice.ts";
import PieChartSkeleton from "../components/skeletons/PieChartSkeleton.tsx";

const {Title} = Typography

export function ExpensesPieChart() {

    const expensesList = useSelector((state: RootState) => state.expenses.list)

    const data = useMemo(() => {
        const grouped: Record<string, number> = {}

        expensesList.forEach((item: Expense) => {
            grouped[item.category] = (grouped[item.category] || 0) + item.amount
        })

        return Object.entries(grouped).map(([category, value]) => ({
            category: category,
            value,
            fill: categoryColors[category],
        }))
    }, [expensesList])

    if (expensesList.length === 0) {
        return <PieChartSkeleton text={'Ausgaben'}/>
    }

    return (
        <PieChart width={600} height={400} className="no-outline" style={{justifySelf: 'center'}}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                cx="50%"
                cy="50%"
                outerRadius={150}
                label={(entry) => entry.name}
                stroke={'none'}
            />
            <Tooltip/>
            <Legend/>
        </PieChart>
    )
}

function ExpensesPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const expensesList = useSelector((state: RootState) => state.expenses.list)

    return (
        <>
            <Title style={{justifySelf: 'center', color: 'white'}}>Ausgaben</Title>
            {expensesList.length === 0 ? (
                <NoEntries message='Ausgaben'/>
            ) : (
                <>
                    <ExpensesPieChart/>
                    <List
                        itemLayout="horizontal"
                        dataSource={expensesList}
                        renderItem={(item: Expense) => (
                            <List.Item>
                                <TransactionCard type={'expense'} item={item}/>
                            </List.Item>
                        )}
                    />
                </>

            )}
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>

            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <TransactionButtons/>
            </div>
        </>
    )
}

export default ExpensesPage