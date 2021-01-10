import { createBEM } from './bem';
// import { createTranslate } from './translate';

export function createNamespace(name: string) {
  return [createBEM(name)];
}
