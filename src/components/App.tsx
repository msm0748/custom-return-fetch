'use client';

import { clientFetch } from '@/lib/api';
import { useEffect, useState } from 'react';

export default function App() {
  const [data, setData] = useState<unknown>(null);

  // 데이터 로드 함수
  const fetchData = async () => {
    const response = await clientFetch('/todos/1');
    setData(response.body);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
