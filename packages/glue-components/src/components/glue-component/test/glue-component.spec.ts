import { newSpecPage } from '@stencil/core/testing';
import { GlueComponent } from '../glue-component';

describe('glue-component', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [GlueComponent],
      html: '<glue-component></glue-component>',
    });
    expect(root).toEqualHtml(`
      <glue-component>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </glue-component>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [GlueComponent],
      html: `<glue-component first="Stencil" last="'Don't call me a framework' JS"></glue-component>`,
    });
    expect(root).toEqualHtml(`
      <glue-component first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </glue-component>
    `);
  });
});
