import {Card, Grid} from "@tremor/react";

export default function Dashboards() {
    return (
        <main>
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