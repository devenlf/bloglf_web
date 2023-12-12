import { Collapse, CollapseProps, Image, InputNumber } from "antd";
import { listImg } from "./config";
const RoadEdit = () => {
    const items: CollapseProps['items'] = [
        {
          key: 'size',
          label: '尺寸',
          children: <InputNumber prefix="大小" style={{ width: '100%' }} />,
        },
        {
          key: 'material',
          label: '材质',
          children: <div>
            {listImg.map(({type,src})=><div className="materialImg">
            <img src={src} key={type}/>
            </div>)}
          </div>
        },
      ];

      return <Collapse items={items} defaultActiveKey={['1']} />;

}

export default RoadEdit