import { List, Typography } from "antd";
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import { useMemo, useState } from "react";
import Header from "../components/header/Header.tsx";
import type { RootState } from "../reduxStore/store.ts";
import { useSelector } from "react-redux";
import type { Earning } from "../reduxStore/earningsSlice.ts";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import TransactionCard from "../components/cards/TransactionCard.tsx";
import { categoryColors } from '../categoryColors.ts';
import TransactionButtons from "../components/buttons/TransactionButtons.tsx";

const { Title } = Typography

export function EarningPieChart(){

    const earningsList = useSelector((state: RootState) => state.earnings.list)

    const data = useMemo(() => {
        const grouped: Record<string, number> = {}

        earningsList.forEach((item: Earning) => {
            grouped[item.category] = (grouped[item.category] || 0) + item.amount
        })

        return Object.entries(grouped).map(([category, value]) => ({
            category: category,
            value,
            fill: categoryColors[category],
        }))
    }, [earningsList])

    return(
        <PieChart width={600} height={400} className="no-outline" style={{ justifySelf: 'center' }}>
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
            <Tooltip />
            <Legend />
        </PieChart>
    )
}

function EarningPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const earningsList = useSelector((state: RootState) => state.earnings.list)

    return (
        <>
            <Header />
            <Title style={{ justifySelf: 'center', color: 'white' }}>Einnahmen</Title>
            {earningsList.length === 0 ? (
                <NoEntries message='Einnahmen' />
            ) : (
                <>
                    <EarningPieChart/>
                    <List
                        itemLayout="horizontal"
                        dataSource={earningsList}
                        renderItem={(item: Earning) => (
                            <List.Item>
                                <TransactionCard type={'earning'} item={item}/>
                            </List.Item>
                        )}
                    />
                </>

            )}
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)} />

            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <TransactionButtons/>
            </div>
        </>
    )
}

export default EarningPage