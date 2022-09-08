import React, { FC } from 'react';
import { useWeaponContext } from '../context';
import { weaponColumns } from '../share/columns';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

type ReadyStepProps = {
    //
};

const ReadyStep: FC<ReadyStepProps> = () => {
    const { store } = useWeaponContext();

    const columns = weaponColumns;

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                columns={columns}
                rows={store.data}
                pageSize={20}
                rowsPerPageOptions={[5, 10, 15, 20, 50]}
            />
        </Box>
    );
};

export default ReadyStep;
