'use client';

import React from 'react';
import css from './LoadMoreButton.module.css';

interface LoadMoreButtonProps {
  onClick: () => void;
  loading?: boolean;
  disabled?: boolean;
  text?: string;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  onClick,
  loading = false,
  disabled = false,
  text = 'Load More',
}) => {
  return (
    <button
      className={css.button}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading ? 'Loading...' : text}
    </button>
  );
};

export default LoadMoreButton;
