import { List, Typography} from "antd";
import NoEntries from "../components/notifications/NoEntries.tsx";
import AddButton from "../components/buttons/AddButton.tsx";
import {useCallback, useMemo, useState} from "react";
import type {RootState} from "../reduxStore/store.ts";
import {useDispatch, useSelector} from "react-redux";
import type {Earning} from "../reduxStore/earningsSlice.ts";
import {setMoneyRainTriggered} from "../reduxStore/earningsSlice.ts";
import {Legend, Pie, PieChart, Tooltip} from "recharts";
import TransactionCard from "../components/cards/TransactionCard.tsx";
import {categoryColors} from '../utils/categoryColors.ts';
import TransactionButtons from "../components/buttons/TransactionButtons.tsx";
import PieChartSkeleton from "../components/skeletons/PieChartSkeleton.tsx";
import MoneyRain from "../components/easterEggs/MoneyRain.tsx";
import TotalCard from "../components/cards/TotalCard.tsx";

const {Title} = Typography

export function EarningPieChart() {

    const earningsList = useSelector((state: RootState) => state.earnings.list)

    const data = useMemo(() => {
        const grouped: Record<string, number> = {} // I'm using a Record because it's perfect for grouping things together with a key and value

        earningsList.forEach((item: Earning) => {
            // this first looks if there already is a group with values and then it adds the amount, otherwise it takes 0 as initial
            grouped[item.category] = (grouped[item.category] || 0) + item.amount
        })

        return Object.entries(grouped).map(([category, value]) => ({ // on entries I can use .map() and entries have both key AND value unlike Object
            // turns the grouped object into an array and afterwards makes it into an array of objects with the .map
            category: category,
            value,
            fill: categoryColors[category],
        }))
    }, [earningsList])

    if (earningsList.length === 0) {
        return <PieChartSkeleton text={'Einnahmen'}/>
    }

    return (
        <PieChart width={600} height={400} className="no-outline" style={{justifySelf: 'center'}}>
            <Pie
                data={data}
                dataKey="value"
                nameKey="category"
                cx="50%" // x position of the pie
                cy="50%" // y position of the pie
                outerRadius={150} //this is basically the size of the Pie INSIDE the PieChart container
                label={(entry) => entry.name}
                stroke={'none'}
            />
            <Tooltip/>
            <Legend/>
        </PieChart>
    )
}

function EarningPage() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)

    const dispatch = useDispatch()
    const earningsList = useSelector((state: RootState) => state.earnings.list)
    const moneyRainTriggered = useSelector((state: RootState) => state.earnings.moneyRainTriggered)

    const totalEarnings = useMemo(
        () => earningsList.reduce((sum, item) => sum + item.amount, 0),
        [earningsList]
    )

    const moneyRainActivationSum = 1000000000
    const showMoneyRain = totalEarnings >= moneyRainActivationSum && !moneyRainTriggered
    // moneyRain shouldn't happen if it already has been triggered

    const handleMoneyRainFinished = useCallback(() => {
        dispatch(setMoneyRainTriggered()) //sets the moneyRainTriggered to true in the redux so that the easter egg only happens once
    }, [dispatch])

    return (
        <>
            {showMoneyRain && <MoneyRain onFinished={handleMoneyRainFinished}/>}
            <Title style={{justifySelf: 'center', color: 'white'}}>Einnahmen</Title>
            {earningsList.length === 0 ? (
                <NoEntries message='Einnahmen'/>
            ) : (
                <>
                    <EarningPieChart/>
                    <TotalCard type={'earning'} total={totalEarnings}/>
                    <List //the list under the Piechart that displays the Cards with the Transactions
                        dataSource={earningsList}
                        renderItem={(item: Earning) => (
                            <List.Item>
                                <TransactionCard type={'earning'} item={item}/>
                            </List.Item>
                        )}
                    />
                </>

            )}
            <AddButton onClick={() => setIsPopupOpen(prevState => !prevState)}/>

            <div className={`action-buttons ${isPopupOpen ? 'open' : ''}`}>
                <TransactionButtons/>
            </div>
        </>
    )
}

export default EarningPage