import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://yewzmjojmzntfdnqmtzq.supabase.co';

const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlld3ptam9qbXpudGZkbnFtdHpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgzMDY2MzcsImV4cCI6MjAyMzg4MjYzN30.NxnGSlSmBPNiqEsz49w3R6KwWdqu3LCTFOrfnnm2JFY';

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
