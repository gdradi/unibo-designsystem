import React, { PropsWithChildren, useEffect, useState } from 'react';
import { StyleProvider } from '@ant-design/cssinjs';
import { ConfigProvider, theme } from 'antd';
import { AliasToken } from 'antd/es/theme/interface';
import './global.css';


const getCssVariable = (variableName: string) => {
    return getComputedStyle(document.documentElement).getPropertyValue(variableName).trim();
};

function rgbToHex(rgb: string) {
    if (rgb == null || rgb == "") return "#000000";
    const toHex = (component: number) => {
        const hex = component.toString(16);
        return hex.length === 1 ? '0' + hex : hex; // Aggiunge lo zero iniziale se necessario
    };
    const tokens = rgb.split(" ").map(Number);
    return `#${toHex(tokens[0]!)}${toHex(tokens[1]!)}${toHex(tokens[2]!)}`;
}

function getAntdTokensFromCssVars(): Partial<AliasToken> {
    const primaryColor = rgbToHex(getCssVariable('--color-primary'));
    const tokens: Partial<AliasToken> = {
        colorPrimary: primaryColor,
        colorSuccess: rgbToHex(getCssVariable('--color-success')),
        colorWarning: rgbToHex(getCssVariable('--color-warning')),
        colorError: rgbToHex(getCssVariable('--color-error')),
        colorLink: primaryColor,
        colorTextBase: rgbToHex(getCssVariable('--color-text-default')),
        colorBorder: rgbToHex(getCssVariable('--color-border-default')),
        fontSize: 16,
        fontFamily: "",
        sizeStep: 4,
        sizeUnit: 4,
        borderRadius: 6
    };
    console.log(primaryColor);
    return tokens;
}

export const MyStyleProvider: React.FC<PropsWithChildren<{ isDarkMode: boolean }>> = ({ isDarkMode, children }) => {
    const [antdTokens, setAntdTokens] = useState(getAntdTokensFromCssVars());

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        setAntdTokens(getAntdTokensFromCssVars());
    }, [isDarkMode]);

    useEffect(() => {
        document.documentElement.style.fontSize = antdTokens.fontSize + 'px';
    }, []);

    return <ConfigProvider
        theme={{
            token: antdTokens,
            algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
            cssVar: true
        }}>
        <StyleProvider layer>
            {children}
        </StyleProvider>
    </ConfigProvider>
};