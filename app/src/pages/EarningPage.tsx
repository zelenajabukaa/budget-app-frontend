import { Button, Card, List, Typography } from "antd";
import { useNavigate } from 'react-router-dom';
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import { useMemo, useState } from "react";
import Header from "../components/header/Header.tsx";
import type { RootState } from "../reduxStore/store.ts";
import { useSelector } from "react-redux";
import type { Earning } from "../reduxStore/earningsSlice.ts";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const { Title } = Typography

function EarningPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const navigate = useNavigate()

    const openAddEarningForms = () => {
        navigate('/add-earning')
    }

    const categoryColors: Record<string, string> = {
        'Gehalt': '#0088FE',
        'Geschenk': '#00C49F',
        'Verkauf': '#FFBB28',
        'Sonstiges': '#FF8042',
    }

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


    return (
        <>
            <Header />
            <Title style={{ justifySelf: 'center', color: 'white' }}>Einnahmen</Title>
            {earningsList.length === 0 ? (
                <NoEntries message='Einnahmen' />
            ) : (
                <>
                    <PieChart width={600} height={400} style={{ justifySelf: 'center' }}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="category"
                            cx="50%"
                            cy="50%"
                            outerRadius={150}
                            label={(entry) => entry.name}
                        />
                        <Tooltip />
                        <Legend />
                    </PieChart>
                    <List
                        itemLayout="horizontal"
                        dataSource={earningsList}
                        renderItem={(item: Earning) => (
                            <List.Item>
                                <Card style={{ width: 600, margin: '0.5rem auto', color: categoryColors[item.category] }}>
                                    <div style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        {item.category}
                                        <div style={{ color: '#52c41a' }}>
                                            + {item.amount.toFixed(2)} CHF
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </>

            )}
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)} />

            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <Button
                    className='action-button'
                    style={{ bottom: '8rem' }}
                    onClick={openAddEarningForms}
                >
                    Einnahmen Erfassen
                </Button>

                <Button
                    className='action-button'
                    style={{ bottom: '14rem' }}
                >
                    Ausgaben Erfassen
                </Button>
            </div>
        </>
    )
}

export default EarningPage