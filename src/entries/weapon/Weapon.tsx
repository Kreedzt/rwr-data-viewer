import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useCSVSelect } from '../../hooks/useCSVSelect';

type WeaponProps = {
    //
};

const Weapon: FC<WeaponProps> = () => {
    const { errorMsg, onCSVSelect } = useCSVSelect();

    return (
        <div>
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Button onClick={onCSVSelect}>选择武器数据提取的CSV</Button>
        </div>
    );
};

export default Weapon;
