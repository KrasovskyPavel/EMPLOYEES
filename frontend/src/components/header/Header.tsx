import { Layout, Space, Typography } from "antd";
import style from "./style.module.css";
import { LoginOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import CustomButtom from "../custom-buttom";
import { Link } from "react-router-dom";
import { Paths } from "../../paths";

const Header = () => {
  return (
    <Layout.Header className={style.header}>
      <Space>
        <TeamOutlined className={style.teamIcon} />
        <Link to={Paths.home}>
          <CustomButtom type="link" ghost={true}>
            <Typography.Title level={3}>Сотрудники</Typography.Title>
          </CustomButtom>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButtom type="text" ghost={true} icon={<UserOutlined />}>
            Зарегистрироваться
          </CustomButtom>
        </Link>
        <Link to={Paths.login}>
          <CustomButtom type="text" ghost={true} icon={<LoginOutlined />}>
            Войти
          </CustomButtom>
        </Link>
      </Space>
    </Layout.Header>
  );
};

export default Header;
