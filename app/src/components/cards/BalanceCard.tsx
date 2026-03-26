import {Card, Typography} from "antd";
import {useSelector} from "react-redux";
import type {RootState} from "../../reduxStore/store.ts";
import './BalanceCard.css'

function BalanceCard() {
    const earningsList = useSelector((state: RootState) => state.earnings.list)
    const expensesList = useSelector((state: RootState) => state.expenses.list)

    const totalEarnings = earningsList.reduce((sum, item) => sum + item.amount, 0)
    const totalExpenses = expensesList.reduce((sum, item) => sum + item.amount, 0)
    const balance = totalEarnings - totalExpenses

    const balanceColor = balance === 0 ? '#1f1f1f' : balance > 0 ? '#52c41a' : '#ff4d4f'
    const balancePrefix = balance === 0 ? '' : balance > 0 ? '+' : ''

    return (
        <Card className={'balance-card'}>
            <Typography.Title level={3} style={{justifySelf: 'center', margin: '0 0 0.5rem 0'}}>Kontostand</Typography.Title>
            <div style={{
                color: balanceColor, justifySelf: 'center', fontSize: '1.6rem',
                fontWeight: 'bold'
            }}>
                {balancePrefix}{balance.toFixed(2)} CHF
            </div>
        </Card>
    )
}

export default BalanceCard

