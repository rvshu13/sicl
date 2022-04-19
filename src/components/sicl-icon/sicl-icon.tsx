import { Component, h, Prop } from '@stencil/core';
import feather from 'feather-icons';

@Component({
  tag: 'sicl-icon',
  styleUrl: 'sicl-icon.scss',
  shadow: true,
})
export class SiclIcon {
  @Prop() name: string;
  @Prop() size: string | '1em';

  render() {
    const icon = feather.icons[this.name].toSvg({
      'width': this.size,
      'height': this.size,
      'stroke-width': 2.08,
    });

    return <div style={{width: this.size, height: this.size}} innerHTML={icon}></div>;
  }
}
