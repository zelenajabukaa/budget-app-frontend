import { Skeleton, Typography } from "antd"
import * as React from "react";

type TransactionChartSkeletonProps = {
    style?: React.CSSProperties
}

function TransactionChartSkeleton({style}: TransactionChartSkeletonProps) {
    return(
        <div style={style}>
            <Skeleton.Node active={true} style={{height: 400, width: 750}}/>
            <Typography.Paragraph
                type="warning" // orange text
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