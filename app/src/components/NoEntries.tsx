import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";

type NoEntriesProps = {
    message: string;
}

function NoEntries({ message }: NoEntriesProps) {
    return (
        <Card style={{ marginTop: 16, width: '40%', display: 'flex', justifySelf: 'center', justifyContent: 'space-evenly' }}>
            <ExclamationCircleOutlined style={{ paddingRight: '1rem' }} />
            {`Du hast noch keine ${message} erfasst.`}
        </Card>
    )

}

export default NoEntries;