import React from 'react';
import { SessionIconButton, SessionIconSize, SessionIconType } from '../icon';

import { SettingsViewProps } from './SessionSettings';

export class SettingsHeader extends React.Component<SettingsViewProps> {
  public constructor(props: any) {
    super(props);
  }

  public focusSearch() {
    $('.left-pane-setting-section .session-search-input input').focus();
  }

  public render() {
    const category = String(this.props.category);
    const categoryTitlePrefix = category[0].toUpperCase() + category.substr(1);
    // Remove 's' on the end to keep words in singular form
    const categoryTitle =
      categoryTitlePrefix[categoryTitlePrefix.length - 1] === 's'
        ? `${categoryTitlePrefix.slice(0, -1)} Settings`
        : `${categoryTitlePrefix} Settings`;
    const showSearch = false;

    return (
      <div className="session-settings-header">
        {categoryTitle}
        {showSearch && <SessionIconButton
          iconType={SessionIconType.Search}
          iconSize={SessionIconSize.Huge}
          onClick={this.focusSearch}
        />}
      </div>
    );
  }
}
