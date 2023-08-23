import { useNavigate } from 'react-router-dom';
import { Button, Typography } from "antd";
import { ROUTES_CONSTANTS } from "../../config/constants";
const { Title } = Typography;

const PageOne = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center">
      <Title level={3}>
        Enter into Student Info System
      </Title>

      <Button 
        type="primary" 
        onClick={() => navigate(`/${ROUTES_CONSTANTS.SECOND_PAGE}`)}
      >
        Enroll Now!
      </Button>
    </div>
  )
}

export default PageOne;