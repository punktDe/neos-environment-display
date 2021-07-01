import manifest from '@neos-project/neos-ui-extensibility';
import { EnvironmentDisplay } from './Components/EnvironmentDisplay';

manifest('PunktDe.EditConflictPrevention:HighlightNonEditablePage', {}, (globalRegistry) => {
    const containerRegistry = globalRegistry.get('containers');
    containerRegistry.set('PrimaryToolbar/Left/PunktDe.NeosEnvironmentDisplay.CurrentEnvironment', EnvironmentDisplay);
});
