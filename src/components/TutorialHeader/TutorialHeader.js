import React from 'react';
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from 'carbon-components-react';
import {
  Notification20,
  UserAvatar20,
  Help20,
  Settings20,
  Menu20,
} from '@carbon/icons-react';
import { Link } from 'react-router-dom';

const TutorialHeader = () => (
  <HeaderContainer
    render={({ isSideNavExpanded, onClickSideNavExpand }) => (
      <Header aria-label="Carbon Tutorial">
        <SkipToContent />
        <HeaderMenuButton
          aria-label="Open menu"
          onClick={onClickSideNavExpand}
          isActive={isSideNavExpanded}
        />
        <HeaderName element={Link} to="/" prefix="">
          MaestroQA
        </HeaderName>
        <HeaderNavigation aria-label="Carbon Tutorial">
          <HeaderMenuItem element={Link} to="/reports">
            Reporting
          </HeaderMenuItem>
          <HeaderMenuItem href="/performance">Performance</HeaderMenuItem>
          <HeaderMenuItem href="/assignments">Assignments</HeaderMenuItem>
          <HeaderMenuItem href="/tickets">Tickets</HeaderMenuItem>
        </HeaderNavigation>
        <SideNav
          aria-label="Side navigation"
          expanded={isSideNavExpanded}
          isPersistent={false}>
          <SideNavItems>
            <HeaderSideNavItems>
              <HeaderMenuItem element={Link} to="/reports">
                Reporting
              </HeaderMenuItem>
              <HeaderMenuItem href="/performance">Performance</HeaderMenuItem>
              <HeaderMenuItem href="/assignments">Assignments</HeaderMenuItem>
              <HeaderMenuItem href="/tickets">Tickets</HeaderMenuItem>
            </HeaderSideNavItems>
          </SideNavItems>
        </SideNav>
        <HeaderGlobalBar>
          <HeaderGlobalAction aria-label="Notifications">
            <Notification20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Help">
            <Help20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Settings">
            <Settings20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="User Avatar">
            <UserAvatar20 />
          </HeaderGlobalAction>
          <HeaderGlobalAction aria-label="Menu">
            <Menu20 />
          </HeaderGlobalAction>
        </HeaderGlobalBar>
      </Header>
    )}
  />
);

export default TutorialHeader;
