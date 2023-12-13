/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  InputNumber,
  Radio,
  Space,
} from "antd";
import { listImg } from "./config";
import { useState } from "react";
const RoadEdit = () => {
  const [value, setValue] = useState(1);
  const onFinish = (value: object) => {
    console.log(value, "value");
  };

  const onChange = (val: any) => {
    setValue(val?.target.value)
  };
  const items: CollapseProps["items"] = [
    {
      key: "material",
      label: "材质",
      children: (
        <Radio.Group onChange={onChange} value={value}>
          <Space direction="vertical">
            {listImg.map(({ type, src }) => (
              <Radio value={type}>
                <div className="materialImg">
                  <img src={src} />
                </div>
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      ),
    },
    {
      key: "size",
      label: "尺寸",
      children: (
        <Form
          name="wrap"
          labelCol={{ flex: "60px" }}
          labelAlign="left"
          labelWrap
          wrapperCol={{ flex: 1 }}
          colon={false}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
        >
          <Form.Item label="宽度" name="x" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="长度" name="y" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item label="高度" name="z" rules={[{ required: true }]}>
            <InputNumber />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              设置
            </Button>
          </Form.Item>
        </Form>
      ),
    },
  ];

  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default RoadEdit;
