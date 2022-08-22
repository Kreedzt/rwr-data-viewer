import * as XLSX from 'xlsx';

export const readCSVContent = <T>(contents: string): T[] => {
    const parsed = XLSX.read(contents, {
        type: 'string',
    });
    console.log('parsed', parsed);

    const parsedJson = XLSX.utils.sheet_to_json(parsed.Sheets['Sheet1']) as T[];
    console.log('parsed json', parsedJson);

    return parsedJson;
};
