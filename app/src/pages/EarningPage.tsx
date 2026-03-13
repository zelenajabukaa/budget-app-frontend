import {Button, Card, List, Tooltip, Typography} from "antd";
import {useNavigate} from 'react-router-dom';
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useState} from "react";
import Header from "../components/header/Header.tsx";
import type {RootState} from "../reduxStore/store.ts";
import {useSelector} from "react-redux";
import type {Earning} from "../reduxStore/earningsSlice.ts";
import {Legend, Pie, PieChart} from "recharts";

const {Title} = Typography;

function EarningPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const navigate = useNavigate()

    const openAddEarningForms = () => {
        navigate('/add-earning')
    }

    const earningsList = useSelector((state: RootState) => state.earnings.list);

    type PieData = {
        name: string
        value: number
        fill: string
    }

    const data: PieData[] = [
        { name: 'Gruppe dsfA', value: 400, fill: '#0088FE' },
        { name: 'Gruppe B', value: 300, fill: '#00C49F' },
        { name: 'Gruppe C', value: 300, fill: '#FFBB28' },
        { name: 'Gruppe D', value: 200, fill: '#FF8042' },
    ];

    return (
        <>
            <Header/>
            <Title style={{justifySelf: 'center', color: 'white'}}>Einnahmen</Title>
            {earningsList.length === 0 ? (
                <NoEntries message='Einnahmen'/>
            ) : (
                <>
                    <PieChart width={600} height={400}>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
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
                                <Card style={{width: 600, margin: '0.5rem auto'}}>
                                    <div style={{
                                        fontSize: '1.2rem',
                                        fontWeight: 'bold',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        {item.category}
                                        <div style={{color: '#52c41a'}}>
                                            + {item.amount.toFixed(2)} CHF
                                        </div>
                                    </div>
                                </Card>
                            </List.Item>
                        )}
                    />
                </>

            )}
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>

            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <Button
                    className='action-button'
                    style={{bottom: '8rem'}}
                    onClick={openAddEarningForms}
                >
                    Einnahmen Erfassen
                </Button>

                <Button
                    className='action-button'
                    style={{bottom: '14rem'}}
                >
                    Ausgaben Erfassen
                </Button>
            </div>
        </>
    )
}

export default EarningPage