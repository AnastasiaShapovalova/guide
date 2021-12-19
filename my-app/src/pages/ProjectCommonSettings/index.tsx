import { Typography } from 'antd';
import {
  Steps,
  Input,
  Select,
  Button,
  InputNumber,
  Form,
  Row,
  Col,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const Title = Typography.Title;

const { Step } = Steps;

const { Option } = Select;

const ProjectCommonSettings = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  function onChange(value: any) {
    console.log(`selected ${value}`);
  }

  function onSearch(val: string) {
    console.log('search:', val);
  }

  //   function onLinesChange(linesNum: number) {
  //     console.log('changed', linesNum);
  //   }

  return (
    <div>
      <Title level={1}>Настройка проекта</Title>

      <Steps current={0}>
        <Step title="Общие настройки" />
        <Step title="IVR" />
        <Step title="Загрузка контактов" />
      </Steps>

      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        labelAlign="left"
      >
        <Form.Item
          label="Название"
          name="projectname"
          rules={[{ required: true, message: '' }]}
        >
          <Input placeholder="введите название" />
        </Form.Item>

        <Form.Item
          label="Телефон"
          name="telephonenumber"
          rules={[{ required: true, message: '' }]}
        >
          <Input placeholder="+7 000 000-00-00" />
        </Form.Item>

        <Title level={2}>Расписание</Title>

        <Form.Item label="Время работы">
          <Row>
            <Col span={12}>
              <Form.Item name="workingDays">
                <Select placeholder="выберите дни">
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
            <Col span={6}>
              <Form.Item>
                <Input></Input>
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item>
                <Input></Input>
              </Form.Item>
            </Col>
          </Row>
        </Form.Item>
      </Form>

      {/* <div>
        
      <Title level={2}>Расписание</Title>
      <div>Время работы</div>
      <Select
        showSearch
        placeholder="выберите день"
        optionFilterProp="children"
        onChange={onChange}
        onSearch={onSearch}
      >
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
      <Input placeholder="08:00" />
      <Input placeholder="19:00" />
      <Button type="link" icon={<PlusOutlined />}>
        Добавить время
      </Button>

      <div>Время клиента</div>
      <Input placeholder="08:00" />
      <Input placeholder="19:00" />

      <Title level={2}>Дополнительные настройки</Title>
      <div>Статус</div>
      <Select defaultValue="active">
        <Option value="active">Активный</Option>
        <Option value="stopped">Приостановленный</Option>
        <Option value="ended">Завершенный</Option>
      </Select>
      <div>Количество линий</div>
      <InputNumber min={1} max={5} defaultValue={3} onChange={onLinesChange} />
      <div>Время дозвона, сек</div>
      <InputNumber
        min={11}
        max={30}
        defaultValue={23}
        onChange={onLinesChange}
      />
      <div>
        <Button>Отменить</Button>
        <Button type="primary">Настроить IVR</Button>
      </div> */}
    </div>
  );
};
export { ProjectCommonSettings };
