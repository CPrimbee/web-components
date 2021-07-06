import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'badge-icon',
  styleUrl: 'badge.css',
  shadow: false,
  assetsDirs: ['assets'],
})
export class Badge {
  /**
  * Tipo do associado associado, morador, inquilino
  */
  @Prop() tipo: string;

  /**
  * Miniatura do badge
  */
  @Prop() mini: boolean = false;

  private getIcon(): string {
    switch (this.tipo) {
      case "associado":
        return "fa fa-star";    
      case "morador":
        return "fa fa-home";
      default:
        break;
    }
  }

  private getCompleteClass(): string{
    let classComplete = "";
    if (this.mini === true) {
      classComplete += "mini";
    }

    classComplete.concat(this.getIcon());
    return classComplete.concat(" ", this.getIcon());
  }
  
  render() {
    return (
      <Host>
        <slot>
          <i class={this.getCompleteClass()}></i>
        </slot>
      </Host>
    );
  }

}
