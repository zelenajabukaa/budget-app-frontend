import {Button, Card, List} from "antd";
import {useNavigate} from 'react-router-dom';
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useState} from "react";
import Header from "../components/header/Header.tsx";
import type {RootState} from "../reduxStore/store.ts";
import {useSelector} from "react-redux";
import type {Earning} from "../reduxStore/earningsSlice.ts";

function HomePage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const navigate = useNavigate()

    const openAddEarningForms = () => {
        navigate('/add-earning')
    }

    const earningsList = useSelector((state: RootState) => state.earnings.list);

    return (
        <>
            <Header/>
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>
            {earningsList.length === 0 ? (
                <NoEntries message='Einnahmen'/>
            ) : (
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

            )}

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

export default HomePage