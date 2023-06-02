import {Card, Grid, Text, Title} from "@tremor/react";

export default function Home() {
    return (
        <main>
            <Title>Dashboard</Title>
            <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

            <Grid numColsMd={2} numColsLg={3} className="gap-6 mt-6">
                <Card>
                    {/* Placeholder to set height */}
                    <div className="h-28"/>
                </Card>
                <Card>
                    {/* Placeholder to set height */}
                    <div className="h-28"/>
                </Card>
                <Card>
                    {/* Placeholder to set height */}
                    <div className="h-28"/>
                </Card>
            </Grid>

            <div className="mt-6">
                <Card>
                    <div className="h-80"/>
                </Card>
            </div>
        </main>
    )
}
