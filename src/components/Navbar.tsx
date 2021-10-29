import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../router";
import {userTypedSelector} from "../hooks/userTypedSelector";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {

    const router =useHistory()
    const { isAuth , user} = userTypedSelector(state => state.auth)
    const { loginOut } = useActions()
    return (
        <Layout.Header>
            <Row justify="end">
                {
                    isAuth
                    ?
                        <>
                            <div style={{color:"white"}}>
                                {user.username}
                            </div>
                                <Menu
                                    theme="dark"
                                    mode="horizontal"
                                    selectable={false}
                                >
                                    <Menu.Item
                                        key={1}
                                        onClick={loginOut}
                                    >
                                        LOGOUT
                                    </Menu.Item>
                                </Menu>
                        </>
                    :
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        >
                            <Menu.Item
                                key={1}
                                onClick={() => router.push(RouteNames.LOGIN)}>
                                Login
                            </Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar