import { Card } from '@mui/material';
import React from 'react';
import { alignCenter } from '../../constant/CssClasses';
import CardLayout from '../../layout/CardLayout';

const CardUI = ({ children }) => {
    return (
        <CardLayout>
            <Card className={`${alignCenter} py-12`}>
                {children}
            </Card>
        </CardLayout>
    );
}

export default CardUI;
