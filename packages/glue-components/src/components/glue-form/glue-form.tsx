import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
// import classNames from 'classnames';
const { children } = {
  children: [],
};
// export const FORM_KEY = 'vanForm';
@Component({
  tag: 'glue-form',
  styleUrl: 'glue-form.less',
  shadow: false,
})
export class GlueForm {
  @Prop({
    reflect: true,
  })
  colon: boolean;
  @Prop({
    reflect: true,
  })
  disabled: boolean;
  @Prop({
    reflect: true,
  })
  readonly: boolean;
  @Prop({
    reflect: true,
  })
  showError: boolean;
  @Prop({
    reflect: true,
  })
  labelWidth: string | number;
  @Prop({
    reflect: true,
  })
  labelAlign: string;
  @Prop({
    reflect: true,
  })
  inputAlign: string;
  @Prop({
    reflect: true,
  })
  scrollToError: boolean;
  @Prop({
    reflect: true,
  })
  validateFirst: boolean;
  @Prop({
    reflect: true,
  })
  errorMessageAlign: string;
  @Prop({
    reflect: true,
  })
  submitOnEnter = true;
  @Prop({
    reflect: true,
  })
  validateTrigger = 'onBlur';
  @Prop({
    reflect: true,
  })
  showErrorMessage = true;
  @Event() submitChange: EventEmitter;
  @Event() failed: EventEmitter;

  getFieldsByNames = (names) => {
    if (names) {
      return children.filter((field) => names.indexOf(field.name) !== -1);
    }
    return children;
  };

  validateSeq = (names) =>
    new Promise((resolve, reject) => {
      const errors = [];
      const fields = this.getFieldsByNames(names);

      fields
        .reduce(
          (promise, field) =>
            promise.then(() => {
              if (!errors.length) {
                return field.validate().then((error) => {
                  if (error) {
                    errors.push(error);
                  }
                });
              }
            }),
          Promise.resolve()
        )
        .then(() => {
          if (errors.length) {
            reject(errors);
          } else {
            resolve(true);
          }
        });
    });

  validateAll = (names) =>
    new Promise((resolve, reject) => {
      const fields = this.getFieldsByNames(names);
      Promise.all(fields.map((item) => item.validate())).then((errors) => {
        errors = errors.filter((item) => item);

        if (errors.length) {
          reject(errors);
        } else {
          resolve(true);
        }
      });
    });

  validateField = (name) => {
    const matched = children.filter((item) => item.name === name);

    if (matched.length) {
      return new Promise((resolve, reject) => {
        matched[0].validate().then((error) => {
          if (error) {
            reject(error);
          } else {
            resolve(true);
          }
        });
      });
    }

    return Promise.reject();
  };

  validate = (name?) => {
    if (name && !Array.isArray(name)) {
      return this.validateField(name);
    }
    return this.validateFirst ? this.validateSeq(name) : this.validateAll(name);
  };

  resetValidation = (name) => {
    if (name && !Array.isArray(name)) {
      name = [name];
    }

    const fields = this.getFieldsByNames(name);
    fields.forEach((item) => {
      item.resetValidation();
    });
  };

  scrollToField = (name, options?) => {
    children.some((item) => {
      if (item.name === name) {
        item.$el.scrollIntoView(options);
        return true;
      }
      return false;
    });
  };

  getValues = () =>
    children.reduce((form, field) => {
      form[field.name] = field.formValue.value;
      return form;
    }, {});

  submit = () => {
    const values = this.getValues();

    this.validate()
      .then(() => {
        this.submitChange.emit(values);
      })
      .catch((errors) => {
        this.failed.emit({ values, errors });

        if (this.scrollToError) {
          this.scrollToField(errors[0].name);
        }
      });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.submit();
  };
  render() {
    return (
      <Host>
        <form class="glue-form" onSubmit={this.onSubmit}>
          <slot></slot>
        </form>
      </Host>
    );
  }
}
