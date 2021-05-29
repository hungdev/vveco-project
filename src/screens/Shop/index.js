import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { Input } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import Select from '../../components/Select'
import { getProvince, getDistrict, getWard, setField } from '../../reducers/addressReducer'

const initState = {
  "title": null,
  "logo": null,
  "address": null,
  "phone": null,
  "email": null,
  "manager": null,
  "telegram": null,
  "youtube": null,
  "website": null,
  "userId": null,
  "district": null,
  "province": null,
  "ward": null,
}
export default function Shop() {
  const dispatch = useDispatch();
  const [fieldState, setFieldState] = useState(initState)

  const provinces = useSelector((store) => store.addressReducer.provinces);
  const provinceList = provinces?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))
  const districts = useSelector((store) => store.addressReducer.districts);
  const districtList = districts?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))
  const wards = useSelector((store) => store.addressReducer.wards);
  const wardList = wards?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))

  useEffect(() => {
    dispatch(getProvince())
  }, [])

  console.log('provinces', provinces)

  const onChangeInput = (ev) => {
    setFieldState(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
  }
  const onChangeSelect = (type) => (ev) => {
    if (type === 'province') {
      dispatch(getDistrict(ev))
      dispatch(setField('wards', []))
      setFieldState(prev => ({ ...prev, [type]: ev, district: null, ward: null }))
    }
    if (type === 'district') {
      dispatch(getWard(ev))
      setFieldState(prev => ({ ...prev, [type]: ev, ward: null }))
    }
    setFieldState(prev => ({ ...prev, [type]: ev }))
    // setFieldState(prev => ({ ...prev, [ev.target.name]: ev.target.value }))
  }

  const inputList = [
    { id: 'title', name: 'title', value: fieldState.title, onChange: onChangeInput },
    { id: 'logo', name: 'logo', value: fieldState.logo, onChange: onChangeInput },
    { id: 'address', name: 'address', value: fieldState.address, onChange: onChangeInput },
    { id: 'phone', name: 'phone', value: fieldState.phone, onChange: onChangeInput },
    { id: 'email', name: 'email', value: fieldState.email, onChange: onChangeInput },
    { id: 'manager', name: 'manager', value: fieldState.manager, onChange: onChangeInput },
    { id: 'telegram', name: 'telegram', value: fieldState.telegram, onChange: onChangeInput },
    { id: 'youtube', name: 'youtube', value: fieldState.youtube, onChange: onChangeInput },
    { id: 'website', name: 'website', value: fieldState.website, onChange: onChangeInput },
    { id: 'userId', name: 'userId', value: fieldState.userId, onChange: onChangeInput },
  ]

  return (
    <div style={{ padding: 20 }}>
      {inputList.map((e, i) => <div style={{ margin: 20 }} key={i}>
        <div>{e.name}</div>
        <Input name={e.name} value={e.value} onChange={e.onChange} />
      </div>)}
      <div style={{ margin: 20 }}>
        <Select
          title='province'
          options={provinceList}
          value={fieldState.province}
          onChange={onChangeSelect('province')}
        />
      </div>
      <div style={{ margin: 20 }}>
        <Select
          title='district'
          options={districtList}
          value={fieldState.district}
          onChange={onChangeSelect('district')}
        />
      </div>
      <div style={{ margin: 20 }}>
        <Select
          title='ward'
          options={wardList}
          value={fieldState.ward}
          onChange={onChangeSelect('ward')}
        />
      </div>

    </div>
  )
}
