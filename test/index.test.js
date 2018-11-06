import ViewConstructor from './view';
import { hasAllRequiredOptionAction } from './mock-data/input.action';

describe('initialize action player', () => {
    test('view has actions object', () => {
        const view = ViewConstructor(hasAllRequiredOptionAction);

        expect(typeof view.actions).toBe('object');
    });

    test('woowahan-action-player make action dispatcher function', () => {
        const view = ViewConstructor(hasAllRequiredOptionAction);

        const actions = Object.keys(view.actions);

        actions.forEach(action => {
            expect(typeof view[action]).toBe('function');
        });
    });

    test('action apply multiple tasks', () => {
        const TASK_1 = 'task 1';
        const TASK_2 = 'task 2';
        const TASK_3 = 'task 3';

        const actions = {
            multipleTasksAction: {
                immediate: true,
                tasks: [{
                    name: TASK_1,
                    params: {
                        number: 1
                    }
                }, {
                    name: TASK_2,
                    params: {
                        number: 2
                    }
                }, {
                    name: TASK_3,
                    params: {
                        number: 3
                    }
                }],
                finish(results) {
                    expect(results[TASK_1].resp.number).toBe(1);
                    expect(results[TASK_2].resp.number).toBe(2);
                    expect(results[TASK_3].resp.number).toBe(3);
                }
            }
        }

        const view = ViewConstructor(actions);
        
        view.multipleTasksAction();
    });

    test('has immediate option', () => {
        const finish = jest.fn();
        const actions = {
            immediateAction: {
                immediate: true,
                tasks: {
                    name: 'immediate action',
                    params: {

                    }
                },
                finish
            }
        }
        const view = ViewConstructor(actions);

        expect(view.actions.immediateAction).toHaveProperty('immediate');
    });

    test('immediate excute action player when immediate option is true', () => {
        const finish = jest.fn();
        const actions = {
            immediateAction: {
                immediate: true,
                tasks: {
                    name: 'immediate action',
                    params: {

                    }
                },
                finish() {
                    finish();

                    expect(finish).toHaveBeenCalled();
                }
            }
        };

        const view = ViewConstructor(actions);

        expect(view.actions.immediateAction.immediate).toBeTruthy();
    });

    test('action has sequence option', () => {
        const ACTION_1 = 'sequence action 1';
        const ACTION_2 = 'sequence action 2';
        const ACTION_3 = 'sequence action 3';

        const actions = {
            sequenceActions: {
                sequence: true,
                tasks: [{
                    name: ACTION_1,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }, {
                    name: ACTION_2,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }, {
                    name: ACTION_3,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }],
                finish(results) {
                    expect(results[ACTION_1].resp.no).toBe(1);
                    expect(results[ACTION_2].resp.no).toBe(2);
                    expect(results[ACTION_3].resp.no).toBe(3);
                }
            }
        };

        expect(actions.sequenceActions).toHaveProperty('sequence');
    });

    test('tasks success sequence when sequence option true', () => {
        const ACTION_1 = 'sequence action 1';
        const ACTION_2 = 'sequence action 2';
        const ACTION_3 = 'sequence action 3';

        const actions = {
            sequenceActions: {
                sequence: true,
                tasks: [{
                    name: ACTION_1,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }, {
                    name: ACTION_2,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }, {
                    name: ACTION_3,
                    params(data = {}) {
                        const newData = {};
                        newData.no = !!data.no ? data.no + 1 : 1;

                        return newData;
                    }
                }],
                finish(results) {
                    expect(results[ACTION_1].resp.no).toBe(1);
                    expect(results[ACTION_2].resp.no).toBe(2);
                    expect(results[ACTION_3].resp.no).toBe(3);
                }
            }
        };

        expect(actions.sequenceActions.sequence).toBeTruthy();

        const view = ViewConstructor(actions);

        view.sequenceActions();
    });

    test('has preventDuplicateCall option', () => {
        const finish = jest.fn();
        const actions = {
            preventDupliacteCallAction: {
                preventDuplicateCall: true,
                tasks: {
                    name: 'immediate action',
                    params() {
                        finish();

                        expect(finish).toHaveBeenCalledTimes(1);
                    }
                },
                finish() {}
            }
        }

        expect(actions.preventDupliacteCallAction).toHaveProperty('preventDuplicateCall');
    });

    test('prevent dupliacate action call when preventDupliacteCall option is true', () => {
        const finish = jest.fn();
        const actions = {
            preventDupliacteCallAction: {
                preventDuplicateCall: true,
                tasks: {
                    name: 'immediate action',
                    params() {
                        finish();

                        expect(finish).toHaveBeenCalledTimes(1);
                    }
                },
                finish() {

                }
            }
        };

        expect(actions.preventDupliacteCallAction.preventDuplicateCall).toBeTruthy();

        const view = ViewConstructor(actions);

        view.preventDupliacteCallAction();
        view.preventDupliacteCallAction();
        view.preventDupliacteCallAction();
        view.preventDupliacteCallAction();
    });
});