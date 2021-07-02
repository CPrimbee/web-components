import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'badge-associado',
  styleUrl: 'badge-associado.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class BadgeAssociado {
  @Prop() associadoIcon = 'star.svg';

  render() {
    return (
      <Host>
        <i class="fa-star"></i>
      </Host>
    );
  }

}
