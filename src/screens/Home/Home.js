import React, { useEffect } from 'react'
import { Table, Tag, Space } from 'antd';
import Header from '../../components/header'
import Columns from './Columns'
import { getBills } from '../../reducers/billReducer'
import { useDispatch, useSelector } from "react-redux";

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

export default function Home() {
  const dispatch = useDispatch();
  const bills = useSelector((store) => store.billReducer.bills);

  console.log('bills', bills)
  useEffect(() => {
    dispatch(getBills({ page: 1, size: 10 }))
  }, [])

  const onAdd = () => { }

  return (
    <div>
      <Header title='product' btn='add product' onClickBtn={onAdd} />
      <Table dataSource={bills} columns={Columns} />
    </div>
  )
}
