import Button from 'ember-bootstrap/components/bs-button';
import { computed, action } from '@ember/object';

/**
 Button component with that can act as a dropdown toggler.

 See [Components.Dropdown](Components.Dropdown.html) for examples.

 @class DropdownButton
 @namespace Components
 @extends Components.Button
 @public
 */
export default class DropdownButton extends Button {
  '__ember-bootstrap_subclass' = true;

  @action
  handleKeyDown(e) {
    this.onKeyDown(e);
  }

  @computed('isOpen')
  get ariaExpanded() {
    return this.isOpen ? 'true' : 'false';
  }
}
