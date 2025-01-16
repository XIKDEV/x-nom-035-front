import { Drawer, Layout } from "antd";
import { SideBar } from "../components";
import { useLayoutMainPage } from "../hooks";
import { ILayoutMainPageProps } from "../../interfaces";
import { drawerStyles, layoutStyle, siderStyles } from "../ui";
import "../ui/layouts.css";

const { Content, Sider } = Layout;

export const LayoutMainPage: React.FC<ILayoutMainPageProps> = ({
  page: Page,
}) => {
  const { isMobile, isCollapse, handleSidebar, sideBarProps } =
    useLayoutMainPage();

  const sideBarComponent = <SideBar {...sideBarProps} />;

  return (
    <Layout style={layoutStyle}>
      {isMobile ? (
        <Drawer
          open={!isCollapse}
          onClose={handleSidebar}
          closable={false}
          placement={drawerStyles.placement}
          width={drawerStyles.width}
          styles={{ body: drawerStyles.bodyStyle }}
          data-testid="drawer"
        >
          {sideBarComponent}
        </Drawer>
      ) : (
        <Sider
          className="flex-column-center space-between"
          style={siderStyles}
          width={186}
          collapsedWidth={64}
          collapsed={isCollapse}
          data-testid="sider"
        >
          {sideBarComponent}
        </Sider>
      )}

      <Content className="content-layout">
        <Page handleSidebar={handleSidebar} />
      </Content>
    </Layout>
  );
};
