import React from 'react';
import { Typography } from 'antd';
import styles from './index.css';
import { formatMessage } from 'umi-plugin-locale';
export default function() {
  const { Title, Paragraph, Text } = Typography;
  return (
    <div className={styles.normal}>
      <Title level={3}>Hello,yyh123!</Title>
      <Paragraph>
        This is an <Text mark>Ant Design</Text> paragraph!{' '}
      </Paragraph>
    </div>
  );
}
