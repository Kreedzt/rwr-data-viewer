import React, {
    createContext,
    forwardRef,
    useContext,
    useImperativeHandle,
    useMemo,
    useRef,
} from 'react';
import { WeaponStore } from './store';

interface WeaponContext {
    store: WeaponStore;
}
const WeaponContext = createContext<WeaponContext>({
    store: new WeaponStore(),
});

interface WeaponProviderRef {
    getStore: () => WeaponStore;
}

interface WeaponProviderProps {
    children: React.ReactNode;
}

export const useWeaponContext = () => {
    return useContext(WeaponContext);
};

export const useWeaponProviderRef = () => {
    return useRef<null | WeaponProviderRef>(null);
};

export const WeaponProvider = forwardRef<
    WeaponProviderRef,
    WeaponProviderProps
>(({ children }, ref) => {
    const storeRef = useRef<WeaponStore>(new WeaponStore());

    const value = useMemo<WeaponContext>(() => {
        return {
            store: storeRef.current,
        };
    }, []);

    useImperativeHandle(
        ref,
        () => {
            return {
                getStore: () => storeRef.current,
            };
        },
        [],
    );

    return (
        <WeaponContext.Provider value={value}>
            {children}
        </WeaponContext.Provider>
    );
});
