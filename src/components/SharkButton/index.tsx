import { FC } from "react";
import './index.css'


interface SharkButtonType extends React.HTMLProps<HTMLDivElement> {
  // 你可以在这里添加你自己的自定义属性
  text: string;
}

const SharkButton:FC<SharkButtonType> = ({text, ...restProps}) => {
  return <div className="light" {...restProps}>{text}</div>;
};

export default SharkButton;
