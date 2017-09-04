import React from 'react';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import { UserMenu as UserMenuAxiom } from 'bw-axiom';
import UserMenu from './UserMenu';

function render(props, opts = {}) {
  return shallow(<UserMenu { ...props } />, opts);
}

describe('UserMenu', () => {
  let props;
  let opts;

  beforeEach(() => {
    props = {
      email: 'a@b.co',
      imageUrl: 'http://a.png',
      name: 'Ace',
      onProfileReceived: sinon.stub(),
    };
    opts = {
      lifecycleExperimental: true,
      context: {
        brandwatchAuthGetProfile: sinon.stub(),
        brandwatchAuthLogout: sinon.stub(),
      },
    };
    opts.context.brandwatchAuthGetProfile.resolves();
  });

  describe('UserMenu', () => {
    it('retrieves the user profile on mount', () => {
      render(props, opts);
      expect(opts.context.brandwatchAuthGetProfile.calledOnce).toBeTruthy();
    });

    it('calls the onProfileReceived property with the result of the auth call', () => {
      render(props, opts);
      setImmediate(() => {
        expect(props.onProfileReceived.calledOnce).toBeTruthy();
      });
    });

    it('renders nothing if there is no email property', () => {
      props.email = null;
      expect(render(props, opts).get(0)).toBeFalsy();
    });

    it('calls the brandwatchAuthLogout context property when the user logs out', () => {
      render(props, opts).find(UserMenuAxiom).prop('onLogout')();
      expect(opts.context.brandwatchAuthLogout.calledOnce).toBeTruthy();
    });
  });
});
