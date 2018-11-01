# woowahan-action-player 시나리오

## Feature
### view에서 actions 객체를 받아왔을 경우에 처리를 하는가? 
    1. actions 객체가 있을 경우에 actions 내부에는 action들의 잘 받아오는가? 
    2. 모든 action 객체 안에는 필수 속성들이 들어오는가? 
    3. tasks의 속성이 array 또는 object인가? 
    4. finish는 해당 뷰에 메서드가 있는가? 또는 finish가 함수인가?

    
### 중복된 action dispatch가 됐을 때 
    1. preventDuplicateCall 옵션의 값이 제대로 들어오고 있는가?
    2. preventDuplicateCall 옵션이 true일 경우에는 dispatch를 막고 있는가? 
    
### Tasks가 Sequency하게 작업이 되는가? 
    1. 옵션 sequence 값이 제대로 넘어오는가?
    2. sequence 값이 true일 경우에는 순차적으로 처리하는가? 
    3. 순차적으로 넘어 온 값들이 잘 bypass 되는가? 

### immediate 옵션이 true 일 경우에는 즉시 실행이 되는가? 
    1. immediate가 제대로 동작을 하는가? 
    2. 

### 여러개의 tasks를 등록했을 때 
    1. tasks를 실행하다가 하나라도 실패했을 경우에는 실패가 잘 떨어지는가?
    2. tasks가 여러개 들어왔을 경우 