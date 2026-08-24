/*
# Create contact_messages table

1. New Tables
   - `contact_messages`
     - `id` (uuid, primary key) — unique identifier for each message
     - `name` (text, not null) — sender's name
     - `email` (text, not null) — sender's email address
     - `subject` (text) — optional subject line
     - `message` (text, not null) — the message body
     - `created_at` (timestamptz, default now()) — when the message was submitted

2. Security
   - Enable RLS on `contact_messages`.
   - This is a no-auth public website. Visitors submit the contact form using the
     anonymous key, so an INSERT policy is granted to `anon` and `authenticated`.
   - NO SELECT/UPDATE/DELETE policies are created. Submissions are therefore
     write-only from the public site and cannot be read back by website visitors,
     keeping other people's messages private.

3. Important Notes
   1. The form only collects contact details the visitor voluntarily submits.
   2. Because there is no read policy, the running website cannot list messages;
      that is intentional for privacy.
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
  TO anon, authenticated WITH CHECK (true);
