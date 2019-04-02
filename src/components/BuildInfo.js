import React from 'react';

const buildInfo = require('../../build-info.json');

const BuildInfo = () => (
    <div style={{padding: '20px'}}>
        <div style={{fontWeight: 'bold'}}>
            Build Date
        </div>
        <div style={{float: 'right'}}>
            {buildInfo &&  buildInfo['build_date']}
        </div>
        <div style={{fontWeight: 'bold'}}>
            Build Version
        </div>
        <div style={{float: 'right'}}>
            {buildInfo &&  buildInfo['build_version']}
        </div>
    </div>
);

export default BuildInfo;