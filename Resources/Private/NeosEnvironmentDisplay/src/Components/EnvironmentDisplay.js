import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { neos } from '@neos-project/neos-ui-decorators';
import { Icon } from '@neos-project/react-ui-components';

import './EnvironmentDisplay.css';

@neos((globalRegistry) => ({
    displayConfiguration: globalRegistry.get('frontendConfiguration').get('PunktDe.NeosEnvironmentDisplay')
}))
export class EnvironmentDisplay extends PureComponent {
    static propTypes = {
        displayConfiguration: PropTypes.object
    };

    render() {
        const { backgroundColor, label, secondaryLabel, icon } = this.props.displayConfiguration;

        return (label !== ''
            && <div className="environment-display-wrapper" style={{ backgroundColor: backgroundColor }}>
                {icon ? <Icon icon={icon} padded={'right'} /> : ''}
                <span className="environment-display-wrapper__content">
                  {label}
                  {secondaryLabel && (<small>{secondaryLabel}</small>)}
                </span>
            </div>
        );
    }
}
