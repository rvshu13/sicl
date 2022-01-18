import { Component, Element, h, Prop } from '@stencil/core';
import { getSize, getClasses } from '../../utils/utils';
import feather from 'feather-icons';

@Component({
  tag: 'sicl-icon',
  styleUrl: 'sicl-icon.scss',
  shadow: true,
})
export class SiclIcon {
  @Element() host: HTMLDivElement;
  @Prop() name: string;
  @Prop() size: string;

  private getIcon(): string {
    const icon = feather.icons[this.name].contents;
    const svg  = `<svg
    class=${getClasses(this.name)},
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round">
      ${icon}
    </svg>` 
    return svg;
  }
  
  render() {
    return (
      <div class="icon-container" style={{width: getSize(this.size),height: getSize(this.size)}} innerHTML={this.getIcon()}></div>
    );
  }

}
