import { Component, h } from "@stencil/core";

@Component({
  tag: "my-mid-subcomponent",
})
export class MyMidSubcomponent {
  render() {
    return <slot />;
  }
}
