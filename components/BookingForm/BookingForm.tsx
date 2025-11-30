'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import css from './BookingForm.module.css';
import Loader from '@/components/Loader/Loader';
import { toast } from 'react-hot-toast';
export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bookingDate: '',
    comment: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Failed to submit booking');

      toast.success('Booking submitted successfully!');
      setFormData({ name: '', email: '', bookingDate: '', comment: '' });
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(`Error: ${error.message}`);
      } else {
        toast.error('Something went wrong');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <h2 className={css.title}>Book your car now Stay connected!</h2>
      <p className={css.subtitle}>We are always ready to help you</p>

      <input
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        className={css.input}
        required
        disabled={loading}
      />

      <input
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        className={css.input}
        required
        disabled={loading}
      />

      <input
        type="date"
        name="bookingDate"
        placeholder="Booking date"
        value={formData.bookingDate}
        onChange={handleChange}
        className={css.input}
        disabled={loading}
      />

      <textarea
        name="comment"
        placeholder="Comment"
        value={formData.comment}
        onChange={handleChange}
        className={css.textarea}
        disabled={loading}
      />

      <button type="submit" className={css.button} disabled={loading}>
        {loading ? <Loader /> : 'Send'}
      </button>
    </form>
  );
}
