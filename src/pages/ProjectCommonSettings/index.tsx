import { FormInstance, Typography } from 'antd';
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
} from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';
//import MaskedInput from 'antd-mask-input';
import '../../index.css';
import moment from 'moment';
import { useRef } from 'react';

//const { Header, Footer, Sider, Content } = Layout;

const Title = Typography.Title;

const { Step } = Steps;

const { Option } = Select;

const { RangePicker } = TimePicker;

const ProjectCommonSettings = () => {
  const formRef = useRef<FormInstance<any> | null>(null);
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  const onStepsChange = (step: number) => {
    if (!formRef.current) return;
    formRef.current.submit();
  };
  return (
    <div>
      <Title level={1}>Настройка проекта</Title>

      <Space direction="vertical" size={32}>
        <Row>
          <Col span={24}>
            <Steps
              current={0}
              responsive={true}
              initial={0}
              onChange={onStepsChange}
            >
              <Step title="Общие настройки" />
              <Step title="IVR" />
              <Step title="Загрузка контактов" />
            </Steps>
          </Col>
        </Row>

        <Form
          ref={formRef}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 8 }}
          initialValues={{
            remember: true,
            workingDays: 'weekdays',
            workingHours: [moment('08:30', 'HH:mm'), moment('19:00', 'HH:mm')],

            clientHours: [moment('08:30', 'HH:mm'), moment('19:00', 'HH:mm')],
            projectSatus: 'active',
            linesCount: 3,
            timeout: 23,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          labelAlign="left"
        >
          <Form.Item
            label="Название"
            name="projectname"
            wrapperCol={{ span: 4 }}
            rules={[{ required: true, message: '' }]}
          >
            <Input placeholder="введите название" />
          </Form.Item>

          <Form.Item
            label="Телефон"
            name="telephonenumber"
            wrapperCol={{ span: 4 }}
            rules={[{ required: true, message: '' }]}
          >
            {
              <Input
                placeholder="+7 111 111-11-11"
                allowClear
                //type="Number"
                //controls={false}
              ></Input>
            }
          </Form.Item>

          <Title level={4}>Расписание</Title>

          <Form.Item label="Время работы">
            <Row gutter={[8, 0]}>
              <Col span={12}>
                <Form.Item name="workingDays">
                  <Select defaultValue={'weekdays'}>
                    <Option value="weekdays">Будние дни</Option>
                    <Option value="Mon">Понедельник</Option>
                    <Option value="Tu">Вторник</Option>
                    <Option value="Wen">Среда</Option>
                    <Option value="Ther">Четверг</Option>
                    <Option value="Fri">Птница</Option>
                    <Option value="Sat">Суббота</Option>
                    <Option value="Sun">Воскресенье</Option>
                    <Option value="Weekends">Выходные</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item name="workingHours">
                  <RangePicker
                    //bordered={false}
                    allowClear={false}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
              <Form.Item>
                <Button type="link" icon={<PlusOutlined />}>
                  Добавить время
                </Button>
              </Form.Item>
            </Row>
          </Form.Item>

          <Form.Item label="Время клиента">
            <Row gutter={[8, 0]}>
              <Col span={12}>
                <Form.Item name="clientHours">
                  <RangePicker
                    //bordered={false}
                    allowClear={false}
                    format="HH:mm"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form.Item>

          <Title level={4}>Дополнительные настройки</Title>

          <Form.Item
            label="Статус"
            name="projectSatus"
            wrapperCol={{ span: 4 }}
          >
            <Select defaultValue="active">
              <Option value="active">Активный</Option>
              <Option value="stopped">Приостановленный</Option>
              <Option value="ended">Завершенный</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Количество линий" name="linesCount">
            <InputNumber min={1} max={5} defaultValue={3} />
          </Form.Item>

          <Form.Item label="Время дозвона, сек" name="timeout">
            <InputNumber min={11} max={30} defaultValue={23} />
          </Form.Item>

          <Row>
            <Col span={3}>
              <Form.Item>
                <Button>Отменить</Button>
              </Form.Item>
            </Col>

            <Col span={1}></Col>

            <Col span={4}>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Настроить IVR
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Space>
    </div>
  );
};
export { ProjectCommonSettings };
