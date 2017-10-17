import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, defineMessages, FormattedMessage } from 'react-intl';

import rawMessages from './menu-react-intl.messages';

const Menu = ({ intl, FormattedMessage, messages }) => (
  <div>
    <a href={intl.formatMessage(messages.indexLink)}>
      <FormattedMessage {...messages.indexText} />
    </a>
    <a href={intl.formatMessage(messages.dashboardLink)}>
      <FormattedMessage {...messages.dashboardText} />
    </a>
    <a href={intl.formatMessage(messages.faqLink)}>
      <FormattedMessage {...messages.faqText} />
    </a>
  </div>
);

Menu.defaultProps = {
  messages: defineMessages(rawMessages),
  FormattedMessage,
};

export { Menu as Component, rawMessages as messages };
export default injectIntl(Menu);
