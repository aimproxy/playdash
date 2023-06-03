'use client';

import {useState} from "react";
import {Button, DateRangePicker, DateRangePickerValue, Dropdown, DropdownItem} from "@tremor/react";
import {CubeIcon, CubeTransparentIcon} from "@heroicons/react/24/outline";

export default function Layout(props: {
    children: React.ReactNode
}) {
    const [value, setValue] = useState<DateRangePickerValue>([
        new Date(2022, 1, 1),
        new Date(),
    ]);

    return (
        <div className="flex flex-col">
            <div className="flex space-x-4">
                <Button>Refresh</Button>
                <Button>Customize</Button>
                <DateRangePicker
                    className="max-w-md mx-auto"
                    value={value}
                    onValueChange={setValue}
                    dropdownPlaceholder="Select"
                />
                <Dropdown
                    onValueChange={(value) => console.log("The selected value is", value)}
                    placeholder="Render mode"
                >
                    <DropdownItem value="1" text="Transparent" />
                    <DropdownItem value="2" text="Outline"/>
                </Dropdown>
            </div>

            {props.children}
        </div>
    )
}