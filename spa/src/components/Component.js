export default class Component {
  $target;
  $props;
  state;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setUp();
    this.render();
  }

  mount() {} // 초기화
  setUp() {} // state 초기화
  // 상태 업데이트
  setState(newState) {
    const updatedState = { ...this.state, ...newState };
    if (JSON.stringify(this.state) === JSON.stringify(updatedState)) return;
    this.state = updatedState;
    this.render();
  }

  // 이벤트 등록
  registerEvents(eventType, selector, callback) {
    this.$target.addEventListener(eventType, (event) => {
      if (!event.target.closest(selector)) return false;
      callback(event);
    });
  }

  // DOM 템플릿 생성
  template() {
    return "";
  }

  // DOM 렌더링
  render() {
    console.log(this.$target);
    this.$target.innerHTML = this.template();
    this.mount();
  }
}
