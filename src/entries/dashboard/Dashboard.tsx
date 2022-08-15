import React, { FC } from 'react';
import { useAppVersion } from '../../hooks/useAppVersion';

type DashboardProps = {
    //
};

const Dashboard: FC<DashboardProps> = () => {
    const appVersion = useAppVersion();

    return (
        <div>
            <p>RWR 数据查看工具</p>
            <p>v: {appVersion}</p>
            <p>
                点击左上角菜单按钮切换页面
            </p>
        </div>
    );
};

export default Dashboard;
