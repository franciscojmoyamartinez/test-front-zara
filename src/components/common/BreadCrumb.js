import * as React from 'react';
import Link from '@mui/material/Link';
import { useNavigate } from "react-router-dom";
import { Divider } from '@mui/material';

export default function BreadCrumb() {
  const navigate = useNavigate();
  return (
    <div>
      <Link underline="hover" color="inherit" onClick={() => navigate("/")}>
        <span style={{color: '#4570b4', cursor: 'pointer', marginLeft: '130px', fontWeight: 'bold'}}>Podcaster</span>
      </Link>
      <Divider />
    </div>
  );
}