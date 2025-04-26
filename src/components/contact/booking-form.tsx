import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface BookingFormProps {
  fieldFocusEffects?: boolean;
}

export const BookingForm: React.FC<BookingFormProps> = ({ fieldFocusEffects = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Send form data to your email using Formspree
      const response = await fetch('https://formspree.io/f/xnndnpwe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          date: formData.date,
          time: formData.time,
          message: formData.message,
          _subject: `New Appointment Request from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          phone: '',
          date: '',
          time: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send booking request');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 rounded border border-secondary focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all font-body";

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Request an Appointment</h2>
      
      {success ? (
        <div className="space-y-4">
          <div className="text-green-600">
            Appointment request received!
          </div>
          <div className="text-gray-600">
            I'll call you at the number provided to confirm your appointment details.
          </div>
          <div className="text-sm text-gray-500">
            Please keep your phone nearby - I'll be calling you shortly!
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}
          
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={inputClasses}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                Preferred Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className={inputClasses}
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Information
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Any additional details about your appointment..."
              className={inputClasses}
            />
          </div>

          <div className="text-sm text-gray-500 mb-4">
            * I'll call you directly to confirm your appointment details.
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-accent text-white py-3 px-6 rounded-md hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Request Appointment'}
          </button>
        </form>
      )}
    </div>
  );
};
