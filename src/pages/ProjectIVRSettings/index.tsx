import {
  Steps,
  Input,
  Select,
  Button,
  InputNumber,
  Form,
  Row,
  Col,
  Layout,
  Space,
  TimePicker,
  Tooltip,
  Typography,
} from 'antd';
import {
  PlusOutlined,
  PlayCircleOutlined,
  CloseOutlined,
  EditOutlined,
  UploadOutlined,
} from '@ant-design/icons';

const { Header, Footer, Sider, Content } = Layout;

const Title = Typography.Title;

const { Step } = Steps;

const { Option } = Select;

const ProjectIVRSettings = () => {
  return (
    <div>
      <Title level={1}>Настройка проекта</Title>
    </div>
  );
};
export { ProjectIVRSettings };
