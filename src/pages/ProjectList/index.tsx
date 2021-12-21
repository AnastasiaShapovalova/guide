import { Button, Typography } from 'antd';

const Title = Typography.Title;

const ProjectList = () => {
  return (
    <div>
      <Title level={1}>Проекты</Title>
      <Button type="primary">Создать проект</Button>
    </div>
  );
};
export { ProjectList };
