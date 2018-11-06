const HAS_ALL_REQUIRED_OPTION = 'has all required option';
const EXCLUDE_IMMEDIATE_OPTION = 'exclude immediate option';
const EXCLUDE_IMMEDIATE_ADN_PREVENT_DUPLICATE_CALL = 'exclude immediate and prevent duplicate call';
const EXCLUDE_PREVENT_DUPLICATE_CALL_OPTION = 'exclude prevent duplicate call option';
const EXCLUDE_FINISH = 'exclude finish';
const TASK_PARAMS_UNDEFINED = 'task params undefined'

export const ACTIONS = {
    hasAllRequiredOption: {
        immediate: true,
        preventDuplicateCall: true,
        tasks: {
            name: HAS_ALL_REQUIRED_OPTION,
            params: function () {

            },
        },
        finish: function () {

        }
    },
    excludeImmediateOption: {
        preventDuplicateCall: true,
        tasks: {
            name: EXCLUDE_IMMEDIATE_OPTION,
            params: function () {

            }
        },
        finish: function () {

        }
    },
    excludeImmediateAndPreventDuplicateCall: {
        tasks: {
            name: EXCLUDE_IMMEDIATE_ADN_PREVENT_DUPLICATE_CALL,
            params: function () {

            }
        },
        finish: function () {

        }
    },
    excludepreventDuplicateCallOption: {
        tasks: {
            name: EXCLUDE_PREVENT_DUPLICATE_CALL_OPTION,
            params: function () {

            }
        },
        finish: function () {

        }
    },
    excludeFinish: {
        immediate: true,
        preventDuplicateCall: true,
        tasks: {
            name: EXCLUDE_FINISH,
            params: function () {

            },
        }
    },
    excludeTasks: {
        immediate: true,
        preventDuplicateCall: true,
        finish: function () {

        }
    },
    tasksNameUndefined: {
        immediate: true,
        preventDuplicateCall: true,
        tasks: {
            params: function () {

            },
        },
        finish: function () {

        }
    },
    tasksParamsUndeinfed: {
        immediate: true,
        preventDuplicateCall: true,
        tasks: {
            name: TASK_PARAMS_UNDEFINED,
            params: function () {

            },
        },
        finish: function () {

        }
    }
};

export const hasAllRequiredOptionAction = {
    hasAllRequiredOption: {
        immediate: true,
        preventDuplicateCall: true,
        tasks: {
            name: HAS_ALL_REQUIRED_OPTION,
            params: function () {

            },
        },
        finish: function () {

        }
    }
}