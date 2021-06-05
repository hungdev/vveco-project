import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Input, Button } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import Select from '../../components/Select'
import { getProvince, getDistrict, getWard, setField } from '../../reducers/addressReducer'
import Upload from '../../components/Upload'
import { uploadFileLogo } from '../../reducers/uploadReducer'
import { reset } from '../../reducers/authReducer'
import { createShop, getShop } from '../../reducers/shopReducer'

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
  const history = useHistory();
  const [fieldState, setFieldState] = useState(initState)

  const provinces = useSelector((store) => store.addressReducer.provinces);
  const provinceList = provinces?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))
  const districts = useSelector((store) => store.addressReducer.districts);
  const districtList = districts?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))
  const wards = useSelector((store) => store.addressReducer.wards);
  const wardList = wards?.map((e, i) => ({ key: e.id, value: e.id, label: e.name }))
  const logoData = useSelector((store) => store.uploadReducer.logo);
  const shopDetail = useSelector((store) => store.shopReducer.shop);

  console.log('shopDetail', shopDetail)
  useEffect(() => {
    dispatch(getProvince())
    dispatch(getShop())
  }, [dispatch])

  useEffect(() => {
    shopDetail && setFieldState(prev => ({ ...prev, ...shopDetail }))
  }, [shopDetail])


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

  const onCreate = () => {
    const userId = localStorage.getItem('userId');
    const params = {
      ...fieldState,
      userId,
      logo: logoData,
    }
    dispatch(createShop(params))
  }

  const inputList = [
    { id: 'title', name: 'title', value: fieldState.title, onChange: onChangeInput },
    { id: 'address', name: 'address', value: fieldState.address, onChange: onChangeInput },
    { id: 'phone', name: 'phone', value: fieldState.phone, onChange: onChangeInput },
    { id: 'email', name: 'email', value: fieldState.email, onChange: onChangeInput },
    { id: 'manager', name: 'manager', value: fieldState.manager, onChange: onChangeInput },
    { id: 'telegram', name: 'telegram', value: fieldState.telegram, onChange: onChangeInput },
    { id: 'youtube', name: 'youtube', value: fieldState.youtube, onChange: onChangeInput },
    { id: 'website', name: 'website', value: fieldState.website, onChange: onChangeInput },
  ]

  const onSelectFile = (file) => {
    let formData = new FormData();
    formData.append('file', file);
    dispatch(uploadFileLogo(formData))
  }

  const handleLogout = () => {
    localStorage.clear();
    dispatch(reset())
    history.replace('/login')
  }

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={handleLogout}>Logout</Button>
      <Upload
        name='upload-home'
        className='upload-home'
        onChange={onSelectFile}
        photoPath={fieldState?.logo}
      />
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
      <Button onClick={onCreate}>Create</Button>
    </div>
  )
}
