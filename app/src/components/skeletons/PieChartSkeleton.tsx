import { Skeleton, Typography } from "antd"

type PieChartSkeletonProps = {
    text: string
}

function PieChartSkeleton({text}: PieChartSkeletonProps) {
    return(
        <div style={{justifySelf: 'center'}}>
            <Skeleton.Avatar active={true} style={{height: 300, width: 300}}/>
            <Typography.Paragraph
                type="warning"
                style={{
                    marginTop: 16,
                    textAlign: 'center'
                }}
            >
                Keine Daten für {text}
            </Typography.Paragraph>
        </div>
    )
}

export default PieChartSkeleton