import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, date, time, message } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // For now, just return success
    return res.status(200).json({ 
      success: true, 
      message: 'Booking request submitted successfully' 
    });

  } catch (error) {
    console.error('Booking submission error:', error);
    return res.status(500).json({ 
      error: 'Failed to process booking request. Please try again later.' 
    });
  }
} 