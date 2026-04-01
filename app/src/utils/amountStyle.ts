import type {TransactionType} from './types.ts'

//helper function for getting the prefix and color for either earnings or expenses
export function getAmountStyle(type: TransactionType) {
    const isEarning = type === 'earning'
    return {
        isEarning,
        prefix: isEarning ? '+' : '-',
        color: isEarning ? '#52c41a' : '#ff4d4f',
    }
}
