import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { useWeaponContext } from '../context';
import UploadStep from './UploadStep';
import ReadyStep from './ReadyStep';

type StepsSwitchProps = {
    //
};

const StepsSwitch: FC<StepsSwitchProps> = () => {
    const { store } = useWeaponContext();

    const currentStep = store.step;

    const content = useMemo(() => {
        switch (currentStep) {
            case 0:
                return <UploadStep />;
            case 1:
                return <ReadyStep />;
        }
    }, [currentStep]);

    return <div className="step-switch">{content}</div>;
};

export default observer(StepsSwitch);
