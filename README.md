# React Testing Library

1. 테스트 코드를 먼저 작성해놓고, 그 결과값에 맞게 컴포넌트를 구성한다.

### 지켜야 할 것
1. 테스트코드는 구현의 보조수단이 아닌 잘못된 설계를 되짚어줄 수 있는 필수적인 수단이다.
   1. 어떻게 테스트할지를 먼저 고민하고 구현해야 한다.
2. 테스트하기 좋은 코드는 `순수함수`이다. 제어할 수 없는 값에 의존하는 것은 테스트를 힘들게 한다.
   - 제어할 수 없는 값이란?
   1. `Random()`, `new Date()`등 실행할 때마다 결과가 다른 함수
   2. inputBox 등 사용자의 입력에 의존하는 경우
   3. DB/API 등 외부에서 가져온 결과를 사용하는 코드

### 참고자료
- [https://jojoldu.tistory.com/674](https://jojoldu.tistory.com/674)
- [https://maeng2418.github.io/react/react_testing_library/?fbclid=IwAR19NXplUrAKKkxkcYNuN12w3XH_-sL5cvQauzpadH2zygZU6CQvv4piqRI](https://maeng2418.github.io/react/react_testing_library/?fbclid=IwAR19NXplUrAKKkxkcYNuN12w3XH_-sL5cvQauzpadH2zygZU6CQvv4piqRI)
