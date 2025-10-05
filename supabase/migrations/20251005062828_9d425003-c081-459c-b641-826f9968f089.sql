-- Create contacts table
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contacts (public form)
CREATE POLICY "Anyone can insert contacts"
ON public.contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Create policy to allow reading contacts (for admin purposes)
CREATE POLICY "Anyone can read contacts"
ON public.contacts
FOR SELECT
TO public
USING (true);