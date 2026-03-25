import {useSelector} from "react-redux";
import type {RootState} from "../../reduxStore/store.ts";
import {Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import TransactionChartSkeleton from "../skeletons/TransactionChartSkeleton.tsx";

function TransactionBarChart() {
    const earningsList = useSelector((state: RootState) => state.earnings.list)
    const expensesList = useSelector((state: RootState) => state.expenses.list)

    if (earningsList.length === 0 || expensesList.length === 0) {
        return <TransactionChartSkeleton/>
    }

    //takes either the earnings or the expenses and sums either of them together with the reduce
    const totalEarnings = earningsList.reduce((sumEarnings, item) => sumEarnings + item.amount, 0)
    const totalExpenses = expensesList.reduce((sumExpenses, item) => sumExpenses + item.amount, 0)

    const data = [
        {xAxisName: 'Einnahmen', totalSum: totalEarnings, fill: '#3f8600'},
        {xAxisName: 'Ausgaben', totalSum: totalExpenses, fill: '#cf1322'},
    ]

    return (
        <ResponsiveContainer height={600} className="no-outline">
            <BarChart data={data}>
                <XAxis dataKey="xAxisName"/> {/*datakey should correspond to the variable name in data*/}
                <YAxis/>
                <Tooltip formatter={(value) => `${Number(value).toFixed(2)} CHF`}/>
                <Bar dataKey="totalSum" name={"Summe"}>{/* With name you can overwrite the dataKey so that it doesn't show totalSum */}
                    {data.map((bar, index) => (
                        <Cell key={index} fill={bar.fill}/> //it is shown as deprecated but it's the easiest and best way to do it
                    ))}
                </Bar>
            </BarChart>
        </ResponsiveContainer>
    )
}

export default TransactionBarChart
