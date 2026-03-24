-- Create a table for RSVPs
CREATE TABLE IF NOT EXISTS rsvps (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  guest_name TEXT NOT NULL,
  guest_phone TEXT,
  confirmed_at TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE rsvps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public RSVP)
CREATE POLICY "Public can insert RSVPs" 
ON rsvps FOR INSERT 
WITH CHECK (true);

-- Allow admins to read (you'll need to configure this further for real security)
-- For now, let's allow all reads for simplicity in this demo, but warn the user.
CREATE POLICY "Public can read RSVPs" 
ON rsvps FOR SELECT 
USING (true);
