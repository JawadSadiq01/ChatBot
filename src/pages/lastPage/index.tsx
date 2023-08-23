import { useSelector } from 'react-redux';
import {useLocation} from 'react-router-dom';
import {
  selectName,
  selectAge,
} from '../../reducer';
import { Typography } from "antd";

const PageThree = () => {
  const name = useSelector(selectName);
  const age = useSelector(selectAge);
  const data = useLocation();
  const { Title } = Typography;

  return (
    <div className="flex flex-col items-center">
      <Title level={4}>
        {`Your name ${data.state.name} aged ${data.state.age} has been added to student system. You may now exit.`}
      </Title>
    </div>
  )
}

export default PageThree;