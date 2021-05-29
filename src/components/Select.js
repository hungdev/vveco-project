import { Input, Select } from 'antd';
import React from 'react'
const { Option } = Select;

export default function CustomSelect({ options = [], onChange, styles, defaultValue, title, value }) {
  return (
    <div>
      <div>{title}</div>
      <Select defaultValue={defaultValue} style={{ width: '100%', ...styles }} onChange={onChange} value={value}>
        {options.map((e, i) => <Option key={i} value={e.value}>{e.label}</Option>)}
      </Select>
    </div>
  )
}
