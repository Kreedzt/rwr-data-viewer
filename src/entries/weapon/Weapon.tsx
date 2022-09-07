import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useCSVSelect } from '../../hooks/useCSVSelect';
import { useWeaponProviderRef, WeaponProvider } from './context';
import StepsSwitch from './steps/StepsSwitch';

type WeaponProps = {
    //
};

const Weapon: FC<WeaponProps> = () => {
    const providerRef = useWeaponProviderRef();

    return (
        <WeaponProvider ref={providerRef}>
            <StepsSwitch />
        </WeaponProvider>
    );
};

export default Weapon;
