import React from 'react';

const buildInfo = require('../build-info.json');

const BuildInfo = () => (
    <div style={{padding: '20px'}}>
        <div style={{fontWeight: 'bold'}}>
            Build Date
        </div>
        <h4>
            {buildInfo &&  buildInfo['build_date']}
        </h4>
        <div style={{fontWeight: 'bold'}}>
            Build Version
        </div>
        <h4>
            {buildInfo &&  buildInfo['build_version']}
        </h4>
    </div>
);

export default BuildInfo;