import {useSelector} from "react-redux";
import type {RootState} from "../../reduxStore/store.ts";
import {Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import PieChartSkeleton from "../skeletons/PieChartSkeleton.tsx";

function TransactionBarChart() {
    const earningsList = useSelector((state: RootState) => state.earnings.list)
    const expensesList = useSelector((state: RootState) => state.expenses.list)

    if (earningsList.length === 0 || expensesList.length === 0) {
        return <PieChartSkeleton text={'Transaktionen'}/>
    }

    const totalEarnings = earningsList.reduce((sumEarnings, item) => sumEarnings + item.amount, 0)
    const totalExpenses = expensesList.reduce((sumExpenses, item) => sumExpenses + item.amount, 0)

    const data = [
        {xAxisName: 'Einnahmen', totalSum: totalEarnings, fill: '#3f8600'},
        {xAxisName: 'Ausgaben', totalSum: totalExpenses, fill: '#cf1322'},
    ]

    return (
        <ResponsiveContainer width="50%" height={400} className="no-outline">
            <BarChart data={data}>
                <XAxis dataKey="xAxisName"/>
                <YAxis/>
                <Tooltip formatter={(value) => `${Number(value).toFixed(2)} CHF`}/>
                <Bar dataKey="totalSum" name={"Summe"}>
                    {data.map((bar, index) => (
                        <Cell key={index} fill={bar.fill}/>
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TransactionBarChart
