import {Card} from "antd";
import './TotalCard.css'
import type {TransactionType} from "../../utils/types.ts";
import {getAmountStyle} from '../../utils/amountStyle'

type TotalCardProps = {
    type: TransactionType
    total: number
}

function TotalCard({type, total}: TotalCardProps) {
    const {prefix: amountPrefix, color: amountColor} = getAmountStyle(type); // + 9999 CHF, - 9999 CHF



    return (
        <Card
            className={'total-card'}>
            <div style={{
                fontSize: '1.6rem',
                fontWeight: 'bold',
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <strong>Total</strong>
                <div style={{color: amountColor}}>
                    {amountPrefix} {total.toFixed(2)} CHF
                </div>
            </div>
        </Card>
    )
}

export default TotalCard