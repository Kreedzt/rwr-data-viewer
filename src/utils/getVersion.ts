import pkg from '../../package.json';

export const getVersion = (): string => {
    return pkg.version;
};
