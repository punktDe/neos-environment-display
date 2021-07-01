import React, { PureComponent } from 'react';
import styles from './EnvironmentDisplay.css';
import PropTypes from 'prop-types';
import {neos} from '@neos-project/neos-ui-decorators';
import {Icon} from "@neos-project/react-ui-components";

@neos((globalRegistry) => ({
    displayConfiguration: globalRegistry.get('frontendConfiguration').get('PunktDe.NeosEnvironmentDisplay')
}))
export class EnvironmentDisplay extends PureComponent {
    static propTypes = {
        displayConfiguration: PropTypes.object,
    };

    render() {
        const { backgroundColor, label, icon } = this.props.displayConfiguration

        return (label !== ''
            && <div className={styles.wrapper} style={{backgroundColor: backgroundColor}}>
                {icon ? <Icon icon={icon} padded={'right'} /> : ''}<span className={styles.content}>{label}</span>
            </div>
        );
    }
}
