import { Button, Form } from 'antd';
import { FormItemInput, FormItemInputPassword } from '../../ui/components';
import { useScreenSize } from '../../hooks';
import { authConstants } from '../../constants/authConstants';
import { loginButton } from '../ui';
import '../ui/loginPage.css';
import { loginMutation } from '../../stores/auth/thunks';

export const LoginPage = () => {
  const { isMobile } = useScreenSize();

  const mutation = loginMutation();

  console.log(mutation);

  return (
    <>
      <div className="login">
        <Form
          name="login"
          className="login-form"
          initialValues={{ email: '', password: '' }}
          onFinish={(values) => {
            mutation.mutate(values);
          }}
        >
          <img
            className="logo"
            src="../../../public/XIK_VerdeTransparente.png"
            alt="XikDev"
          />
          <div className="login-inputs">
            <FormItemInput
              name="email"
              placeholder={authConstants.placeholderEmail}
              rules={[
                {
                  type: 'email',
                  message: authConstants.emailWrongFormat,
                },
              ]}
              classname="login-inputs-input"
            />

            <FormItemInputPassword />
          </div>

          <Form.Item
            style={{
              width: isMobile ? 'calc(100% - 50px)' : 'calc(100% - 96px)',
            }}
          >
            <Button
              className="login-button"
              style={loginButton}
              htmlType="submit"
            >
              {authConstants.bttnLogin}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};
