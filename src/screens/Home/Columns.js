import { Link } from 'react-router-dom'
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'TotalMoney',
    dataIndex: 'totalMoney',
    key: 'totalMoney',
    render: (text, record) => <Link to={`/detail/${record.id}`}>{text}</Link>,
  },
  {
    title: 'CustomerName',
    dataIndex: 'customerName',
    key: 'customerName',
  },
];

export default columns