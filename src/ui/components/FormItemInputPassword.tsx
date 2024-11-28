import { Form, Input } from "antd";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { IFormFieldLogin } from "../../interfaces";
import { authConstants } from "../../constants";
import { loginInput } from "../../auth/ui/styles";

export const FormItemInputPassword = () => {
  return (
    <Form.Item<IFormFieldLogin>
      name="password"
      style={{ marginBottom: "0px" }}
      rules={[
        { required: true, message: authConstants.passwordWarning },
        { min: 8, message: authConstants.passwordWarningMin },
      ]}
      validateTrigger="onSubmit"
    >
      <Input.Password
        type="password"
        autoComplete="off"
        placeholder={authConstants.placeholderPassword}
        className="login-inputs-input"
        style={{
          marginBottom: "0px",
          ...loginInput,
        }}
        iconRender={(visible) =>
          visible ? (
            <EyeOutlined style={{ color: "var(--gray)" }} />
          ) : (
            <EyeInvisibleOutlined style={{ color: "var(--gray)" }} />
          )
        }
      />
    </Form.Item>
  );
};
