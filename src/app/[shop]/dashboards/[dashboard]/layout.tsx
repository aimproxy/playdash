'use client';

import {useState} from "react";
import {DateRangePicker, DateRangePickerValue, Dropdown, DropdownItem} from "@tremor/react";
import {Button} from "@playkit/components/button";
import {
    ArrowPathRoundedSquareIcon,
    PlusIcon,
    ViewColumnsIcon
} from "@heroicons/react/24/outline";

export default function Layout(props: {
    children: React.ReactNode
}) {
    const [value, setValue] = useState<DateRangePickerValue>([
        new Date(2022, 1, 1),
        new Date(),
    ]);

    return (
        <div className="flex flex-col">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                    <Button icon={PlusIcon}>New Dashboard</Button>
                    <Button icon={ViewColumnsIcon}>Customize</Button>
                    <Button icon={ArrowPathRoundedSquareIcon}/>
                </div>
                <div className="flex space-x-4">
                    <DateRangePicker
                        className="max-w-md mx-auto"
                        value={value}
                        onValueChange={setValue}
                        enableClear={false}
                    />
                    <Dropdown
                        onValueChange={(value) => console.log("The selected value is", value)}
                        placeholder="Render mode"
                    >
                        <DropdownItem value="1" text="Transparent"/>
                        <DropdownItem value="2" text="Outline"/>
                    </Dropdown>
                </div>
            </div>

            {props.children}
        </div>
    )
}