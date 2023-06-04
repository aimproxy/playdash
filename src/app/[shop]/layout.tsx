'use client';

import {Tab, TabList, Text, Title} from "@tremor/react";
import {
    ChartPieIcon,
    RssIcon,
    UserCircleIcon,
    VariableIcon,
    ViewColumnsIcon
} from "@heroicons/react/24/outline";
import {useRouter, useSelectedLayoutSegment} from "next/navigation";


const navigation = [
    {icon: ViewColumnsIcon, value: 'dashboards', text: 'Dashboards'},
    {icon: VariableIcon, value: 'commands', text: 'Commands'},
    {icon: UserCircleIcon, value: 'players', text: 'Players'},
    {icon: ChartPieIcon, value: 'audiences', text: 'Audiences'},
    {icon: RssIcon, value: 'campaigns', text: 'Campaigns'}
]

export default function Layout(props: {
    children: React.ReactNode
}) {
    const router = useRouter();
    const segment = useSelectedLayoutSegment()

    return (
        <>
            <div className="flex flex-col space-y-1">
                <Title>{navigation.find(nav => nav.value == segment)?.text ?? ''}</Title>
                <Text>You have X dashboards</Text>
            </div>

            <TabList
                defaultValue={segment ?? ''}
                onValueChange={(value) => router.push(value)}
                className="my-6"
            >
                {navigation.map(nav => (
                    <Tab icon={nav.icon} value={nav.value} text={nav.text} key={nav.value}/>
                ))}
            </TabList>

            {props.children}
        </>
    )
}