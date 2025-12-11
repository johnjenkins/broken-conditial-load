import { Component, State, h } from "@stencil/core";
@Component({
  tag: "my-component",
  styleUrl: "my-component.css",
})
export class MyComponent {
  @State()
  open = false;

  render() {
    const Tag = this.open ? "span" : "div";
    return (
      <Tag>
        <my-mid-subcomponent key="1">
          <slot key="2"></slot>
          <button key="3" type="button" onClick={() => (this.open = !this.open)}>
            Toggle open
          </button>
        </my-mid-subcomponent>
      </Tag>
    );
  }
}
