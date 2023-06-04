"use client";
import React from "react";

import {twMerge} from "tailwind-merge";
import {getColorClassNames} from "@tremor/react/dist/lib/utils";
import {spacing} from "@tremor/react/dist/lib/spacing";
import {border, borderRadius, boxShadow} from "@tremor/react/dist/lib/shape";
import {colorPalette, DEFAULT_COLOR, WHITE} from "@tremor/react/dist/lib/theme";
import {fontSize, fontWeight} from "@tremor/react/dist/lib/font";
import {sizing} from "@tremor/react/dist/lib/sizing";
import {getSelectButtonColors} from "@tremor/react/dist/components/input-elements/selectUtils";

interface ClickProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React.ElementType;
    disabled?: boolean;
}

// eslint-disable-next-line react/display-name
export const Button = React.forwardRef<HTMLButtonElement, React.PropsWithChildren<ClickProps>>((props, ref) => {
    const {
        children,
        className,
        icon,
        disabled = false
    } = props;

    const Icon = icon;

    return (
        <button type={"button"} ref={ref}
                className={twMerge(
                    "flex justify-between items-center border-gray-300 focus:outline-none focus:ring-2",
                    getColorClassNames(WHITE, colorPalette.background).bgColor,
                    getSelectButtonColors(false, disabled),
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingY,
                    borderRadius.md.all,
                    border.sm.all,
                    boxShadow.sm,
                    className
                )}
                disabled={disabled}
                onClick={() => console.log("info")}>
            {Icon && <Icon className={twMerge(
                "flex-none",
                getColorClassNames(DEFAULT_COLOR, colorPalette.darkText).textColor,
                sizing.lg.height,
                sizing.lg.width,
                children && spacing.threeXs.negativeMarginLeft,
                children && spacing.lg.marginRight,
            )} aria-hidden="true"/>}
            <p className={twMerge(
                "whitespace-nowrap truncate w-full text-start text-gray-700",
                fontSize.sm,
                fontWeight.md,
            )}>
                {children}
            </p>
        </button>
    )
})