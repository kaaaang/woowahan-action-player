import ActionPlayer from '../src';

const MiddlewareObject = {

};

ActionPlayer.call(MiddlewareObject);

const reducer = (action) => {

    return {
        response: action.data,
        error: ''
    }
}

export default (actions = {}) => {
    const View = {
        initialize() {
            this.viewWillMount();

            MiddlewareObject.before(this);

            return this;
        },
        
        actions,

        viewWillMount() {
            this.mount();
        },

        mount() {
            this.viewDidMount();
        },

        viewDidMount() { 
        },

        dispatch(action, callback) {
            const { error, response } = reducer(action);

            callback(error, response);
        }
    };

    return View.initialize();
}