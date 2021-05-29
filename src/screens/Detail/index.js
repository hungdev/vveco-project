import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  useEffect(() => {
    // call api
  }, [id])

  return (
    <div>
      asdas
    </div>
  )
}
