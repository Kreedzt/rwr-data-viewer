import { getVersion } from '@tauri-apps/api/app';
import { useEffect, useState } from 'react';

export const useAppVersion = () => {
    const [version, setVersion] = useState('');

    useEffect(() => {
        getVersion()
            .then((v) => {
                setVersion(v);
            })
            .catch((err) => {
                console.log('get version err');
                console.dir(err);
            });
    }, []);

    return version;
};
