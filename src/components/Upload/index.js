import React, { useState, useEffect } from 'react'
import './upload.scss'

export default function Upload(props) {
  const { name, id, className, onChange, photoPath, ...rest } = props
  const [logo, setLogo] = useState()

  const logoDefault = `https://landapi.vipage.vn/vvlanding${photoPath}`

  useEffect(() => {
    logoDefault && setLogo(logoDefault)
  }, [logoDefault])

  const onSelectFile = (event) => {
    const file = event.target.files[0];
    onChange(file)
    setLogo(URL.createObjectURL(file))
  }

  return (
    <div className={className}>
      <label className='cursor-pointer select-wrapper'>
        {!logo && <div className='select-box'>
          <div>icon</div>
          <div>Select your file</div>
        </div>}
        {logo && <div className='logo-wrapper'>
          <img id="logo" alt='logo' src={logo} className='logo' />
        </div>}
        <input
          type="file"
          name={name}
          id={id || `${name}-input-file`}
          className={`upload-file`}
          onChange={onSelectFile}
          {...rest}
        />
      </label>

    </div>
  )
}
