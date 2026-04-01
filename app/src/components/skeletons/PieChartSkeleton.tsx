import { Skeleton, Typography } from "antd"

type PieChartSkeletonProps = {
    text: string
}

function PieChartSkeleton({text}: PieChartSkeletonProps) {
    return(
        <div style={{justifySelf: 'center'}}>
            <Skeleton.Avatar active={true} style={{height: 300, width: 300}}/>{/* Avatar because it has a round shape so it looks like the PieChart when it's loading */}
            <Typography.Paragraph
                type="warning" //for the orange text
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