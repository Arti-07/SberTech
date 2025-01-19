import { jest } from '@jest/globals';

jest.mock<typeof import('@brojs/cli')>('@brojs/cli', () => {
    global.System = {
        get: () => ({
            getConfig: jest.fn(),
            getConfigValue: jest.fn(),
            getNavigations: jest.fn(),
            getNavigationsValue: jest.fn(),
            getAllFeatures: jest.fn(),
            getFeatures: jest.fn(),
            getHistory: jest.fn(),
            getNavigation: jest.fn(),
            getNavigationValue: jest.fn()
        })
    };
    const originalBroJsCli = jest.requireActual<typeof import('@brojs/cli')>('@brojs/cli');

    return {
        ...originalBroJsCli,
        getConfigValue: () => {
            return 'mocked_value';
        }
    };
});