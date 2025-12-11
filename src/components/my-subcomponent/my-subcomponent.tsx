import { Component, h } from "@stencil/core";

@Component({
  tag: "my-subcomponent",
})
export class MySubcomponent {
  componentDidLoad() {
    console.log("componentDidLoad");
  }

  disconnectedCallback() {
    console.log("disconnectedCallback");
  }

  render() {
    return (
      <div>
        <h1>SUB-COMPONENT content</h1>
        <slot />
      </div>
    );
  }
}
