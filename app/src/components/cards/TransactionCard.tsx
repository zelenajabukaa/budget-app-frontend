import {Card} from "antd";
import type {Expense} from "../../reduxStore/expensesSlice.ts";
import type {Earning} from "../../reduxStore/earningsSlice.ts";
import { categoryColors } from '../../categoryColors.ts';

type TransactionCardProps = {
    type: 'expense' | 'earning'
    item:  Earning | Expense
}

function TransactionCard({type, item}: TransactionCardProps){
    const isEarning = type === 'earning';
    const amountColor = isEarning ? '#52c41a' : '#ff4d4f';
    const amountPrefix = isEarning ? '+' : '-';

    return(
        <Card style={{ width: 600, margin: '0.5rem auto', color: categoryColors[item.category] }}>
            <div style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                {item.category}
                <div style={{ color: amountColor }}>
                    {amountPrefix} {item.amount.toFixed(2)} CHF
                </div>
            </div>
        </Card>
    )
}

export default TransactionCard