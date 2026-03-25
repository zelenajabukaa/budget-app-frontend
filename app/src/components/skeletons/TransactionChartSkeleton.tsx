import { Skeleton, Typography } from "antd"

function TransactionChartSkeleton() {
    return(
        <div style={{justifySelf: 'center'}}>
            <Skeleton.Node active={true} style={{height: 600, width: 900}}/>
            <Typography.Paragraph
                type="warning"
                style={{
                    marginTop: 16,
                    textAlign: 'center'
                }}
            >
                Nicht ausreichend Daten für alle Transaktionen
            </Typography.Paragraph>
        </div>
    )
}

export default TransactionChartSkeleton