import { html, LitElement } from 'lit';
import {map} from 'lit/directives/map.js';
import { useStores } from '@nanostores/lit';
import { customElement } from 'lit/decorators.js';

import { addItemAction, exampleStore, initListAction } from './example.store';

@customElement("main-element")
@useStores(exampleStore)
class MainElement extends LitElement {
  private onAddButtonClicked() {
    addItemAction();
  }

  private onInitButtonClicked() {
    initListAction();
  }

  render() {
    const values = exampleStore.get();

    values.sort((a, b) => b.getTime() - a.getTime());

    return html`
      <button @click=${this.onInitButtonClicked}>init list</button>
      <button @click=${this.onAddButtonClicked}>add</button>
      <ul>${map(values.splice(0, 5), (value) => html`<li>${value}</li>`)}</ul>
    `;
  }
}

const elem = new MainElement();
document.body.appendChild(elem);
