/*
  # Create SkillUp skill tracking and management system
  
  1. New Tables
    - `skills`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `category` (text)
      - `icon_name` (text)
      - `difficulty` (text: beginner, intermediate, advanced)
      - `created_at` (timestamp)
    
    - `user_skills`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `proficiency_level` (0-100)
      - `years_of_experience` (numeric)
      - `verified` (boolean)
      - `endorsements_count` (numeric)
      - `added_at` (timestamp)
      - `UNIQUE(user_id, skill_id)
    
    - `skill_endorsements`
      - `id` (uuid, primary key)
      - `endorser_id` (uuid, references profiles)
      - `endorsed_user_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `created_at` (timestamp)
      - `UNIQUE(endorser_id, endorsed_user_id, skill_id)`
    
    - `learning_paths`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `skill_id` (uuid, references skills)
      - `target_proficiency` (0-100)
      - `current_progress` (0-100)
      - `status` (text: active, completed, paused)
      - `created_at` (timestamp)
      - `completed_at` (timestamp, nullable)
    
    - `skill_badges`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `icon_url` (text)
      - `requirement_type` (text: skill_level, endorsements, courses)
      - `requirement_value` (numeric)
      - `created_at` (timestamp)
    
    - `user_badges`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `badge_id` (uuid, references skill_badges)
      - `earned_at` (timestamp)
      - `UNIQUE(user_id, badge_id)`
  
  2. Security
    - Enable RLS on all tables
    - Add policies for users to manage own skills
    - Public read access to skill definitions
*/

CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  category text NOT NULL,
  icon_name text,
  difficulty text DEFAULT 'beginner',
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id uuid NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  proficiency_level numeric DEFAULT 0,
  years_of_experience numeric DEFAULT 0,
  verified boolean DEFAULT false,
  endorsements_count numeric DEFAULT 0,
  added_at timestamptz DEFAULT now(),
  UNIQUE(user_id, skill_id)
);

CREATE TABLE IF NOT EXISTS skill_endorsements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  endorser_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  endorsed_user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id uuid NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now(),
  UNIQUE(endorser_id, endorsed_user_id, skill_id)
);

CREATE TABLE IF NOT EXISTS learning_paths (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  skill_id uuid NOT NULL REFERENCES skills(id) ON DELETE CASCADE,
  target_proficiency numeric DEFAULT 80,
  current_progress numeric DEFAULT 0,
  status text DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  completed_at timestamptz
);

CREATE TABLE IF NOT EXISTS skill_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  icon_url text,
  requirement_type text,
  requirement_value numeric,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS user_badges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  badge_id uuid NOT NULL REFERENCES skill_badges(id) ON DELETE CASCADE,
  earned_at timestamptz DEFAULT now(),
  UNIQUE(user_id, badge_id)
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_endorsements ENABLE ROW LEVEL SECURITY;
ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;
ALTER TABLE skill_badges ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view skills"
  ON skills FOR SELECT
  USING (true);

CREATE POLICY "Users can view own skills"
  ON user_skills FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view other user skills"
  ON user_skills FOR SELECT
  TO authenticated
  USING (verified = true OR user_id = auth.uid());

CREATE POLICY "Users can add skills"
  ON user_skills FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own skills"
  ON user_skills FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can view endorsements"
  ON skill_endorsements FOR SELECT
  TO authenticated
  USING (endorsed_user_id = auth.uid() OR endorser_id = auth.uid());

CREATE POLICY "Users can endorse skills"
  ON skill_endorsements FOR INSERT
  TO authenticated
  WITH CHECK (endorser_id = auth.uid() AND endorsed_user_id != auth.uid());

CREATE POLICY "Users can view own learning paths"
  ON learning_paths FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can create learning paths"
  ON learning_paths FOR INSERT
  TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own learning paths"
  ON learning_paths FOR UPDATE
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Anyone can view badges"
  ON skill_badges FOR SELECT
  USING (true);

CREATE POLICY "Users can view own badges"
  ON user_badges FOR SELECT
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Users can view other badges"
  ON user_badges FOR SELECT
  TO authenticated
  USING (true);

INSERT INTO skills (name, description, category, icon_name, difficulty) VALUES
('JavaScript', 'Web programming language', 'Programming', 'code', 'intermediate'),
('React', 'JavaScript library for UI', 'Frontend', 'react', 'intermediate'),
('TypeScript', 'Typed JavaScript', 'Programming', 'code', 'intermediate'),
('Python', 'General purpose programming', 'Programming', 'code', 'beginner'),
('Node.js', 'JavaScript runtime', 'Backend', 'server', 'intermediate'),
('SQL', 'Database query language', 'Databases', 'database', 'beginner'),
('UI/UX Design', 'User interface design', 'Design', 'design', 'intermediate'),
('Project Management', 'Team leadership', 'Management', 'briefcase', 'intermediate'),
('Data Analysis', 'Analytics and insights', 'Analytics', 'chart', 'intermediate'),
('Communication', 'Interpersonal skills', 'Soft Skills', 'message', 'beginner')
ON CONFLICT (name) DO NOTHING;
