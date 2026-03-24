import { Card, Modal } from "antd";
import { useState } from "react";
import type { Expense } from "../../reduxStore/expensesSlice.ts";
import type { Earning } from "../../reduxStore/earningsSlice.ts";
import { categoryColors } from '../../categoryColors.ts';

type TransactionCardProps = {
    type: 'expense' | 'earning'
    item: Earning | Expense
}

function TransactionCard({ type, item }: TransactionCardProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const isEarning = type === 'earning';
    const amountColor = isEarning ? '#52c41a' : '#ff4d4f';
    const amountPrefix = isEarning ? '+' : '-';

    return (
        <>
            <Card
                style={{ width: 600, margin: '0.5rem auto', color: categoryColors[item.category], cursor: 'pointer' }}
                onClick={() => setIsModalOpen(true)}
            >
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
            <Modal
                title={<strong>{item.category}</strong>}
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
            >
                <p><strong>Betrag:</strong> <span style={{ color: amountColor }}>{amountPrefix} {item.amount.toFixed(2)} CHF</span></p>
                <p><strong>Beschreibung:</strong> {item.description}</p>
            </Modal>
        </>
    )
}

export default TransactionCard