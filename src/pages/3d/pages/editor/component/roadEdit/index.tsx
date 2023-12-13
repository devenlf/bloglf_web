import {
  Button,
  Collapse,
  CollapseProps,
  Form,
  Image,
  InputNumber,
} from "antd";
import { listImg } from "./config";
const RoadEdit = () => {
  const items: CollapseProps["items"] = [
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
        >
          <Form.Item
            label="宽度"
            name="x"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="长度"
            name="y"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            label="高度"
            name="z"
            rules={[{ required: true }]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item label=" ">
            <Button type="primary" htmlType="submit">
              生成
            </Button>
          </Form.Item>
        </Form>
      ),
    },
    {
      key: "material",
      label: "材质",
      children: (
        <div>
          {listImg.map(({ type, src }) => (
            <div className="materialImg" key={type}>
              <img src={src}  />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return <Collapse items={items} defaultActiveKey={["1"]} />;
};

export default RoadEdit;
