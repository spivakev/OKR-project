create TABLE company(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  description TEXT,
  address TEXT,
  email VARCHAR(255),
  phone VARCHAR(20),
  url VARCHAR(255)
);

create TABLE department(
  id SERIAL PRIMARY KEY,
  company_id INTEGER,
  head_profile_id INTEGER,
  name VARCHAR(255),
  description TEXT,
  email VARCHAR(255),
  city VARCHAR(255),
  FOREIGN KEY (company_id) REFERENCES company(id),
  FOREIGN KEY (head_profile_id) REFERENCES profile(id)
);

create TABLE profile_department(
  id SERIAL PRIMARY KEY,
  profile_id INTEGER,
  department_id INTEGER,
  FOREIGN KEY (profile_id) REFERENCES profile(id),
  FOREIGN KEY (department_id) REFERENCES department(id)
);

create TABLE profile(
  id SERIAL PRIMARY KEY,
  lastname VARCHAR(255),
  firstname VARCHAR(255),
  middlename VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(30),
  phone VARCHAR(20),
  position VARCHAR(255)
);

create TABLE tree(
  id SERIAL PRIMARY KEY,
  company_id INTEGER,
  name VARCHAR(255),
  description TEXT,
  status VARCHAR(255),
  start_date TIMESTAMPTZ,
  finish_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  FOREIGN KEY (company_id) REFERENCES company(id)
);

create TABLE goal(
  id SERIAL PRIMARY KEY,
  department_id INTEGER,
  owner_id INTEGER,
  tree_id INTEGER,
  name VARCHAR(255),
  description TEXT,
  status VARCHAR(255),
  start_date TIMESTAMPTZ,
  finish_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  FOREIGN KEY (department_id) REFERENCES department(id),
  FOREIGN KEY (owner_id) REFERENCES profile(id),
  FOREIGN KEY (tree_id) REFERENCES tree(id)
);

create TABLE key_result(
  id SERIAL PRIMARY KEY,
  owner_id INTEGER,
  goal_id INTEGER,
  name VARCHAR(255),
  plan REAL,
  unit VARCHAR(20),
  FOREIGN KEY (owner_id) REFERENCES profile(id),
  FOREIGN KEY (goal_id) REFERENCES goal(id)
);

create TABLE key_result_value(
  id SERIAL PRIMARY KEY,
  created_by_id INTEGER,
  result_id INTEGER,
  value REAL,
  created_at TIMESTAMPTZ,
  FOREIGN KEY (created_by_id) REFERENCES profile(id),
  FOREIGN KEY (result_id) REFERENCES key_result(id)
);

create TABLE neighboring_relation(
  id SERIAL PRIMARY KEY,
  goal_one_id INTEGER,
  goal_two_id INTEGER,
  name VARCHAR(255),
  description TEXT,
  FOREIGN KEY (goal_one_id) REFERENCES goal(id),
  FOREIGN KEY (goal_two_id) REFERENCES goal(id)
);