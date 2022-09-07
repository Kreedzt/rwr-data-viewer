import React, { FC, useCallback } from 'react';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { useCSVSelect } from '../../../hooks/useCSVSelect';
import { WeaponItem } from '../types';
import { useWeaponContext } from '../context';

type UploadStepProps = {
    //
};

const UploadStep: FC<UploadStepProps> = () => {
    const { store } = useWeaponContext();

    const onSuccess = useCallback((contents: WeaponItem[]) => {
        console.log('> onSuccess', contents);
        store.updateStep(1);
        store.updateData(contents);
    }, []);

    const { errorMsg, onCSVSelect } = useCSVSelect<WeaponItem>(onSuccess);

    return (
        <>
            {errorMsg && <Alert severity="error">{errorMsg}</Alert>}
            <Button onClick={onCSVSelect}>选择武器数据提取的CSV</Button>
        </>
    );
};

export default UploadStep;
