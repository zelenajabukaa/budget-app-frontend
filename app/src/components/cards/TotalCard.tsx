import {Card} from "antd";

type TotalCardProps = {
    type: 'expense' | 'earning'
    total: number
}

function TotalCard({type, total}: TotalCardProps) {
    const isEarning = type === 'earning';
    const amountColor = isEarning ? '#52c41a' : '#ff4d4f';
    const amountPrefix = isEarning ? '+' : '-'; // + 9999 CHF, - 9999 CHF



    return (
        <Card
            style={{ width: 600, margin: '3.5rem auto 1rem auto', boxShadow: '0px 0px 30px 1px rgba(255,255,255,0.75'}}
        >
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