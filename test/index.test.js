import ViewConstructor from './view';


let view;

beforeEach(() => {
    view = ViewConstructor();
});

describe('action player', () => {
    test('view has actions object', () => {
       expect(typeof view.actions).toBe('object');
    });
    
    // subcribe를 이용해서 사용
    // beforeTest를 이용해서 View를 생성
    test('woowahan-action-player make action dispatcher function', () => {
        const actions = Object.keys(view.actions);
    
        actions.forEach(action => {
            expect(typeof view[action]).toBe('function');
        });
    });
});
