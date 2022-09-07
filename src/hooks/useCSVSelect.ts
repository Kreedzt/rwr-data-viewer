import { useCallback, useState } from 'react';
import { open } from '@tauri-apps/api/dialog';
import { readTextFile } from '@tauri-apps/api/fs';
import * as XLSX from 'xlsx';
import { readCSVContent } from '../utils/readCSVContent';

export const useCSVSelect = <T>(
    onSuccess: (contents: T[]) => void,
    onError?: (e: Error) => void,
) => {
    const [errorMsg, setErrorMsg] = useState<string>('');

    const onCSVSelect = useCallback(async () => {
        try {
            const selectedPath = (await open({
                multiple: false,
                filters: [
                    {
                        name: 'csv',
                        extensions: ['csv'],
                    },
                ],
            })) as string | null;

            if (null === selectedPath) {
                setErrorMsg('请选择文件');
                return;
            }

            console.log('onEntryBtnClick', selectedPath);

            const contents = await readTextFile(selectedPath);
            console.log('contents', contents);

            const parsedJson = readCSVContent(contents);
            console.log('parsed json', parsedJson);

            onSuccess(parsedJson as T[]);
        } catch (e: any) {
            onError && onError(e);
        }
    }, [onSuccess, onError]);

    return {
        errorMsg,
        setErrorMsg,
        onCSVSelect,
    };
};
