import { createBEM } from './bem';
// import { createTranslate } from './translate';

export function createNamespace(name: string) {
  // name = 'glue-' + name;
  return [createBEM(name)];
}
