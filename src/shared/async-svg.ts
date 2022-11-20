import {directive, AsyncDirective} from 'lit/async-directive.js';
import type {Part, DirectiveParameters} from 'lit/directive.js';
import { html, TemplateResult } from 'lit';

interface Options {
  size?: number;
  color?: string;
}

class LoadSVGDirective extends AsyncDirective {
  size!: number;
  color!: string;
  content?: TemplateResult<1>

  update(part: Part, [svg, options]: DirectiveParameters<this>) {
    if (this.isConnected) {

      this.size = options?.size ?? 90;
      this.color = options?.color ?? "black";
      this.loader(svg);
    }
    return this.render(svg);
  }

  async loader (svg: string) {
    // TODO: catch this.
    const module = await import(`./svg/${svg}.svg`)
    const content = html`<svg xmlns="http://www.w3.org/2000/svg" height="${this.size}" width="${this.size}" viewBox="0 0 30 30">${module.default(this.color)}</svg>`
    this.content = content
    this.setValue(content)
  }

  render(svg: string, options?: Options){
    return this.content
  }

}

export const loadSVG = directive(LoadSVGDirective);