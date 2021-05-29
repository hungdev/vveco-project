import React, { useEffect, useState } from 'react'
import { Table, Tag, Space } from 'antd';
import { useHistory, useLocation } from 'react-router-dom';
import Header from '../../components/header'
import Columns from './Columns'
import { getBills } from '../../reducers/billReducer'
import { useDispatch, useSelector } from "react-redux";
import qs from 'qs'

export default function Home() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [pagination, setPagination] = useState({ size: 10, page: 1 })
  const bills = useSelector((store) => store.billReducer.bills);
  const total = useSelector((store) => store.billReducer.total);

  useEffect(() => {
    // history.replace(
    //   `${location.pathname}?page=${paginationState.activePage}&sort=${paginationState.sort},${paginationState.order}`
    // );
    const params = qs.stringify(pagination, { addQueryPrefix: true })
    history.replace(`${location.pathname}${params}`);
    dispatch(getBills(pagination))
  }, [pagination.page, pagination.size])

  const onAdd = () => { }

  const onChangePagination = (page, pageSize) => {
    setPagination(prev => ({ ...prev, page, size: pageSize }))
  }

  return (
    <div>
      <Header title='product' btn='add product' onClickBtn={onAdd} />
      <Table
        rowKey={record => record.id}
        dataSource={bills}
        columns={Columns}
        pagination={{
          current: pagination.page,
          pageSize: pagination.size,
          total: total,
          onChange: onChangePagination,
          // showTotal: true
        }}
      />
    </div>
  )
}
