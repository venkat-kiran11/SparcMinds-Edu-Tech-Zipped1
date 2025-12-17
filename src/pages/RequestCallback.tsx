import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterPopup from '../components/RegisterPopup';

export default function RequestCallback() {
  const navigate = useNavigate();

  return (
    <div>
      <RegisterPopup isOpen={true} onClose={() => navigate('/courses')} />
    </div>
  );
}
